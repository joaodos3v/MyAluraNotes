import React, { Component } from 'react';

import FormValidator from '../plugins/FormValidator';

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.validador = new FormValidator({
      campo: 'nome',
      metodo: 'isEmpty',
    });
    
    this.stateInicial = {
      nome: '',
      livro: '',
      preco: '',
    };

    this.state = this.stateInicial;
  }

  escutadorDeInputs = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitFormulario = () => {
    if (this.validador.valida(this.state)) {
      this.props.escutadorDeSubmit(this.state);
      this.setState(this.stateInicial);
    } else {
      console.log('Submit Bloqueado!');      
    }
  };

  render() {
    const { nome, livro, preco } = this.state;

    return (
      <form>
        <div className="row">
          <div className="input-field col s4">
            <label className="input-field" htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              name="nome"
              className="validate"
              value={nome}
              onChange={this.escutadorDeInputs}
            />
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="livro">Livro</label>
            <input
              id="livro"
              type="text"
              name="livro"
              className="validate"
              value={livro}
              onChange={this.escutadorDeInputs}
            />
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="preco">Preço</label>
            <input
              id="preco"
              type="text"
              name="preco"
              className="validate"
              value={preco}
              onChange={this.escutadorDeInputs}
            />
          </div>
        </div>

        <button type="button" className="btn waves-effect waves-light indigo lighten-2" onClick={this.submitFormulario}>Salvar</button>
      </form>
    );
  }
}

export default Formulario;