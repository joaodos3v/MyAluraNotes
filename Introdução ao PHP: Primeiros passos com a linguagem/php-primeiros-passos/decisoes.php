<?php

$idade = 17;
$numeroDePessoas = 1;

echo "Você só pode entrar se tiver a partir de 18 anos ou a partir de 16 anos, acompanhado." . PHP_EOL;

// A condição PRECISA estar entre parênteses
if ($idade >= 18) {
    echo "Você tem $idade anos." . PHP_EOL;
    echo 'Pode entrar';
} else {
    echo "Você só tem $idade anos. Você não pode entrar.";
}

echo PHP_EOL;
echo "Adeus!";