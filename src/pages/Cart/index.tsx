import React from 'react';
import itens from '../../assets/itens.json';
import CartComponent from "../../components/Carts/Cart";
import Header from "../../components/header";
import Title from '../../components/Title';


export type Props = {
    products: typeof itens[0][];
}



export default class Cart extends React.Component<Props>{

    render() {
        const {products} = this.props;

        return(
            <div  style={{display:"flex", flexDirection:'column', justifyContent:'center'}}>
            <Header></Header>
            <Title></Title>
            <CartComponent products={products}/>
            </div>
        )
    }
}