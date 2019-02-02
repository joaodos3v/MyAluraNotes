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

### Atividade 12 - Para saber mais: variáveis declaradas com const são realmente imutáveis?
- Vale ressaltar que a palavra `const` não garante a imutabilidade de uma variável, apenas garante que essa variável não poderá sofrer uma **nova atribuição de valor**. No entanto, vejamos uma situação em que pode acontecer algo inesperado:
	- Exemplo funcional:
		```javascript
		const hoje = new Date();
		hoje = new Date();  // dá erro, pois é uma nova atribuição de valor!
		```
	- Exemplo inesperado:
		```javascript
		const hoje = new Date();
		hoje.setDate(5);
		console.log(hoje.getDate()) ; // alterou o dia para 5, pois não estamos atribuindo um novo valor a variável usando o operador =, mas estamos alterando as propriedades do objeto Date por meio de seus métodos!
		```
		- **Cuidado com isso!**

### Atividade 13 - Para saber mais: limite de espaço
- **`OBSERVAÇÃO`**: Cada browser define um limite de tamanho para os dados armazenados no IndexedDB sem que seja necessário autorização do usuário. Se esse limite for excedido, uma caixa de diálogo pedirá a confirmação do usuário. Caso ele negue, o evento `onerror` será executado. O cálculo do limite disponível muitas vezes é calculado dinamicamente e varia de browser para browser, como está escrito na documentação:
	- *"The process by which the browser works out how much space to allocate to web data storage and what to delete when that limit is reached is not simple, and differs between browsers."* ([Fonte](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)) 







## Aula 03 - Padronizando acesso aos dados com o pattern DAO

### Atividade 01 - O padrão de projeto DAO
- **`DAO`:** Data Access Object
	- Esse padrão de projeto visa abstrair/facilitar os detalhes de interação com um banco de dados.
- A primeira **convenção** desse modelo que devemos saber é que quando estamos fazendo uma *persistência* do modelo `Modelo`, deve-se criar uma classe chamada **`ModeloDAO`**.

### Atividade 04 - Removendo todas as negociações
- Para **remover** todos os registros de um *Object Store*, pode-se realizar o mesmo procedimento executado para listar os registros (abrir uma conexão - capturar uma transação - selecionar um objectStore - obter um cursor). No entanto, ao invés de utilizar o método `openCursor()` para obter um cursor, devemos utilizar o método `clear()`.

### Atividade 05 - O padrão DAO
- Em um breve resumo, **quais as vantagens de se usar classes com o padrão DAO**?
	- A vantagem está relacionada com a capacidade de isolar todo o código que acessa seu repositório de dados em **um'único lugar**. Assim, toda vez que algum desenvolvedor precisar realizar operações de persistência, ele verá que existe um único local para isso, seus *DAO's*.
	- Em um nível um pouco mais técnico, o DAO faz parte da *camada de persistência*, funcionando como uma "fachada" para a API do *IndexedDB* (nesse caso). Com isso, obtemos a vantagem da **abstração**, pois para utilizar o DAO, um desenvolvedor não obrigatoriamente precisa saber os detalhes do `store` ou do `cursor`.

### Atividade 09 - Para saber mais: IndexedDB e transações
- Esse tópico foi criado apenas para salientar que o IndexDB trabalha um pouco diferente dos bancos de dados tradicionais:
	- **Transações *auto commited*:** quando uma operação que obtém uma transação é realizada com sucesso (evento `onsuccess` é chamado), essa **transação é fechada automaticamente**.  
		- É por causa disso que todas as interações com o banco solicitam uma nova transação.
	- **Operações são canceladas com o método `abort`:** para realizar algo semelhante ao `rollback` dos bancos de dados relacionais, podemos invocar o método `abort()`. Veja o exemplo:
		```javascript
		ConnectionFactory.
		    .getConnection()
		    .then(connection => {
		            let transaction = connection.transaction(['negociacoes'], 'readwrite');
		            let store = transaction.objectStore('negociacoes');

		            let negociacao = new Negociacao(new Date(), 1, 200);
		            let request = store.add(negociacao);

		            // #### VAI CANCELAR A TRANSAÇÃO. O evento onerror será chamado.
		            transaction.abort(); 

		            request.onsuccess = e => {
		                console.log('Negociação incluida com sucesso');
		            };

		            request.onerror = e => {
		                console.log('Não foi possível incluir a negociação');
		            };
		    });
		```
		    - Esse código exibirá a seguinte mensagem de erro: `DOMException: The transaction was aborted, so the request cannot be fulfilled.`
		- Porém, para que não seja necessário tratar uma operação **abortada** de uma operação com **erro de execução**, sendo que elas são coisas diferentes, podemos tratar erros de uma operação **abortada** utilizando o método `onabort` da transação.
			```javascript
			ConnectionFactory.
			    .getConnection()
			    .then(connection => {
			        let transaction = connection.transaction(['negociacoes'], 'readwrite');
		            let store = transaction.objectStore('negociacoes');

		            let negociacao = new Negociacao(new Date(), 1, 200);
		            let request = store.add(negociacao);

		            // #### VAI CANCELAR A TRANSAÇÃO. O evento onabort será chamado.
		            transaction.abort(); 

		            transaction.onabort = e => {
		                console.log(e);
		                console.log('Transação abortada');
		            };

		            request.onsuccess = e => {
		                console.log('Negociação incluida com sucesso');
		            };

		            request.onerror = e => {
		                console.log('Não foi possível incluir a negociação');
		            };

			    });
			```


### Atividade 10 - Para saber mais: bibliotecas que encapsulam o IndexedDB
- Caso você não queira ter o trabalho de implementar padrões de projeto e tratar o IndexedDB da sua forma, **obviamente** alguém deixou algo pronto para facilitar nossa vida. Portanto, algumas sugestões de uso são:
	- [Dexie.js](https://dexie.org/)
	- [db.js](http://aaronpowell.github.io/db.js/)









## Aula 04 - Lapidando um pouco mais nossa aplicação

### Atividade 01 - Ops! Não podemos importar negociações duplicadas.
- Como já sabemos, todo *array* em JavaScript possui o método [`filter`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro).
	- O método `filter` permite que o desenvolvedor insira uma "peneira" no seu código, ou seja, uma condicional que dirá se o elemento que está sendo verificado naquele momento se enquadra (ou não) no filtro estabelecido. Ao final de suas operações, esse método retorna um **novo** *array* com todos os elementos que passaram no teste/condição.

### Atividade 02 - Comparação entre objetos
- **CURIOSIDADE:** o JavaScript possui algumas peculiaridades quando o assunto é **comparação**.
	- Por exemplo: quando estamos comparando variáveis com `tipos literais` (para quem programa em Java, por exemplo, leia-se `tipos primitivos`) como **`string`, `number` e `boolean`**, ao usar `==`, o JavaScript compara se os valores armazenados nessas variáveis são iguais.
	- No entanto, em qualquer outra comparação, como em um tipo `new Date()`, por exemplo - assim como em outras linguagens -, o JavaScript compara se essas variáveis apontam para o mesmo objeto, em memória.
	- Execute os exemplos abaixo caso queira visualizar essa situação:
		```javascript
			// Caso 1: true
			var nome1 = 'João';
			var nome2 = 'João';
			nome1 == nome2

			// Caso 2: true
			var x = 10;
			var y = 10;
			x == y

			// Caso 3: false
			var hoje = new Date('2019-00-31');
			var today = new Date('2019-00-31');
			hoje == today
		```
		- **`MACETE`:** para que seja possível comparar dois objetos em JavaScript de modo que não seja necessário comparar seus atributos, podemos utilizar o já conhecido `JSON.stringify` (lembre que **tipos literais** têm seus **valores** comparados, não sua **referência**). Veja:
			```javascript
			// Caso 3: agora é true!
			var hoje = new Date('2019-00-31');
			var today = new Date('2019-00-31');
			JSON.stringify(hoje) == JSON.stringify(today)
			```

### Atividade 03 - Usando o método some
- Um método existente desde o *ES5* - mas não tão usado - que, quando utilizado em conjunto com o método `filter`, por exemplo, pode retornar bons frutos, é o [`some()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some).
	- Sua execução é muito semelhanta ao `filter`.
	- Ao ser invocado, o `some` irá percorrer todos elementos do *array*, comparando cada um desses elementos com uma "condição de busca" estipulada pelo desenvolvedor.
	- Se em algum momento - qualquer momento - o `same` encontrar o valor procurado, o retorno de sua execução será `true` e ele, instantaneamente, irá encerrar seu *laço interno* de repetição.
		- No entanto, se, após ter percorrido todo *array*, ele não encontrar o valor buscado, o retorno de sua execução será um `false`.

### Atividade 04 - Importando negociações automaticamente
- **`BOA PRÁTICA`:** no `constructor` deve-se definir apenas os **atributos** da sua classe. Não é interessante que lógica, regras de negócios ou validações estejam escritas nesta etapa do código.
	- Caso precise executar algumas tarefas logo no início da aplicação, crie um método *privado* `_init()`, por exemplo, e chame-o no fim do `constructor`.

### Atividade 08 - Comparação entre objetos
- Existem tipos primitivos em JavaScript chamado de literais que podem ser acessados como objetos quanto invocamos algum método. O encapsulamento de um primitivo por um objeto automaticamente pelo interpretador é chamado de `autoboxing`.
	- Por mais que tenhamos um objeto representando um número, a comparação será pelo valor literal (primitivo) e não pela referência. Números são encapsulados pela função construtora `Number`.

### Atividade 11 - Experimento com promise
- *Promise aninhada* **vs.** *Promise.all()*
	- `Promise.all` resolve as promises **em paralelo**, ou seja, uma promise **não aguarda a outra terminar** para ser executada. `Promise.all` é interessante quando uma promise não depende do resultado da promise anterior. 
	- Nos casos onde há dependência, o encadeamento de promises é o caminho mais indicado.










## Aula 05 - Simplificando requisições Ajax com a Fetch API

### Atividade 01 - xmlHttpRequest: será que existe algo de mais alto nível?
- Para facilitar ainda mais a vida dos desenvolvedores - já que ela é tão complicada .-. -, no *ES2016* foi disponibilizada uma *API* que simplifica a chamada de requisições *Ajax*: a [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API).
	- Veja [aqui](https://braziljs.org/blog/fetch-api-e-o-javascript/) um blog escrito pelo [Felipe N. Moura](https://braziljs.org/blog/author/felipe-n-moura/) - um dos mitos fundadores do [BrazilJS](https://braziljs.org/) - sobre o assunto.
	- Para usar esse recurso, existe no *escopo global* a chamada para `fetch(urlAqui)`, que trabalha no padrão `Promise`.
		- Vale lembrar aqui que a resposta desse método é **bruta** (não é um *json*, não é um texto, não é um *number*). Em virtude disso, a própria resposta possui métodos disponíveis para converter esse retorno no formato desejado. Tudo isso é possível porque essa resposta é um objeto [*Response*](https://developer.mozilla.org/pt-BR/docs/Web/API/Response) (veja a documentação para encontrar os métodos e propriedades disponíveis para esse objeto).
	- Uma das poucas **desvantagens** desse recurso é que, em razão do tratamento de *status* ter sido abstraído pelo *API* e não ser mais uma responsabilidade do desenvolvedor, **não podemos mais cancelar uma requisição *AJAX* durante sua execução**.
	- Para **tratar um erro** com a *Fetch API* é muito simples. O objeto *Response*, como citado anteriormente, possui vários atributos e, para nossa sorte, um deles é o `ok`. Esse atributo sempre terá como valor `true` ou `false`.
		- Se o *status* da resposta recebida do *backend* vai de **200 até 299**, essa requisição teve um retorno correto e o valor de `ok` será `true`. Caso contrário, o valor será `false`.
			- Para capturar a mensagem do erro, caso ele ocorra, use *retorno.`statusText`*.
