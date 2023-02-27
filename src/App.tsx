import React from 'react';
import Button from './components/Button';
import itens from './assets/itens.json';
import Product from './components/Products/Product';

const item = itens[2];


function App() {
  return (
    <div className="App">
      <Product product={item}></Product>
    </div>
  );
}

export default App;
