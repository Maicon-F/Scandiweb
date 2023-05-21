import ProductDescription from "../../components/PD";
import React from 'react';
import itens from '../../assets/itens.json';
import Header from "../../components/header";

export type Props = {
    product: typeof itens[0]

}


export default class PDP extends React.Component<Props>{

    render() {
        const {product} = this.props;
        return(
            <div>
                <Header></Header>
                <div style={{marginTop:'70px'}} >
                    <ProductDescription ></ProductDescription>  
                </div>                
            </div>
        )
    }
}