import React from 'react';
import itens from '../../assets/itens.json';
import ColorSizeSelection from '../PD/ColorSize/index';
import style from '../PD/pd.module.scss';


type Props = typeof itens[0];

const item = itens[2];


export default class ProductDescription extends React.Component{
   render() {
    return(
        <div className={style['pd']} >

            <div className={style['pd-gallery']}>
                <img src={item.photo}></img>
                <img src={item.photo}></img>
                <img src={item.photo}></img>
            </div>

            <div className={style['pd-image']}>
                <img src={item.photo}></img>
            </div>

            <div className={style['pd-details']}>
                <h2 className={'inner-shadow'}>Apollo</h2>
                <h3 className={'txt-shadow'}>Running Short</h3>
                <ColorSizeSelection></ColorSizeSelection>
                <p className={`inner-shadow ${style['pd-details__price-label']}`}>PRICE:</p>
                <p className={`inner-shadow ${style['pd-details__price']}`}>$50.00</p>
                <button>ADD TO CART</button>
                <p  className={`inner-shadow ${style['pd-details__description']}`} >Find stunning women's cocktail dresses and party dresses.
                 Stand out in lace and metallic cocktail dresses and party
                 dresses from all your favorite brands.</p>
            </div>
        </div>
    )  
   }
}

