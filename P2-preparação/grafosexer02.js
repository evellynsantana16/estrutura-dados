/*
==================================================
ENUNCIADO

Uma prefeitura deseja representar as ligações entre bairros.

Existem as seguintes conexões:

Centro ↔ Norte
Centro ↔ Sul
Norte ↔ Leste
Sul ↔ Oeste

O sistema deve:

a) cadastrar todos os bairros;

b) cadastrar todas as conexões;

c) mostrar o grafo;

d) informar quantos bairros existem.
==================================================
*/

// Importa a classe Grafo
const Grafo = require("./Grafo");

// Cria o grafo dos bairros
const bairros = new Grafo();

/*
==================================================
QUESTÃO A

Cadastrar todos os bairros.

Como o problema fala de bairros conectados por caminhos,
usamos GRAFO.

Vértices = bairros
Arestas = ligações entre bairros
==================================================
*/

bairros.adicionarVertice("Centro");
bairros.adicionarVertice("Norte");
bairros.adicionarVertice("Sul");
bairros.adicionarVertice("Leste");
bairros.adicionarVertice("Oeste");

/*
==================================================
QUESTÃO B

Cadastrar todas as conexões entre os bairros.
==================================================
*/

bairros.adicionarAresta("Centro", "Norte");
bairros.adicionarAresta("Centro", "Sul");
bairros.adicionarAresta("Norte", "Leste");
bairros.adicionarAresta("Sul", "Oeste");

/*
==================================================
QUESTÃO C

Mostrar o grafo.
==================================================
*/

console.log("Ligações entre bairros:");
bairros.mostrarGrafo();

/*
==================================================
QUESTÃO D

Informar quantos bairros existem.

Temos:
Centro, Norte, Sul, Leste, Oeste

Total = 5 bairros
==================================================
*/

console.log("Quantidade de bairros:", 5);