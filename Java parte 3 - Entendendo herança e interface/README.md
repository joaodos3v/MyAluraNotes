# Java parte 3: Entendendo herança e interface

## Aula 01 - Introdução a herança

### Atividade 06 - Começando com a herança:

- Uma Classe pode herdar os atributos e comportamentos de outra classe
- 'extends' 'NomeDaClasse: palavra-chave que é utilizada após o nome da Classe, e serve para definir uma Classe herdada

## Aula 02 - Super e reescrita de métodos

### Atividade 01 - Herança no diagrama de classes:

- Classe Pai/Mãe, Base class, Super class: A classe base, que será herdada pelas classes filhas
- Classe Filha, Sub class: Classe que herda as características e comportamentos da Classe Pai
- Ao construir um Objeto da Classe Filha, ele herda todos os atributos e métodos da hierarquia

### Atividade 02 - Reescrita de métodos:

#### Atalho para adicionar comentário:

- Ctrl + /

- 'protected': Modificador de visibilidade que representa 'public' para os filhos da Classe e 'private' para outras Classes
- 'super': Indica que o atributo é da Classe Pai

#### Reescrita de métodos:

- Também chamada de **sobrescrita**
- Utiliza-se a mesma assinatura (modificador, retorno, nome e parâmetros) do método original
- Redefine apenas o comportamento do método

### Atividade 09 - Para saber mais: Sobrecarga:

- Caso exista um método de assinatura 'public void nomeMetodo(int numero)', se for escrito um novo método de assinatura 'public void nomeMetodo(int numero, String nome)', a criação desse novo método é chamada de **sobrecarga**
- A sobrecarga não leva em conta a visibilidade ou retorno do método, apenas os parâmetros e não depende da herança

## Aula 03 - Entendendo Polimorfismo

### Atividade 01 - Introdução ao Polimorfismo:

- Uma Classe Pai pode receber uma referência de um Objeto que é uma Classe Filha dela
- Em alguns casos de Polimorfismo, não é possível chamar diretamente um método do Objeto instanciado (Classe Filha), pois o tipo do Objeto de referência (Classe Pai) não possui os métodos da Classe Filha

### Atividade 02 - Aplicando Polimorfismo:

- O polimorfismo evita a duplicação de métodos para Classes em hierarquia
- Cria-se apenas um método genérico, com a Classe Pai, para não criar um método específico para cada Classe Filha
- Mesmo usando uma referência genérica (Classe Pai), ao executar o código será chamado um método específico (da Classe Filha)

### Atividade 06 - Resumo herança:

- **Um Objeto nunca muda seu tipo**

#### Reutilização de código:

- Ao herdar uma Classe, são herdadas as características e comportamentos dela

#### Polimorfismo:

- Um Objeto do tipo da Classe Pai pode receber uma referência de um Objeto de uma Classe Filha
- O polimorfismo permite usar referências mais genéricas para a comunicação com um objeto
- O uso de referências mais genéricas permite desacoplar sistemas


## Aula 04 - Herança e o uso construtores

### Atividade 01 - Herança e construtores:

- Ao herdar uma Classe são herdados suas características (atributos) e seus comportamentos (métodos), mas não herda seus Construtores, portanto devem ser reescritos
- Um Construtor de uma Classe Filha deve chamar um Construtor da Classe Pai com a palavra-chave 'super'

### Atividade 03 - Conta Corrente e Poupança:

- @Override: redefine o comportamento de um método. Ao sobrescrever um método, sua assinatura deve ser igual ao original


## Aula 05 - Classes e métodos abstratos

### Atividade 01 - Classes abstratas:

- Uma Classe Abstrata é uma Classe que não deveria existir (concretamente), é apenas um conceito
- 'abstract': palavra-chave que determina uma Classe ou Método Abstrato
- Uma Classe Abstrata não pode ser Instanciada

### Atividade 03 - Métodos abstratos:

- Um método Abstrato não possui corpo, ele deve ser implementado nas Classes Filhas
- Um método Abstrato em uma Classe Pai obriga as Classes Filhas a implementá-lo
- Sintaxe: 'modificador' 'abstract' 'retorno' 'nomeDoMetodo'();
- Um método Abstrato só pode ser criado em uma Classe Abstrata


## Aula 06 - Interfaces

### Atividade 01 - Mais uma classe abstrata:

- Para dividir melhor suas Classes, pode-se criar uma Classe Abstrata intermediária que apenas algumas das Classes Filhas herdarão, ficando com três níveis na hierarquia

### Atividade 02 - Herança multipla?

- No Java não existe herança múltipla
- Algumas circunstâncias não serão resolvidas pela herança. Deve-se implementar uma 'interface'

### Atividade 03 - A primeira interface:

- 'interface': palavra-chave que substitui 'class'. É uma Classe Abstrata com todos os métodos Abstratos
- Dentro de uma interface não há nada concreto
- 'implements': palavra-chave utilizada para implementar uma interface (semelhante ao 'extends')
- Sintaxe: 'modificador' 'abstract' 'interface' 'NomeDaInterface' { }


## Aula 07 - Praticando herança e interfaces

### Atividade 01 - Revendo a composição:

- A interface, diferente da herança, não faz Reutilização de código, apenas Polimorfismo
- Quando queremos aplicar Reutilização de código e Polimorfismo em nosso projeto, utilizamos a herança
- Quando queremos aplicar Polimorfismo em nosso projeto, utilizamos interfaces
- Quando queremos aplicar Reutilização de código em nosso projeto, utilizamos Composição com Java (criar uma nova Classe e vincular à existente, e esta será instanciada nas Classes que o código era repetido)
- Esse relacionamento entre Classes é chamado de Composição (quando um é criado, o outro também; quando um morre, o outro também)
