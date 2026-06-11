/*
  01_ArvoreBinaria.js

  ASSUNTO DO SLIDE:
  ÁRVORES BINÁRIAS I

  QUANDO USAR NA PROVA:
  Use este arquivo quando o enunciado falar de:
  - árvore binária
  - árvore binária de busca
  - inserir valores
  - buscar um valor
  - percurso em ordem
  - imprimir valores em ordem crescente

  IDEIA:
  Em uma árvore binária de busca:
  - valores MENORES ficam na esquerda
  - valores MAIORES ficam na direita

  Exemplo:
        50
       /  \
     30    70
*/

class No {
  constructor(valor) {
    this.valor = valor;       // guarda o valor do nó
    this.esquerda = null;     // filho da esquerda
    this.direita = null;      // filho da direita
  }
}

class ArvoreBinaria {
  constructor() {
    this.raiz = null; // primeiro nó da árvore
  }

  /*
    MÉTODO INSERIR

    QUANDO USAR:
    Quando o enunciado pedir para cadastrar/inserir valores na árvore.

    O QUE FAZ:
    - Se a árvore estiver vazia, cria a raiz.
    - Se não estiver vazia, chama inserirNo para achar o local correto.
  */
  inserir(valor) {
    const novoNo = new No(valor);

    if (this.raiz === null) {
      this.raiz = novoNo;
    } else {
      this.inserirNo(this.raiz, novoNo);
    }
  }

  /*
    MÉTODO AUXILIAR INSERIRNO

    O QUE FAZ:
    Compara o novo valor com o nó atual.

    Se for menor:
    - tenta colocar na esquerda.

    Se for maior:
    - tenta colocar na direita.
  */
  inserirNo(noAtual, novoNo) {
    if (novoNo.valor < noAtual.valor) {
      if (noAtual.esquerda === null) {
        noAtual.esquerda = novoNo;
      } else {
        this.inserirNo(noAtual.esquerda, novoNo);
      }
    } else {
      if (noAtual.direita === null) {
        noAtual.direita = novoNo;
      } else {
        this.inserirNo(noAtual.direita, novoNo);
      }
    }
  }

  /*
    MÉTODO BUSCAR

    QUANDO USAR:
    Quando o enunciado pedir:
    "verifique se o código existe"
    "procure um valor"
    "retorne true ou false"

    O QUE FAZ:
    Começa pela raiz e vai descendo:
    - se achou, retorna true
    - se o valor for menor, vai para esquerda
    - se o valor for maior, vai para direita
    - se chegou em null, retorna false
  */
  buscar(valor) {
    return this.buscarNo(this.raiz, valor);
  }

  buscarNo(noAtual, valor) {
    if (noAtual === null) {
      return false;
    }

    if (valor === noAtual.valor) {
      return true;
    }

    if (valor < noAtual.valor) {
      return this.buscarNo(noAtual.esquerda, valor);
    }

    return this.buscarNo(noAtual.direita, valor);
  }

  /*
    PERCURSO EM ORDEM

    QUANDO USAR:
    Quando o enunciado pedir para mostrar os valores em ordem crescente.

    ORDEM:
    esquerda -> raiz -> direita
  */
  emOrdem(noAtual = this.raiz) {
    if (noAtual !== null) {
      this.emOrdem(noAtual.esquerda);
      console.log(noAtual.valor);
      this.emOrdem(noAtual.direita);
    }
  }

  /*
    PERCURSO PRÉ-ORDEM

    ORDEM:
    raiz -> esquerda -> direita
  */
  preOrdem(noAtual = this.raiz) {
    if (noAtual !== null) {
      console.log(noAtual.valor);
      this.preOrdem(noAtual.esquerda);
      this.preOrdem(noAtual.direita);
    }
  }

  /*
    PERCURSO PÓS-ORDEM

    ORDEM:
    esquerda -> direita -> raiz
  */
  posOrdem(noAtual = this.raiz) {
    if (noAtual !== null) {
      this.posOrdem(noAtual.esquerda);
      this.posOrdem(noAtual.direita);
      console.log(noAtual.valor);
    }
  }

  /*
    RETORNAR EM ARRAY ORDENADO

    QUANDO USAR:
    Quando a prova pedir para RETORNAR a lista, e não só imprimir.
  */
  retornarEmOrdem() {
    const resultado = [];

    const percorrer = (noAtual) => {
      if (noAtual !== null) {
        percorrer(noAtual.esquerda);
        resultado.push(noAtual.valor);
        percorrer(noAtual.direita);
      }
    };

    percorrer(this.raiz);
    return resultado;
  }
}

/*
  EXEMPLO DE TESTE
*/
const arvore = new ArvoreBinaria();

arvore.inserir(50);
arvore.inserir(30);
arvore.inserir(70);
arvore.inserir(20);
arvore.inserir(40);

console.log("Busca pelo valor 40:", arvore.buscar(40));
console.log("Busca pelo valor 99:", arvore.buscar(99));

console.log("Percurso em ordem:");
arvore.emOrdem();

console.log("Array em ordem:", arvore.retornarEmOrdem());

module.exports = { No, ArvoreBinaria };
