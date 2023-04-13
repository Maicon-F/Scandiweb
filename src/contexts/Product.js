import { createContext, useContext, useState } from "react";
import React from 'react';


const ProductContext = React.createContext('Product');


export default class Product extends React.Component{
    render(){
        const [nome, setNome] = useState();
        return(
            
            <ProductContext.Provider value={{
                nome
              }}>
                {children}
              </ProductContext.Provider>
        )
    }
}