var stores = ['negociacoes'];
var version = 3;
var dbName = 'aluraframe';

class ConnectionFactory {

	constructor() {
		throw new Error('Essa classe não pode ser instanciada (ConnectionFactory)!');
	}


	static getConnection() {
		
		return new Promise((resolve, reject) => {

			let openRequest = window.indexedDB.open(dbName, version);

			openRequest.onupgradeneeded = e => {


			};


			openRequest.onsuccess = e => {

			};


			openRequest.onerror = e => {

			};


		});
	}

}