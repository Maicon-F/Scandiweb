import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductComponent from '../components/Product';
import itens from '../assets/itens.json';
import fakeItems from "../assets/fake-cart.json"

import CategoryComponent from '../pages/Category';
import PDP from "../pages/PDP";
import Cart from '../pages/Cart';
import MiniCart from '../components/MiniCart/Cart/index';
import Header from '../components/header';
import {  useQuery, gql } from '@apollo/client';
import Product from '../models/product'
import Category from '../models/category';


const getProducts = gql`
query getAllProducts {
    category {
      products{
        id,
        name,
        prices {
          currency {
            label,
            symbol
          }
            ,
          amount
        },
        category,  
        attributes {
          id,
          name,
          items{
            displayValue,
            value,
            id
          } 
        },
        brand
      }
    }
  }
`

const item = itens[1];


  const Routere = () => {
    const {data} = useQuery<{category: Category}>(getProducts);
  
    const productList: Product[] = data?.category.products || [];
    
    console.log(productList[0])
    
    
    return (
        <BrowserRouter>
    
                <Routes>
                    <Route path="/pd" element={<PDP product={itens[0]}/>} />
                    <Route path="/home" element={<CategoryComponent />} />   
                    <Route path="/product" element={<ProductComponent/>} />    
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/mini-cart" element={<MiniCart products={fakeItems} />} />
                    <Route path="/header" element={<Header/>} />
                    <Route path="/" element={<CategoryComponent />} />
                </Routes>
            </BrowserRouter>
    )
}

export default Routere;