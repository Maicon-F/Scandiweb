import React from 'react';
import itens from '../../assets/itens.json';
import ColorSizeSelection from '../ColorSize/index';
import style from '../Product/product.module.scss';


const item = itens[2];
export type Props = {product: typeof item}

export default class Product extends React.Component<Props>{
   render() {
    const {product} = this.props;
    return(
        <div className={style['pd']} >

            <div className={style['pd-details']}>
                <h2 className={'inner-shadow'}>{product.title}</h2>
                <h3 className={'txt-shadow'}>{product.subtitle}</h3>
                <ColorSizeSelection></ColorSizeSelection>
                <p className={`inner-shadow ${style['pd-details__price-label']}`}>PRICE:</p>
                <p className={`inner-shadow ${style['pd-details__price']}`}>${product.price}</p>
                <button>ADD TO CART</button>
                <p  className={`inner-shadow ${style['pd-details__description']}`} >Find stunning women's cocktail dresses and party dresses.
                 Stand out in lace and metallic cocktail dresses and party
                 dresses from all your favorite brands.</p>
            </div>
        </div>
    )  
   }
}

