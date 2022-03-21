import React from 'react';
import { Link } from 'react-router-dom';

class CheckoutButton extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="checkout-products" to="/checkout">
          <button type="button">Checkout</button>
        </Link>
      </div>
    );
  }
}

export default CheckoutButton;
