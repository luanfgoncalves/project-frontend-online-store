import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isListEmpty: undefined,
    };
  }

  handleListChange = (event) => {
    this.setState((prevState) => ({
        isListEmpty
    }))
    // console.log(event.target.value);
  }

  render() {
    return (
      <form>
        <label htmlFor="search-bar">
          Busca:
          <input
            id="search-bar"
            type="text"
            name="search-bar"
            placeholder="Faça sua busca"
            onChange={ (event) => this.handleListChange(event) }
          />
        </label>
      </form>
    );
  }
}

export default Home;
