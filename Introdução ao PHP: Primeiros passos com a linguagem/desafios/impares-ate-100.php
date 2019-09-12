<?php

/**
 * DESAFIO 1 => Programa que exiba todos os números ímpares até 100
 */
for ($i=1; $i <= 99; $i += 2) { 
    echo $i . PHP_EOL;
}


// Solução do instrutor
for ($contador=1; $contador < 100; $contador++) { 
    if ($contador % 2 != 0) {
        echo $contador . PHP_EOL;
    }
}