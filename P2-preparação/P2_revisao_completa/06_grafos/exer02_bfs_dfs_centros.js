/*
==================================================
ENUNCIADO

Uma empresa de logística possui centros de distribuição conectados:
Jaú ↔ Bauru
Jaú ↔ Bariri
Bariri ↔ Ibitinga
Bauru ↔ Marília

O sistema deve:
a) cadastrar as conexões;
b) mostrar o grafo;
c) fazer BFS a partir de Jaú;
d) fazer DFS a partir de Jaú.
==================================================
*/

const Grafo = require('../00_classes/Grafo');

/*
POR QUE USEI GRAFO?
Porque centros estão conectados entre si.

BFS = busca em largura, usa ideia de fila, visita por camadas.
DFS = busca em profundidade, usa recursão/pilha, vai fundo primeiro.
*/

const centros = new Grafo();

centros.adicionarAresta('Jaú', 'Bauru');
centros.adicionarAresta('Jaú', 'Bariri');
centros.adicionarAresta('Bariri', 'Ibitinga');
centros.adicionarAresta('Bauru', 'Marília');

console.log('Grafo dos centros:');
centros.imprimirGrafo();

console.log('BFS a partir de Jaú:', centros.buscaEmLargura('Jaú'));
console.log('DFS a partir de Jaú:', centros.buscaEmProfundidade('Jaú'));
