# HTML5 e CSS3 I: Suas primeiras páginas da Web

## Aula 01 - Introdução ao HTML

### Atividade 01 - Iniciando com HTML:

- Começo de tudo: conteúdo. Após ter o conteúdo é que começa o desenvolvimento das telas
- Pode-se iniciar formatando o texto em um editor de texto. Isso ajuda a visualizar melhor o resultado desejado

#### Tag:
- bloco de construção da linguagem HTML que define propriedades para seu conteúdo
- **Ex.:** &lt;h1&gt;&lt;/h1&gt;

#### Codificação de texto: 

- Cada caractere possui um reconhecimento binário pelo computador
- Existem várias codificações diferentes, que não seguem os mesmos binários para cada caractere. Por isso, deve-se definir qual a codificação está sendo utilizada para o computador representar o binário correto para cada caractere
- A codificação "UTF-8" é uma das mais modernas; é universal, ou seja, é reconhecida em todos países

#### Atributo:

- atributo: é utilizado dentro de uma tag. Serve para determinar uma característica de uma tag
- **Ex.:** &lt;meta **charset**="UTF-8"&gt;

- A tag &lt;link&gt; serve para definir o ícone da aba com os atributos **rel** e **href**

#### Metainformações:

- Informações que o navegador mostra para o usuário
- A tag que separa essas informações do conteúdo da página é a tag &lt;head&gt;

#### Conteúdo:

- &lt;body&gt; é a tag utilizada para definir o conteúdo da página

#### Página HTML:

- A tag &lt;html&gt; comunica ao navegador que a &lt;head&gt; e o &lt;body&gt; pertencem à mesma página

#### DOCTYPE:

- O 'DOCTYPE' **não é uma tag**, serve para especificar a versão do HTML
- Utiliza-se &lt;!DOCTYPE html&gt; para comunicar ao navegador que a versão do HTML é a última disponível (atualmente a versão 5)
- DOCTYPE não vem do HTML, mas do SGML (Standard Generalized Markup Language)


## Aula 02 - Introdução a CSS

### Atividade 01 - Começando com CSS:

- Pode-se alterar o visual de uma tag utilizando o atributo **style**
- Isso não é uma boa prática, pois se houver muitas tags na página deverá ser inserido um **style** em cada tag, dificultando também possíveis alterações na página
- Para facilitar, é possível criar uma tag 'style' dentro da tag 'head' que aplicará alterações no visual de todas as tags definidas dentro dela

#### Seletor:

- Elemento que possui regras que serão aplicadas em todas "instâncias" desse elemento
- **Ex.:** 'tag' { 'regra': 'valor'; } ou h1 { font-size: 60px; }

- Para reutilizar o 'style' em outras páginas, deve-se criar um arquivo de formato '.css' e "chamar" esse arquivo em páginas HTML pela tag 'link' com o atributo **rel**="stylesheet" e **href**="nomeArquivo.css"

#### Cores:

- As cores podem ser definidas por 'rgb('red', 'green', 'blue');' ou pelo hexadecimal '#redgreenblue;'
- **Ex.:** 'rgb(250, 255, 250);' ou '#FAFFFA;'

- Centralizar texto: **text-align**

#### Fonte:

- Alterar fonte: **font-family**
- Pode-se inserir uma fonte específica (**Ex.:** "Arial") ou uma família (**Ex.:** sans-serif). A família não necessita estar entre aspas
- Também poderão ser definidas várias fontes diferentes, separando-as por vírgula (**Ex.:** "Arial", sans-serif)

### Atividade 08 - Google Fonts:

- A Google disponibiliza o serviço chamado [Google Fonts](https://fonts.google.com/), que possui várias fontes para serem utilizadas no desenvolvimento de sites


## Aula 03 - Aprofundando no HTML

### Atividade 01 - Aprofundando no HTML:

#### Link relativo:

Qualquer link que não comece com 'http' é considerado um link relativo. Exemplos de links relativos:
- Endereço a partir do local do arquivo atual: href="blog.html"
- Endereço após o domínio: href="/projeto/blog.html"
- Endereço após o protocolo: href="//alura.com.br/projeto/blog.html"

#### Tags:

Um HTML semântico melhora a acessibilidade do site para todos. Algumas tags que auxiliam na semântica do HTML são:
- &lt;nav&gt;: é uma tag que auxilia na navegação da página. Agrega semântica ao HTML, facilitando também para os buscadores (google e afins) encontrar conteúdos específicos em seu site
- &lt;main&gt;: conteúdo principal da página
- &lt;header&gt;: cabeçalho da página ou de uma região dela
- &lt;footer&gt;: rodapé da página ou de uma região dela
- &lt;aside&gt;: conteúdo auxiliar ao conteúdo principal, como links relacionados ao conteúdo
- &lt;article&gt;: conteúdo que, por si só, já tem um sentido completo, como um post de um blog ou uma notícia
- &lt;section&gt;: parte/seção de uma página ou texto
- &lt;blockquote&gt;: indica uma citação
- &lt;cite&gt;: indica o autor de uma citação (deve ser utilizado dentro de um &lt;blockquote&gt;)

- Pode-se definir os atributos de elementos que estão dentro de outros elementos utilizando um arquivo .css. É necessário separá-los por 'Espaco' para determinar, hierarquicamente, qual elemento (o último da hierarquia) receberá os atributos definidos naquele seletor

#### Entidades:

O HTML nos permite especificar caracteres especiais por meio das **entidades**. Algumas delas são:
- `&euro;`: &euro;
- `&yen;`: &yen;
- `&pound;`: &pound;
- `&reg;`: &reg;
- `&hearts;`: &hearts;


## Aula 04 - O navegador trabalhando a nosso favor

### Atividade 01 - Primeiros passos com o Console do Navegador:

- É possível utilizar o Console para testar facilmente alterações no HTML e CSS, além de encontrar bugs com facilidade
- Abrir: 'F12' ou 'Ctrl + Shift + I'

#### Network:

- Requisições que o browser faz para carregar a página;

#### Elements:

- Mostra a estrutura do HTML da página
- Ao selecionar um elemento ('tag'), é mostrado o 'style' do elemento selecionado
- Analisando a janela Elements, pode-se encontrar erros no HTML
- Analisando a janela 'style' (ao selecionar um elemento), pode-se encontrar erros no CSS
- Pode-se testar o HTML diretamente no navegador, alterando o estilo de um elemento na aba 'style'
- Na janela 'style', pode-se testar rapidamente uma alteração no estilo utilizando o seletor 'element.style'


## Aula 05 - Aprimorando o layout

### Atividade 01 - Melhorando o Layout:

- 'padding': espaço dentro do elemento
- 'margin': espaço fora do elemento
- 'border': adiciona uma borda no elemento. O 'border' fica entre o 'padding' e o 'margin'
- A aba 'Computed' que fica ao lado direito da aba 'Elements' do Console do Navegador mostra como o navegador interpreta o 'box model' do elemento
- 'box model': mostra o 'padding', 'border', 'margin' e o conteúdo do elemento
- 'box-sizing': define o tamanho do elemento, onde:
	1. border-box: mede o tamanho do elemento a partir das bordas
	2. content-box: mede o tamanho do conteúdo do elemento
	3. padding-box: mede o tamanho do elemento a partir do padding

### Atividade 05 - Espaçamento no texto:

- 'line-height': controla o espaço entre as linhas de texto
- **Ex.:** line-height: 30px (tamanho do espaçamento entre as linhas do texto)
- **Ex.:** line-height: 1.5 (aumenta em 50% o tamanho do espaçamento entre as linhas do texto)


## Aula 06 - Construindo uma base sólida

### Atividade 01 - Construindo uma base sólida:

#### base.css/reset.css:

É um padrão de arquivo que remove o estilo padrão dos navegadores
- Deve ser o primeiro estilo importado da página, pois serve como base para os outros estilos
- Alguns arquivos 'reset' populares são:
	1. Eric Meyer: arquivo bem pequeno; deixa todos os elementos com mesma aparência e tamanho de fonte; usa a fonte padrão do navegador https://meyerweb.com/eric/tools/css/reset/
	2. Normalize: arquivo um pouco maior, mas com ajustes mais finos; já define fontes e tamanhos padrão para alguns elementos; corrige diversas inconsistências entre navegadores http://necolas.github.io/normalize.css/
	3. YUI (Yahoo!): arquivo bem pequeno, com um efeito bem parecido com o do Eric Meyer, mas com alguns ajustes mais específicos

### Atividade 06 - Outros resets:

- Uma das diferenças mais notáveis entre o Normalize e o reset do Eric Meyer é que o Normalize não apenas remove o estilo padrão do navegador como também define alguns estilos úteis, como tamanhos de fontes para cabeçalhos e estilos de fontes para elementos &lt;em&gt; e &lt;strong&gt;.
- Note que esses padrões não são mais dependentes de navegador: o Normalize que os define. Assim, qualquer navegador deve mostrar nossa página do mesmo jeito.
- O Normalize também cuida de alguns detalhes mais avançados que o reset que estamos usando não cuida. Isso tem seu preço: o Normalize tem 7 KB, enquanto o reset do Eric Meyer tem apenas 1 KB. Assim, cada um tem suas vantagens e desvantagens.


## Aula 07 - Um pouquinho de posicionamento

### Atividade 01 - Um pouquinho de posicionamento:

- 'display': determina o posicionamento do elemento:
	1. 'inline': alinha com o resto do texto (não tem tamanho regulável)
	2. 'block': empilha com o resto dos elementos
	3. 'inline-block': alinha com o resto do texto, mas em formato de blocos (tem tamanho regulável)


## Aula 08 - Mais seletores

### Atividade 01 - Usando Mais Seletores:

#### Id:
- 'id': nome do elemento. Serve como identificador de um elemento. Não pode repetir
- '#': seletor de 'id'
- **Ex.:** #nome-do-id { }

#### Class:
- 'class': "categoria" de elementos. Pode repetir em vários elementos
- '.': seletor de 'class'
- Pode-se combinar várias 'class' no mesmo elemento para formar o estilo das páginas

### Atividade 09 - Mais de um seletor por elemento:

O navegador escolhe o estilo dos seletores mais específicos quando há conflito. Se não há conflito entre o estilo definido em dois seletores diferentes, ou seja, se a mesma propriedade não tem valores diferentes em cada seletor, tanto propriedades do seletor menos específico como do mais específico serão utilizadas.

### Atividade 11 - Conflito entre classe e id:

O seletor de id é muito mais específico que o seletor de classe ou de tag. Por isso, o estilo dele prevalece.


## Aula 09 - Nem tudo é o que parece

### Atividade 01 - Nem tudo é o que parece:

- 'text-transform': pode converter a caixa do texto (maiúsculas/minúsculas). O efeito disso vai além do visual, pois também auxilia a leitura da página pelo navegador, melhorando sua acessibilidade
- Image replacement: É a ação de adicionar uma imagem pelo CSS, o que aumenta a semântica para com o navegador
- Como fazer:
	1. remover a imagem, adicionando um texto em seu lugar
	2. aplicar uma identação negativa até remover o texto de sua tela (**Ex.:** text-indent: -9999px;)
	3. criar uma classe e adicionar uma imagem (**Ex.:** background-image: url(image.jpg);)
	4. atribuir as classes com as respectivas imagens aos seus links

### Atividade 08 - Outras formas de image replacement:

- 'font-size': 0;
- 'color': transparent;


## Aula 10 - Posicionamento mais a fundo

### Atividade 01 - Posicionamento mais a fundo:

- 'float': retira um elemento do fluxo, fazendo-o "flutuar" ao redor do conteúdo (para os cantos da página)
- O 'float' faz um elemento flutuar ao lado desejado, porém ele continua na mesma posição (altura) que estava anteriormente
- floats em sequência ficam na mesma linha
- 'clear': se o elemento possui um 'float' ao redor dele, "empurra" o 'float' para baixo
- 'clearfix': classe que ajusta páginas com elementos 'float', se tornou um "padrão" pelo uso popular
