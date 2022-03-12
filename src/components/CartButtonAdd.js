import React from 'react';
import PropTypes from 'prop-types';

class CartButtonAdd extends React.Component {
  constructor() {
    super();

    this.addCartItem = this.addCartItem.bind(this);
  }

  addCartItem(item) {
    if (localStorage.getItem('cartItens')) {
      const prevList = JSON.parse(localStorage.getItem('cartItens'));
      localStorage.setItem(
        'cartItens', JSON.stringify([...prevList, item]),
      );
    } else {
      localStorage.setItem('cartItens', JSON.stringify([item]));
    }
  }

  render() {
    const { datatestid, dataItem } = this.props;
    return (
      <button
        type="button"
        data-testid={ datatestid }
        onClick={ () => this.addCartItem(dataItem) }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

CartButtonAdd.propTypes = {
  datatestid: PropTypes.string.isRequired,
  dataItem: PropTypes.shape(),
}.isRequired;

export default CartButtonAdd;
