import React from 'react';
import Itens from '../Itens';
import style from "./cart.module.scss";


export default class CartComponent extends React.Component<any, any>{
    render() {
     
        return(

            <div className={style.cart}>
             <Itens />
          </div>
                      
        )
    }
}

