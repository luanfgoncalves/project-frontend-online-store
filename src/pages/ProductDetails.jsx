import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productObj: '',
      addedToCart: [],
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

addItemToLocalStorage = (items) => {
  const shopCart = JSON.parse(localStorage.getItem('shopcart'));
  if (shopCart.some((product) => product.id === items.id)) {
    let count = Number(localStorage.getItem(items.id));
    localStorage.setItem(items.id, count += 1);
  } else {
    const addOnce = [...shopCart, items];
    localStorage.setItem('shopcart', JSON.stringify(addOnce));
    localStorage.setItem(items.id, 1);
  }
}

  addItemToCart = () => {
    const { productObj } = this.state;
    this.setState((prevState) => ({
      addedToCart: [...prevState.addedToCart, productObj],
    }), this.addItemToLocalStorage(productObj));
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
            onClick={ this.addItemToCart }
          >
            Adicionar ao Carrinho

          </button>
          <Link
            to="/shopCart"
            data-testid="shopping-cart-button"
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
