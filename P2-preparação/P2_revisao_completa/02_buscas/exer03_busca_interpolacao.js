/*
==================================================
ENUNCIADO

Uma loja possui códigos numéricos ordenados e bem distribuídos:
10, 20, 30, 40, 50, 60, 70, 80, 90.

O sistema precisa localizar o código 70 usando busca por interpolação.

O sistema deve:
a) armazenar os códigos;
b) buscar o código 70;
c) mostrar a posição encontrada;
d) testar um valor inexistente.
==================================================
*/

const { buscaInterpolacao } = require('../00_classes/OrdenacaoEBusca');

/*
POR QUE USEI BUSCA POR INTERPOLAÇÃO?
Porque os dados são numéricos, ordenados e distribuídos de forma regular.
Ela tenta estimar onde o valor está.
*/

const codigos = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const posicaoEncontrada = buscaInterpolacao(codigos, 70);
console.log('Posição do código 70:', posicaoEncontrada);

const posicaoInexistente = buscaInterpolacao(codigos, 75);
console.log('Posição do código 75:', posicaoInexistente);
