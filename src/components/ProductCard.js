import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <section data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <p>{`R$ ${price}`}</p>
        <h3>{ title }</h3>
      </section>

    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
