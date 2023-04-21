import React from 'react';
import prods from '../../../assets/itens.json';
import Itens from '../Itens';

export type Props ={
  products: typeof prods[0][];
}
export default class MiniCart extends React.Component<Props>{
    render() {
      const {products} = this.props;
        return(

          <div className="cart">
             <Itens products={products}/>
          </div>
                      
        )
    }
}