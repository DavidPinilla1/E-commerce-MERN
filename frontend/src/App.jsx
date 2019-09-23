import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Carrito from './components/Carrito/Carrito'
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>  
        <Route path="/" exact component={Home} />
        <Route path="/product/add" exact component={AddProduct} />
        <Route path="/carrito" exact component={Carrito} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
