import React from 'react';
import PropTypes from 'prop-types';

class ProductAddRemove extends React.Component {
  constructor() {
    super();
    this.handleProductQuantity = this.handleProductQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.handleSumProduct = this.handleSumProduct.bind(this);
  }

  handleProductQuantity(id) {
    const productItensList = JSON.parse(localStorage.getItem('cartItens'));
    console.log(productItensList.find((item) => id === item.id).qtLocalStorage);
    return productItensList.find((item) => id === item.id).qtLocalStorage;
  }

  handleSumProduct(id) {
    const productItensList = JSON.parse(localStorage.getItem('cartItens'));
    productItensList.forEach((product) => {
      if (product.id === id) {
        product.qtLocalStorage += 1;
      }
    });
    localStorage.setItem(
      'cartItens', JSON.stringify([...productItensList]),
    );
  }

  handleRemoveProduct(id) {
    const productItensList = JSON.parse(localStorage.getItem('cartItens'));
    productItensList.forEach((product) => {
      if (product.id === id) {
        if (product.qtLocalStorage === 1) {
          const productItens = productItensList.filter((item) => item.id !== id);
          localStorage.setItem(
            'cartItens', JSON.stringify([...productItens]),
          );
        } else {
          product.qtLocalStorage -= 1;
          localStorage.setItem(
            'cartItens', JSON.stringify([...productItensList]),
          );
        }
      }
    });
  }

  handleRemoveAllProduct(id) {
    const productItensList = JSON.parse(localStorage.getItem('cartItens'));
    const productItens = productItensList.filter((product) => product.id !== id);
    localStorage.setItem(
      'cartItens', JSON.stringify([...productItens]),
    );
  }

  render() {
    const { id, propHandleLists } = this.props;
    return (
      <section>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => { this.handleRemoveProduct(id); propHandleLists(); } }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">
          {this.handleProductQuantity(id)}
        </p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => { this.handleSumProduct(id); propHandleLists(); } }

        >
          +
        </button>
        <button
          onClick={ () => { this.handleRemoveAllProduct(id); propHandleLists(); } }
          type="button"
        >
          x
        </button>
      </section>
    );
  }
}

ProductAddRemove.propTypes = {
  id: PropTypes.string.isRequired,
  propHandleLists: PropTypes.func.isRequired,
};

export default ProductAddRemove;
