import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from '../components/CategoriesList';
// import ProductsList from '../components/ProductsList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      choosenCategory: '',
      isListEmpty: '',
      apiCategories: [],
      storeProducts: [],
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

  productsRecovery = async (categoryId, query) => {
    const products = await getProductsFromCategoryAndQuery(categoryId, query);
    const response = await products;
    // const { results } = response;
    this.setState({
      // storeProducts: {
      //   title: results.title,
      //   thumbnail: results.thumbnail,
      //   price: results.price,
      // },
      storeProducts: response,
    });
  }

  radioEventListener = (param) => {
    // console.log(param);
    this.setState({
      choosenCategory: param, // fazer função que tire maiúsculo, acento e espaços.
    });
  }

  render() {
    const { isListEmpty, apiCategories, choosenCategory, storeProducts } = this.state;
    console.log(storeProducts); // só para tirar o erro de lint
    return (
      <div>

        <Link data-testid="shopping-cart-button" to="/shopcart">
          Meu Carrinho
        </Link>

        <form onChange={ () => this.productsRecovery(choosenCategory, isListEmpty) }>

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
            radioInput={ this.radioEventListener }
          />

        </form>

      </div>
    );
  }
}

export default Home;
