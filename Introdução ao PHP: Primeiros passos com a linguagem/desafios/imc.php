<?php

/**
 * DESAFIO 3 => Calcular o IMC a partir de altura e peso.
 *  Exibir se o valor está: abaixo, acima ou dentro do ideal recomendado.
 */

$altura = 1.92;
$peso = 85.0;

$imc = $peso / $altura ** 2;
echo "Seu IMC (Ìndice de Massa Corporal) é: $imc" . PHP_EOL;

if ($imc < 18.5) {
    echo "Você está abaixo do peso ideal!";
} else if ($imc >= 18.5 && $imc <= 24.9) {
    echo "Você está com o peso normal!";
} else {
    echo "Você está apresentando sobrepeso!";
}


echo PHP_EOL . PHP_EOL . PHP_EOL;


// Solução do instrutor
$altura = 1.92;
$peso = 85.0;

$imc = $peso / $altura ** 2;
echo "Seu IMC é de $imc. Você está com o IMC ";

if ($imc < 18.5) {
    echo "abaixo";
} else if ($imc < 25) {
    echo "dentro";
} else {
    echo "acima";
}

echo " do recomendado.";
