import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Home } exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
