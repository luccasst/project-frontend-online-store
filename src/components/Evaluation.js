import React from 'react';
import PropTypes from 'prop-types';
import EvaluationCard from './EvaluationCard';

class Evaluation extends React.Component {
  constructor() {
    super();

    this.state = {
      textArea: '',
      email: '',
      rating: '',
      isLoaded: false,
      evaluations: [],
    };

    this.formEvaluation = this.formEvaluation.bind(this);
    this.handleLocalStorage = this.handleLocalStorage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    this.getLocalStorage(id);
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
    const { id } = this.props;
    const { textArea, email, rating } = this.state;
    const objEvaluation = {
      email,
      rate: rating,
      evaluate: textArea,
    };
    const local = JSON.parse(localStorage.getItem(`evaluationItem${id}`));
    if (local) {
      const newLocal = [...local, objEvaluation];
      localStorage.setItem(`evaluationItem${id}`, JSON.stringify(newLocal));
    } else {
      localStorage.setItem(`evaluationItem${id}`, JSON.stringify([objEvaluation]));
    }
    this.getLocalStorage(id);
    this.setState({
      email: '',
      textArea: '',
    });
  }

  getLocalStorage(id) {
    this.setState({
      evaluations: JSON.parse(localStorage.getItem(`evaluationItem${id}`)),
    });
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
            >
              <label htmlFor="evaluation">
                { el }
                <input
                  type="radio"
                  id="evaluation"
                  name="rating"
                  data-testid={ `${el}-rating` }
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
            type="button"
            data-testid="submit-review-btn"
            onClick={ this.handleLocalStorage }
          >
            Enviar
          </button>
        </fieldset>
      </section>);
  }

  render() {
    const { isLoaded, evaluations } = this.state;
    return (
      <div>
        {this.formEvaluation()}
        {(isLoaded && evaluations && evaluations.length > 0)
        && (
          evaluations.map((item, index) => (
            <section key={ index }>
              <EvaluationCard
                index={ index }
                email={ item.email }
                rate={ item.rate }
                evaluate={ item.evaluate }
              />
            </section>
          ))
        )}
      </div>
    );
  }
}

Evaluation.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Evaluation;
