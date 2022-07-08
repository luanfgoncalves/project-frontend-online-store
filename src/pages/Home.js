import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from '../components/CategoriesList';
import ProductsList from '../components/ProductsList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isListEmpty: '',
      apiCategories: [],
      // storeProducts: {
      //   title: '',
      //   thumbnail:'',
      //   price
      // }
    };
  }

  componentDidMount() {
    this.startApi();
  }

  // verifica se tem itens na lista e atualiza o estado
  handleListChange = ({ target }) => {
    const { value } = target;
    this.setState({
      isListEmpty: value,
    });
  }

  startApi = async () => {
    const categories = await getCategories();
    const categoriesData = await categories;
    this.setState({
      apiCategories: categoriesData,
    });
  }

  test = (param) => {
    console.log(param);
  }

  render() {
    const { isListEmpty, apiCategories } = this.state;
    return (
      <div>

        <Link data-testid="shopping-cart-button" to="/shopcart">
          Meu Carrinho
        </Link>

        <form>

          <label htmlFor="search-bar">
            Busca:

            <input
              id="search-bar"
              type="text"
              name="search-bar"
              placeholder="Faça sua busca"
              onChange={ this.handleListChange }
              value={ isListEmpty }
            />
          </label>

          {
            !isListEmpty
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

        <ProductsList
          productsListProp={ this.test }
        />

      </div>
    );
  }
}

export default Home;
