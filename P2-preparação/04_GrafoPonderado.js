/*
  04_GrafoPonderado.js

  ASSUNTO DO SLIDE:
  GRAFOS PONDERADOS

  QUANDO USAR NA PROVA:
  Use quando o enunciado falar de:
  - grafo ponderado
  - peso
  - custo
  - distância
  - tempo de viagem
  - energia
  - menor caminho
  - Dijkstra
  - matriz de adjacência com peso

  IDEIA:
  Grafo ponderado é um grafo onde a aresta tem um valor.

  Exemplo:
  Jau -> Bauru com distância 58
*/

class GrafoPonderado {
  constructor() {
    this.adjacencia = {};
  }

  /*
    ADICIONAR VÉRTICE
  */
  adicionarVertice(vertice) {
    if (!this.adjacencia[vertice]) {
      this.adjacencia[vertice] = [];
    }
  }

  /*
    ADICIONAR ARESTA COM PESO

    Este grafo é NÃO DIRECIONADO:
    Se Jau liga Bauru com peso 58,
    Bauru também liga Jau com peso 58.
  */
  adicionarAresta(vertice1, vertice2, peso) {
    this.adicionarVertice(vertice1);
    this.adicionarVertice(vertice2);

    this.adjacencia[vertice1].push({ no: vertice2, peso: peso });
    this.adjacencia[vertice2].push({ no: vertice1, peso: peso });
  }

  /*
    IMPRIMIR GRAFO

    Mostra:
    Jau -> Bauru(58), Bariri(32)
  */
  imprimirGrafo() {
    for (let vertice in this.adjacencia) {
      const conexoes = this.adjacencia[vertice]
        .map((aresta) => aresta.no + "(" + aresta.peso + ")")
        .join(", ");

      console.log(vertice + " -> " + conexoes);
    }
  }

  /*
    BUSCA EM LARGURA

    Atenção:
    BFS visita os vértices.
    Ela NÃO calcula menor distância com peso.
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

      for (let aresta of this.adjacencia[atual]) {
        const vizinho = aresta.no;

        if (!visitados[vizinho]) {
          visitados[vizinho] = true;
          fila.push(vizinho);
        }
      }
    }

    return ordem;
  }

  /*
    BUSCA EM PROFUNDIDADE

    Também visita os vértices.
    Não calcula menor caminho com peso.
  */
  buscaEmProfundidade(inicio) {
    const visitados = {};
    const ordem = [];

    const visitar = (vertice) => {
      visitados[vertice] = true;
      ordem.push(vertice);

      for (let aresta of this.adjacencia[vertice]) {
        const vizinho = aresta.no;

        if (!visitados[vizinho]) {
          visitar(vizinho);
        }
      }
    };

    visitar(inicio);
    return ordem;
  }

  /*
    DIJKSTRA

    QUANDO USAR:
    Quando o enunciado pedir:
    - menor caminho
    - menor custo
    - menor distância
    - caminho mais barato
    - rota com menor energia

    O QUE RETORNA:
    - distancias: menor custo do início até cada vértice
    - anteriores: de onde veio para formar o melhor caminho
  */
  dijkstra(inicio) {
    const distancias = {};
    const anteriores = {};
    const naoVisitados = new Set();

    // Prepara todos os vértices
    for (let vertice in this.adjacencia) {
      distancias[vertice] = Infinity;
      anteriores[vertice] = null;
      naoVisitados.add(vertice);
    }

    // Distância do início até ele mesmo é 0
    distancias[inicio] = 0;

    while (naoVisitados.size > 0) {
      let atual = null;

      // Escolhe o vértice ainda não visitado com menor distância
      for (let vertice of naoVisitados) {
        if (atual === null || distancias[vertice] < distancias[atual]) {
          atual = vertice;
        }
      }

      // Se ainda está infinito, não há mais caminho possível
      if (distancias[atual] === Infinity) {
        break;
      }

      naoVisitados.delete(atual);

      // Atualiza as distâncias dos vizinhos
      for (let aresta of this.adjacencia[atual]) {
        const vizinho = aresta.no;
        const peso = aresta.peso;

        const novaDistancia = distancias[atual] + peso;

        if (novaDistancia < distancias[vizinho]) {
          distancias[vizinho] = novaDistancia;
          anteriores[vizinho] = atual;
        }
      }
    }

    return { distancias, anteriores };
  }

  /*
    GERAR CAMINHO

    QUANDO USAR:
    Quando a questão pedir:
    "mostre por onde passa"
    "mostre a rota até o destino"

    Precisa usar depois do dijkstra.
  */
  gerarCaminho(anteriores, destino) {
    const caminho = [];
    let atual = destino;

    while (atual !== null) {
      caminho.unshift(atual);
      atual = anteriores[atual];
    }

    return caminho;
  }

  /*
    MATRIZ DE ADJACÊNCIA

    QUANDO USAR:
    Quando o enunciado pedir matriz.

    Se tem ligação, coloca o peso.
    Se não tem, coloca 0.
  */
  gerarMatrizAdjacencia() {
    const vertices = Object.keys(this.adjacencia);
    const matriz = [];

    for (let i = 0; i < vertices.length; i++) {
      matriz[i] = [];

      for (let j = 0; j < vertices.length; j++) {
        matriz[i][j] = 0;
      }
    }

    for (let i = 0; i < vertices.length; i++) {
      const vertice = vertices[i];

      for (let aresta of this.adjacencia[vertice]) {
        const coluna = vertices.indexOf(aresta.no);
        matriz[i][coluna] = aresta.peso;
      }
    }

    return { vertices, matriz };
  }

  imprimirMatrizAdjacencia() {
    const resultado = this.gerarMatrizAdjacencia();

    console.log("Vértices:", resultado.vertices);
    console.table(resultado.matriz);
  }
}

/*
  EXEMPLO DE TESTE

  Enunciado parecido:
  "Uma cidade liga a outra com distâncias e queremos o menor caminho."
*/
const grafoPonderado = new GrafoPonderado();

grafoPonderado.adicionarAresta("Jau", "Bauru", 58);
grafoPonderado.adicionarAresta("Jau", "Bariri", 32);
grafoPonderado.adicionarAresta("Bariri", "Ibitinga", 41);
grafoPonderado.adicionarAresta("Bauru", "Marilia", 100);
grafoPonderado.adicionarAresta("Ibitinga", "Marilia", 80);

console.log("Grafo ponderado:");
grafoPonderado.imprimirGrafo();

const resultado = grafoPonderado.dijkstra("Jau");
console.log("Distâncias:", resultado.distancias);

const caminho = grafoPonderado.gerarCaminho(resultado.anteriores, "Marilia");
console.log("Caminho de Jau até Marilia:", caminho);

console.log("Matriz de adjacência:");
grafoPonderado.imprimirMatrizAdjacencia();

module.exports = { GrafoPonderado };
