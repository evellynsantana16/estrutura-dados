/*
==================================================
ENUNCIADO

Um estacionamento registrou as placas na ordem em que
os veículos chegaram:

XYZ9999
ABC1234
DEF5678
JKL1111
MNO2222

O operador deseja localizar a placa JKL1111.

O sistema deve:

a) armazenar as placas;

b) realizar a busca;

c) mostrar a posição encontrada;

d) mostrar -1 caso a placa não exista.
==================================================
*/

// Importa a função de busca sequencial
const { buscaSequencial } = require("./buscaSequencial");

/*
==================================================
QUESTÃO A

Armazenar as placas.

Como as placas NÃO estão ordenadas,
a busca correta é a busca sequencial.
==================================================
*/

const placas = ["XYZ9999", "ABC1234", "DEF5678", "JKL1111", "MNO2222"];

/*
==================================================
QUESTÃO B

Realizar a busca da placa.
==================================================
*/

const posicao = buscaSequencial(placas, "JKL1111");

/*
==================================================
QUESTÃO C

Mostrar a posição encontrada.

Lembrando:
o vetor começa na posição 0.

0 -> XYZ9999
1 -> ABC1234
2 -> DEF5678
3 -> JKL1111
4 -> MNO2222
==================================================
*/

console.log("Posição encontrada:", posicao);

/*
==================================================
QUESTÃO D

Se a placa não existir, a função deve retornar -1.
==================================================
*/

const testeNaoExiste = buscaSequencial(placas, "AAA0000");

console.log("Resultado quando não existe:", testeNaoExiste);