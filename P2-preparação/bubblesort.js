//Uma loja recebeu códigos fora de ordem. Ordene em ordem crescente.

// Veio do arquivo 05_OrdenacaoEBusca.js
const { bubbleSort } = require("./05_OrdenacaoEBusca");

// Escolhi Bubble Sort porque o enunciado pediu ordenar
const codigos = [35, 10, 40, 20, 15];

// A função organiza do menor para o maior
const ordenado = bubbleSort(codigos);

console.log("Códigos ordenados:", ordenado);