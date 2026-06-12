/*
==================================================
ENUNCIADO

Um estacionamento registrou as placas na ordem em que os carros chegaram:
XYZ9999, ABC1234, DEF5678, JKL1111, MNO2222.

O operador deseja localizar a placa JKL1111.

O sistema deve:
a) armazenar as placas;
b) realizar a busca correta;
c) mostrar a posição encontrada;
d) testar uma placa inexistente e retornar -1.
==================================================
*/

const { buscaSequencial } = require('../00_classes/OrdenacaoEBusca');

/*
POR QUE USEI BUSCA SEQUENCIAL?
Porque as placas NÃO estão em ordem alfabética.
Quando os dados estão desorganizados, a busca precisa olhar um por um.
*/

// QUESTÃO A: armazenar as placas.
const placas = ['XYZ9999', 'ABC1234', 'DEF5678', 'JKL1111', 'MNO2222'];

// QUESTÃO B: realizar a busca.
const posicaoEncontrada = buscaSequencial(placas, 'JKL1111');

// QUESTÃO C: mostrar a posição encontrada.
// Lembre: vetor começa em 0.
console.log('Posição da placa JKL1111:', posicaoEncontrada);

// QUESTÃO D: mostrar -1 se não existir.
const posicaoInexistente = buscaSequencial(placas, 'AAA0000');
console.log('Posição da placa AAA0000:', posicaoInexistente);
