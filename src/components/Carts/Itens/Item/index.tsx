import React from 'react';
import itens from '../../../../assets/itens.json';
import fakeItems from "../../../../assets/fake-cart.json"
import style from '../Item/item.module.scss';
import ColorSizeSelection from '../../../ColorSize';
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
                        <p>
                            {product.title}
                        </p>
                        <p>
                            {product.subtitle}
                        </p>
                        <p className={`${style['item__price']}`}>
                            ${product.price}
                        </p>
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