import React from 'react';
import PropTypes from 'prop-types';

class Evaluation extends React.Component {
  constructor() {
    super();

    this.state = {
      textArea: '',
      email: '',
      rating: '',
      isLoaded: false,
    };
    this.formEvaluation = this.formEvaluation.bind(this);
    this.handleLocalStorage = this.handleLocalStorage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.renderLocalStorage = this.renderLocalStorage(this);
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleLocalStorage() {
    const { textArea, email, rating } = this.state;
    const { id } = this.props;
    const objEvaluation = {
      email,
      rate: rating,
      evaluate: textArea,
    };
    localStorage.setItem(`evaluationItem${id}`, JSON.stringify(objEvaluation));
  }

  formEvaluation() {
    const { textArea, email } = this.state;
    const index = ['1', '2', '3', '4', '5'];
    return (
      <section>
        <h1>Avaliação</h1>
        <fieldset>
          <input
            data-testid="product-detail-email"
            type="email"
            name="email"
            value={ email }
            placeholder="Escreva seu email"
            onChange={ this.handleInput }
          />
          {index.map((el) => (
            <div
              key={ el }
              value={ el }
              data-testid={ `${el}-rating` }
            >
              <label htmlFor="evaluation">
                { el }
                <input
                  type="radio"
                  id="evaluation"
                  name="rating"
                  value={ el }
                  onClick={ this.handleInput }
                />
              </label>
            </div>))}
          <textarea
            data-testid="product-detail-evaluation"
            value={ textArea }
            name="textArea"
            cols="10"
            rows="5"
            onChange={ this.handleInput }
          />
          <br />
          <button
            data-testid="submit-review-btn"
            type="submit"
            onClick={ this.handleLocalStorage }
          >
            Enviar
          </button>
        </fieldset>
      </section>);
  }

  renderLocalStorage() {
    console.log(this.props);
    // const { id } = this.props;
    // const request = JSON.parse(localStorage.getItem(`evaluationItem${id}`));
    // return (
    //   request && request.length > 0 ? (
    //     request.map((obj, index) => (
    //       <div key={ index }>
    //         <p>{obj.email}</p>
    //         <p>{obj.rate}</p>
    //         <p>{obj.evaluate}</p>
    //       </div>
    //     ))
    //   ) : ''
    // );
  }

  render() {
    const { isLoaded } = this.state;
    console.log(this.props);
    return (
      <div>
        {this.formEvaluation()}
        {isLoaded
        && (
          (this.renderLocalStorage())
        )}
      </div>
    );
  }
}

Evaluation.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Evaluation;
