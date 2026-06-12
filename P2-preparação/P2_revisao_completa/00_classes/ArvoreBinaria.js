/*
==================================================
ARQUIVO: ArvoreBinaria.js

ABB = Árvore Binária de Busca.

QUANDO USAR NA PROVA:
- Enunciado fala em inserir/cadastrar valores.
- Precisa manter organizado.
- Precisa buscar valores.
- NÃO fala necessariamente em balanceamento.

REGRA:
- Menor que o nó atual vai para ESQUERDA.
- Maior que o nó atual vai para DIREITA.
==================================================
*/

class No {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
  }
}

class ArvoreBinaria {
  constructor() {
    this.raiz = null;
  }

  inserir(valor) {
    const novoNo = new No(valor);

    if (this.raiz === null) {
      this.raiz = novoNo;
      return;
    }

    this.inserirNo(this.raiz, novoNo);
  }

  inserirNo(noAtual, novoNo) {
    if (novoNo.valor < noAtual.valor) {
      if (noAtual.esquerda === null) {
        noAtual.esquerda = novoNo;
      } else {
        this.inserirNo(noAtual.esquerda, novoNo);
      }
    } else if (novoNo.valor > noAtual.valor) {
      if (noAtual.direita === null) {
        noAtual.direita = novoNo;
      } else {
        this.inserirNo(noAtual.direita, novoNo);
      }
    }
    // Se for repetido, ignora.
  }

  buscar(valor) {
    return this.buscarNo(this.raiz, valor);
  }

  buscarNo(noAtual, valor) {
    if (noAtual === null) return false;
    if (valor === noAtual.valor) return true;

    if (valor < noAtual.valor) {
      return this.buscarNo(noAtual.esquerda, valor);
    }

    return this.buscarNo(noAtual.direita, valor);
  }

  emOrdem(noAtual = this.raiz) {
    // Mostra em ordem crescente: esquerda -> raiz -> direita.
    if (noAtual !== null) {
      this.emOrdem(noAtual.esquerda);
      console.log(noAtual.valor);
      this.emOrdem(noAtual.direita);
    }
  }

  retornarEmOrdem() {
    // Igual emOrdem, mas devolve array em vez de só imprimir.
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

  altura(noAtual = this.raiz) {
    if (noAtual === null) return 0;

    const alturaEsquerda = this.altura(noAtual.esquerda);
    const alturaDireita = this.altura(noAtual.direita);

    return Math.max(alturaEsquerda, alturaDireita) + 1;
  }
}

module.exports = ArvoreBinaria;
