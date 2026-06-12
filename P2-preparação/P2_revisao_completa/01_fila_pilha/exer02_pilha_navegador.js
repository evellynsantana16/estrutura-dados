/*
==================================================
ENUNCIADO

Um navegador precisa armazenar o histórico de páginas visitadas.
O usuário acessou:
google.com, github.com, youtube.com.

Ao clicar em voltar, o sistema deve remover a página atual
e retornar para a página anterior.

O sistema deve:
a) cadastrar as páginas visitadas;
b) remover a página atual;
c) mostrar a página fechada;
d) mostrar a página atual depois de voltar.
==================================================
*/

const { Pilha } = require('../00_classes/FilaPilha');

/*
POR QUE USEI PILHA?
Porque o enunciado fala em histórico e botão voltar.
Pilha segue LIFO:
Last In, First Out = último que entra, primeiro que sai.
*/

const historico = new Pilha();

// QUESTÃO A: cadastrar as páginas visitadas.
historico.empilhar('google.com');
historico.empilhar('github.com');
historico.empilhar('youtube.com');

// QUESTÃO B: remover a página atual.
const paginaFechada = historico.desempilhar();

// QUESTÃO C: mostrar a página fechada.
console.log('Página fechada:', paginaFechada);

// QUESTÃO D: mostrar a página atual depois de voltar.
console.log('Página atual:', historico.topo());
