import React from 'react';

class Checkout extends React.Component {
  constructor() {
    super();

    this.buyerInfo = this.buyerInfo.bind(this);
    this.paymentMethod = this.paymentMethod.bind(this);
  }

  buyerInfo() {
    return (
      <div>
        <form>
          <fieldset>
            <h3>Informações do Comprador</h3>
            <input
              type="text"
              placeholder="Nome Completo"
              data-testid="checkout-fullname"
            />
            <input
              type="number"
              placeholder="CPF"
              data-testid="checkout-cpf"
            />
            <input
              type="email"
              placeholder="Email"
              data-testid="checkout-email"
            />
            <input
              type="tel"
              placeholder="Telefone"
              data-testid="checkout-phone"
            />
            <br />
            <input
              type="number"
              placeholder="CEP"
              data-testid="checkout-cep"
            />
            <input
              type="text"
              placeholder="Endereço"
              data-testid="checkout-address"
            />
            <input
              type="text"
              placeholder="Complemento"
            />
            <input
              type="number"
              placeholder="Número"
            />
            <br />
            <input
              type="text"
              placeholder="Cidade"
            />
            <select name="estados-brasil">
              <option selected>Estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </fieldset>
        </form>
      </div>
    );
  }

  paymentMethod() {
    return (
      <div>
        <fieldset>
          <h3>Método de Pagamento</h3>
          <label htmlFor="boleto">
            Boleto
            <input
              type="radio"
              id="boleto"
              name="payment"
            />
          </label>
          <br />
          <label htmlFor="cartaoVisa">
            Visa
            <input
              type="radio"
              id="cartaoVisa"
              name="payment"
            />
          </label>
          <br />
          <label htmlFor="cartaoMaster">
            Master Card
            <input
              type="radio"
              id="cartaoMaster"
              name="payment"
            />
          </label>
          <br />
          <label htmlFor="cartaoElo">
            Elo
            <input
              type="radio"
              id="cartaoElo"
              name="payment"
            />
          </label>
        </fieldset>
      </div>

    );
  }

  render() {
    return (
      <div>
        <fieldset>
          <h3>Revise seus Produtos</h3>
          {/* <img src={ thumbnail } alt={ title } />
          <h4>{ title }</h4>
          <p>{`R$ ${price}`}</p>
          <p>{`Total:R$ ${price}`}</p> */}
        </fieldset>
        {this.buyerInfo()}
        {this.paymentMethod()}
        <button
          type="submit"
        >
          Comprar
        </button>
      </div>
    );
  }
}

export default Checkout;
