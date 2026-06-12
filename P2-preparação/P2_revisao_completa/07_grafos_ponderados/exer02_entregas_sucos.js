/*
==================================================
ENUNCIADO

Um entregador de sucos precisa traçar a melhor rota entre lojas.

Rotas:
A → B (1)
A → C (4)
B → D (2)
C → D (1)
D → E (3)
E → F (2)

O sistema deve:
a) criar o grafo ponderado;
b) listar DFS e BFS a partir de A;
c) calcular a menor distância de A até F;
d) mostrar a lista de adjacência.
==================================================
*/

const GrafoPonderado = require('../00_classes/GrafoPonderado');

/*
POR QUE USEI GRAFO PONDERADO?
Porque as rotas têm tempo/custo/peso.
Para menor distância usamos dijkstra().
*/

const lojas = new GrafoPonderado(true);

lojas.adicionarAresta('A', 'B', 1);
lojas.adicionarAresta('A', 'C', 4);
lojas.adicionarAresta('B', 'D', 2);
lojas.adicionarAresta('C', 'D', 1);
lojas.adicionarAresta('D', 'E', 3);
lojas.adicionarAresta('E', 'F', 2);

console.log('Lista de adjacência:');
lojas.imprimirGrafo();

console.log('DFS a partir de A:', lojas.dfs('A'));
console.log('BFS a partir de A:', lojas.bfs('A'));

const distancias = lojas.dijkstra('A');
console.log('Menores distâncias:', distancias);
console.log('Menor distância de A até F:', distancias['F']);
