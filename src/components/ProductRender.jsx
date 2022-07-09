import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class ProductRender extends Component {
  render() {
    const { propTitle, propThumbnail, propPrice } = this.props;
    return (
      <div className="query-results" data-testid="product">
        <h3>{ propTitle }</h3>
        <img src={ propThumbnail } alt="" />
        <span>{ propPrice }</span>
      </div>
    );
  }
}

ProductRender.propTypes = {
  propTitle: PropTypes.string,
  propThumbnail: PropTypes.string,
  propPrice: PropTypes.string,
}.isRequired;
export default ProductRender;
