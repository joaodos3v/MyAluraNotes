export class Mensagem {

    // DEIXOU DE RECEBER O PARÂMETRO OPCIONAL (antes era texto='')
	constructor(texto) {
		/*
			Essas feature do parâmetro opcional só é compatível com versões do Edge 14+
			Por isso, caso fosse necessário uma compatibilidade com navegadores mais antigos, poderíamos utilizar uma maneira antiga de tratar esse tipo de situação
		*/

		this._texto = texto || ''; // se texto for undefined, vai passar ''
	}


	get texto() {
		return this._texto;
	}


	set texto(texto) {
		this._texto = texto;
	}

}