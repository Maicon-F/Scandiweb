import React from 'react';
import itens from '../itens.json';
import style from './card.module.scss';

type Props = typeof itens[0];


export default class Card extends React.Component<{product:Props}>{
    
    render(){
        const { title, photo, price} = this.props.product;
        return(
            <div className={style.card}>
                <div>
                    <img src={photo} alt={title} className={style.image}/>
                </div>
                <div className={style.container}>
                    <h2>{title}</h2>
                    <p>${price}</p>
                </div>
           </div>
        )
    }
}

