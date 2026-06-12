/*
==================================================
ENUNCIADO

Um sistema registrou tempos de entrega fora de ordem:
35, 10, 50, 20, 15.

O sistema deve:
a) armazenar os tempos;
b) ordenar usando Merge Sort;
c) mostrar o vetor original;
d) mostrar o vetor ordenado.
==================================================
*/

const { mergeSort } = require('../00_classes/OrdenacaoEBusca');

/*
POR QUE USEI MERGE SORT?
Porque ele divide o vetor em partes menores e depois mescla tudo ordenado.
*/

const tempos = [35, 10, 50, 20, 15];
const temposOrdenados = mergeSort(tempos);

console.log('Tempos originais:', tempos);
console.log('Tempos ordenados:', temposOrdenados);
