
const stores = ['negociacoes'];
const version = 3;
const dbName = 'aluraframe';

let connection = null;
let close = null;


export class ConnectionFactory {

	constructor() {
		throw new Error('Essa classe não pode ser instanciada (ConnectionFactory)!');
	}


	static getConnection() {
		
		return new Promise((resolve, reject) => {

			let openRequest = window.indexedDB.open(dbName, version);

			openRequest.onupgradeneeded = e => {

				ConnectionFactory._createStores(e.target.result);
			};


			openRequest.onsuccess = e => {
				if(!connection) {
					connection = e.target.result;
					
					close = connection.close.bind(connection);

					connection.close = function() {
						throw new Error('Você não pode fechar diretamente a conexão!');
					}
				}


				resolve(connection);
			};


			openRequest.onerror = e => {

				console.log(e.target.error);
				reject(e.target.error.name);
			};


		});
	}


	static _createStores(connection) {
		
		stores.forEach(store => {

			if(connection.objectStoreNames.contains(store)) 
				connection.deleteObjectStore(store);


			connection.createObjectStore(store, {autoIncrement: true});
		});
	}


	static closeConnection() {
		if(connection) {
			close(); // Essa variável armazenou o método close() original da connection antes de realizarmos o Monkey Patching
			connection = null;
		}
	}

}
	