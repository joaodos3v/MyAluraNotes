import validador from 'validator';

class FormValidator {
  constructor(validacao) {
    this.validacao = validacao;
  }

  valida(state) {
    const campoValor = state[this.validacao.campo.toString()];
    const metodoValidacao = validador[this.validacao.metodo];

    if (metodoValidacao(campoValor, [], state) === true) {
      console.log("form inválido!");
      return false;      
    }
    
    console.log("form VÁLIDO!");
    return true;
  }
};

export default FormValidator;