/*
==================================================
ENUNCIADO

Uma loja possui os códigos de produtos:

10
20
30
40
50
60
70
80
90

O sistema precisa localizar o código 80.

O sistema deve:

a) armazenar os códigos;

b) realizar a busca;

c) mostrar a posição encontrada;

d) mostrar -1 caso o código não exista.
==================================================
*/

// Importa a função de busca binária
const { buscaBinaria } = require("./buscaBinaria");

/*
==================================================
QUESTÃO A

Armazenar os códigos.

Como os códigos já estão ORDENADOS,
podemos usar busca binária.
==================================================
*/

const codigos = [10, 20, 30, 40, 50, 60, 70, 80, 90];

/*
==================================================
QUESTÃO B

Realizar a busca do código 80.
==================================================
*/

const posicao = buscaBinaria(codigos, 80);

/*
==================================================
QUESTÃO C

Mostrar a posição encontrada.

0 -> 10
1 -> 20
2 -> 30
3 -> 40
4 -> 50
5 -> 60
6 -> 70
7 -> 80
8 -> 90
==================================================
*/

console.log("Posição encontrada:", posicao);

/*
==================================================
QUESTÃO D

Se o código não existir, retorna -1.
==================================================
*/

const testeNaoExiste = buscaBinaria(codigos, 100);

console.log("Resultado quando não existe:", testeNaoExiste);