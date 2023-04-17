import React from 'react';
import itens from '../../assets/itens.json';
import Product from '../Cards/Card/index';
import style from './cards.module.scss';


type Props = typeof itens[0];


export default class Cards extends React.Component{
   render() {
    return(
        <div className={style.container}>
            {itens.map(item=>(
              <Product key={item.id} product={item}/>
            ))}
        </div>
    )  
   }
}

