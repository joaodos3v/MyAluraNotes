"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Negociacao = function () {
	function Negociacao(data, quantidade, valor) {
		_classCallCheck(this, Negociacao);

		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;

		// "Garante" que o objeto é retornado 'congelado', ou seja, suas propriedades não poderão ser modificadas diretamente
		Object.freeze(this);
	}

	_createClass(Negociacao, [{
		key: "isEquals",


		// Simulando o comportamento de 'Encapsulamento' do paradigma OO, pois ninguém do que a classe Negociação para saber se uma negociação é igual à outra.
		// Com isso, podemos reaproveitar esse trecho de código em qualquer lugar, tornando nosso código mais limpo e, principalmente, encapsulado!
		value: function isEquals(outraNegociacao) {
			return JSON.stringify(this) == JSON.stringify(outraNegociacao);
		}
	}, {
		key: "volume",
		get: function get() {
			return this._quantidade * this._valor;
		}
	}, {
		key: "data",
		get: function get() {
			return new Date(this._data.getTime());
		}
	}, {
		key: "quantidade",
		get: function get() {
			return this._quantidade;
		}
	}, {
		key: "valor",
		get: function get() {
			return this._valor;
		}
	}]);

	return Negociacao;
}();
//# sourceMappingURL=Negociacao.js.map