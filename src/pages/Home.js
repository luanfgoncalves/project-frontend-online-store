import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import CategoryList from '../components/CategoriesList';
import ProductRender from '../components/ProductRender';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      list: [],
      inputValue: '',
      disableSearchBtn: true,
      emptyFinder: null,
    };
  }

  async componentDidMount() {
    this.setState({ categories: await getCategories() });
  }

  getCategoriesById = async ({ target: { value } }) => {
    const { results } = await getProductsFromCategoryAndQuery(value, null);
    this.setState({ emptyFinder: false, list: results,
    });
  }

  handleChange = ({ target: { value } }) => ((value.length > 0) ? (
    this.setState({ inputValue: value, disableSearchBtn: false, emptyFinder: false })
  ) : (
    this.setState({ inputValue: value, disableSearchBtn: true, emptyFinder: null })
  ));

  requestAPI = async () => {
    const { inputValue } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(null, inputValue);
    if (results.length === 0) {
      this.setState({ emptyFinder: true });
    } else {
      this.setState({ list: results, emptyFinder: false });
    }
  }

  render() {
    const { list, categories, inputValue, disableSearchBtn, emptyFinder } = this.state;
    return (
      <>
        <Link data-testid="shopping-cart-button" to="/shopcart">
          Carrinho
        </Link>
        <div>
          <div className="search-bar-container">
            <label htmlFor="search" className="teste">
              <input
                className="search-bar"
                type="text"
                name="search"
                data-testid="query-input"
                value={ inputValue }
                onChange={ this.handleChange }
              />
            </label>
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.requestAPI }
              disabled={ disableSearchBtn }
            >
              Buscar
            </button>
          </div>
          <div className="container">
            <ul className="categories-list-container">
              {categories.map(({ id, name }) => (
                <CategoryList
                  key={ id }
                  categoryName={ name }
                  categoryId={ id }
                  prop={ this.getCategoriesById }
                />))}
            </ul>
            {emptyFinder === null ? (
              <div className="message-default">
                <h4 data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </h4>
              </div>)
              : (
                <div className="query-results-container">
                  {emptyFinder === true ? (
                    <div className="message-default">
                      <h4>Nenhum produto foi encontrado</h4>
                    </div>
                  )
                    : list.map(({ id, title, thumbnail, price }) => (
                      <ProductRender
                        key={ id }
                        propTitle={ title }
                        propThumbnail={ thumbnail }
                        propPrice={ price }
                        id={ id }
                      />
                    ))}
                </div>
              )}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
