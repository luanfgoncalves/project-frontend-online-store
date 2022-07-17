import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ShopCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shopCartItems: [],
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    if (!localStorage.getItem('shopcart')) return localStorage.setItem('shopcart', '[]');
    const shopCart = JSON.parse(localStorage.getItem('shopcart'));
    const cartRendered = shopCart.map((item) => {
      const quantity = localStorage.getItem(item.id);
      item.quantity = quantity;
      return item;
    });
    this.setState({
      shopCartItems: cartRendered,
    });
  }

  handleCount = (id, { target: { value } }) => {
    const { shopCartItems } = this.state;
    const initialCount = 1;
    let quantify = Number(localStorage.getItem(id));
    if (value === 'decrease' && quantify === initialCount) {
      return false;
    }
    if (value === 'increase') {
      quantify += 1;
    }
    if (value === 'decrease') {
      quantify -= 1;
    }
    localStorage.setItem(id, quantify);
    const newCart = shopCartItems.map((product) => {
      if (product.id === id) {
        product.quantity = quantify;
        return product;
      }
      return product;
    });
    this.setState({
      shopCartItems: newCart,
    });
  }

  clearShopCart = () => {
    localStorage.removeItem('shopcart');
  }

  render() {
    const { shopCartItems } = this.state;
    return (
      <div>
        <h1>Carrinho de compras</h1>
        {
          (shopCartItems.length === 0)
            ? (
              <p
                data-testid="shopping-cart-empty-message"
              >
                Seu carrinho está vazio
              </p>
            )
            : shopCartItems.map(({ id, title, price, quantity, thumbnail }) => (
              <div key={ id }>
                <div>
                  <h2 data-testid="shopping-cart-product-name">{title}</h2>
                  <p>{price}</p>
                  <img src={ thumbnail } alt={ title } />
                  <div>
                    <button
                      data-testid="product-decrease-quantity"
                      onClick={ (value) => this.handleCount(id, value) }
                      type="button"
                      value="decrease"
                    >
                      -

                    </button>
                    <p data-testid="shopping-cart-product-quantity">
                      {quantity}
                    </p>
                    <button
                      data-testid="product-increase-quantity"
                      type="button"
                      onClick={ (value) => this.handleCount(id, value) }
                      value="increase"
                    >
                      +

                    </button>
                  </div>
                </div>
                <div className="buttons-container">
                  <button
                    type="button"
                    onClick={ this.clearShopCart }
                  >
                    Limpar o carrinho
                  </button>
                  <Link to="/checkout">
                    <button
                      data-testid="checkout-products"
                      type="button"
                    >
                      Fazer checkout
                    </button>
                  </Link>
                </div>
              </div>

            ))
        }

      </div>

    );
  }
}

export default ShopCart;
