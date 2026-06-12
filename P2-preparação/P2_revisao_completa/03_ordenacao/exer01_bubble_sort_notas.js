/*
==================================================
ENUNCIADO

Uma escola registrou notas fora de ordem:
7, 4, 10, 6, 8.

O sistema deve:
a) armazenar as notas;
b) ordenar usando Bubble Sort;
c) mostrar as notas ordenadas;
d) explicar por que Bubble Sort foi usado.
==================================================
*/

const { bubbleSort } = require('../00_classes/OrdenacaoEBusca');

/*
POR QUE USEI BUBBLE SORT?
Porque o enunciado pede ordenação simples.
Bubble Sort compara elementos vizinhos e troca se estiverem fora de ordem.
*/

const notas = [7, 4, 10, 6, 8];
const notasOrdenadas = bubbleSort(notas);

console.log('Notas originais:', notas);
console.log('Notas ordenadas:', notasOrdenadas);
