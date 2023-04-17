import ProductDescription from "../../components/PD";
import React from 'react';
import itens from '../../assets/itens.json';
import CartComponent from "../../components/Carts/Cart";

export type Props = {
    products: typeof itens[0][];
}


export default class Cart extends React.Component<Props>{

    render() {
        const {products} = this.props;
        return(
            <>
            <CartComponent products={products}/>

            </>
        )
    }
}