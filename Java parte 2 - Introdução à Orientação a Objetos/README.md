# Java parte 2: Introdução à Orientação a Objetos

## Aula 01 - O problema do paradigma procedural

### Atividade 02 - Paradigma procedural vs Objetos:

#### Paradigma procedural:

- Repetição de código
- Difícil manutenção (necessário alterar o código em vários lugares)
- Dificuldade ao inserir/alterar funcionalidades/comportamentos

#### Objetos:

- Código universal
- Simples manutenção (necessário alterar o código em apenas um lugar)
- Facilidade ao inserir/alterar funcionalidades/comportamentos

## Aula 02 - Introdução à Orientação a Objetos

### Atividade 01 - Primeira classe - Contas:

- Deve-se definir quais dados (atributos) e comportamentos (métodos) das Classes

### Atividade 02 - Instanciação, atributos e referências:

- Atributos: os dados da conta
- Objeto/Instância: classe 'construída'
- Instanciação: ação de construir o Objeto
- Referências: ao instanciar um Objeto (new), não é retornado à variável um Objeto, mas uma referência. O objeto nunca está dentro da variável, apenas uma referência a ele

### Atividade 06 - Valores default de atributos:

- Quando um Objeto é instanciado, os valores de seus atributos com tipos primitivos são inicializados, por padrão, com o valor 0 (zero)
- Se o valor de um atributo é alterado diretamente na Classe, todas as instâncias criadas a partir da alteração, por padrão, vão ser inicializadas com esse valor

### Atividade 08 - Referências vs Objetos:

- Quando é utilizado 'new' em uma Classe e atribuído a uma variável, cria-se uma **referência**
- Quando atribui-se uma variável já instanciada do tipo 'NomeClasse' a outra variável do mesmo tipo, essa nova variável recebe apenas a referência do Objeto


## Aula 03 - Definindo comportamento

### Atividade 01 - Nosso primeiro método:

- Método: bloco de código que representa um comportamento e executa uma funcionalidade da aplicação
- Sintaxe: 'modificador' 'retorno' 'nomeMetodo'(['tipo' 'parametro']) { ['retorno'] }
- this: palavra-chave do Java que indica uma referência ao Objeto que está em uso durante a execução

### Atividade 05 - Métodos com retorno:

- Diferença entre função e método: A função necessita explicitar onde ela será executada, o método já é orientado a ser executado a partir de certa Classe
- O tipo do retorno do método deve ser definido na sua declaração
- O retorno ocorre por meio da palavra-chave 'return' e o valor a ser retornado
- Um método com retorno pode ser atribuído a uma variável


## Aula 04 - Composição de objetos

### Atividade 01 - Composição de Objetos:

- Muitos atributos dentro da mesma Classe podem dificultar a leitura da mesma
- Para contornar esse problema, pode-se criar um atributo que contém vários atributos, ou seja, um Objeto
- **Ex.:** Dentro da classe Conta, cria-se um atributo Cliente, que possui nome, cpf, profissao, etc.
- Isso otimiza a leitura das Classes, e facilita o entendimento do projeto como um todo (desacoplamento)

### Atividade 03 - Referência Null:

- Uma referência atribuída a um Objeto é denominada 'associação'
- Quando um Objeto não foi instanciado (referência/valor 'null'), ao tentar acessar algum atributo desse Objeto ocorre um NullPointerException
- Ao tentar acessar um atributo de um Objeto, deve-se sempre instanciá-lo primeiro, evitando assim as NullPointerExceptions


## Aula 05 - Encapsulamento e visibilidade

### Atividade 01 - Atributos privados e encapsulamento:

- O ideal ao trabalhar com Objetos é utilizar sempre seus métodos, e não permitir acesso diretamente aos atributos
- private: palavra-chave que altera o modificador de acesso de uma variável, método ou Classe, não permitindo acesso externo à Classe que pertence

### Atividade 03 - Getters e Setters:

- 'tipo' getAtributo() e 'void' setAtributo('tipo' 'param'): convenção Java de métodos getters e setters
- Ao digitar 'getAtri' e pressionar 'Ctrl + Espaço', o Eclipse autocompleta getters e setters para você
- O encapsulamento facilita a manutenção, pois centraliza comportamentos da classe em um lugar só, e caso seja necessária efetuar uma mudança no código, será feita apenas uma vez

### Atividade 05 - Getters e Setters de referência:

#### Gerar Getters e Setters (Eclipse):

- Source > Generate Getters and Setters...
- Selecione os atributos que deseja gerar os métodos


## Aula 06 - Construtores e membros estáticos

### Atividade 01 - Construtores:

- O construtor define os parâmetros de inicialização de um Objeto
- Construtor **não** é um método
- Um construtor padrão inicializa os atributos com valor zero e null
- Pode-se definir no construtor os atributos obrigatórios à sua criação
- Caso você não definir nenhum construtor, o Java define um como padrão, sem parâmetros e sem código

#### View Outline:

- Mostra todos os atributos e métodos de uma Classe
- 'Ctrl + O' também mostra o Outline

### Atividade 04 - Static:

- Atributo compartilhado entre todos Objetos da mesma Classe
- this: "Pertence ao Objeto/instância", static: "Pertence à Classe"

### Atividade 07 - Para saber mais: reaproveitamento entre construtores:

- Para evitar código duplicado, pode-se realizar a chamada de um construtor dentro de outro
- Para isso, utiliza-se o 'this()'