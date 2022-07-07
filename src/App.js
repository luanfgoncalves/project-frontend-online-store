import React from 'react';
import './App.css';
import getCategories from './services/api';

class App extends React.Component {
  componentDidMount() {
    console.log('montou App');
    console.log(getCategories());
  }

  componentDidUpdate() {
    console.log('atualização App');
    console.log(getCategories());
  }

  render() {
    return (
      <h1>{ console.log(getCategories()) }</h1>
    );
  }
}

export default App;
