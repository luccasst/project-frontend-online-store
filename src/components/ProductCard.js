import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButtonAdd from './CartButtonAdd';

class ProductCard extends React.Component {
  render() {
    const { dataItem, isCart } = this.props;
    const { title, thumbnail, price, id } = dataItem;
    return (
      <section data-testid="product">
        <Link
          id={ id }
          data-testid="product-detail-link"
          to={ `/detalhes/${id}` }
        >
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
          <h3 data-testid="shopping-cart-product-name">
            { title }
          </h3>
        </Link>
        {!isCart
        && (
          <CartButtonAdd
            dataItem={ dataItem }
            datatestid="product-add-to-cart"
          />
        )}
      </section>
    );
  }
}

ProductCard.propTypes = {
  dataItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }),
}.isRequired;

export default ProductCard;
