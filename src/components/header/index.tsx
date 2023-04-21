import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import style from './header.module.scss';
import bag from "../../assets/icons/logo_transparent.svg"
import MiniCart from '../MiniCart/Cart';
import itens from '../../assets/itens.json';



export default class Header extends React.Component {

    render() {

        return (
            <div className={style.container}>
                <div className={style.container__categories}>
                    <p>WOMEN</p>
                    <p>MEN</p>
                    <p>KIDS</p>
                </div>
                <img src={bag} style={{maxWidth:'3vw'}}></img>
                <div className={style.container__buttons}>
                    <div>
                        <select>
                            <option value="dolar">$&nbsp;&nbsp;&nbsp;</option>
                            <option value="euro">£&nbsp;&nbsp;&nbsp;</option>
                        </select>
                    </div>
                    <div className={style.miniCartFatlher}>
                        <FiShoppingCart  style={{fontSize: '24px'}} />
                        <div className={style.miniCart}><MiniCart products={itens}/></div>
                    </div>
                </div>

            </div>
        )
    }

}