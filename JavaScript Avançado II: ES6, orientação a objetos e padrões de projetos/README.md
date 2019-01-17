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