import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from '../components/Product';
import itens from '../assets/itens.json';
import fakeItems from "../assets/fake-cart.json"

import Category from '../pages/Category';
import PDP from "../pages/PDP";
import Cart from '../pages/Cart';
import MiniCart from '../components/MiniCart/Cart/index';
import Header from '../components/header';

const item = itens[1];

  export default class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/pd" element={<PDP product={itens[2]}/>} />
                    <Route path="/" element={<Category />} />   
                    <Route path="/product" element={<Product />} />    
                    <Route path="/cart" element={<Cart products={fakeItems}/>} />
                    <Route path="/mini-cart" element={<MiniCart products={fakeItems} />} />
                    <Route path="/header" element={<Header/>} />
                </Routes>
            </BrowserRouter>
        )
    }
  }