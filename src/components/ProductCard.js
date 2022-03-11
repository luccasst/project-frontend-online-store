import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <section data-testid="product">
        <Link
          id={ id }
          data-testid="product-detail-link"
          to={ `/detalhes/${id}` }
        >
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
          <h3>{ title }</h3>
        </Link>
      </section>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
