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


### Atividade 08 - Fábricas na API JavaScript
- O padrão de projeto *Factory* é tão vantajoso que é utilizado em várias classes da própria *API JavaScript*, como nas classes **String** e **Array**. Veja:
	- Por exemplo, a classe `String` possui um método (ou *factory method*) para transformar vários `CharCode` em uma string:       
		`let abc = String.fromCharCode(65, 66, 67);  // "ABC"`
	- Outro exemplo é a classe `Array`, que pode receber uma string ou um iterável, como lista ou mapas, para criar um array::       
		```javascript
		let d = Array.from("abc");
		["a", "b", "c"]
		```
	- Ou seja, um *factory method* nem sempre precisa estar dentro de uma classe dedicada. No exemplo desse exercício, não existe uma classe `StringFactory` ou `ArrayFactory`. O método pode fazer parte da classe em questão.
		- Além disso, o *factory method* não precisa se chamar *create* ou *constroi*. Outros nomes são válidos, como *from* ou *getInstance*.

### Atividade 09 - DateHelper é um Factory?
- Vale lembrar que deve-se tomar muito cuidado para saber **quando usar uma `Factory`**.
	- Isso porque o padrão de projeto `Factory` ocorre quando temos uma classe que nos ajuda a criar um objeto complexo, ou seja, ela esconde de nós os detalhes de criação desse objeto. É por isso que uma classe `Factory` possui apenas um método, faz sentido, pois se tivéssemos que chamar mais de um para criar um objeto, a responsabilidade de sua criação voltaria a ficar à cargo do desenvolvedor.







## Aula 04 - Importando negociações

### Atividade 02 - Requisições Ajax com o objeto XMLHttpRequest
- Nesse capítulo, será adicionada uma funcionalidade no sistema que permite que requisições *HTTP* sejam executadas para importar "negociações".
	- Para que isso seja possível, utilizou-se o [XMLHttpRequest](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHTTPRequest) (pois não estamos usando *jQuery*), que é um objeto que permite ao cliente transferir/capturar dados de um servidor. Esse objeto é frequentemente utilizado na programação **assíncronva**, veja [AJAX](https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX).
	- Fazendo uso desse objeto, basicamente "abrimos" a requisição através do método [open()](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/open), no qual devemos informar qual **verbo/método *HTTP*** queremos utilizar.
		- Além disso, precisamos indicar para **onde será essa requisição** (a *URL*).
		- Vale lembrar que o método `open` **não executa a requisição**, apenas prepara para que ela possa ser executada.
	- O método que **realmente executa a requisição** é o [send()](https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp).
	- No entanto, **antes de enviar** a requisição, é necessário configurar certos detalhes da mesma:
		- O primeiro ponto é entender que **toda requisição *AJAX* possui estados**. Abaixo, segue uma lista dos estados disponíveis para uma requisição:
			```
			0: requisição ainda não iniciada
			1: conexão com o servidor estabelecida
			2: requisição recebida
			3: processando requisição
			4: requisição concluída e a resposta está pronta
			```
			- Esses estados podem ser capturados utilizando o método [*onreadystatechange*](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/onreadystatechange), que é disparado **toda vez que o estado da requisição for alterado**.
				- Para saber o estado que a requisição se encontra atualmente, podemos utilizar o atributo ***readyState***.
				- Porém, **sempre deve-se confirmar** se recebemos uma resposta de sucesso com o atributo ***status == 200***, tendo em vista que muitos servidores podem retornar uma mensagem válida, porém informando que um erro ocorreu. Contudo, esse caso, o *status* será alterado e seria filtrado pela condicional que confirma se *status == 200*.

### Atividade 03 - Realizando o parse da resposta
- Para capturar a resposta de uma requisição assíncrona feita com o auxílio do [XMLHttpRequest](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHTTPRequest), podemos usar a propriedade **responseText**.
	- Essa propriedade é útil para *debug* também, pois se algum erro ocorreu do lado do servidor, a descrição do erro está contida nessa propriedade.
	- Como esse atributo é uma *string*, ou seja, é texto puro, devemos utilizar o [JSON.parse()](https://www.w3schools.com/js/js_json_parse.asp) para que possamos converter esse texto em [*JSON*](https://www.json.org/) e, dessa forma, fique mais fácil de manipular as informações capturadas.

### Atividade 04 - Separando as responsabilidades
- Existe uma *convenção* quando se trabalha com **programação assíncrona** conhecida como `Error First` ([entenda](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)), que significa que em um método asśincrono, seu primeiro parâmetro deve ser reservado para um **objeto de erro**. Já o **resultado da operação** invocada pelo método deve vir como segundo parâmetro.

### Atividade 08 - Que tal enviar dados para o servidor?
- Vale lembrar que no protocolo `HTTP`, os dados são transmitidos no **formato texto**.
	- Por isso, quase no fim da `function`, utilizamos o método [JSON.stringify()](https://www.w3schools.com/js/js_json_stringify.asp).
	- Além disso, como estamos enviando um [*JSON*](https://www.json.org/), note que utilizamos o método [setRequestHeader()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader), que define o valor do cabeçalho de uma requisição `HTTP`.








## Aula 05 - Combatendo Callback Hell com Promises

### Atividade 01 - O problema da vida assíncrona
- Em programação, muitas vezes nos deparamos com uma situação prblemática - e, na maioria dessas vezes, nem percebemos! Essa situação é a [*Pyramid of Doom* (ou *pirâmide do destino*)](https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)).
	- Essa situação acontece quando temos um trecho de código extremamente aninhado e, em virtude disso, sua identação acaba "adentrando" até a metade do arquivo, mais ou menos. Para que esse trecho esteja correto - **obviamente** -, é necessário fechar todas as *chaves* (**}**), estruturas condicionais, métodos, laços de repetição e demais estruturas que compõem esse trecho do código. 
		- Ao analisar essa parte do código, veremos uma representação parecida com uma pirâmide, o que é um **forte indício que esse código apresentará um problema de legibilidade para futuras manutenções**.
	- Além disso, muitas vezes essas situações trazem consigo um exemplo de [*Callback Hell* (ou *inferno de callback*)](http://callbackhell.com/), que acontece quando existem diversas requisições assíncronas, que precisam ser executadas em determinada ordem, e o *callback* de uma chamada assíncrona acaba contendo outra requisição que, por sua vez, em seu *callback*, conterá outra requisição e assim sucessivamente.

### Atividade 02 - O padrão de projeto Promise
- [Promise (ou promessa)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) é, em resumo, **o resultado futuro de uma operação**!
- Toda `promise` possui um método `then` (então) que será executado sempre que a "promessa for cumprida". Na *função* passada nesse método, sempre recebemos o **retorno** da `promise`.
	- Assim como o método `then`, podemos invocar o método `catch` de uma `promise`, que permite que capturemos o erro que ocorreu enquanto a `promise` foi executada.
- O **ES6** já suporta a `promise` nativamente.
- Toda `promise` recebe uma `função` com **dois parâmetros** - comumente esses parâmetros são nomeados como `resolve` e `reject`.
	- O `resolve` é uma função, na qual deve ser passada o retorno **de sucesso** da `promise` (é o que pegamos como retorno no método `then`). 
	- Já no `reject`, devemos passar o retorno **de erro** da `promise`, caso aconteça (é o que pegamos como retorno no método `catch`).

### Atividade 03 - Pyramid of Doom novamente? Claro que não, Promise.all nela!
- A `promise` possui um recuro muito interessante para tratar a seguinte situação: se existe uma **sequência de operações assíncronas** que desejamos executar em uma **determinada ordem**, podemos utilizar o [*Promise.all()*](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), que vai tratar todas as `promise` como uma coisa só, abstraindo para o programador a interação individual com cada uma delas.
- **Curiosidade:** quando desejamos "achatar" um *array* que contém diversos *arrays* em seu conteúdo, ou seja, deixar todos os elementos desses *arrays* secundários na "raiz" do *array* principal, dizemos que estamos fazendo um [*flatten*](https://medium.freecodecamp.org/reduce-f47a7da511a9).

### Atividade 05 - Simplificando o código
- Código simplificado, em JavaScript, é sinônimo de *arrow function*. Apesar de existirem inúmeras formas de identar e dispor uma *arrow function*, vale sempre lembrar que **não pode haver uma quebra de linha antes da `=>`**, pois não vai funcionar!









## Aula 06 - Considerações finais e exercícios bônus

### Atividade 02 - Ah se eu pudesse ordenar minha tabela clicando na coluna...
- Todo *array* em JavaScript possui o método [sort()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
	- Esse método pode ser utilizado para ordenar *arrays*.
	- Além disso, após ordenar um *array* utilizando o `sort`, caso você deseje exibí-lo em ordem decrescente, também existe o método [reverse()](https://www.w3schools.com/jsref/jsref_reverse.asp).
	- Porém, a ordenação de *arrays* em JavaScript pode pregar algumas peças em você! Para entender mais sobre isso, leia esse [post](https://blog.alura.com.br/ordenacao-de-numeros-no-javascript-nao-funciona/).
	- Contudo, quando temos uma lista de objetos que não sejam `string`, `números` ou `boolean` (com este tipoe, `false` vem primeiro e depois `true`), precisamos passar o critério de ordenação para o método `sort`.
	 - Para criarmos nosso método de ordenação customizado, **a regra é a seguinte**:
	 	- Com o critério selecionado, se o valor retornado for `0` não há alteração a ser feita;
	 	- Se o valor retornado for positivo, `b` deve vir antes de `a`;
	 	- Se o valor retornado for negativo, `a` deve vir antes de `b`.
	 	- **Ex.:**
	 		```javascript
	 		let negociacoes = [
			    new Negociacao(new Date(), 7, 200),
			    new Negociacao(new Date(), 1, 300),
			    new Negociacao(new Date(), 8, 100)
			]
			negociacoes.sort((a, b) => a.quantidade -  b.quantidade);
			negociacoes.forEach(negociacao => console.log(negociacao));
	 		```
	 		- E se quisermos uma ordem decrescente? Só inverter a subtração:
	 			```javascript
		 		let negociacoes = [
				    new Negociacao(new Date(), 7, 200),
				    new Negociacao(new Date(), 1, 300),
				    new Negociacao(new Date(), 8, 100)
				]
				negociacoes.sort((a, b) => b.quantidade -  a.quantidade); // agora é b menos a!
				negociacoes.forEach(negociacao => console.log(negociacao));
		 		```


### Atividade 04 - Ah se meu código funcionasse no Firefox...
- Quando um determinado trecho de código lança um erro com a instrução `throw`, esse código está indicando que houve um erro e que esse trecho onde o erro ocorreu não vai tratá-lo, mas sim lançá-lo para quem chamou o método.
	- Por isso, quando temos um trecho de código que pode apresentar algum erro, geralmente envolvemos essa área do programa em uma instrução `try`. No bloco `try` quando ocorre um lançamento com `throw`, podemos capturar o erro lançado no bloco `catch`.
	- O funcionamento é, basicamente: quando um erro é lançado e o exato código que o gerou não possui nenhum tipo de tratamento, esse erro "*sobe na pilha*".
		- Nesse ponto, o interpretador JavaScript tentará identificar se o código que chamou o trecho que causou o erro está preparado para tratar essa exceção. Se estiver, o código será diretamente direcionado para a cláusula `catch` e, nessa cláusula, podemos ter acesso ao erro lançado pela instrução `throw`, por exemplo.
			- No entanto, se **não** ocorrer erro algum, todas as instruções contidas no bloco `try` serão executadas e a cláusula `catch` será ignorada.

### Atividade 06 - Ah se meu código funcionasse no Edge!
- Um **polyfill** é um *script* que emula o comportamento de um recurso quando esse não é suportado para garantir que o código funcione sem ser necessário abdicar do que é mais novo.

### Atividade 07 - Ah se meu código funcionasse em TODOS OS NAVEGADORES...
- Nesse pequeno sistema, durante o desenvolvimento, mostrou-se necessário utilizar vários '*hacks*' da linguagem para que fosse possível torná-lo compatível com o maior número possível de navegadores, inclusive em suas versões mais defasadas.
- No entanto, é possível que todo o código escrito em ES6 funcione em navegadores que nem suportem a nova versão do JavaScript. Para isso, é necessário o uso de um ***transpiler***.
	- Vale salientar que os grandes vilões de compatibilidade do código JavaScript são os browsers mobile. A solução com transpiler é uma solução que abarca também esses dispositivos.

### Atividade 08 - Ah se ... peraí, o que é um transpiler mesmo?
- Um ***transpiler*** é um compilador de código fonte para código fonte. Ou seja, em linguagens como C, compilamos o código fonte para um código binário para que esse rode em nosso sistema operacional. Já um transpiler poderia converter o código escrito em C para JavaScript, ou seja, é um compilador que traduz o código fonte de uma linguagem para outra.
	- No caso do JavaScript, o truque é compilar o código fonte (nossos arquivos JS) para JavaScript. Parece não fazer sentido né? Porém, nesse caso, estaríamos convertendo um código em ES6 para ES5! Nesse contexto, o programador organiza seu código em ES6 para ajudar na manutenção e legibilidade, mas na hora que esse código for entrar em produção ele é todo convertido para ES5, ou seja, toda feature do ES6 é implementada (muitas vezes verbosamente) usando ES5! Com isso, qualquer navegador do mercado será capaz de compreender nosso código.
	- Veja um exemplo de código em ES6:
		```javascript
		class Pessoa {

		    constructor(nome, sobrenome = '') {
		        this.nome = nome;
		        this.sobrenome = sobrenome;
		    }

		    obterNomeCompleto() {
		        return `${this.nome} ${this.sobrenome}`;
		    }

		    static imprimePessoas(pessoas) {
		        pessoas.forEach((pessoa) => console.log(pessoa.nome));
		    }
		}
		```
	- Agora veja o mesmo código, '*transpilado*' para ES5 através de um ***transpiler***:
		```javascript
		function Pessoa(nome, sobrenome) {

		    this.nome = nome;
		    this.sobrenome = sobrenome || ''
		}

		Pessoa.prototype.obterNomeCompleto = function() {
		    return this.nome + ' ' + this.sobrenome
		}

		Pessoa.imprimePessoa(pessoas) {
		    pessoas.forEach(function(pessoa) {
		        console.log(pessoa.nome);
		    });
		}
		```
		- A ideia é que no futuro o uso de ***transpilers*** não seja mais necessário. Contudo, continuar usando um ***transpiler*** permitirá o uso de recursos mais recentes da linguagem sem termos que esperar que sejam implementados pelos navegadores.

### Atividade 09 - Ah se eu pudesse aplicar o que aprendi no Node.js...
- Tudo (*arrow functions*, *proxy*, classes...) o que aprendemos de **ES6** pode ser aplicado na plataforma [Node.js](https://nodejs.org/en/), mas tem um porém: você DEVE usar a versão 6 ou superior do Node.js. Versões anteriores não suportam totalmente os recursos que foram passados neste curso.