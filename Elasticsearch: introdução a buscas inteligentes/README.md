# Elasticsearch: introdução à buscas inteligentes

## Aula 01 - Introdução ao Elasticsearch

### Atividade 01 - Introdução

- Tudo começa pela busca
  - Essa busca, em muitos casos, é fundamental para a empresa (Marketplaces, Netflix ou mesmo o Google)
  - Além disso, ela pode ir de um simples campo de texto até uma interface mais sofisticada como o Google Maps (buscas são realizadas enquanto o usuário *scrolla* a tela procurando o ponto de destino)
- A busca pode resolver os mais diversos fins:
  - Desde encontrar um restaurante até analisar/corrigir um erro dentro de milhares de linhas de *logs* de uma aplicação

> Tudo isso é a parte visível da busca. A partir disso, é possível pensar: o que está por trás da busca?

- Com o passar do tempo, o volume e a complexidade dos dados analisados aumentou tanto que realizar buscas tornou-se uma dor de cabeça para os profissionais de T.I.
  - Elasticsearch veio para resolver isso e nos ajuda diariamente (aplicativos de navegação, recomendação ou mesmo de encontros)
- O Elasticsearch funciona em cima do Java e faz uso de outra aplicação: [Lucene](https://lucene.apache.org/)
  - Um software de busca que contém uma API para a indexação de documentos, também escrito em Java.
  - Porém, não necessariamente precisa se utilizar Java para usar o Elasticsearch. 
    - Enquanto que em um banco de dados relacional, geralmente utiliza-se a linguagem SQL, no Elasticsearch utiliza-se **comandos HTTP REST**.
- Alguns dos conceitos do Elasticsearch: [Índices](https://www.elastic.co/pt/blog/what-is-an-elasticsearch-index), [Tipos](https://logz.io/blog/elasticsearch-mapping/), [Shards](https://forum.casadocodigo.com.br/t/elasticsearch-o-que-sao-shards/173) e [Réplicas](https://codingexplained.com/coding/elasticsearch/understanding-replication-in-elasticsearch).
