import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isListEmpty: '',
    };
  }

  // verifica se tem itens na lista e atualiza o estado
  handleListChange = ({ target }) => {
    const { value } = target;
    this.setState({
      isListEmpty: value,
    });
  }

  render() {
    const { isListEmpty } = this.state;
    return (
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
        {!isListEmpty
        && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>)}
      </form>
    );
  }
}

export default Home;
