/*
==================================================
ENUNCIADO

Uma empresa deseja armazenar os IDs dos funcionários de forma organizada
para facilitar consultas futuras.

IDs cadastrados:
50, 30, 70, 20, 40, 60, 80.

O sistema deve:
a) cadastrar todos os IDs;
b) mostrar a raiz da estrutura;
c) mostrar os IDs em ordem crescente;
d) informar em qual lado do nó 70 o valor 60 foi inserido.
==================================================
*/

const ArvoreBinaria = require('../00_classes/ArvoreBinaria');

/*
POR QUE USEI ABB?
Porque o enunciado fala em armazenar valores de forma organizada.
Na ABB, valores menores vão para esquerda e maiores para direita.
*/

const funcionarios = new ArvoreBinaria();

// QUESTÃO A: cadastrar todos os IDs.
funcionarios.inserir(50);
funcionarios.inserir(30);
funcionarios.inserir(70);
funcionarios.inserir(20);
funcionarios.inserir(40);
funcionarios.inserir(60);
funcionarios.inserir(80);

// QUESTÃO B: mostrar a raiz.
console.log('Raiz:', funcionarios.raiz.valor);

// QUESTÃO C: mostrar em ordem crescente.
console.log('Funcionários em ordem crescente:');
funcionarios.emOrdem();

// QUESTÃO D: lado do 60 em relação ao 70.
// 60 > 50, então vai para direita da raiz.
// 60 < 70, então vai para esquerda do 70.
console.log('O valor 60 foi inserido à esquerda do nó 70.');
