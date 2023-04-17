import { createContext, useContext, useState } from "react";
import React from 'react';


const ProductContext = React.createContext('Product');


export default class Product extends React.Component{
    render(){
       
        return(
            
            <ProductContext.Provider value={{
                
              }}>
              
              </ProductContext.Provider>
        )
    }
}