import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ProductRenderList extends Component {
  render() {
    const { propTitle, propThumbnail, propPrice, id, cartButton } = this.props;
    return (

      <div className="query-results" data-testid="product">
        <h3>{propTitle}</h3>
        <Link
          to={ `/details/${id}` }
          data-testid="product-detail-link"
        >
          <img
            data-testid="product-detail-link"
            src={ propThumbnail }
            alt={ propTitle }
          />
        </Link>
        <span>
          {`Preço R$: ${propPrice}`}
        </span>
        <button
          type="button"
          onClick={ cartButton }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho

        </button>
      </div>

    );
  }
}

ProductRenderList.propTypes = {
  propTitle: PropTypes.string,
  propThumbnail: PropTypes.string,
  propPrice: PropTypes.string,
}.isRequired;
export default ProductRenderList;
