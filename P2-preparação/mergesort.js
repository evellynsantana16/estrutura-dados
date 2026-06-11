//Um sistema precisa ordenar uma grande lista dividindo os dados em partes menores.

// Veio do arquivo 05_OrdenacaoEBusca.js
const { mergeSort } = require("./05_OrdenacaoEBusca");

// Escolhi Merge Sort porque ele divide o vetor e depois mescla ordenado
const notas = [7, 4, 10, 6, 8];

// Ordena dividindo e juntando
const ordenado = mergeSort(notas);

console.log("Notas ordenadas:", ordenado);