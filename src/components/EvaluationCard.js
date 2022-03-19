import React from 'react';
import PropTypes from 'prop-types';

class EvaluationCard extends React.Component {
  render() {
    const { email, rate, evaluate } = this.props;
    return (
      <>
        <p>{ email }</p>
        <p>{ rate }</p>
        <p>{ evaluate }</p>
        <hr />
      </>
    );
  }
}

EvaluationCard.propTypes = {
  email: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  evaluate: PropTypes.string.isRequired,
};

export default EvaluationCard;
