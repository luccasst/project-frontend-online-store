import React from 'react';
import PropTypes from 'prop-types';
import CategoryButton from './CategoryButton';

const api = require('../services/api');

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.handleList = this.handleList.bind(this);
  }

  componentDidMount = () => {
    this.handleList();
  }

  async handleList() {
    const result = await api.getCategories();
    this.setState({
      categories: [...result],
    });
  }

  render() {
    const { categories } = this.state;
    const { propButton } = this.props;
    return (
      <div>
        { categories.map((category) => (<CategoryButton
          key={ category.id }
          id={ category.id }
          name={ category.name }
          propButton={ propButton }
        />)) }
      </div>

    );
  }
}

Categories.propTypes = {
  propButton: PropTypes.func.isRequired,
};

export default Categories;
