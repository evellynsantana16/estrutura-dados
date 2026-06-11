/*
  03_Grafo.js

  ASSUNTO DO SLIDE:
  GRAFOS EM JAVASCRIPT

  QUANDO USAR NA PROVA:
  Use quando o enunciado falar de:
  - cidades ligadas por estradas
  - rede social
  - conexões
  - vértices
  - arestas
  - visitar todos os pontos
  - busca em largura
  - busca em profundidade

  IDEIA:
  Vértice = ponto/nó
  Aresta = ligação entre os pontos

  Aqui usamos LISTA DE ADJACÊNCIA.
  Exemplo:
  {
    A: ["B", "C"],
    B: ["A"],
    C: ["A"]
  }
*/

class Grafo {
  constructor() {
    // Objeto que guarda os vértices e seus vizinhos
    this.adjacencia = {};
  }

  /*
    ADICIONAR VÉRTICE

    QUANDO USAR:
    Quando o enunciado pedir para cadastrar um ponto/cidade/pessoa.

    Se o vértice ainda não existe, cria uma lista vazia.
  */
  adicionarVertice(vertice) {
    if (!this.adjacencia[vertice]) {
      this.adjacencia[vertice] = [];
    }
  }

  /*
    ADICIONAR ARESTA

    QUANDO USAR:
    Quando o enunciado disser que uma cidade liga a outra,
    ou que uma pessoa conecta com outra.

    Este grafo é NÃO DIRECIONADO:
    Se A liga com B, então B também liga com A.
  */
  adicionarAresta(vertice1, vertice2) {
    this.adicionarVertice(vertice1);
    this.adicionarVertice(vertice2);

    this.adjacencia[vertice1].push(vertice2);
    this.adjacencia[vertice2].push(vertice1);
  }

  /*
    REMOVER ARESTA

    Remove a conexão dos dois lados.
  */
  removerAresta(vertice1, vertice2) {
    if (this.adjacencia[vertice1]) {
      this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(
        (v) => v !== vertice2
      );
    }

    if (this.adjacencia[vertice2]) {
      this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(
        (v) => v !== vertice1
      );
    }
  }

  /*
    REMOVER VÉRTICE

    Remove o vértice e todas as arestas ligadas a ele.
  */
  removerVertice(vertice) {
    if (!this.adjacencia[vertice]) {
      return;
    }

    for (let vizinho of this.adjacencia[vertice]) {
      this.removerAresta(vertice, vizinho);
    }

    delete this.adjacencia[vertice];
  }

  /*
    IMPRIMIR GRAFO

    QUANDO USAR:
    Quando o enunciado pedir para mostrar as conexões.
  */
  imprimirGrafo() {
    for (let vertice in this.adjacencia) {
      console.log(vertice + " -> " + this.adjacencia[vertice].join(", "));
    }
  }

  /*
    BUSCA EM LARGURA - BFS

    QUANDO USAR:
    Quando o enunciado falar:
    - visitar os vizinhos primeiro
    - visitar por nível
    - menor quantidade de arestas em grafo sem peso
    - busca em largura

    ESTRUTURA USADA:
    Fila

    RETORNO:
    Retorna a ordem de visita.
  */
  buscaEmLargura(inicio) {
    const visitados = {};
    const fila = [];
    const ordem = [];

    visitados[inicio] = true;
    fila.push(inicio);

    while (fila.length > 0) {
      const atual = fila.shift();
      ordem.push(atual);

      for (let vizinho of this.adjacencia[atual]) {
        if (!visitados[vizinho]) {
          visitados[vizinho] = true;
          fila.push(vizinho);
        }
      }
    }

    return ordem;
  }

  /*
    BUSCA EM PROFUNDIDADE - DFS

    QUANDO USAR:
    Quando o enunciado falar:
    - ir até o final do caminho antes de voltar
    - explorar profundamente
    - busca em profundidade

    ESTRUTURA USADA:
    Recursão ou pilha.
    Aqui está com recursão.
  */
  buscaEmProfundidade(inicio) {
    const visitados = {};
    const ordem = [];

    const visitar = (vertice) => {
      if (!vertice) {
        return;
      }

      visitados[vertice] = true;
      ordem.push(vertice);

      for (let vizinho of this.adjacencia[vertice]) {
        if (!visitados[vizinho]) {
          visitar(vizinho);
        }
      }
    };

    visitar(inicio);
    return ordem;
  }

  /*
    BUSCA EM PROFUNDIDADE COM PILHA

    Use se a prova pedir "sem recursão".
  */
  buscaEmProfundidadeComPilha(inicio) {
    const visitados = {};
    const pilha = [inicio];
    const ordem = [];

    while (pilha.length > 0) {
      const atual = pilha.pop();

      if (!visitados[atual]) {
        visitados[atual] = true;
        ordem.push(atual);

        for (let vizinho of this.adjacencia[atual]) {
          if (!visitados[vizinho]) {
            pilha.push(vizinho);
          }
        }
      }
    }

    return ordem;
  }
}




module.exports = Grafo;
