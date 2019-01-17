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