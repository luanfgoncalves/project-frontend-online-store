import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from '../components/CategoriesList';
import ProductRenderList from '../components/ProductRender';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      emptyFinder: false,
      searchInput: '',
      queryResults: [],
      apiCategories: [],
    };
  }

  componentDidMount() {
    this.startApi();
  }

  handleListChange = ({ target }) => {
    const { value } = target;
    this.setState({
      searchInput: value,
    });
  }

  startApi = async () => {
    const categories = await getCategories();
    const categoriesData = await categories;
    this.setState({
      apiCategories: categoriesData,
    });
  }

  requestAPI = async () => {
    const { searchInput } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(null, searchInput);
    if (results.length === 0) {
      this.setState({ emptyFinder: true });
    } else {
      this.setState({ emptyFinder: false });
    }
    this.setState({
      queryResults: results,
    });
  }

  render() {
    const { searchInput, apiCategories, queryResults, emptyFinder } = this.state;
    return (
      <div className="main-container">
        <div className="links-container">
          <Link data-testid="shopping-cart-button" to="/shopcart">
            Meu Carrinho
          </Link>
        </div>
        {

        }
        <form>
          <div>
            <label htmlFor="search-bar">
              Busca:

              <input
                data-testid="query-input"
                id="search-bar"
                type="text"
                name="search-bar"
                placeholder="Faça sua busca"
                onChange={ this.handleListChange }
                value={ searchInput }
              />
            </label>
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.requestAPI }
            >
              Buscar

            </button>
          </div>

          <div className="query-results-container">
            {
              emptyFinder ? <h2>Nenhum produto foi encontrado</h2> : (
                queryResults
                  .map(({ title, thumbnail, price, id }) => (
                    <ProductRenderList
                      key={ id }
                      propTitle={ title }
                      propThumbnail={ thumbnail }
                      propPrice={ price }
                    />
                  )))
            }
          </div>
          {
            !searchInput
        && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )
          }
          <CategoriesList
            apiCategoriesProp={ apiCategories }
          />
        </form>

      </div>
    );
  }
}

export default Home;
