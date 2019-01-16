class View {

	constructor(elemento) {
		this._elemento = elemento;
	}


	update(model) {
		this._elemento.innerHTML = this._template(model);
	}

}