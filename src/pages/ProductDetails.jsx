import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productObj: '',
      addedToCart: [],
      cartProducts: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getProductsFromId(id);
  }

  getProductsFromId = async (id) => {
    const request = await fetch(` https://api.mercadolibre.com/items/${id}`);
    const response = await request.json();
    this.setState({
      productObj: response,
    });
  }

addItemToLocalStorage = (product) => {
  console.log(product.id);
  localStorage.setItem('cart', JSON.stringify(product.id));
  const localStorageCart = JSON.parse(localStorage.getItem('cart'));
  if (localStorageCart.some((element) => element.id === product.id)) {
    let count = Number(localStorage.getItem(product.id));
    localStorage.setItem(product.id, count += 1);
  } else {
    const carrinho = [...localStorageCart, product];
    localStorage.setItem('cart', JSON.stringify(carrinho));
    localStorage.setItem(product.id, 1);
  }
}

AddToCart = (product) => {
  console.log(product);
  this.setState((prevState) => ({
    cartProducts: [...prevState.cartProducts, product],
  }), this.addItemToLocalStorage(product));
}

render() {
  const { productObj } = this.state;
  return (
    <div data-testid="product-detail-name">
      <h1>{productObj.title}</h1>
      <img src={ productObj.thumbnail } alt="" />
      <h2>{productObj.price}</h2>
      <p>{productObj.warranty}</p>
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.AddToCart(productObj) }
        >
          Adicionar ao Carrinho

        </button>
        <Link
          to="/shopCart"
        >
          Carrinho
        </Link>
      </div>
    </div>
  );
}
}

export default ProductCard;

ProductCard.propTypes = {
  match: PropTypes.string,

}.isRequired;
