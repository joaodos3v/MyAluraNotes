# JavaScript avançado I: ES6, orientação a objetos e padrões de projetos

## Aula 01 - Prólogo: regras, código e manutenção


### Atividade 02 - (Obrigatório) Download do projeto e infraestrutra:

- Download: https://github.com/alura-cursos/javascript-avancado-i.git

#### Navegador

- Google Chrome versão 50 ou superior

#### Como saber se certa funcionalidade do ES2015+ (ES6) é suportada

- Acessar: https://kangax.github.io/compat-table/es6/

#### Node.js

- Necessário o Node.js **v4.0** (mínimo) instalado
- Para fazer isso, download: https://nodejs.org/en/
	- Linux: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04

### Atividade 04 - Enrolando-se com o DOM

- Modelo MVC é implementado no projeto: separando regras de negócio da apresentação dos dados na tela
	- Ações do usuário são interceptadas por um *controller*
	- Esse *controller* altera o dado, que é o *model*
	- E a *view* se atualiza para exibir o estado mais atual desse *model*





## Aula 02 - Especificando uma Negociação


### Atividade 01 - O que é um modelo?

- Modelo é uma abstração de algo do mundo real

### Atividade 03 - Construtor da classe e métodos
- Para deixar claro a nomenclatura:
	- **Método**: função JavaScript criada *dentro* de uma classe
	- **Função**: função JavaScript criada *fora* de uma classe

### Atividade 04 - Encapsulamento
- **Convenção:** para atributos de uma classe JavaScript que não podem ser modificados, a não ser pela prórpia classe, utiliza-se um *_ (underline)* antes do nome da propriedade.
	- *Ex.:* this.atributo (**pode** ser modificado)   /  this.\_atributo (**não pode** ser modificado)

### Atividade 07 - A instância é imutável mesmo?
- *Object.freeze* é *shallow*, ou seja, ele é **raso**. Isso quer dizer que ele é uma função que age sob as propriedades do objeto em questão. 		- Porém, caso esse objeto possua um atributo *data* que é um outro objeto (instanciado por *new Date()*), o **Object.freeze()** não entrará dentro das propriedaes desse objeto "filho" e, portanto, esse atributo **continua mutável!**

### Atividade 09 - Substituindo var por let
- Em JavaScript **não existe** o conceito de *escopo de bloco* quando usa-se a declaração de variável com **var**	
	- *Ex.:* var nomeDaVariavel;
	- **Execute o código abaixo e visualize!**

```javascript
for(var i=1; i<=100; i++) {
    var nome = 'Meu Nome';
    console.log(i);
}

alert(i);
alert(nome);
```


- Porém, com o ES6 e utilizando a declaração de variável com **let**, as variáveis **ganham escopo de bloco**
	- *Ex.:* let nomeDaVariavel;
	- **Execute o código abaixo e visualize!**

```javascript
for(let i=1; i<=100; i++) {
    let nome = 'Meu Nome';
    console.log(i);
}

alert(i);
alert(nome);
```

### Atividade 10 - Resumindo
- Criação de classe usando novos recursos da linguagem JavaScript que favorecem a implementação do paradigma orientado à objetos
- *constructor()*: podemos definir atributos (e passar parâmetros) para um modelo, que é uma abstração do mundo real (por intermédio de uma classe)
- Por **convenção**, atributos *privados* (que não devem ser acessados fora da classe) devem possuir um prefixo *_ (underline)*
- Método *get* que facilita a escrita de um **getter**, tornando-o código menos verboso
- *Object.freeze()*
	- Aplicação nas propriedades de forma *'shallow'* (rasa)
- Programação defensiva: evitando a quebra da integridade das informações
- Declaração de variáveis com **lte**, que permite que as variáveis ganhem um *escopo de bloco*


### Atividade 17 - Encapsulamento
- **CURIOSIDADE**: a linguagem TypeScript da Microsoft permite definir atributos privados com o modificador private. TypeScript nada mais é do que um superset do ES2015+ com a adição de novos recursos, inclusive aquele que define atributos privados.

### Atividade 21 - Imutável aonde meu filho!
- Além do *Object.freeze()*, vale lembrar que é muito interessante utilizar a **Programação Defensiva**.
	- Um exemplo fácil, porém interessante, é lembrar do atributo do tipo *new Date()*
	- Quando o *getter* retorna o valor para a *view*, por que devemos mandar a instância *new Date()* do próprio objeto instanciado?
		- **Não devemos!** Essa é a grande jogada 
		- Isso porque, se o programador vai utilizar esse valor, seja para exibí-lo na tela ou realizar cálculos com ele, o importante é que retornemos o **valor** igual ao que o objeto possui. No entanto, não precisamos (nem devemos) retornar a instância da propriedade do objeto





## Aula 03 - A ligação entre as ações do usuário e o modelo

### Atividade 03 - Evitando percorrer o DOM muitas vezes
- É uma **boa prática** evitar percorrer o *DOM* muitas vezes quando deseja-se obter alguns valores de um formulário, por exemplo.
	- Para isso, recomenda-se a utilização do *constructor*, referenciando os elementos desejados.
	- Essa prática estabelece algo semelhante a um *cache* e realiza a busca no *DOM* apenas uma vez, otimizando a performance da aplicação.

### Atividade 04 - Criando uma instância de Negociacao
- Sempre que se deseja saber de "que tipo" é o dado atual, pode-se utilizar a função *typeof()*
	- **Ex.:** *typeof('teste')*

### Atividade 05 - Criando um objeto Date
- Métodos utilizados:
	- [split()](https://www.w3schools.com/jsref/jsref_split.asp)
	- [join()](https://www.w3schools.com/jsref/jsref_join.asp)
	- [replace()](https://www.w3schools.com/jsref/jsref_replace.asp)


### Atividade 08 - Resolvendo um problema com o paradigma funcional
- **Spread Operator**: [documentação MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- Nessa aula, completou-se uma breve abordagem das possíveis formas de instanciar um objeto *new Date()*
	- Com isso, aprendeu que os parâmetros passados podem ser:
		- Um array de strings. Ex.: ['2016', '11', '12']
		- Uma string separada por vírgula; Ex.: '2016,11,12'
		- Um array de números. Ex.: [2016, 10, 12] **
			-	Vale lembrar que, nesse caso, o mês inicia em 0 (Janeiro) e acaba em 11 (Dezembro)
			- Aproveitando, utilizou-se um problema envolvendo esta situação para utilizar conceitos de programação funcional
				- Nesse ponto, o *Spread Operator* e o método *map()* foram utilizados em conjunto com uma lógica que, em apenas uma linha, decrementa 1 do valor do mês

### Atividade 09 - Arrow Functions: deixando o código ainda menos verboso
- Trocando a palavra *function* por **=>**
	- Quando existe apenas uma instrução dentro do bloco da *arrow function*, o "bloco" pode ser **omitido**. Ou seja, as chaves (**{}**) podem ser removidas.
	- O bloco passa a ser **inline**
	- A própria *arrow function* já retorna o valor (**return** não é mais necessário)

### Atividade 10 - Resumindo
- Associou-se uma ação do usuário com um método do *controller*
- Para tornar o código mais simples e facilitar sua escrita, "simulou-se" a biblioteca *jQuery* com um **alias** + [bind()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- *Date()* aceita muitos parâmetros na sua instanciação (Array; String com ano,mês e dia separada por vírgula; 3 parâmetros com ano, mês e dia...)
- *Spread operator*
- *map()*
- *Arrow functions*

### Atividade 15 - 'Isso' não encaixa em um 'Date'? Se vira!
- Quando instanciamos **Date** sem passar qualquer parâmetro para o seu construtor, é criado um objeto com a data naquele momento.
- Não podemos esquecer que um Date guarda internamente os meses de 0 a 11
- **Problema para treino:**
	- Parta do princípio que você tem a seguinte variável:
		```javascript
		let dataString = '17-05-2016';
		```
	- E que usará o construtor de Date, que está preparado para receber uma data no formato ano/mes/dia.
		- **Desafio:** *Escreva um código que altere dataString para que seu conteúdo fique compatível com o formato ano/mes/dia. No final, instancie uma Date, exibindo no console seu valor.*
		- **Solução 1:**
			```javascript
			let dataString = '17-05-2016';
			dataString = dataString.split('-').reverse().join('/');
			let data = new Date(dataString);
			console.log(data);
			```
		- **Solução 2 (1 linha a menos):**
			```javascript
			let dataString = '17-05-2016';
			let data = new Date(dataString.split('-').reverse().join('/'));
			console.log(data);
			```

### Atividade 16 - Mais de spread
- Ótimo exemplo da otimização de código usando *spread operator*
	```javascript
	let lista1 = ['banana', 'laranja', 'mamão'];
	let lista2 = ['caju', 'tangerina', 'abacaxi'];
	lista1.push(...lista2);
	console.log(lista1);
	```

### Atividade 17 -  O 'mapa' da mina!
- **Problema**:
	- Temos a seguinte sequência de números:
		```javascript
		let numeros = [3,2,11,20,8,7];
		```
	- Sua tarefa: criar uma **nova lista** com a **mesma quantidade** de números, mas cada elemento da nova lista deve ter seu **valor dobrado quando for ímpar**.


- **Solução 1:** (programação não funcional)
	```javascript
	let numeros = [3,2,11,20,8,7];
	let novosNumeros = [];

	numeros.forEach(item => {

	    if(item % 2) { // só entra no IF se o resultado for diferente de zero
	        novosNumeros.push(item * 2);
	    } else {
	        novosNumeros.push(item);
	    }
	});
	console.log(novosNumeros);
	```
	- **Vale lembrar que:**
		- 0 é considerado falso em JavaScript e qualquer número diferente de 0 é considerado verdadeiro. 
			- Então, quando fazemos `item % 2`, se o resultado for 0, é porque o item é divisível por dois, ou seja, é par. Como 0 é falso, ele retornará o item sem qualquer modificação. 
			- Agora, se o resto da divisão de `item % 2` for diferente de zero, é porque é impar. Como o resultado é diferente de zero, será verdadeiro e o que vem depois do interrogação será processado, no caso, item vezes dois.

- **Solução 2:** (programação funcional + operador ternário)
	```javascript
	let numeros = [3,2,11,20,8,7];
	let novosNumeros = numeros.map(item =>  item % 2 ? item * 2 : item);
	console.log(novosNumeros);
	```

- **Solução 3:** (programação funcional s/ operador ternário + lógica)
	```javascript
	let numeros = [3,2,11,20,8,7];
	let novosNumeros = numeros.map((item)=> (item%2 +1 ) * item);
	console.log(novosNumeros);
	```

- **Solução 4:** (**minha**: eu não sabia que podia usar operador ternário em *arrow functions*, fuck! :disappointed:)
	```javascript
	let numeros = [3,2,11,20,8,7];
	let novosNumeros = numeros.map((item, indice) => { if(item % 2 != 0) return item * 2; return item });
	console.log(novosNumeros);
	```





## Aula 04 - Lidar com data é trabalhoso? Chame um ajudante!

### Atividade 03 - Métodos estáticos
- Em *ES6*, qualquer método de uma classe pode ser declarado como estático adicionando a palavra reservada *static* na frente do nome do método.
	- **Ex.:** `static metodo(){  }`
- Quando deseja-se deixar bem claro para um colega de projeto, por exemplo, que uma classe não deve ser instanciada (como em um *Helper*), pode-se utilizar o **throw** para lançar um erro customizado no **constructor()** dessa classe *Helper*
	- **Ex.:** 
		```javascript
		constructor() {
			throw new Error('DateHelper não pode ser instanciada!');
		}
		```

### Atividade 04 -  Template Strings
- Para concatenar uma *string* antes do *ES6*, por exemplo, fazíamos assim:
	```javascript
	var nome = 'João';
	var idade = 10;
	console.log('A idade de ' + nome + ' é ' + idade + '.');
	```

- Com o *ES6* e fazendo o uso do conceito de **template strings** para concatenação, o código fica assim:
	```javascript
	var nome = 'João';
	var idade = 10;
	console.log(`A idade de ${nome} é ${idade}.`);
	```
	- Note o uso da **crase (\`)** e do identificador ( **${}** )

### Atividade 05 -  Criando nosso ListModel
- Assim como nas propriedades, uma classe pode ter **métodos** criados com o prefixo *_ (underline)*, que irá sinalizar ao programador que esse método só deve ser invocado pela própria classe.
	```javascript
	class Classe {
		constructor() {
		}

		_metodoPrivado() {

		}
	}
	```


### Atividade 06 -  Blindando as negociações dentro da lista
- **Curiosidade:** uma maneira de limpar um *array* (excluir todos seus elementos) é dizer que seu *length* é **=0**.
	- **Ex.:** `array.length = 0`
- **Programação defensiva usando *array***
	- Ao invés de retornar a lista existente, permitindo assim que a lista seja incrementada ou tenha valores removidos fora da classe *NegociacoesController*, podemos retornar uma nova lista, alterando assim sua referência
	- Isso impedirá que a lista original seja modificada, tendo em vista que a regra de negócio deste projeto é que uma negociação só possa ser adicionada, não podendo ser excluída ou editada
	- Para isso, usaremos o [concat()](https://www.w3schools.com/jsref/jsref_concat_array.asp)

### Atividade 07 -  Resumindo
- Ações que se repetem muitas vezes (tais como a formatação e conversão de datas) podem ser englobadas em uma classe "ajudante", que fique responsável por fazer esse trabalho repetitivo
	- Nesse projeto, um exemplo é a classe *DataHelper.js*
- Concatenações com o ES2015 se tornaram muito mais fáceis disponibilizando o uso de **Template Strings**
	- Para criar uma *Template String*, deve ser iniciada a expressão com uma crase ( **\`** ) e utilizar o identificador ( **${}** )
- Métodos "privados" podem ser sinalizado em *JavaScript*, assim como as propriedades, quando iniciam com *_ (underline)*

### Atividade 08 - Olhar aguçado para o paradigma da orientação a objetos
- Referência rápida sobre uma simples **expressão regular**
	```javascript
	function validaCodigo(codigo) {

	    // cria a expressão regular. Poderíamos ter usado 
	    // a sintaxe new RegExp(/\D{3}-\D{2}-\d{2}/)
	    // \D é qualquer coisa não dígito
	    // \D{3} é qualquer coisa não dígito que forme um grupo de 3 caracteres
	    // \d é qualquer dígito.
	    let expressao = /\D{3}-\D{2}-\d{2}/; 

	    // toda expressão regular possui o método test 
	    // que recebe o alvo do teste, retornando true
	    // se passou, e false se falhou
	    if(expressao.test(codigo)) {
	          alert('Código válido!');
	      } else {
	          alert('Código inválido');
	      }

	}

	validaCodigo('GWZ-JJ-12'); // válido
	validaCodigo('1X1-JJ-12'); // inválido
	```


### Atividade 09 - O parâmetro não encaixa, e agora?
- O método **[concat()](https://www.w3schools.com/jsref/jsref_concat_array.asp)** é muito interessante para juntar valores em *JavaScript*. Vejamos algums curiosidades:
	- Para não precisar criar uma variável temporária, o método *concat()* pode ser chamado a partir da declaração de um *array vazio*
		- **Ex.:** `[].concat(array1, array2)`
	- A função concat aceita receber um número infinito de parâmetros, inclusive aqueles que não são um array.
		- **Ex.:** 
			```javascript
				let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
				let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
				exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2, 'Rômulo'));
			```
	- O resultado de `concat` é um novo array com todos os elementos de quem realizou o `concat` e quem foi passado para a função.

### Atividade 13 - Por que...
- Comparativo entre a criação de uma classe com métodos estáticos no **ES6** vs. **Antes do ES6**
	- **ES6**:
		```javascript
			class Pessoa {

			    constructor(nome, sobrenome) {
			        this.nome = nome;
			        this.sobreNome = sobrenome;
			    }

			    obterNomeCompleto() {
			        return `${this.nome} ${this.sobrenome}`;
			    }

			    static metodoStaticoQualquer() {
			        console.log('Método estático chamado');
			    }

			}
		```
	- **Antes do ES6**:
		```javascript
			function Pessoa(nome, sobrenome) {
			    this.nome = nome;
			    this.sobrenome = sobrenome;
			}

			// método de instância
			Pessoa.prototype.obterNomeCompleto = function() {
			    return this.nome + ' ' + this.sobrenome;
			};

			// declarando equivalente a método estático

			Pessoa.metodoStaticoQualquer = function() {

			    console.log('Método estático chamado');

			};
		```


### Atividade 14 - Expressão regular ainda melhor
- Melhorando a expressão regular:
	- Durante o treinamento utilizamos a seguinte expressão regular para validar se uma data digitada pelo usuário é válida ou não:
		`/\d{4}-\d{2}-\d{2}/`
	- Contudo, ela **não** garante que a data será sempre correta, pois se o usuário digitar um ano com mais de 4 dígitos ou um dia com mais de dois dígitos ela considerará como correta. Para ficar ainda melhor, vamos alterar a expressão para:
		`/^\d{4}-\d{2}-\d{2}$/`
		- O `ˆ` indica "**começando com**"
		- O `$` indica "**terminando com**"
	- Para acessar um curso específico de expressão regular: [Curso](https://www.alura.com.br/curso-online-expressoes-regulares)

### Atividade 16 - Só tem métodos estáticos...
- **Desafio:** Como podemos evitar que alguém instancie uma classe que só possui métodos estáticos, ou seja, uma classe que não faz sentido trabalharmos com uma instância?
- **Solução:** Podemos lançar um erro dentro do `constructor`. Lembre-se que o `constructor` é chamando quando criamos uma instância de uma classe com o operador `new`.
	```javascript
	class ClasseQualquer {

	    constructor() {
	        throw new Error('Você não pode criar uma instância dessa classe');
	    }

	       // métodos estáticos da classe
	}
	```
	





## Aula 05 - Temos o modelo, mas e a view?

### Atividade 01 - Classes que representam nossas Views
- A propriedade **innerHTML** de um elemento do *DOM* converte uma string em novos elementos do *DOM*, caso a marcação esteja correta.
	- **Ex.:** `elemento.innerHTML = '<div><h1>Novos elementos do DOM a partir do innerHTML</h1></div>'`
	- **Ex2.:** 
		```javascript
		elemento.innerHTML = `
			<div>
				<h1>Novos elementos do DOM a partir do innerHTML</h1>
			</div>
		`;
		```

### Atividade 04 - Totalizando o volume em nosso Template
- Tendo em vista que em *Template Strings* não é possível executar mais do que uma instrução de código, tal como declarar uma variável e fazer um [forEach()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) em seguida, um "dibre" (:laughing:) que podemos fazer é utilizar as conhecidas **[IIFE](https://developer.mozilla.org/pt-BR/docs/Glossario/IIFE)** (*Immediately Invoked Function Expression*)
	- **Ex.:** 
		```javascript
		${
    		(function() {
    			let total = 0;
    			model.negociacoes.forEach(n => total += n.volume);
    			return total;
    		})()
    	}
		```
		- Note que antes da `function` existe um abre parênteses e, ao final da função, existe um fecha parêntes.
		- Logo em sequência, existe um parênteses vazio (responsável por **invocar** a função)


### Atividade 05 - Totalizando o volume em nosso Template com a função reduce
- Em resumo, a função [reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) processa um *array* e, no final, retorna **um único resultado**
	- Um exemplo clássico da utilização desse método é quando se deseja totalizar os elementos de um *array*, por exemplo
	- **Ex.:**
		```javascript
		model.negociacoes.reduce(function(total, n) {
    		return total + n.volume;
    	}, 0.0)
		```
		- Vale lembrar que o **segundo parâmetro** do `reduce` é o valor de inicialização do totalizador

### Atividade 06 - Resumindo
- Implementamos o conceito de **view** dentro da aplicação
- Usamos, além dos já conhecidos [map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map) e [join()](https://www.w3schools.com/jsref/jsref_join.asp), o [reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) na criação da tabela
- Entendemos que quando um **HTML válido** é inserido na propriedade *innerHTML* de um elemento, esse html é interpretado e convertido em elementos próprios do *DOM*

### Atividade 07 - Reduce com arrow function
- **Solução:** `numeros.reduce((total, num) => total * num , 1);`

### Atividade 12 - Map com arrow function
- **Solução:** 
	```javascript
	let dobro = numeros.map(num => num * 2);
	let metade = numeros.map(num => num/2);
	let raiz = numeros.map(num => Math.sqrt(num));
	```



## Aula 06 - Generalizando a solução da nossa View

### Atividade 01 - Classe Mensagem
- Parecido com o `php`, por exemplo, no ES2015, é possível definir um **valor padrão** para o construtor ou método de uma classe. 
	- Isso evita que seja necessário mandar uma *string* em branco quando ainda não se sabe qual valor será usado no objeto, mas deseja-se criar uma instância daquela classe. Veja um exemplo abaixo:
		```javascript
		class Classe {

			constructor(valor='') {
				this._valor = valor;
			}
		
		}

		let instanciaDaClasse = new Classe(); // Note que não estou passando nenhum valor em um construtor que, a princípio, obrigaria o envio de um parâmetro. Mesmo assim, o browser não irá apontar erro nenhum.
		```
	- Vale lembrar que se um valor for passado na instanciação do objeto da classe, obviamente a propriedade `_valor` do objeto conterá aquilo que foi enviado no parâmetro `valor`

### Atividade 02 - Criando a classe MensagemView
- Em um *if ternário* em JavaScript (ou em um *if* normal, obviamente), fazer algo do tipo `texto ? console.log('verdadeiro') : console.log('falso')` possibilita que o programador verifique se `texto` é diferente de:
	- **espaço em branco**
	- **zero**
	- **nulo**
	- **undefined**
		- Isso acontece porque em JavaScript, um **string sem conteúdo** é avaliada como **falso**

### Atividade 03 - Herança e reutilização de código
- Com o ES2015, o uso de **herança** tornou-se possível! Para utilizá-lo, como em qualquer outra linguagem, deve-ser utilizar a palavra reservada `extends` da declaração da classe, informado qual é a classe "pai" de qual ela herda.
	- **Ex.:** 
		```javascript
		class ClasseFilha extends ClassePai  {
			// conteúdo da classe aqui
		}
		```
	- Vale lembrar que para invocar o `constructor` da classe pai, também como em outras linguagens de programação, basta utilizar o método `super`.

### Atividade 04 - Construtor vs super
- Como, até o momento, JavaScript **não suporta `implements` ou classes/métodos `abstract`**, existe uma "artimanha" para tentar sinalizar a um colega de equipe ou companheiro de projeto que uma classe que **herda** de outra classe (pai) deve implementar determinado método.
	- Para isso, **na classe pai**, deve-se declarar o método desejado, por exemplo `_metodoObrigatorio() { }`
		- Para auxiliar ainda mais no entendimento de um possível erro, coloque uma mensagem de aviso neste método, pois ele **não será implementado** na classe pai e, portanto, podemos deixar uma simples mensagem em seu corpo. Exemplo:
		```javascript
		_metodoObrigatorio() { 
			throw new Error('Uma classe que herda desta deve, obrigatoriamente, implementar o método [_metodoObrigatorio] !');
		}
		```
	- Feito isso, ao herdar essa classe pai e, caso ela faça uso do `__metodoObrigatorio()` e a classe filha que a herdou não tenha implementado esse método, **automaticamente** essa exceção será lançada!
		- Vale lembrar que se a **classe filha** implementar o método `_metodoObrigatorio()` (exatamente com o *mesmo nome*), esse método será sobescrito e, quando um objeto dessa classe for instanciada, o método da **classe filha** é que será invocado!

### Atividade 05 - Resumindo
- Toda vez que um código for comum (se repetir) em várias classes, vale a pena repensar e, possivelmente, isolá-lo em uma nova classe, responsável por esse comportamente (caso da classe *View* desse projeto).
	- Para implementar esse comportamente em outros objetos, vimos que podemos usar o conceito de **herança**.
- Também vimmos um pequeno artifício que "obriga" o desenvolvedor a implementar métodos necessários para a classe pai, sempre que ele for extendida.
	- Vimos que esse "artifício" consiste em lançar um erro para o programador que indique que ele deve **sobescrever** esse método na classe filha que herdou de uma classe pai.
	- Um método desse tipo **não deve ser prefixado** com *_ (underline)*, pois ele será implementado por outras classes e isso estaria "quebrando a convenção" que diz que métodos que iniciam com *_ (underline)* são ***private***, ou seja, só devem ser invocados para própria classe onde estão declarados!
- Vimos também que se uma classe filha herda de outra classe que **exige** um parâmetro em seu construtor, esse parâmetro deve ser enviado na instanciação da classe **filha** e essa, por sua vez, deve enviar esse parâmetro ao construtor da classe **pai** utilizando o método `super()`.
	- No entanto, isso **não é necessário** quando o construtor da classe **que herda** possui exatamente a mesma declaração (*número de parâmetros*) da classe que **foi herdada**. 
		- **Por favor, veja uma explicação muito detalhada disso [nesse arquivo](https://github.com/joao-vieira/MyAluraNotes/blob/master/JavaScript%20avan%C3%A7ado%20I:%20%20ES6%2C%20orienta%C3%A7%C3%A3o%20a%20objetos%20e%20padr%C3%B5es%20de%20projetos/Detalhando-Heran%C3%A7a-Com-Exemplos.md)!**

### Atividade 10 - Classes abstratas, tem como?
- Classes que não devem possuir instâncias **não deveriam** poder ser instanciadas. 
	- Essas classes (em *Orientação a Objetos*), que foram criadas para não possuírem instâncias, são chamadas de **classes abstratas**.
	- No entanto, em JavaScript (*ECMAScript*) não há uma forma de evitar que alguém instancie uma classe (utilize um `new` nessa classe) :disappointed:
		- Apenas por curiosidade, vale ressaltar que a linguagem *TypeScript* (que se baseia no JS) possui vários recursos que ainda não existem no JS, tais como as classes abstratas.
			- Resumindo, com *TypeScript* poderíamos usar a palavra chave `abstract` que proíbe instanciar objetos dessa classe, por exemplo:
				```javascript
				abstract class Classe {

				}
				```


> Curso finalizado! [:walking::boom::fire:](https://github.com/joao-vieira)
