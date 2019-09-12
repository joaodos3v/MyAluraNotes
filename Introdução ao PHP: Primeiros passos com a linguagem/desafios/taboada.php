<?php

/**
 * DESAFIO 2 => Exibir a taboada de um número.
 *  O número estará armazenado em uma variável qualquer e, a partir desse número, exibir de 1 até 9 o resultado da multiplicação desse número.
 */

 $numero = 4;
 for ($i=1; $i <= 9; $i++) { 
     $multiplicacao = $numero * $i;
     echo "$numero x $i = $multiplicacao" . PHP_EOL;
 }