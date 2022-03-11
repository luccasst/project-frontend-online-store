import React from 'react';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      productItems: [],
      txtSearch: '',
      categorySearch: '',
    };

    this.handleProducts = this.handleProducts.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleCategoryButton = this.handleCategoryButton.bind(this);
  }

  componentDidMount() {
    this.handleProducts();
  }

  async handleProducts() {
    const { txtSearch, categorySearch } = this.state;
    const getProducts = await getProductsFromCategoryAndQuery(categorySearch, txtSearch);
    this.setState({
      productItems: [...getProducts.results],
    });
  }

  handleCategoryButton(productId) {
    this.setState({
      categorySearch: productId,
    });
  }

  handleValue({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { productItems, txtSearch } = this.state;
    console.log(productItems.length);
    return (
      <div data-testid="home-initial-message">
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <CartButton />
        <Categories
          propButton={ this.handleCategoryButton }
        />
        <div>
          <input
            data-testid="query-input"
            type="text"
            value={ txtSearch }
            name="txtSearch"
            onChange={ this.handleValue }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleProducts }
          >
            Search
          </button>
        </div>
        {productItems.map((product) => (
          <ProductCard
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
          />
        ))}
      </div>
    );
  }
}

export default Home;
