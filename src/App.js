import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShopCartComponent from './pages/ShopCart';
import ProductDetailsCard from './pages/ProductDetails';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shopcart" component={ ShopCartComponent } />
          <Route
            exact
            path="details:id"
            render={ (props) => <ProductDetailsCard { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
