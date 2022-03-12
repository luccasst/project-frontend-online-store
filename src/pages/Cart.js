import React from 'react';
import ProductCard from '../components/ProductCard';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      productItensList: [],
      cartListUnique: [],
    };

    this.handleUniqueList = this.handleUniqueList.bind(this);
  }

  componentDidMount() {
    this.setState(
      {
        productItensList: JSON.parse(localStorage.getItem('cartItens'))
          ? JSON.parse(localStorage.getItem('cartItens'))
          : [],
      }, () => this.handleUniqueList(),
    );
  }

  handleUniqueList() {
    const { productItensList } = this.state;
    const lista = [];
    productItensList.forEach((item) => {
      if (lista.length === 0) lista.push(item);
      if (lista.some((itemLista) => itemLista.id !== item.id)) {
        lista.push(item);
      }
    });
    this.setState({
      cartListUnique: lista,
    });
  }

  render() {
    const { productItensList, cartListUnique } = this.state;
    return (
      <div data-testid="shopping-cart-empty-message">
        {productItensList.length === 0 ? (
          <p>Seu carrinho está vazio</p>)
          : (
            cartListUnique.map((product, index) => (
              <div
                key={ index }
              >
                <p data-testid="shopping-cart-product-quantity">
                  {
                    `Quantidade:
                    ${productItensList.filter((item) => product.id === item.id).length}`
                  }
                </p>
                <ProductCard
                  dataItem={ product }
                  isCart
                />
              </div>
            ))
          )}
      </div>
    );
  }
}

export default Cart;
