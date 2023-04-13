import React, {useState} from 'react';
import itens from './assets/itens.json';
import Products from './components/Products';
import ColorSizeSelection from './components/PD/ColorSize';
import ProductDescription from './components/PD/index';
import Router from './routers/router';

const item = itens[0];
let color = item.selectedColor;



function App() {
  return (
    <div className="App">
       <Router />
    </div>
  );
}

export default App;
