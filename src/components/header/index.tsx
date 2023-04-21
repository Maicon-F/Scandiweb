import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa';
import style from './header.module.scss';
import bag from "../../assets/icons/logo_transparent.svg"



export default class Header extends React.Component {

    render() {

        return (
            <div className={style.container}>
                <div className={style.container__categories}>
                    <p>WOMEN</p>
                    <p>MEN</p>
                    <p>KIDS</p>
                </div>
                <img src={bag}></img>
                <div className={style.container__buttons}>
                    <div>
                        <select>
                            <option value="dolar">$&nbsp;&nbsp;&nbsp;</option>
                            <option value="euro">£&nbsp;&nbsp;&nbsp;</option>
                        </select>
                    </div>
                    <FiShoppingCart  style={{fontSize: '24px'}} />
                </div>

            </div>
        )
    }

}