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
	- Na **composição**, a classe que deseja usar o método de outra possui uma instância dessa classe.
	- Por mais que a instância tenha vários métodos, só chamamos aqueles que nos interessa.
- Outra opção é utilizar o **mixin**:
	- Com **mixin** podemos "pegar emprestado" o método de outra classe sem termos que ter uma instância dessa classe, como é o caso de composição.	
	- Um detalhe: foi necessário fazer `Aviao.prototype.voa` porque métodos criados usando *ES6* são adicionados no **prototype**. Qualquer método adicionado em **prototype** estará disponível para todas as instâncias.
