import React from 'react';
import itens from '../../assets/itens.json';
import CartComponent from "../../components/Carts/Cart";
import Header from "../../components/header";
import Title from '../../components/Title';


export type Props = {
    products: typeof itens[0][];
}

interface TitleData {
    name: string,
    styles: {
    fontSize: string,
    fontWeight: string
    }
  }

export default class Cart extends React.Component<Props>{

    render() {
        const {products} = this.props;
        const myTitle: TitleData = { name: "CART", styles:{fontSize: "32px", fontWeight:'bold'}};
        return(
            <div  style={{display:"flex", flexDirection:'column', justifyContent:'center'}}>
            <Header></Header>
            <Title TitleData={myTitle}></Title>
            <CartComponent products={products}/>
            </div>
        )
    }
}