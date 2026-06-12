/*
==================================================
ENUNCIADO

Uma loja possui os códigos de produtos já organizados:
10, 20, 30, 40, 50, 60, 70, 80, 90.

O sistema precisa localizar o código 80 da forma mais eficiente.

O sistema deve:
a) armazenar os códigos;
b) realizar a busca correta;
c) mostrar a posição encontrada;
d) testar um código inexistente e retornar -1.
==================================================
*/

const { buscaBinaria } = require('../00_classes/OrdenacaoEBusca');

/*
POR QUE USEI BUSCA BINÁRIA?
Porque os códigos estão ordenados.
Busca binária só funciona corretamente se a lista estiver organizada.
*/

// QUESTÃO A: armazenar os códigos.
const codigos = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// QUESTÃO B: realizar a busca.
const posicaoEncontrada = buscaBinaria(codigos, 80);

// QUESTÃO C: mostrar a posição.
console.log('Posição do código 80:', posicaoEncontrada);

// QUESTÃO D: testar código inexistente.
const posicaoInexistente = buscaBinaria(codigos, 100);
console.log('Posição do código 100:', posicaoInexistente);
