# Introdução ao PHP: Primeiros passos com a linguagem

## Aula 01 - O que é PHP ?

### Atividade 06 - PHP na CLI

- O PHP possui uma ferramenta para interações interativas. Isso quer dizer que se você desejar fazer um teste rápido com a linguagem, basta digitar no seu terminal:

> php -a

- Para sair desse terminal, digite: `quit`

#### Resumo

```plain
* PHP é uma linguagem de programação interpretada (embora por baixo dos panos aconteça uma "compilação")
* PHP é uma linguagem de propósito geral (para web, para desktop, para IOT, na linha de comando etc)
* O site oficial do PHP é https://php.net/
* Para executar um código em PHP o seu interpretador precisa ser instalado antes
* O arquivo principal de configuração é o php.ini
* Para o PHP funcionar na linha de comando, o sistema operacional precisa encontrá-lo no PATH
* O comando php -v imprime a versão do PHP instalado
* O comando php -a abre o shell interativo (CLI)
* Arquivos PHP geralmente possuem a extensão .php
```

## Aula 02 - Variáveis e tipos

### Atividade 08 - Para saber mais: Dinheiro

- Um site interessante quando se trabalha com valores monetários (em resumo, *float* e *double*) é o: [The Floating-Point Guide](https://floating-point-gui.de/).
  - É um site dedicado a explicar as possíveis situações inusitadas que um programador pode passar ao trabalhar com esse tipo de dado.

#### Resumo_2

```plain
* Uma variável guarda um valor
* Uma variável tem um $ na frente e para atribuir um valor usamos =
* O nome da variável não deve usar caracteres especiais
* Para imprimir o valor de uma variável também usamos o comando echo
* PHP dá suporte às operações matemáticas através dos seguintes operadores:
  * Soma: +
  * Subtração: -
  * Multiplicação: *
  * Divisão: /
  * Resto da divisão (módulo): %
  * Potência: **
* PHP possui tipos de dados como integer, double, string ou boolean (tipos primitivos)
* PHP descobre os tipos de variáveis dinamicamente (tipagem dinâmica)
* Utilizando gettype conseguimos descobrir o tipo de uma variável
```

## Aula 03 - Trabalhando com texto

### Atividade 04 - Caracteres especiais

- Sempre que for necessário informar um caracter especial no PHP, inicia-se com `\`.
  - Por exemplo: para quebrar linha (*n*ew line), `\n`.
  - Aqui pode ser encontrada uma lista dos caracteres especiais disponíveis: [Lista](https://www.php.net/manual/pt_BR/language.types.string.php)
- No entanto, em virtude de compatibilidade com sistemas operacionais diferentes (no Windows, por exemplo, utiliza-se `\r\n` ao invés de apenas `\n`), o PHP disponibiliza o valor `PHP_EOL` (*end of line*).
  - Recomenda-se utilizar esse valor.
- Além disso, ao utilizar apóstrofo (ou aspas simples `'`), o PHP interpretará que todo o conteúdo ali dentro é texto puro e não precisa fazer nada além de exibir.
  - Por isso, para utilizar caracteres especiais ou mesmo variáveis, dedve-se utilizar aspas duplas `"`.

#### Resumo_3

```plain
* Para concatenar uma string com uma outra variável usamos o . (ponto)
* Podemos definir uma string com aspas simples(') ou duplas(")
* Para interpretar um valor da variável ou caractere especial dentro da string devemos usar aspas duplas
* Caracteres especias são:
  * Nova linha: \n ou \r
  * Tab: \t
* PHP possui uma constante para indicar uma quebra de linha: PHP_EOL
```

## Aula 04 - Tomando decisões

### Atividade 03 - Para saber mais: Precedência

- Todos operadores lógicos estão sujeitos à regras de precedência.
  - Você pode encontrar essas regras [aqui](https://www.php.net/manual/en/language.operators.precedence.php).

### Atividade 07 - Apenas uma linha

- Se a estrutura de decisão possuir **apenas uma linha**, você pode escrever toda a condicional **sem** chaves (`{}`).
  - Ex.:

```php
  if(true)
    // Esse trecho será executado
```

### Atividade 08 - Para saber mais: Ternário

- É importante lembrar que para verificações simples, existe o chamado *operador ternário*.
  - Ele permite que uma condicional seja executada em uma única linha. Ex.: `$variavel = $condicao ? $valorSeVerdadeiro : $valorSeFalso;`
- É possível encontrar mais detalhes [nessa página](https://www.php.net/manual/en/language.operators.comparison.php).

#### Resumo_4

```plain
* Podemos tomar uma decisão no código através do if, elseif e else
* if e elseif vão avaliar uma condição, se for verdadeira executam o bloco associado
* O if é o primeiro comando, elseif e else são opcionais
* O bloco elseif sempre precisa de um if antes
* O bloco else sempre precisa de um if ou elseif antes -O bloco else só executa se nenhuma das condições anteriores forem verdadeiras
* Através do && (AND lógico) e do || (OR lógico) podemos avaliar mais de uma condição
```

## Aula 05 - Repetindo ações

### Atividade 05 - Diferentes loops

- Uma estrutura de repetição interessante que não foi vista durante o curso é o `do while`.
  - [Nesse link da documentação](https://www.php.net/manual/en/control-structures.do.while.php) é possível encontrar uma detalhada explicação sobre sua estrutura, mas vale ressaltar aqui que a principal diferença para o `while` "normal" é que a condicional de execução é verificada no **fim** de cada iteração, ao invés do início.

## Aula 06 - Desafios
