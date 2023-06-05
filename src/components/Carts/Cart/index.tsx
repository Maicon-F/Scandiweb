import React from 'react';
import prods from '../../../assets/itens.json';
import Itens from '../Itens';
import style from "./cart.module.scss";

export type Props ={
  products: typeof prods[0][];
}
export default class CartComponent extends React.Component<any, any>{
    render() {
     
        return(

            <div className={style.cart}>
             <Itens />
          </div>
                      
        )
    }
}