/*
==================================================
ENUNCIADO

Uma biblioteca cadastrou os códigos dos livros:
45, 20, 60, 10, 30, 50, 70.

O sistema deve:
a) cadastrar todos os códigos;
b) verificar se o código 30 existe;
c) verificar se o código 99 existe;
d) mostrar os códigos em ordem crescente.
==================================================
*/

const ArvoreBinaria = require('../00_classes/ArvoreBinaria');

/*
POR QUE USEI ABB?
Porque preciso cadastrar valores e depois fazer busca.
A ABB facilita busca usando menor esquerda / maior direita.
*/

const livros = new ArvoreBinaria();

livros.inserir(45);
livros.inserir(20);
livros.inserir(60);
livros.inserir(10);
livros.inserir(30);
livros.inserir(50);
livros.inserir(70);

console.log('Existe código 30?', livros.buscar(30));
console.log('Existe código 99?', livros.buscar(99));

console.log('Códigos em ordem crescente:');
livros.emOrdem();
