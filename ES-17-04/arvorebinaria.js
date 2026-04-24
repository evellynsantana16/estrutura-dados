// 🔹 Classe do Nó (cada elemento da árvore)
class Node {
  constructor(valor) {
    this.valor = valor;   // valor do nó
    this.esquerda = null; // filho da esquerda
    this.direita = null;  // filho da direita
  }
}


// 🔹 Classe da Árvore Binária
class BinaryTree {
  constructor() {
    this.raiz = null; // começa vazia
  }

  // 🔸 Inserir um valor
  inserir(valor) {
    const novoNo = new Node(valor);

    // se a árvore estiver vazia
    if (this.raiz === null) {
      this.raiz = novoNo;
      return;
    }

    // senão, insere na posição correta
    this.inserirNo(this.raiz, novoNo);
  }

  inserirNo(no, novoNo) {
    // se for menor, vai pra esquerda
    if (novoNo.valor < no.valor) {
      if (no.esquerda === null) {
        no.esquerda = novoNo;
      } else {
        this.inserirNo(no.esquerda, novoNo);
      }
    } 
    // se for maior, vai pra direita
    else {
      if (no.direita === null) {
        no.direita = novoNo;
      } else {
        this.inserirNo(no.direita, novoNo);
      }
    }
  }

  // 🔸 Percurso EM ORDEM (crescente)
  emOrdem(no) {
    if (no !== null) {
      this.emOrdem(no.esquerda);
      console.log(no.valor);
      this.emOrdem(no.direita);
    }
  }

  // 🔸 Pré-ordem (raiz primeiro)
  preOrdem(no) {
    if (no !== null) {
      console.log(no.valor);
      this.preOrdem(no.esquerda);
      this.preOrdem(no.direita);
    }
  }

  // 🔸 Pós-ordem (raiz por último)
  posOrdem(no) {
    if (no !== null) {
      this.posOrdem(no.esquerda);
      this.posOrdem(no.direita);
      console.log(no.valor);
    }
  }

  // 🔸 Buscar um valor
  buscar(no, valor) {
    if (no === null) {
      return false;
    }

    if (valor === no.valor) {
      return true;
    }

    if (valor < no.valor) {
      return this.buscar(no.esquerda, valor);
    } else {
      return this.buscar(no.direita, valor);
    }
  }

  // 🔸 Encontrar o menor valor (usado na remoção)
  encontrarMin(no) {
    while (no && no.esquerda !== null) {
      no = no.esquerda;
    }
    return no;
  }

  // 🔸 Remover um valor
  remover(valor) {
    this.raiz = this.removerNo(this.raiz, valor);
  }

  removerNo(no, valor) {
    if (no === null) {
      return null;
    }

    // busca o nó
    if (valor < no.valor) {
      no.esquerda = this.removerNo(no.esquerda, valor);
      return no;
    } else if (valor > no.valor) {
      no.direita = this.removerNo(no.direita, valor);
      return no;
    } else {
      // 🔥 achou o nó

      // caso 1: sem filhos
      if (no.esquerda === null && no.direita === null) {
        return null;
      }

      // caso 2: um filho
      if (no.esquerda === null) {
        return no.direita;
      } else if (no.direita === null) {
        return no.esquerda;
      }

      // caso 3: dois filhos
      const aux = this.encontrarMin(no.direita);
      no.valor = aux.valor;
      no.direita = this.removerNo(no.direita, aux.valor);

      return no;
    }
  }
}


const arvore = new BinaryTree();

// inserindo valores
arvore.inserir(10);
arvore.inserir(5);
arvore.inserir(15);
arvore.inserir(3);
arvore.inserir(7);

// percursos
console.log("Em ordem:");
arvore.emOrdem(arvore.raiz);

console.log("Pré-ordem:");
arvore.preOrdem(arvore.raiz);

console.log("Pós-ordem:");
arvore.posOrdem(arvore.raiz);

// busca
console.log("Buscar 7:", arvore.buscar(arvore.raiz, 7));

// remover
arvore.remover(5);

console.log("Após remover:");
arvore.emOrdem(arvore.raiz);