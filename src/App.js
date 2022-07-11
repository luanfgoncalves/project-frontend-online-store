import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import ShopCartComponent from './pages/ShopCart';
import './App.css';
import ProductCardPage from './pages/ProductDetails';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/shopcart" component={ ShopCartComponent } />
          <Route
            path="/details/:id"
            render={ (props) => <ProductCardPage { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
