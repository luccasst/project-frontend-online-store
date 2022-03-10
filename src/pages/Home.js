import React from 'react';
import CartButton from '../components/CartButton';

class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <CartButton />
      </div>
    );
  }
}

export default Home;
