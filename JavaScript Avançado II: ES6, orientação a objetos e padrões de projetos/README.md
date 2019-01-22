# JavaScript Avançado II: ES6, orientação a objetos e padrões de projetos



## Aula 01 - Você lembrou de atualizar a view? Nem eu!

### Atividade 02 - E se atualizarmos a view quando o modelo for alterado?
- Toda função em *JavaScript* possui **escopo dinâmico**, ou seja, seu contexto varia de acordo com o local e a "situação" em que a função foi chamada.
	- Obviamente, isso acaba impactando no valor que o `this`, naquele momento e naquele local, possui.

### Atividade 03 - API Reflection e as facetas de this
- [Reflect](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

### Atividade 04 - Arrow function e seu escopo léxico
- Uma *arrow function* não é **apenas** uma maneira mais sucinta de se escrever uma *função* em *JavaScript*, ela também possui uma característica muito peculiar:
	- O escopo do `this` de uma *arrow function* é **léxico**, ou seja, ele não é dinâmico igual o escopo de uma `function`; ele não muda de acordo com o contexto em que está sendo executado!

### Atividade 05 - Resumindo
- Por vezes, é interessante tirar a responsabilidade de lembrar que um método deve ser chamado sempre que certo cenário se repetir das mãos do programador.
	- *Por exemplo:* nesse projeto, toda vez que atualizamos o modelo da lista de negociações, precisávamos nos lembrar de chamar o método `update` da *view* para que a "tela" fosse atualizada;
		- Toda vez que esse cenário de atualização do modelo se repetisse, seria necessário lembrar de chamar o método `update`. Então, por que não deixar um "*trigger*" no método da atualização do modelo?
		- Pois, se pararmos para pensar, toda vez que o modelo for atualizado, será necessário atualizar a *view*. O que fizemos foi deixar esse trabalho automático.

### Atividade 08 - Revisando arrow function e seu escopo léxico
- Diferente de uma função, que possui um `this` dinâmico, uma *arrow function* possui um `this` estático, ou seja, que nunca muda e que é determinado no momento em que é declarado! Com isso, sempre que se declara uma *arrow function*, ela vai considerar o `this` do local onde é declarada. 
	- **Resumindo:**
		- O `this` de uma função é dinâmico, isto é, seu valor é determinado no momento em que a função é chamada. Como o `this` é dinâmico, é possível usar artifícios da linguagem, como a API `Reflect`, para alterá-lo se assim desejarmos.
		- O `this` de uma *arrow function* é léxico, isto é, seu valor é determinado no local onde a *arrow function* for definida, ela não cria um novo `this`. O `this` de uma *arrow function* não pode ser alterado, mesmo se usarmos recursos da linguagem, como a API Reflect.

### Atividade 09 - Contexto das arrows functions
- **Solução:**
	```javascript
	class Relogio {

	    constructor() {
	        this._segundos = 0;

	        setInterval(() => console.log(++this._segundos), 1000);
	    }
	}

	var relogio = new Relogio();
	```


### Atividade 12 - Revisando Reflect.apply
- Como `Reflect.apply` funciona?
	- O **primeiro parâmetro** é o método ou função que desejamos invocar.
	- O **segundo parâmetro** é o contexto que o método ou função adotará, ou seja, o valor que será assumido pelo `this`.
	- Por fim, o último parâmetro é um *array* que contém todos os parâmetros que o método passado como primeiro parâmetro receberá.

### Atividade 13 - Reutilização de código com Composição e Mixin
- Uma maneira de solucionar problemas onde dois objetos necessitam dos mesmos métodos, porém utilizar **herença** seria incorreto (ex: *avião* e *passarinho* podem `voar`, mas um passarinho não `ligaMotor`), é usar **composição**.
### Atividade 13 - Reutilização de código com Composição e Mixin
	- Na **composição**, a classe que deseja usar o método de outra possui uma instância dessa classe.
	- Por mais que a instância tenha vários métodos, só chamamos aqueles que nos interessa.
- Outra opção é utilizar o **mixin**:
	- Com **mixin** podemos "pegar emprestado" o método de outra classe sem termos que ter uma instância dessa classe, como é o caso de composição.	
	- Um detalhe: foi necessário fazer `Aviao.prototype.voa` porque métodos criados usando *ES6* são adicionados no **prototype**. Qualquer método adicionado em **prototype** estará disponível para todas as instâncias.

### Atividade 15 - O padrão de projeto Observer
- Utiliza-se o padrão de projeto **Observer** sempre que é necessário notificar partes do sistema interessadas quando um evento importante for disparado em outro local do sistema.






## Aula 02 - Existe modelo mentiroso? O padrão de projeto Proxy!

### Atividade 02 - O padrão de projeto Proxy
- Em um resumo para introduzir essa aula, o *ES6* possui um recurso que permite a criação de padrão de projeto.
	- Basicamente, o que acontece é que o **proxy** vai englobar o objeto real e, ao invés dos métodos automáticos disparados quando um evento é executado (armadilhas, vide: [Explicação 1, ](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy) [Explicação 2 e ](https://ponyfoo.com/articles/es6-proxy-traps-in-depth) [Explicação 3](https://medium.com/@oieduardorabelo/javascript-entendendo-es6-proxies-6ed5f8f4d0b6)) ficarem dentro da própria classe, prejudicando sua reutilização, eles ficarão no proxy.
	- Com isso, eles podem ser executados entre a chamada do desenvolvedor para o *proxy* e do *proxy* para o *objeto*.

### Atividade 04 - Construindo armadilhas de leitura
- No primeiro exemplo, estamos interceptando uma operação de **leitura** para colocar uma armadilha ([*trap*](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy)), ou seja, toda vez que qualquer propriedade do objeto for lida, nossa armadilha será executada/disparada.
	```javascript
	get: function(target, prop, receiver) {
		// funcionalidade da armadilha vai aqui
	}
	```
	- Note que a função de interceptação receve **três parâmetros**:
		- ***target*:** uma referência ao objeto original que está sendo encapsulado pelo `proxy`
		- ***prop*:** a propriedade que está sendo acessada
		- ***receiver*:** uma referência ao próprio `proxy`

### Atividade 05 - Construindo armadilhas de escrita
- As armadilhas de escritam possuem a mesma lógica/metodologia que as armadilhas de leitura, com a exceção de que a palavra reservada para dispará-las é `set` e que elas devem receber um parâmetro a mais, que é o `value`
	- Vale lembrar que essa *trap* é chamada toda vez que uma propriedade do objeto tem um valor definido (ou redefinido)

### Atividade 08 - Construindo armadilhas para métodos
- Bom, tudo certo, tudo funcionando, mas agora queremos interceptar a chamada para um método de um objeto. Porém, temos um problema: no *ES6*, **não existe uma função nativa que intercepte a chamada de métodos** (apenas leituras e atribuções - aka *getters* e *setters*).
	- Com isso, temos duas possibilidades de soluções: ou forçamos que os métodos que desejamos interceptar, de alguma forma, façam uma nova atribuição em uma propriedade do objeto (possível gargalo de desempenho) ou implementamos uma solução customizada e um tanto quanto complexa, mas otimizada e funcional.
		- Obviamente que não queremos que nosso sistema fique lento e, por isso, o mais indicado é a **segunda opção**.
		- Essa solução parte de um **princípio nativo do *JavaScript*:** `todo método/função em JavaScript, internamente, sempre realiza um getter e depois um apply`
			- Opa, mas então temos um caminho a seguir, pois um **getter** a gente já sabe como interceptar!
		- É isso mesmo e, portanto, nossa solução começa utilizando a palavra reservada `get`
		- Porém, precisamos saber se o evento que invocou essa chamada `get` realmente é um método (pois vale lembrar que qualquer leitura em uma propriedade do objeto que possui esse `proxy` irá cair nesse **mesmo trecho de código**)
			- Pensando nisso, podemos definir um *array* com os nomes dos métodos que desejamos interceptar (literal mesmo, ou seja, se o método se chama `teste123`, o valor desse *array* será *teste123*)
			- Aliado a isso, podemos usar o [includes()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/contains), que determina se um *array* contém ou não determinado elemento
			- E, para garantir que não teremos problemas ao confundir essa chave com o nome de uma propriedade do objeto (se, por exemplo, esse objeto tivesse uma propriedade chamada `teste123`), devemos verificar se o evento que disparou esse **handler** foi um método
				- Para isso, faremos uso do operador [typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof), que retorna uma *string* indicando o tipo de um operando
				- Nossa condição é que somente o tipo de operando **function** seja filtrado.
			- Por fim, essa **condicional** ficaria semelhante ao código que segue:
				```javascript
				if(['teste123', 'metodo2', 'metodo3'].includes(prop)  &&  typeof(target[prop]) == typeof(Function) ) {
					// o evento que disparou é o handler é um método e, além disso, é um dos métodos esperados no array (ou teste123, ou metodo2, ou metodo3)
				}
				```
			- Agora que confirmamos que realmente foi um método que invocou esse *handler*, podemos escrever o código que consideramos necessário ser executado. 
				- No entanto, para que possamos executar nossa solução, dentro dessa condicional precisamos retornar uma **nova função**.
					- Aqui entra um detalhe bem importante: **essa função retornada deve ser uma `function` para que o `this` seja dinâmico!** Lembrando que uma *arrow function* tem o contexto **léxico** e, por isso, nesse caso, não seria de grande ajuda.
				- Dentro dessa `function`, podemos colocar o código que quisermos que seja executado quando esse **handler** for ativado. Depois que nosso código customizado for executado, devemos lembrar de adicionar a linha `return Reflect.apply(target[prop], target, arguments)` para que esse método invocado siga seu **fluxo normal de execução**.
					- O parâmetro ***arguments* é um *array* implícito do JavaScript que permite que todos os parâmetros passados para a função sejam acessados.**
		- Para completar, lembrando que qualquer leitura em uma propriedade do objeto também vai cair no mesmo trecho de código, precisamos possuir um `return` global que permita que uma leitura **finalize** seu fluxo de execução.
			- Para que isso seja possível, como em um `get` simples, a linha `return Reflect.get(target, prop, receiver)` deve ser adicionada no fim do método.
		- O código final fica parecido com:
			```javascript
			<script>
			let lista = new Proxy(new ListaNegociacoes(), {
				get(target, prop, receiver) {
					if(['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)) {

					    return function() {

					      console.log(`a propriedade "${prop}" foi interceptada`);
					      Reflect.apply(target[prop], target, arguments);
					    }

					}
					
					return Reflect.get(target, prop, receiver);
				}
			});
			</script>
			```


### Atividade 13 - O Primeiro proxy a gente nunca esquece
- **Problema:** Temos o seguinte objeto literal (aquele criado com chaves): `let funcionario = {email: 'abc@abc.com'};` . Crie um proxy para este objeto, exibindo no console a mensagem `"Armadilha aqui"`, toda vez que a propriedade `email` for lida.
- **Solução:**
	```javascript
	let funcionario = {email: 'abc@abc.com'};

	// Solução
	let funcionarioProxy = new Proxy(funcionario, {
		get(target, prop, receiver) {
			console.log("Armadilha aqui");
			return Reflect.get(target, prop, receiver);
	    }
	});

	console.log(funcionarioProxy.email);
	```


### Atividade 14 - Proxy modificando retorno de método
- **Problema:** Temos mais uma vez o seguinte objeto literal: `let funcionario = {email: 'abc@abc.com'};` . Desta vez, imprima a mensagem `"Armadilha aqui!"`, além disso, modifique o retorno do *getter*, fazendo-o retornar o `email`, começando e terminando com dois asteriscos.
- **Solução:**
	```javascript
	let funcionario = {email: 'abc@abc.com'};

	// Solução
	let funcionarioProxy = new Proxy(funcionario, {
		get(target, prop, receiver) {
			console.log('Armadilha aqui!');
			return `**${Reflect.get(target, prop, receiver)}**`;
		}
	});

	console.log(funcionarioProxy.email);
	```


### Atividade 15 - Proxy e peculiaridade com getters
- **Solução:**
	```javascript
	class Funcionario {

	    constructor(email) {
	        this._email = email;
	    }

	    get email() {
	        return this._email;
	    }

	    set email(email) {
	        this._email = email;
	    }
	}

	// Solução
	let funcionario = new Proxy(new Funcionario('abc@abc.com'), {
		get(target, prop, receiver) {
			console.log("Armadilha aqui!");
			console.log(prop); // Para deixar mais claro o porquê do console.log aparecer 2x
			return Reflect.get(target, prop, receiver);
		}
	});

	console.log(funcionario.email);
	```


### Atividade 16 - Mais um proxy, agora para lidar escrita!
- **Problema:** `let funcionario = {email: 'abc@abc.com'};`   
	Crie um proxy que exibe no console o valor da propriedade antes dela ser alterada e o valor novo.
- **Solução:**
	```javascript
	let funcionario = {email: 'abc@abc.com'};

	// Solução
	let funcionarioProxy = new Proxy(funcionario, {
		set(target, prop, value, receiver) {
			console.log(`Valor antigo: ${target[prop]} |  Valor novo: ${value} `);
			return Reflect.set(target, prop, value, receiver);
		}
	});

	funcionarioProxy.email = 'novo@abc.com';
	```


### Atividade 17 - Um esclarecimento extra é sempre bom!
- **Curiosidade:** armadilhas serão disparadas mesmo se tentarmos modificar uma propriedade congelada de um objeto, ainda que ele não seja modificado.

### Atividade 18 - Proxy e peculiaridade com setters
- **Problema:** Crie um proxy que exiba no console o valor da propriedade antes de ela ser alterada e o valor novo. Inclusive, exiba também o nome da propriedade que está sendo modificada.
- **Solução:**
	```javascript
	class Funcionario {

	    constructor(email) {
	        this._email = email;
	    }

	    get email() {
	        return this._email;
	    }

	    set email(email) {
	        this._email = email;
	    }
	}

	// Solução
	let funcionarioProxy = new Proxy(new Funcionario('abc@abc.com'), {
		set(target, prop, value, receiver) {
			console.log(`Valor da prop antes de alterar: ${target[prop]}  |  Novo valor: ${value}`);
			console.log(`Propriedade: ${prop}`); // imprimindo a propriedade que está sendo alterada
			return Reflect.set(target, prop, value, receiver);
		}
	});

	funcionarioProxy.email = 'novo@abc.com';
	```


### Atividade 19 - Arguments
- O exemplo mais comum que conhecemos para passar parâmetros para funcões e métodos em JavaScript é parecido com o exemplo abaixo:
	```javascript
	function exibeNomeCompleto(nome, sobrenome) {
	  alert(`${nome} ${sobrenome}`);
	}

	exibeNomeCompleto('João', 'Vieira');
	```
	- Contudo, podemos conseguir o mesmo resultado sem passar parâmetros para a função:
	```javascript
	function exibeNomeCompleto() {
	  alert(`${arguments[0]} ${arguments[1]}`);
	}

	exibeNomeCompleto('João', 'Vieira');
	```
	- Por mais que nossa função não receba parâmetros, podemos ter acesso aos parâmetros passados com **`arguments`**.
		- É uma variável implícita que nos dá acesso a todos os parâmetros passados para a função ou método. É claro que a primeira forma, nomear os parâmetros da função, é menos verbosa e mais legível. Mas há muitos hacks em JavaScript que podem fazer uso de **`arguments`**.






## Aula 03 - E se alguém criasse nossos proxies? O Padrão de Projeto Factory

### Atividade 01 - Padrão de Projeto Factory
- *Factory*, de maneira grotesca, consiste em uma classe especializada que é construída para criar determinado tipo de objeto.

### Atividade 03 - Isolando a complexidade de associar o modelo com a view na classe Bind
- ***Data Binding*** => Data (dado) / Binding (associação)
- Associação entre o modelo (*model*) e a visão (*view*) - ou seja, toda vez que o modelo mudar, dispara-se uma atualização da *view* - é chamada de **data binding unidirecional**.
- **Curiosidade:** uma das grandes "sacadas" do JavaScript é que um `constructor` pode devolver qualquer "coisa", não só uma instância da própria classe.

### Atividade 04 - Parâmetros REST
- Outra nova *feature* do ES2015+ é o [*REST Operator*](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters), que permite que **n parâmetros** sejam enviados para um método sem a necessidade de, **explicitamente**, o desenvolvedor enviar um *array* neste parâmetro.
	- Obviamente que essa *feature* exige que esse `parâmetro dinâmico` seja enviado por último (em um método com mais de um argumento). Isso porque, caso ele seja enviado por primeiro, o método vai "entender" que todos os demais parâmetros fazem parte de *um único array*.
	- **Ex.:**
		```javascript
		exemplo(parametro1, parametro2, ...nParametros) {
			// nParametros é um array contendo Veronese e Vieira => ['Veronese', 'Vieira']
		}

		exemplo( 
			'João',
			'Vitor',
			'Veronese', 'Vieira'
		);
		```