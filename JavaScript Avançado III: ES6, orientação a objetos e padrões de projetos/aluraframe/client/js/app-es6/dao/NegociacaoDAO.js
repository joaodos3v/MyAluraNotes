import {Negociacao} from '../models/Negociacao';

export class NegociacaoDAO {

	constructor(connection) {

		this._connection = connection;
		this._store 	 = 'negociacoes';
	}


	adiciona(negociacao) {

		return new Promise((resolve, reject) => {
			
			let request = this._connection
				.transaction([this._store], 'readwrite')
				.objectStore(this._store)
				.add(negociacao);

			request.onsuccess = e => {

				resolve();
			};

			request.onerror = e => {

				console.log(e.target.error);
				reject('Não foi possível adicionar a negociação');
			};

		});
	}


	listaTodos() {

		return new Promise((resolve, reject) => {

			let cursor = this._connection
				.transaction([this._store], 'readwrite')
				.objectStore(this._store)
				.openCursor();

			let negociacoes = [];

			cursor.onsuccess = e => {
				let atual = e.target.result;
				
				if(atual) { // Se o valor do ponteiro atual é diferente de null, ou seja, ainda existem registros para serem iterados
					
					let dado = atual.value; // => Nesse ponteiro, me retorne o dado armazenado

					negociacoes.push(new Negociacao(dado._data, dado._quantidade, dado._valor));

					atual.continue(); // Chama onsuccess novamente, porém o ponteiro vai avançar uma posição
				} else {

					resolve(negociacoes);
				}
			};


			cursor.onerror = e => {

				console.log(e.target.error.name);
				reject('Não foi possível listar as negociações!');
			};

		});
	}


	apagaTodos() {

		return new Promise((resolve, reject) => {

			let request = this._connection
				.transaction([this._store], 'readwrite')
				.objectStore(this._store)
				.clear();

			request.onsuccess = e => resolve('Negociações apagadas com sucesso!');
			
			request.onerror = e => {
				console.log(e.target.error);
				reject('Não foi possível apagar as negociações!');
			};

		})
	}


}