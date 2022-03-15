import React from 'react';
import PropTypes from 'prop-types';
import { getProductsId } from '../services/api';
import CartButton from '../components/CartButton';
import CartButtonAdd from '../components/CartButtonAdd';
import Evaluation from '../components/Evaluation';

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
      const { match: { params: { id } } } = this.props;
      const { product } = this.state;
      const { title, thumbnail, warranty, condition, price } = product;
      console.log(id);
      return (
        <div data-testid="product-detail-name">
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
          <p>{`Condição: ${condition}`}</p>
          <p>{ warranty }</p>
          <CartButton />
          <div>
            <CartButtonAdd
              datatestid="product-detail-add-to-cart"
              dataItem={ product }
            />
          </div>
          <Evaluation id={ id } />
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
