/*
==================================================
ENUNCIADO

Uma prefeitura deseja representar ligações entre bairros:
Centro ↔ Norte
Centro ↔ Sul
Norte ↔ Leste
Sul ↔ Oeste

O sistema deve:
a) cadastrar todas as conexões;
b) mostrar o grafo;
c) informar quantos bairros existem;
d) informar quantas conexões existem.
==================================================
*/

const Grafo = require('../00_classes/Grafo');

/*
POR QUE USEI GRAFO?
Porque o problema fala de bairros conectados por ligações.
Bairros = vértices.
Conexões = arestas.
*/

const bairros = new Grafo();

// QUESTÃO A: cadastrar conexões.
bairros.adicionarAresta('Centro', 'Norte');
bairros.adicionarAresta('Centro', 'Sul');
bairros.adicionarAresta('Norte', 'Leste');
bairros.adicionarAresta('Sul', 'Oeste');

// QUESTÃO B: mostrar o grafo.
console.log('Grafo dos bairros:');
bairros.imprimirGrafo();

// QUESTÃO C: quantidade de bairros.
console.log('Quantidade de bairros:', bairros.quantidadeVertices());

// QUESTÃO D: quantidade de conexões.
console.log('Quantidade de conexões:', bairros.quantidadeArestas());
