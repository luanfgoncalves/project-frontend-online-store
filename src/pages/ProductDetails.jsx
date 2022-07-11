import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productObj: '',
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

  render() {
    const { productObj } = this.state;
    return (
      <div data-testid="product-detail-name">
        <h1>{productObj.title}</h1>
        <img src={ productObj.thumbnail } alt="" />
        <h2>{productObj.price}</h2>
        <p>{productObj.warranty}</p>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  match: PropTypes.string,

}.isRequired;
