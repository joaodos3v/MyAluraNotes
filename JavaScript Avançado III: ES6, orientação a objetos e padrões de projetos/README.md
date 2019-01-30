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

### Atividade 04 - Quero gravar em uma Object Store, mas onde está a transação?
- Para interagir com um *Object Store*, precisamos adquirir uma [`transaction`](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/transaction).
	- Para utilizar esse método, devemos passar como **1º parâmetro** um `array` com o nome do *Object Store* que queremos obter. Já como **2º parâmetro**, devemos enviar o **modo de operação que desejamos** para aquele *Object Store*. Os modos de operação disponíveis são:
		- `readonly`
		- `readwrite`
		- `readwriteflush`
	- Feito isso, através da `transaction` retornada, podemos utilizar o método `objectStore()` e dizer qual é o *Object Store* que queremos interagir (um tanto quanto redundante, mas aqui só seguimos as regras, meu caro watson!).
	- Por fim, caso o objetivo seja inserir um novo registro no *Object Store*, podemos utilizar o método `add()` que está disponível na variável que armazenou o retorno do método `objectStore()`.
		- O método `add()`, por sua vez, retorna uma **requisição** que nos permite adicionar esse registro (pois a operação pode ter sido executada com sucesso ou não). Em virtude dessa possibilidade, essa **requisição** de retorno possui dois atributos: `onsuccess` e `onerror`.
			- Vale lembrar que **sempre** que deseja-se inserir um registro em um *Object Store*, esse registro deve estar acompanhado de um `id` ou **ser único** dentro daquele *Object Store*.

### Atividade 05 - Só acredito vendo: listando objetos de uma store 
- Para listar os registros de um *Object Store*, devemos abrir um `cursor`. [Veja mais](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/openCursor).
	- Assim como o método `add()` de uma *store*, o `cursor` também possui os atributos `onsuccess` e `onerror`.






## Aula 02 - Gerenciando nossa conexão com o pattern Factory

### Atividade 04 - O padrão de projeto Module Pattern
- De uma forma bem abstrata e "grosseira", esse padrão de projeto transforma trechos de códigos em **módulos**. Esses módulos podem ser entendidos como uma unidade de código *confinada*, onde tudo que estiver armazenado nessa unidade não pode ser acessado "por ninguém" (de local nenhum na aplicação).
	- Leia mais sobre o assunto em:
		- [Link 1](https://nandovieira.com.br/design-patterns-no-javascript-module)
		- [Link 2](https://coryrylan.com/blog/javascript-module-pattern-basics)
- **Função anônima** é uma função sem nome.
	- Esse tipo de função também possui outro adjetivo (mas que não quer dizer a mesma coisa): **função auto invocada**. Isso porque, uma função anônima será "chamada" por ela própria.

### Atividade 05 - Monkey Patch: grandes poderes trazem grandes responsabilidades
- De forma breve, *Monkey Patching* é uma forma de forçar uma API, Classe, método ou atributo a agir de uma forma diferente à qual ele está "acostumado". Em outras palavras, é uma forma de **sobrescrever o comportamento de um recurso da linguagem**.
	- Leia mais sobre o assunto em:
		- [Link 1](https://www.audero.it/blog/2016/12/05/monkey-patching-javascript/)
		- [Link 2](http://me.dt.in.th/page/JavaScript-override/)
- Nessa atividade também aprendemos que o *ES2015+* nos permite usar a palavra reservada [**const**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const). Como o próprio nome já indica - além de ser familiar com outras linguagens de programação -, essa palavra reservada é utilizada para definir **constantes** em nosso código.
	- Como "recordar é viver (by: Flávio Almeida)", uma **constante não pode ter seu valor inicial reatribuído/substiuído**.