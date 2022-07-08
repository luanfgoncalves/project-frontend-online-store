import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { apiCategoriesProp } = this.props;
    return (
      <div>
        { apiCategoriesProp.map(({ name, id }) => (
          <label htmlFor="listItem" data-testid="category" key={ id }>
            <input type="radio" id="listItem" />
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
