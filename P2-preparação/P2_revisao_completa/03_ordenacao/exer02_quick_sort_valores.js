/*
==================================================
ENUNCIADO

Uma empresa precisa ordenar rapidamente os valores:
80, 10, 50, 20, 70.

O sistema deve:
a) armazenar os valores;
b) ordenar usando Quick Sort;
c) mostrar o vetor original;
d) mostrar o vetor ordenado.
==================================================
*/

const { quickSort } = require('../00_classes/OrdenacaoEBusca');

/*
POR QUE USEI QUICK SORT?
Porque ele é um algoritmo eficiente e usa a ideia de pivô:
menores de um lado, maiores do outro.
*/

const valores = [80, 10, 50, 20, 70];
const valoresOrdenados = quickSort(valores);

console.log('Valores originais:', valores);
console.log('Valores ordenados:', valoresOrdenados);
