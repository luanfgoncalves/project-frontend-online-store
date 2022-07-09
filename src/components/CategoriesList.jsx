import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { apiCategoriesProp } = this.props;
    return (
      <div className="categories-list-container">
        { apiCategoriesProp.map(({ name, id }) => (
          <label
            htmlFor={ id }
            data-testid="category"
            key={ id }
            className="label-categories"
          >
            <div>
              <input className="radio" type="radio" id={ id } name="radio-categories" />
              { name }
            </div>
          </label>)) }
      </div>
    );
  }
}

CategoriesList.propTypes = {
  apiCategoriesProp: PropTypes.arrayOf(Object).isRequired,
};

export default CategoriesList;
