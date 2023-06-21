import React, { createRef } from 'react';
import Attributes from '../Attributes/index';
import style from '../Product/product.module.scss';
import { connect } from 'react-redux';
import ProductModel from '../../models/product';
import BagItem from '../../models/bagItem';
import { addToCart } from '../../utils/addToCard';



class Product extends React.Component<any, any>{
    private htmlRef = createRef<HTMLDivElement>();

    constructor(props: any) {
        super(props);
        this.AddToCart = this.AddToCart.bind(this);
        this.handleChildSizeData = this.handleChildSizeData.bind(this);
        this.handleChildCapacityData = this.handleChildCapacityData.bind(this);
        this.handleChildColorData = this.handleChildColorData.bind(this);
        this.state = {
            selectedSize: '',
            selectedCapacity: '',
            selectedColor: '',
            initialAttributes: [],
        }
    }

    handleChildSizeData = (childData: string) => {
        this.setState({ selectedSize: childData });
    };

    handleChildCapacityData = (childData: string) => {
        this.setState({ selectedCapacity: childData });
    };

    handleChildColorData = (childData: string) => {
        this.setState({ selectedColor: childData });
    };

    AddToCart() {
        let p: ProductModel = this.props.prod;
        let s = this.state.selectedSize;
        let cap = this.state.selectedCapacity;
        let col = this.state.selectedColor;

        var bagItem = new BagItem(p, 0, s, cap, col);

        addToCart(bagItem);
    }

    componentDidMount(): void {
        if(this.props.prod)
            this.handleInitialSelections();
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if(this.props.prod && (prevProps !== this.props))
            this.handleInitialSelections();
    }

    handleInitialSelections() {
            let p: ProductModel = this.props.prod;

            let size = p.attributes.filter(e => e.name == "Size");
            let s = size.length > 0 ? size[0]?.items[0]?.value : "";
            this.setState({
                selectedSize: s,
            })
        
            let capacity = p.attributes.filter(e => e.name == "Capacity");
            let cap = capacity.length > 0 ? capacity[0]?.items[0]?.value : "";
            this.setState({
                selectedCapacity: cap,
            })
               
            let color = p.attributes.filter(e => e.name == "Color");
            let col = color.length > 0 ? color[0]?.items[0]?.value : "";
            this.setState({
                selectedColor: col,
            })
        

        this.setState({
            initialAttributes: [s, cap, col],
        })

    }


    render() {
        const { prod } = this.props;
        const attributes: any = prod ? prod.attributes : [];
        const { currency } = this.props;
        const initialSelections = this.state.initialAttributes;
    
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
                    <Attributes attributes={attributes} initAttributes={initialSelections} selectedSize={this.handleChildSizeData} selectedCapacity={this.handleChildCapacityData} selectedColor={this.handleChildColorData}></Attributes>
                    <p className={`${style['pd-details__price-label']}`}>PRICE:</p>
                    <p className={`${style['pd-details__price']}`}>${p}</p>
                    <a href={`/cart`}><button onClick={() => this.AddToCart()}>ADD TO CART</button></a>
                    <div style={{overflow: "hidden",paddingTop:"20px"}}>
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
    })
}


export default connect(mapStateToProps)(Product)


