import React from 'react';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';

class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <CartButton />
        <Categories />
      </div>
    );
  }
}

export default Home;
