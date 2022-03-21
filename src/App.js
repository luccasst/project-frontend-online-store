import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/cart" component={ Cart } />
          <Route path="/detalhes/:id" component={ ProductDetail } />
          <Route path="/checkout" component={ Checkout } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
