/*
==================================================
ARQUIVO: GrafoPonderado.js

GRAFO PONDERADO = aresta com peso.

QUANDO USAR NA PROVA:
- Menor distância.
- Menor custo.
- Menor tempo.
- Rotas com peso.
- Cidades com distância.
- Entregas com tempo/custo.

Peso = distância, tempo, custo, energia etc.

Este grafo é DIRECIONADO por padrão, porque os slides usam A -> B.
==================================================
*/

class GrafoPonderado {
  constructor(direcionado = true) {
    this.direcionado = direcionado;
    this.adjacencia = {};
  }

  adicionarVertice(vertice) {
    if (!this.adjacencia[vertice]) {
      this.adjacencia[vertice] = [];
    }
  }

  adicionarAresta(origem, destino, peso) {
    this.adicionarVertice(origem);
    this.adicionarVertice(destino);

    this.adjacencia[origem].push({ vertice: destino, peso });

    if (!this.direcionado) {
      this.adjacencia[destino].push({ vertice: origem, peso });
    }
  }

  imprimirGrafo() {
    for (const vertice in this.adjacencia) {
      const vizinhos = this.adjacencia[vertice]
        .map((item) => `${item.vertice}(${item.peso})`)
        .join(', ');

      console.log(`${vertice} -> ${vizinhos}`);
    }
  }

  imprimirMatrizAdjacencia() {
    const vertices = Object.keys(this.adjacencia);
    const matriz = [];

    for (let i = 0; i < vertices.length; i++) {
      matriz[i] = [];

      for (let j = 0; j < vertices.length; j++) {
        matriz[i][j] = 0;
      }
    }

    for (let i = 0; i < vertices.length; i++) {
      const origem = vertices[i];

      for (const aresta of this.adjacencia[origem]) {
        const j = vertices.indexOf(aresta.vertice);
        matriz[i][j] = aresta.peso;
      }
    }

    console.log('Vértices:', vertices);
    console.table(matriz);
  }

  bfs(inicio) {
    const visitados = new Set();
    const fila = [];
    const ordem = [];

    visitados.add(inicio);
    fila.push(inicio);

    while (fila.length > 0) {
      const atual = fila.shift();
      ordem.push(atual);

      for (const vizinho of this.adjacencia[atual] || []) {
        if (!visitados.has(vizinho.vertice)) {
          visitados.add(vizinho.vertice);
          fila.push(vizinho.vertice);
        }
      }
    }

    return ordem;
  }

  dfs(inicio) {
    const visitados = new Set();
    const ordem = [];

    const percorrer = (vertice) => {
      visitados.add(vertice);
      ordem.push(vertice);

      for (const vizinho of this.adjacencia[vertice] || []) {
        if (!visitados.has(vizinho.vertice)) {
          percorrer(vizinho.vertice);
        }
      }
    };

    percorrer(inicio);
    return ordem;
  }

  dijkstra(inicio) {
    /*
      Dijkstra calcula o menor custo saindo de um vértice inicial.
      Retorna um objeto com a menor distância até cada vértice.
    */
    const distancias = {};
    const visitados = new Set();
    const vertices = Object.keys(this.adjacencia);

    for (const vertice of vertices) {
      distancias[vertice] = Infinity;
    }

    distancias[inicio] = 0;

    while (visitados.size < vertices.length) {
      let verticeAtual = null;
      let menorDistancia = Infinity;

      for (const vertice of vertices) {
        if (!visitados.has(vertice) && distancias[vertice] < menorDistancia) {
          menorDistancia = distancias[vertice];
          verticeAtual = vertice;
        }
      }

      if (verticeAtual === null) break;

      visitados.add(verticeAtual);

      for (const vizinho of this.adjacencia[verticeAtual]) {
        const novaDistancia = distancias[verticeAtual] + vizinho.peso;

        if (novaDistancia < distancias[vizinho.vertice]) {
          distancias[vizinho.vertice] = novaDistancia;
        }
      }
    }

    return distancias;
  }

  quantidadeVertices() {
    return Object.keys(this.adjacencia).length;
  }

  quantidadeArestas() {
    let total = 0;

    for (const vertice in this.adjacencia) {
      total += this.adjacencia[vertice].length;
    }

    return this.direcionado ? total : total / 2;
  }
}

module.exports = GrafoPonderado;
