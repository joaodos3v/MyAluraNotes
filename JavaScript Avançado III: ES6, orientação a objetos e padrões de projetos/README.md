# JavaScript Avançado III: ES6, orientação a objetos e padrões de projetos



## Aula 01 -  Guardando negociações offline com IndexedDB

### Atividade 02 - Browser possui banco de dados? Conheça o IndexedDB!
- A aplicação desenvolvida até o momento **não persiste** as informações cadastradas. Ou seja, sempre que o *browser* for recarregado/fechado, perderemos todas nossas informações.
	- Porém, não é isso que queremos! Portanto, vamos conhecer nessa aula o [IndexedDB](https://developer.mozilla.org/pt-BR/docs/IndexedDB).
- Para começar a trabalhar com o *IndexedDB*, não abre-se uma conexão e sim realiza-se uma **requisição de abertura**.
	`var openRequest = window.indexedDB.open('aluraframe', 1);`
	- O método `open()` recebe 2 parâmetros:
		- O 1º é o **nome do banco** que queremos abrir;
		- E o 2º é um número .
	- Toda vez que uma requisição de abertura é executada, várias coisas podem acontecer, cenário esse conhecido como **tríade de eventos**. Essa tríade é composta por:
		- [`onupgradeneeded`](https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/onupgradeneeded)
			- *Cria ou altera um banco já existente*
		- [`onsuccess`](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onsuccess)
			- *Conexão obtida com sucesso*
		- [`onerror`](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onerror)