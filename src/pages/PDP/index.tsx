import ProductDescription from "../../components/PD";
import React from 'react';
import itens from '../../assets/itens.json';
import Header from "../../components/header";
import Title from "../../components/Title";

export type Props = {
    product: typeof itens[0],
    type: string
}


export default class PDP extends React.Component<Props>{

    render() {
        const {product} = this.props;
        return(
            <>
                <Header></Header>
    
                <ProductDescription product={product}></ProductDescription>    
            </>
        )
    }
}