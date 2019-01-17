class ListaNegociacoes {

	constructor(armadilha) {
		this._negociacoes = [];
		this._armadilha   = armadilha;
	}


	adiciona(negociacao) {
		this._negociacoes.push(negociacao);
		this._armadilha(this); // Esse this é a própria instância que está sendo chamada no método controller
	}


	get negociacoes() {
		return [].concat(this._negociacoes);
	}


	esvazia() {
		this._negociacoes = [];
		this._armadilha(this);
	}

}