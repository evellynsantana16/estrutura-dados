/*
==================================================
ENUNCIADO

Na Cidade dos Gnomos, ruas conectam casas mágicas com distâncias encantadas.

Ruas mágicas:
A → B (3)
A → C (2)
B → D (4)
C → D (1)
D → E (5)

O sistema deve:
a) criar o grafo ponderado;
b) imprimir a lista de adjacência;
c) imprimir a matriz de adjacência;
d) usar DFS, BFS e Dijkstra a partir da Casa A.
==================================================
*/

const GrafoPonderado = require('../00_classes/GrafoPonderado');

/*
POR QUE USEI GRAFO PONDERADO?
Porque cada ligação tem um peso/distância.
Quando aparece menor caminho, menor distância, menor custo ou menor tempo,
o método clássico é Dijkstra.
*/

const casas = new GrafoPonderado(true); // true = direcionado, igual A -> B.

casas.adicionarAresta('A', 'B', 3);
casas.adicionarAresta('A', 'C', 2);
casas.adicionarAresta('B', 'D', 4);
casas.adicionarAresta('C', 'D', 1);
casas.adicionarAresta('D', 'E', 5);

console.log('Lista de adjacência:');
casas.imprimirGrafo();

console.log('\nMatriz de adjacência:');
casas.imprimirMatrizAdjacencia();

console.log('DFS a partir de A:', casas.dfs('A'));
console.log('BFS a partir de A:', casas.bfs('A'));

const distancias = casas.dijkstra('A');
console.log('Menores distâncias a partir de A:', distancias);
console.log('Menor distância de A até E:', distancias['E']);
