//Uma empresa precisa ordenar rapidamente uma lista de valores.

// Veio do arquivo 05_OrdenacaoEBusca.js
const { quickSort } = require("./05_OrdenacaoEBusca");

// Escolhi Quick Sort porque é um algoritmo rápido de ordenação
const valores = [80, 10, 50, 20, 70];

// Ordena usando pivô e divisão em menores/maiores
const ordenado = quickSort(valores);

console.log("Valores ordenados:", ordenado);