import React from 'react';
import itens from '../../assets/itens.json';
import Attributes from '../Attributes/index';
import style from '../Product/product.module.scss';
import { connect } from 'react-redux';
 

const product = itens[2];
export type Props = {product: typeof product}


class Product extends React.Component<any, any>{
   render() {
    const {prod } = this.props;
    console.log("PRODUCT PROPS: ", this.props)
    const attributes:any = prod?prod.attributes:[];

    const {currency} =  this.props;
    const price = prod?.prices.filter(function(p:any){
        return p.currency.symbol == currency;
    });
    
    const p = price? price[0].amount:22
   

    return(
        <div className={style['pd']} >

            <div className={style['pd-details']}>
                <p className={style['pd-details__title']}>{prod?.brand}</p>
                <p className={style['pd-details__subtitle']}>{prod?.name}</p>
                <Attributes attributes={attributes}></Attributes>
                <p className={`${style['pd-details__price-label']}`}>PRICE:</p>
                <p className={`${style['pd-details__price']}`}>${p}</p>
                <button>ADD TO CART</button>
                <p  className={`${style['pd-details__description']}`} >{prod?.description}</p>
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


