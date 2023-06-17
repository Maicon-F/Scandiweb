import React from 'react';
import Itens from '../Itens';
import style from "./cart.module.scss";


export default class MiniCartComponent extends React.Component<any, any>{
    render() {
     
        return(

            <div className={style.cart}>
             <Itens isMiniCart={true} />
          </div>
                      
        )
    }
}

