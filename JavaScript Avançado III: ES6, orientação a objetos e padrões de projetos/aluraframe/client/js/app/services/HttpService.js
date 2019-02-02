class HttpService {

	_handleErrors(res) {
		if(!res.ok) throw new Error(res.statusText);
		return res;
	}


	get(url) {

		return fetch(url)
			.then(res => this._handleErrors(res)) // testa se está tudo ok com a resposta ou se devemos lançar algum erro
			.then(res => res.json());
	}


	post(url, dado) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText));
                    } else {

                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(dado)); // usando JSON.stringifly para converter objeto em uma string no formato JSON.
        });

    }

}