/*Uma empresa de logística mantém um sistema para representar os centros de distribuição 
espalhados pelo estado.

Cada centro pode possuir ligação direta com outros centros, permitindo a transferência de mercadorias.

Implemente uma estrutura que permita:

cadastrar novos centros de distribuição;
criar ligações entre dois centros;
exibir todas as conexões cadastradas*/

const Grafo = require("./03_Grafo")

const grafo = new Grafo ();

grafo.adicionarAresta("Jau", "Bauru");
grafo.adicionarAresta("Jau", "Bariri");
grafo.adicionarAresta("Bariri", "Ibitinga");
grafo.adicionarAresta("Bauru", "Marilia");

console.log("Grafo:");
grafo.imprimirGrafo();

console.log("BFS a partir de Jau:");
console.log(grafo.buscaEmLargura("Jau"));

console.log("DFS a partir de Jau:");
console.log(grafo.buscaEmProfundidade("Jau"));

