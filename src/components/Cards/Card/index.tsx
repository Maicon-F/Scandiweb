import React from 'react';
import itens from '../itens.json';
import style from './card.module.scss';

type Props = typeof itens[0];


export default class Card extends React.Component<{product:Props}>{
    
    render(){
        const { title, photo, price} = this.props.product;
        return(
            <div className={style.card}>  
                    <img src={photo} alt={title} className={style.image}/>
                <div className={style.card__details}>
                    <p>{title}</p>
                    <p>$ {price}</p>
                </div>
           </div>
        )
    }
}

