import React from 'react';
import PropTypes from 'prop-types';

class CartButtonAdd extends React.Component {
  constructor() {
    super();

    this.addCartItem = this.addCartItem.bind(this);
  }

  addCartItem(item) {
    if (localStorage.getItem('cartItens')
    && JSON.parse(localStorage.getItem('cartItens')).length !== 0) {
      const prevList = JSON.parse(localStorage.getItem('cartItens'));
      prevList.forEach((element) => {
        if (element.id === item.id) {
          element.qtLocalStorage += 1;
          localStorage.setItem(
            'cartItens', JSON.stringify([...prevList]),
          );
        } else {
          item.qtLocalStorage = 1;
          localStorage.setItem(
            'cartItens', JSON.stringify([...prevList, item]),
          );
        }
      });
    } else {
      item.qtLocalStorage = 1;
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
