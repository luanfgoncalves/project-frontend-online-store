import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { apiCategoriesProp } = this.props;
    return (
      <div>
        { apiCategoriesProp.map(({ name, id }) => (
          <label
            htmlFor={ id }
            data-testid="category"
            key={ id }
          >
            <input type="radio" id={ id } name="radio-categories" />
            { name }
          </label>)) }
      </div>
    );
  }
}

CategoriesList.propTypes = {
  apiCategoriesProp: PropTypes.arrayOf(Object).isRequired,
};

export default CategoriesList;
