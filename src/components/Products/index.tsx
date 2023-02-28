import React from 'react';
import itens from '../../assets/itens.json';
import Product from './Product';
import style from './Products.module.scss';


type Props = typeof itens[0];


export default class Products extends React.Component{
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

