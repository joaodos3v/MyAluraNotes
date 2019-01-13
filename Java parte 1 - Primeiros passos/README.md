# Java parte 1: Primeiros passos

## Aula 01 - O que é Java?

### Atividade 02 - A plataforma Java:

- Portável (diversos OS)
- Fácil
- Segura
- Onipresente (lugares onde está, perde apenas para o Javascript)

#### JVM:

- Problema: Cada aparelho tinha uma linguagem própria (não existia padronização).
- Solução: Escrever um único código-fonte (Java), gerando um "executável" (bytecode/.class), que seria processado por uma "máquina virtual", traduzindo-o para diversas plataformas (hardware/OS).

#### Plataforma JAVA:
  
- Máquina Virtual - JVM
- Bibliotecas - API
- Linguagens (várias linguagens geram bytecode Java)


## Aula 02 - Instalação e o primeiro programa

### Atividade 02 - Instalação do JDK no Windows:

- Instalar JDK pelo site da Oracle
- Configurar variável de ambiente (adicionar à PATH a pasta bin do diretório de instalação do JDK)

### Atividade 05 - Compile e rode seu primeiro programa Java:

- Todo programa Java deve possuir, no mínimo, uma classe e um método (main)
01. Crie um programa com a extensão .java
02. Compile-o pelo prompt/terminal, utilizando o comando `javac 'NomeDoPrograma.java'`
03. Execute-o pelo prompt/terminal, utilizando o comando `java 'NomeDoPrograma'`


## Aula 03 - Começando com Eclipse

### Atividade 01 - Instalando o Eclipse:

- Download: https://www.eclipse.org/downloads/

#### Eclipse IDE:

- Workspace: Diretório que contém vários projetos do mesmo 'interesse'
- View: 'Janela' com diversas ferramentas
- Perspectiva: Conjunto de Views

### Atividade 05 - Nosso programa rodando no Eclipse:

- Criar um novo projeto Java de nome sintaxe-basica
- Criar classe Programa dentro de src
- javaw não abre o prompt/terminal

#### Navigator:

- View Navigator: Mostra o 'File System' do projeto (similar ao Explorer do Windows)
- O Eclipse salva os arquivos .class dentro da pasta do projeto, no diretório bin\


## Aula 04 - Tipos e variáveis

### Atividade 01 - Tipo inteiro: int:

- Criar um novo projeto Java de nome sintaxe-variaveis-e-fluxo
- Criar nova classe TestaVariaveis dentro de src

#### Convenções de código:

- Classe: UpperCamelCase (**Ex.:** NomeDaMinhaClasse)
- Variável: 'tipo' lowerCamelCase (**Ex.:** int nomeDaMinhaVariavel)

### Atividade 04 - Tipo flutuante: double:

- Utiliza-se a palavra-chave 'double' para declarar o tipo 'Ponto Flutuante' (decimal)
- Em Java, os números decimais devem ser separados por ponto, nunca por vírgula (**Ex.:** 2.2, 5.55)
- O Java é fortemente tipado, ou seja, você precisa declarar as variáveis e seus tipos para utilizá-las

### Atividade 07 - Conversões e outros tipos:

#### Casting:

- Para converter um double para inteiro deve-se realizar o casting (**Ex.:** int valor = (int) 25.25)
- Em alguns casos, como ao converter double para int, alguns dados serão perdidos

#### Tamanho de variáveis:

- Uma variável de tipo byte aceita números entre -128 e 127 (8 bits)
- Uma variável de tipo short aceita números entre -32,768 e 32,767 (16 bits)
- Uma variável de tipo int aceita números entre -2,147,483,648 e 2,147,483,647 (32 bits)
- Uma variável de tipo long aceita números entre -9,223,372,036,854,775,808 e 9,223,372,036,854,775,807 (64 bits)

- Quando um long ultrapassa o tamanho de um int, deve-se inserir ao final de seu valor a letra 'L' para indicar que o valor ultrapassou o limite do int

#### Curiosidade 0.30000000000000004:

- https://0.30000000000000004.com/

#### Float:

- Ao declarar uma variável do tipo float e atribuir um valor decimal a ela, o Java reconhece esse valor decimal como double. Por isso, deve-se utilizar o literal 'f' sempre que um valor decimal for declarado a uma variável do tipo float (**Ex.:** float pontoFlutuante = 3.14f;)

### Atividade 10 - Para saber mais: Type Casting:

#### Cast implícito/explícito:

| PARA / DE | byte   | short   | char   | int   | long   | float   | double |
| ---       | ---    | ---     | ---    | ---   | ---    | ---     | ---    |
| byte      | ----   | Impl.   | (char) | Impl. | Impl.  | Impl.   | Impl.  |
| short     | (byte) | ----    | (char) | Impl. | Impl.  | Impl.   | Impl.  |
| char      | (byte) | (short) | ----   | Impl. | Impl.  | Impl.   | Impl.  |
| int       | (byte) | (short) | (char) | ----  | Impl.  | Impl.   | Impl.  |
| long      | (byte) | (short) | (char) | (int) | ----   | Impl.   | Impl.  |
| float     | (byte) | (short) | (char) | (int) | (long) | ----    | Impl.  |
| double    | (byte) | (short) | (char) | (int) | (long) | (float) | ----   |

#### Tipos primitivos e seus tamanhos:

| TIPO    | TAMANHO |
| ---     | ---     |
| boolean | 1 bit   |
| byte    | 1 byte  |
| short   | 2 bytes |
| char    | 2 bytes |
| int     | 4 bytes |
| float   | 4 bytes |
| long    | 8 bytes |
| double  | 8 bytes |


## Aula 05 - Trabalhando com caracteres

### Atividade 01 - Char e String:

- O char, internamente, guarda um número
- Utilizando a tabela ASCII, em números decimais, esse número é lido como um caractere de 16 bits

### Atividade 04 - Variáveis guardam valores:

#### Atalho main:

- Digite 'main', pressione 'Ctrl + Espaco' e 'Enter'


## Aula 06 - Praticando condicionais

### Atividade 01 - Testes com IF:

#### Atalho System.out.println():

- Digite 'sysout', pressione 'Ctrl + Espaço'

- if ('variavel' 'condicionador' 'valor') { 'codigoTrue' } else { 'codigoFalse' }

#### Dica do Eclipse:

- Duplo clique em qualquer uma das views maximiza-a. Faz-se o mesmo para minimizá-la.

### Atividade 04 - Boolean condicionais:

- **Ex.:** boolean verificacao = numero > 0;
- if ('boolean') { 'codigo' }

### Atividade 08 - Escopo e inicialização de variáveis:

- Escopo: é o 'alcance' que uma variável possui (os lugares onde ela é acessável)
- Uma variável existe apenas dentro do bloco em que ela foi criada
- Uma variável que não foi inicializada ocasiona um erro de compilação


## Aula 07 - Controlando fluxo com laços

### Atividade 01 - Laço com while:

- while ('condicao') { 'codigo'; 'condicao'++; }

### Atividade 06 - Laço com for:

- for ('declaracao/inicializacao'; 'condicao'; 'incrementacao') { 'codigo' }

### Atividade 10 - Mais laços com break:

- No Java, pode-se codificar vários laços aninhados, mas não é considerado uma boa prática pois pode causar problemas de performance, entre outros
- break: encerra a execução do laço mais interno