import React, { Component } from 'react';

export class ShopCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getLocalStorageFunction();
  }

  getLocalStorageFunction = () => {
    const newCart = JSON.parse(localStorage.getItem('shopcart'));
    this.setState({
      items: newCart,
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Carrinho de compras</h1>
        {(!items)
          ? (
            <p
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>)
          : items.map((product) => (
            <div key={ product.id }>
              <p data-testid="shopping-cart-product-name">{product.title}</p>
              <p>{product.price}</p>
              <p data-testid="shopping-cart-product-quantity">
                {localStorage.getItem(product.id)}

              </p>
            </div>
          ))}

      </div>

    );
  }
}

export default ShopCart;
