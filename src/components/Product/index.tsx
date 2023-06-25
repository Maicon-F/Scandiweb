import React, { createRef } from 'react';
import Attributes from '../Attributes/index';
import style from '../Product/product.module.scss';
import { connect } from 'react-redux';
import ProductModel from '../../models/product';
import BagItem from '../../models/bagItem';
import { addToCart} from '../../utils/addToCard';
import { updateCart } from '../../adapters/slices/updateCart';
import AttributeSet from '../../models/attributeSet';



class Product extends React.Component<any, any>{
    private htmlRef = createRef<HTMLDivElement>();

    constructor(props: any) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.state = {
            initialAttributes: [],
            selections:[],
        }
    }


    handleChildSelections = (childData: AttributeSet[])=>{
        this.setState({
            selections: childData,
        })
    }

    addToCart() {
        let p: ProductModel = this.props.prod;     
        var bagItem = new BagItem(p, 0, this.state.selections);

        const { updateCart } = this.props;
        updateCart(!this.props.update);

        addToCart(bagItem);
    }


    render() {
        const { prod } = this.props;
        const attributes: any = prod ? prod.attributes : [];
        const { currency } = this.props;
        const inStock = prod?.inStock;

        if (this.htmlRef.current) {
            this.htmlRef.current.innerHTML = prod?.description;
        }

        const price = prod?.prices.filter(function (p: any) {
            return p.currency.symbol == currency;
        });

        const p = price ? price[0].amount : 22;
        return (
            <div className={style['pd']} >

                <div className={style['pd-details']}>
                    <p className={style['pd-details__title']}>{prod?.brand}</p>
                    <p className={style['pd-details__subtitle']}>{prod?.name}</p>
                    <Attributes attributes={attributes} sets={this.handleChildSelections} ></Attributes>
                    <p className={`${style['pd-details__price-label']}`}>PRICE:</p>
                    <p className={`${style['pd-details__price']}`}>${p}</p>
                    <button disabled={!inStock} style={{ opacity: inStock ? '1' : '0.6' }} onClick={() => this.addToCart()} >ADD TO CART</button>
                    <div style={{ overflow: "hidden", paddingTop: "20px" }}>
                        <p className={`${style['pd-details__description']}`} ref={this.htmlRef}></p>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (e: any) => {
    return ({
        currency: e.currency,
        update: e.updateCart,
    })
}



const mapDispatchToProps = (dispatch: any) => ({
    updateCart: (payload: boolean) => dispatch(updateCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product)


