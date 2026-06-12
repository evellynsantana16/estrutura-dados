/*
==================================================
SIMULADO MISTO ESTILO PROVA

Este arquivo tem vários mini-enunciados.
A ideia é treinar identificação rápida:
- ordem de chegada = fila
- histórico/desfazer = pilha
- buscar desorganizado = sequencial
- buscar organizado = binária
- organizar árvore = ABB/AVL
- conexões = grafo
- menor custo com peso = grafo ponderado + Dijkstra
==================================================
*/

const { Fila, Pilha } = require('../00_classes/FilaPilha');
const { buscaSequencial, buscaBinaria } = require('../00_classes/OrdenacaoEBusca');
const ArvoreBinaria = require('../00_classes/ArvoreBinaria');
const AVLTree = require('../00_classes/AVLTree');
const Grafo = require('../00_classes/Grafo');
const GrafoPonderado = require('../00_classes/GrafoPonderado');

/*
==================================================
QUESTÃO 1

Um laboratório atende alunos por ordem de chegada:
Ana, Bia, Caio.
Atenda o primeiro.
==================================================
*/
const filaAlunos = new Fila();
filaAlunos.enfileirar('Ana');
filaAlunos.enfileirar('Bia');
filaAlunos.enfileirar('Caio');
console.log('Q1 - Atendido:', filaAlunos.desenfileirar());
console.log('Q1 - Aguardando:');
filaAlunos.imprimir();

/*
==================================================
QUESTÃO 2

Um editor precisa desfazer a última ação:
Digitou título, digitou texto, apagou palavra.
==================================================
*/
const acoes = new Pilha();
acoes.empilhar('Digitou título');
acoes.empilhar('Digitou texto');
acoes.empilhar('Apagou palavra');
console.log('Q2 - Ação desfeita:', acoes.desempilhar());
console.log('Q2 - Ação atual no topo:', acoes.topo());

/*
==================================================
QUESTÃO 3

Placas desorganizadas. Buscar DEF5678.
==================================================
*/
const placas = ['XYZ9999', 'ABC1234', 'DEF5678'];
console.log('Q3 - Posição DEF5678:', buscaSequencial(placas, 'DEF5678'));

/*
==================================================
QUESTÃO 4

Códigos ordenados. Buscar 50.
==================================================
*/
const codigos = [10, 20, 30, 40, 50, 60];
console.log('Q4 - Posição 50:', buscaBinaria(codigos, 50));

/*
==================================================
QUESTÃO 5

IDs organizados em árvore. Mostrar em ordem.
==================================================
*/
const abb = new ArvoreBinaria();
[50, 30, 70, 20, 40].forEach((valor) => abb.inserir(valor));
console.log('Q5 - Raiz ABB:', abb.raiz.valor);
console.log('Q5 - ABB em ordem:', abb.retornarEmOrdem());

/*
==================================================
QUESTÃO 6

Inserir 30, 20, 10 mantendo balanceamento.
==================================================
*/
const avl = new AVLTree();
[30, 20, 10].forEach((valor) => avl.insert(valor));
console.log('Q6 - Raiz AVL:', avl.root.value);
console.log('Q6 - AVL em ordem:', avl.toArrayInOrder());

/*
==================================================
QUESTÃO 7

Bairros conectados sem peso.
==================================================
*/
const grafo = new Grafo();
grafo.adicionarAresta('Centro', 'Norte');
grafo.adicionarAresta('Centro', 'Sul');
console.log('Q7 - BFS Centro:', grafo.buscaEmLargura('Centro'));
console.log('Q7 - DFS Centro:', grafo.buscaEmProfundidade('Centro'));

/*
==================================================
QUESTÃO 8

Rotas com custo. Calcular menor custo de A até C.
==================================================
*/
const rotas = new GrafoPonderado(true);
rotas.adicionarAresta('A', 'B', 2);
rotas.adicionarAresta('B', 'C', 3);
rotas.adicionarAresta('A', 'C', 10);
const menores = rotas.dijkstra('A');
console.log('Q8 - Menor custo A até C:', menores['C']);
