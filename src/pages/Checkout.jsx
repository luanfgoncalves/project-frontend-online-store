import React, { Component } from 'react';

export class Checkout extends Component {
  render() {
    return (
      <div className="checkout-container">
        <h1>Finalize a compra:</h1>
        <form>
          <div>
            <label htmlFor="fullname">
              Nome Completo:
              <input
                type="text"
                name="fullname"
                data-testid="checkout-fullname"
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                type="text"
                name="email"
                data-testid="checkout-email"
              />
            </label>
          </div>
          <div>
            <label htmlFor="cpf">
              CPF:
              <input
                type="text"
                name="cpf"
                data-testid="checkout-cpf"
              />
            </label>
            <label htmlFor="telefone">
              Telefone:
              <input
                type="text"
                name="telefone"
                data-testid="checkout-phone"
              />
            </label>
          </div>
          <label htmlFor="cep">
            CEP:
            <input
              type="text"
              name="cep"
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="address">
            Endereço:
            <input
              type="text"
              name="address"
              data-testid="checkout-address"
            />
          </label>
          <div>
            <legend>Dê a sua opnião:</legend>
            <label htmlFor="oppinion">
              <textarea name="" id="oppinion" cols="50" rows="10" />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Checkout;
