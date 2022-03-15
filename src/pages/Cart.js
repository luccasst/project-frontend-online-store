import React from 'react';
import ProductCard from '../components/ProductCard';
import ProductAddRemove from '../components/ProductAddRemove';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      productItensList: [],
    };
    this.handleLocalStorage = this.handleLocalStorage.bind(this);
  }

  componentDidMount() {
    this.handleLocalStorage();
  }

  handleLocalStorage() {
    this.setState(
      {
        productItensList: JSON.parse(localStorage.getItem('cartItens'))
          ? JSON.parse(localStorage.getItem('cartItens'))
          : [],
      },
    );
  }

  render() {
    const { productItensList } = this.state;
    return (
      <div data-testid="shopping-cart-empty-message">
        {productItensList.length === 0 ? (
          <p>Seu carrinho está vazio</p>)
          : (
            productItensList.map((product, index) => (
              <div
                key={ index }
              >
                <ProductCard
                  dataItem={ product }
                  isCart
                />
                <ProductAddRemove
                  key={ index }
                  id={ product.id }
                  propHandleLists={ this.handleLocalStorage }
                />
              </div>
            ))
          )}
      </div>
    );
  }
}

export default Cart;
