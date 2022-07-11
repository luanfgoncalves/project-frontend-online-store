import React from 'react';
import propTypes from 'prop-types';

class CategoryList extends React.Component {
  render() {
    const { categoryName, categoryId, prop } = this.props;
    return (
      <li>
        <label htmlFor="Category">
          <input
            value={ categoryId }
            name="Category"
            type="radio"
            onClick={ prop }
            data-testid="category"
          />
          {categoryName}
        </label>
      </li>
    );
  }
}

CategoryList.propTypes = {
  categoryName: propTypes.string,
  categoryId: propTypes.string,
}.isRequired;

export default CategoryList;
