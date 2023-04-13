import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from '../pages/Category';
import PDP from "../pages/PDP";


  export default class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/pd" element={<PDP/>} />
                    <Route path="/" element={<Category />} />        
                </Routes>
            </BrowserRouter>
        )
    }
  }