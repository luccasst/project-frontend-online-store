import React from 'react';
import PropTypes from 'prop-types';
import { getProductsId } from '../services/api';
import CartButton from '../components/CartButton';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},

    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

    fetchDetails = async () => {
      const { match: { params: { id } } } = this.props;
      const data = await getProductsId(id);
      this.setState({
        product: data,
      });
    };

    render() {
      const { product: { title, thumbnail, warranty, condition, price } } = this.state;
      return (
        <div data-testid="product-detail-name">
          <h3>{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
          <p>{`Condição: ${condition}`}</p>
          <p>{warranty}</p>
          <CartButton />
        </div>
      );
    }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
}.isRequired;

export default ProductDetail;
