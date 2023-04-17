import React from 'react';
import itens from '../../assets/itens.json';
import style from '../PD/pd.module.scss';
import Product from '../Product';

const item = itens[3];
export type Props = {product: typeof item}


export default class ProductDescription extends React.Component<Props>{
   render() {
    const {product} =this.props;
    return(
        <div className={style['pd']} >
            <div className={style['pd-gallery']}>
                <img src={product.photo}></img>
                <img src={product.photo}></img>
                <img src={product.photo}></img>
            </div>

            <div className={style['pd-image']}>
                <img src={product.photo}></img>
            </div>

            <div className={style['pd-details']}>
                <Product product={product}></Product>
            </div>
        </div>
    )  
   }
}

