/*
==================================================
ARQUIVO: Grafo.js

GRAFO NÃO PONDERADO.

QUANDO USAR NA PROVA:
- Conexões sem peso.
- Cidades ligadas por estrada sem distância.
- Pessoas conectadas em rede social.
- Salas ligadas por corredores.

PALAVRAS-CHAVE:
conexão, ligação, caminho, rota, rede, vértice, aresta.

Vértice = ponto/cidade/pessoa/sala.
Aresta = ligação entre vértices.
==================================================
*/

class Grafo {
  constructor() {
    this.adjacencia = {};
  }

  adicionarVertice(vertice) {
    if (!this.adjacencia[vertice]) {
      this.adjacencia[vertice] = [];
    }
  }

  adicionarAresta(vertice1, vertice2) {
    // Grafo não direcionado: se A liga B, B liga A.
    this.adicionarVertice(vertice1);
    this.adicionarVertice(vertice2);

    if (!this.adjacencia[vertice1].includes(vertice2)) {
      this.adjacencia[vertice1].push(vertice2);
    }

    if (!this.adjacencia[vertice2].includes(vertice1)) {
      this.adjacencia[vertice2].push(vertice1);
    }
  }

  imprimirGrafo() {
    for (const vertice in this.adjacencia) {
      console.log(`${vertice} -> ${this.adjacencia[vertice].join(', ')}`);
    }
  }

  quantidadeVertices() {
    return Object.keys(this.adjacencia).length;
  }

  quantidadeArestas() {
    let total = 0;

    for (const vertice in this.adjacencia) {
      total += this.adjacencia[vertice].length;
    }

    return total / 2; // Divide por 2 porque grafo não direcionado conta A-B e B-A.
  }

  buscaEmLargura(inicio) {
    /*
      BFS = Busca em Largura.
      QUANDO USAR:
      - Visitar por camadas.
      - Menor número de passos em grafo sem peso.

      ESTRUTURA POR TRÁS:
      - Fila.
    */
    const visitados = new Set();
    const fila = [];
    const ordem = [];

    visitados.add(inicio);
    fila.push(inicio);

    while (fila.length > 0) {
      const atual = fila.shift();
      ordem.push(atual);

      for (const vizinho of this.adjacencia[atual] || []) {
        if (!visitados.has(vizinho)) {
          visitados.add(vizinho);
          fila.push(vizinho);
        }
      }
    }

    return ordem;
  }

  buscaEmProfundidade(inicio) {
    /*
      DFS = Busca em Profundidade.
      QUANDO USAR:
      - Ir o mais fundo possível antes de voltar.
      - Labirinto, detectar caminho, explorar tudo.

      ESTRUTURA POR TRÁS:
      - Pilha ou recursão.
    */
    const visitados = new Set();
    const ordem = [];

    const dfs = (vertice) => {
      visitados.add(vertice);
      ordem.push(vertice);

      for (const vizinho of this.adjacencia[vertice] || []) {
        if (!visitados.has(vizinho)) {
          dfs(vizinho);
        }
      }
    };

    dfs(inicio);
    return ordem;
  }
}

module.exports = Grafo;
