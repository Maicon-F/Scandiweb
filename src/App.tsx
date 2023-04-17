import itens from './assets/itens.json';
import Router from './routers/router';

const item = itens[0];


function App() {
  return (
    <div className="App">
       <Router />
    </div>
  );
}

export default App;
