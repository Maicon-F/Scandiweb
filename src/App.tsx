import React from 'react';
import Button from './components/Button';
import itens from './assets/itens.json';
import Products from './components/Products';

const item = itens[2];


function App() {
  return (
    <div className="App">
      <Products></Products>
    </div>
  );
}

export default App;
