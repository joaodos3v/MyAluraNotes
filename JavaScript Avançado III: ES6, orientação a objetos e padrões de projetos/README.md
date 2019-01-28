# JavaScript Avançado III: ES6, orientação a objetos e padrões de projetos



## Aula 01 -  Guardando negociações offline com IndexedDB

### Atividade 02 - Browser possui banco de dados? Conheça o IndexedDB!
- A aplicação desenvolvida até o momento **não persiste** as informações cadastradas. Ou seja, sempre que o *browser* for recarregado/fechado, perderemos todas nossas informações.
	- Porém, não é isso que queremos! Portanto, vamos conhecer nessa aula o [IndexedDB](https://developer.mozilla.org/pt-BR/docs/IndexedDB).
- Para começar a trabalhar com o *IndexedDB*, não abre-se uma conexão e sim realiza-se uma **requisição de abertura**.
	`var openRequest = window.indexedDB.open('aluraframe', 1);`
	- O método `open()` recebe 2 parâmetros:
		- O 1º é o **nome do banco** que queremos abrir;
		- E o 2º é um número que indica a versão do banco (deve ser incrementado toda vez que for necessário criar/atualizar alguma *Object Store*).
	- Toda vez que uma requisição de abertura é executada, várias coisas podem acontecer, cenário esse conhecido como **tríade de eventos**. Essa tríade é composta por:
		- [`onupgradeneeded`](https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/onupgradeneeded)
			- *Cria ou altera um banco já existente*
		- [`onsuccess`](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onsuccess)
			- *Conexão obtida com sucesso*
		- [`onerror`](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onerror)

### Atividade 03 - Comunicando-se com o banco usando o IDBDatabase
- Para que possamos interagir com o banco, no *IndexedDB* usa-se os [*Object Store*](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API#gloss_object_store), que possuem um papel semelhante às **tabelas** dos banco de dados relacionais.
	- No entanto, não é correto chamar essa estrutura de "tabela" pois os *object store* **não possuem *schema***. Ou seja, diferentemente das colunas de DB's relacionais que só aceitam tipos `string`, `int`, `boolean`, no *IndexedDB* podemos armazenar qualquer valor, desde que seja um **objeto válido do JavaScript**.