import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from '../components/Product';
import Category from '../pages/Category';
import PDP from "../pages/PDP";
import Cart from '../pages/Cart';

import Header from '../components/header';

  export default class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/product-description/:id" element={<PDP/>} />
                    <Route path="/home" element={<Category />} />   
                    <Route path="/" element={<Category />} /> 
                    <Route path="/product" element={<Product />} />    
                    <Route path="/cart" element={<Cart />} />   
                    <Route path="/header" element={<Header/>} />
                </Routes>
            </BrowserRouter>
        )
    }
  }