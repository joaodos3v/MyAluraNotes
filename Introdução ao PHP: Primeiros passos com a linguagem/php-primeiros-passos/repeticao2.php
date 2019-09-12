<?php

// Possíveis evoluções do arquivo 'repeticao.php'

// É recomendado utilizar o 'for' quando, no início da instrução, sabe-se o limite de execuções daquele bloco de código.
for ($i=1; $i <= 15; $i++) {
    // Para facilitar a leitura de código, é interessante colocar CASOS ESPECIAIS no início da execução. Ou seja, as exceções à regra VEM PRIMEIRO.
    if($i == 13) {
        continue;
    }

    echo "#$i" . PHP_EOL;
}