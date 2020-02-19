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

## Atividade 02 - Preparando o ambiente

- **Ferramentas que serão utilizadas no curso:** [Elasticsearch](https://www.elastic.co/pt/), [Kibana](https://www.elastic.co/pt/kibana) e [cURL](https://curl.haxx.se/).
- Instalações no Ubuntu:
  - **Referências:** [Referência](https://tecadmin.net/setup-elasticsearch-on-ubuntu/) - [Referência 2](https://www.digitalocean.com/community/tutorials/como-instalar-elasticsearch-logstash-e-kibana-elastic-stack-no-ubuntu-18-04-pt) - [Referência 3](https://linuxize.com/post/how-to-install-elasticsearch-on-ubuntu-18-04/)

> Elasticsearch 

- Confirme que os comandos a seguir retornam resultados (ou instale as ferramentas):
  - `java -version`
  - `echo $JAVA_HOME`
- Instalando:
  - `sudo apt-get install apt-transport-https`
  - `wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -`
- Agora configure o repositório apt do seu sistema:
  - `sudo add-apt-repository "deb https://artifacts.elastic.co/packages/7.x/apt stable main"`
- Finalize:
  - `sudo apt-get update`
  - `sudo apt-get install elasticsearch`
- Customize seu Elasticsearch depois de instalado (opcional):
  - `sudo nano /etc/elasticsearch/elasticsearch.yml`
  - Altere estes valores:

```plain
network.host: localhost
cluster.name: myCluster1
node.name: "myNode1"
```

- Para iniciar o Elasticsearch, existem duas opções:
  - Configurá-lo para iniciar assim que o sistema iniciar:
    - `sudo /bin/systemctl enable elasticsearch.service`
  - Ou rodar estes comandos:
    - `sudo systemctl start elasticsearch.service`
    - `sudo systemctl stop elasticsearch.service`
- Teste se tudo ficou ok:
  - `curl -X GET "http://localhost:9200/?pretty"`


> Kibana

- Instale:
  - `sudo apt install kibana`
- Habilite e inicie:
  - `sudo systemctl enable kibana`
  - `sudo systemctl start kibana`

### Atividade 04 - Como Funciona o Elasticsearch

- Após iniciar o serviço, o Elasticsearch usará as seguintes portas:
  - **9200**: fornece o web service REST
  - **9300**: comunicação entre os nós (nodes)
- Acesso ao Elasticsearch (comparado a um banco relacional):
  - *POST* x insert
  - *GET* x select
  - *PUT* x update ou insert (s/ duplicar)
  - *DELETE* x delete

### Atividade 06 -  O Comando HTTP Post

- A partir de agora, já é possível utilizar o console do Kibana para executar comandos no Elasticsearch.
  - Para isso, basta acessar o menu *Dev Tools*.

### Inserindo dados no Elastic

- Obs: no contexto do ElasticSearch, `índice` significa **banco de dados**.
  - E os **"registros"** são chamados de `documentos`.
- A sintaxe dos POST consiste no seguinte:

```json
POST [índice]/_doc
{JSON_COM_DOCUMENTO}

-- Nesse curso:
POST catalogo/_doc
{
  "nome": "João Silva",
  "interesses": ["futebol", "música", "literatura"],
  "cidade": "São Paulo",
  "formação": "Letras",
  "estado": "SP",
  "país": "Brasil",
}
```

### Atividade 07 - Inserindo Documentos com ID Explícito

#### Sintaxe do GET

```json
GET [índice]/_count

-- Nesse curso:
GET catalogo/_count
```

#### Criando um documento com o ID explícito

```json
POST [índice]/_doc/{id}
{JSON_COM_DOCUMENTO}

-- Nesse curso:
POST catalogo/_doc/1
{
    "nome": "João Silva",
    "interesses": ["futebol", "música", "literatura"],
    "cidade": "São Paulo",
    "formação": "Letras",
    "estado": "SP",
    "país": "Brasil"
}
```