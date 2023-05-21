import React from 'react';
import itens from '../../../../assets/itens.json';
import fakeItems from "../../../../assets/fake-cart.json"
import style from '../Item/item.module.scss';
import ColorSizeSelection from '../../../Attributes';
import { FaPlus, FaMinus } from 'react-icons/fa';

const item = fakeItems[1]
export type Props = { product: typeof item };
export default class Item extends React.Component<Props> {

    render() {
        const { product } = this.props;

        return (
            <>
                <div className={style.item}>
                    <div className={style.item__content}>      
                        <div><p className={`${style['item__content-title']}`}>{product.title}</p></div>
                        <div><p className={`${style['item__content-subtitle']}`}>{product.subtitle}</p></div>
                        <div><p className={`${style['item__content-price']}`}>${product.price}</p></div>
                        <ColorSizeSelection></ColorSizeSelection>
                    </div>
                    <div className={style['item-image']}>
                        <div className={style['item-image__buttons']}>
                            <button type="button"><FaPlus/></button>
                            <button type="button"><FaMinus/></button>
                        </div>
                        <img src={item.photo} className={style["item-image__button item-image__button--add"]} ></img>
                    </div>
                </div>
                <hr></hr>
            </>

        )
    }
}