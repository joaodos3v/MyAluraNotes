class NegociacaoService {

	obterNegociacoesDaSemana() {

		return new Promise((resolve, reject) => {

			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'negociacoes/semana');

			xhr.onreadystatechange = () => {
			
				if(xhr.readyState == 4) {
					if(xhr.status == 200) {

						console.log('Obtendo as negociações do servidor...');
						resolve(JSON.parse(xhr.responseText).map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
					} else {

						console.log(xhr.responseText);
						reject('Não foi posível obter as negociações!');
					}
				}
			};

			xhr.send();
		});
	}


	obterNegociacoesDaSemanaAnterior() {

		return new Promise((resolve, reject) => {

			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'negociacoes/anterior');

			xhr.onreadystatechange = () => {
				if(xhr.readyState == 4) {
					if(xhr.status == 200) {

						console.log('Obtendo as negociações do servidor...');
						resolve(JSON.parse(xhr.responseText).map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
					} else {
						
						console.log(xhr.responseText);
						reject('Não foi posível obter as negociações da semana anterior!');
					}
				}
			};

			xhr.send();
		});
	}


	obterNegociacoesDaSemanaRetrasada() {

		return new Promise((resolve, reject) => {

			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'negociacoes/retrasada');

			xhr.onreadystatechange = () => {
				if(xhr.readyState == 4) {
					if(xhr.status == 200) {

						console.log('Obtendo as negociações do servidor...');
						resolve(JSON.parse(xhr.responseText).map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
					} else {

						console.log(xhr.responseText);
						reject('Não foi posível obter as negociações da semana retrasada!');
					}
				}
			};

			xhr.send();
		});
	}





}