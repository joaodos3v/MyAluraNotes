export class Negociacao {

	constructor(data, quantidade, valor) {
		this._data		 = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor		 = valor;
		
		// "Garante" que o objeto é retornado 'congelado', ou seja, suas propriedades não poderão ser modificadas diretamente
        Object.freeze(this);
	}

	
	get volume() {
		return this._quantidade * this._valor;
	}


	get data() {
		return new Date(this._data.getTime());
	}


	get quantidade() {
		return this._quantidade;
	}


	get valor() {
		return this._valor;
	}


	// Simulando o comportamento de 'Encapsulamento' do paradigma OO, pois ninguém do que a classe Negociação para saber se uma negociação é igual à outra.
	// Com isso, podemos reaproveitar esse trecho de código em qualquer lugar, tornando nosso código mais limpo e, principalmente, encapsulado!
	isEquals(outraNegociacao) {        
        return JSON.stringify(this) == JSON.stringify(outraNegociacao)
    }


}