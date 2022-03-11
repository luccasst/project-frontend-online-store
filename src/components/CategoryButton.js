import React from 'react';
import PropTypes from 'prop-types';

class CategoryButton extends React.Component {
  render() {
    const { id, name, propButton } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          <input
            data-testid="category"
            id={ id }
            name="nameButton"
            type="radio"
            onClick={ () => propButton(id) }
          />
          { name }
        </label>
      </div>
    );
  }
}

CategoryButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  propButton: PropTypes.func.isRequired,
};

export default CategoryButton;
