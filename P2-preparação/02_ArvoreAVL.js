/*
  02_ArvoreAVL.js

  ASSUNTO DO SLIDE:
  ÁRVORES BINÁRIAS II - AVL

  QUANDO USAR NA PROVA:
  Use quando o enunciado falar de:
  - AVL
  - árvore balanceada
  - fator de balanceamento
  - altura
  - rotação simples
  - rotação dupla
  - inserir mantendo balanceamento

  IDEIA:
  AVL é uma árvore binária de busca que se balanceia sozinha.

  FATOR DE BALANCEAMENTO:
  FB = altura(subárvore esquerda) - altura(subárvore direita)

  Se FB for:
  - 0: equilibrado
  - 1: esquerda tem 1 nível a mais
  - -1: direita tem 1 nível a mais
  - maior que 1 ou menor que -1: precisa rotacionar
*/

class NoAVL {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
    this.altura = 1; // todo nó novo começa com altura 1
  }
}

class ArvoreAVL {
  constructor() {
    this.raiz = null;
  }

  /*
    ALTURA

    QUANDO USAR:
    Quando o enunciado pedir para calcular altura ou fator de balanceamento.

    Se o nó for null, a altura é 0.
    Se o nó existe, retorna no.altura.
  */
  obterAltura(no) {
    if (no === null) {
      return 0;
    }

    return no.altura;
  }

  /*
    ATUALIZAR ALTURA

    A altura do nó é:
    1 + a maior altura entre esquerda e direita
  */
  atualizarAltura(no) {
    if (no !== null) {
      no.altura = 1 + Math.max(
        this.obterAltura(no.esquerda),
        this.obterAltura(no.direita)
      );
    }
  }

  /*
    FATOR DE BALANCEAMENTO

    Fórmula do slide:
    FB = altura(esquerda) - altura(direita)
  */
  obterFatorBalanceamento(no) {
    if (no === null) {
      return 0;
    }

    return this.obterAltura(no.esquerda) - this.obterAltura(no.direita);
  }

  /*
    ROTAÇÃO À DIREITA

    QUANDO USAR:
    Quando a árvore pesa demais para a esquerda.

    Exemplo comum:
        30
       /
     20
     /
   10

    Depois da rotação:
       20
      /  \
    10    30
  */
  rotacaoDireita(y) {
    const x = y.esquerda;
    const temp = x.direita;

    x.direita = y;
    y.esquerda = temp;

    this.atualizarAltura(y);
    this.atualizarAltura(x);

    return x;
  }

  /*
    ROTAÇÃO À ESQUERDA

    QUANDO USAR:
    Quando a árvore pesa demais para a direita.

    Exemplo comum:
    10
      \
      20
        \
        30

    Depois da rotação:
       20
      /  \
    10    30
  */
  rotacaoEsquerda(x) {
    const y = x.direita;
    const temp = y.esquerda;

    y.esquerda = x;
    x.direita = temp;

    this.atualizarAltura(x);
    this.atualizarAltura(y);

    return y;
  }

  /*
    INSERIR

    Método público.
    Chama o método recursivo e atualiza a raiz.
  */
  inserir(valor) {
    this.raiz = this.inserirNo(this.raiz, valor);
  }

  /*
    INSERIRNO

    Faz 4 coisas:
    1. Insere como árvore binária de busca.
    2. Atualiza altura.
    3. Calcula fator de balanceamento.
    4. Corrige com rotação se precisar.
  */
  inserirNo(no, valor) {
    // 1. Inserção normal de árvore binária
    if (no === null) {
      return new NoAVL(valor);
    }

    if (valor < no.valor) {
      no.esquerda = this.inserirNo(no.esquerda, valor);
    } else if (valor > no.valor) {
      no.direita = this.inserirNo(no.direita, valor);
    } else {
      // valor repetido: não insere novamente
      return no;
    }

    // 2. Atualiza altura
    this.atualizarAltura(no);

    // 3. Calcula o fator de balanceamento
    const fator = this.obterFatorBalanceamento(no);

    // 4. Casos de rotação

    /*
      CASO ESQUERDA-ESQUERDA
      Pesou para esquerda e o valor entrou na esquerda da esquerda.
      Corrige com rotação à direita.
    */
    if (fator > 1 && valor < no.esquerda.valor) {
      return this.rotacaoDireita(no);
    }

    /*
      CASO DIREITA-DIREITA
      Pesou para direita e o valor entrou na direita da direita.
      Corrige com rotação à esquerda.
    */
    if (fator < -1 && valor > no.direita.valor) {
      return this.rotacaoEsquerda(no);
    }

    /*
      CASO ESQUERDA-DIREITA
      Pesou para esquerda, mas o valor entrou na direita da esquerda.
      Primeiro rotaciona a esquerda.
      Depois rotaciona a direita.
    */
    if (fator > 1 && valor > no.esquerda.valor) {
      no.esquerda = this.rotacaoEsquerda(no.esquerda);
      return this.rotacaoDireita(no);
    }

    /*
      CASO DIREITA-ESQUERDA
      Pesou para direita, mas o valor entrou na esquerda da direita.
      Primeiro rotaciona a direita.
      Depois rotaciona a esquerda.
    */
    if (fator < -1 && valor < no.direita.valor) {
      no.direita = this.rotacaoDireita(no.direita);
      return this.rotacaoEsquerda(no);
    }

    return no;
  }

  /*
    BUSCAR

    Igual na árvore binária comum.
  */
  buscar(valor) {
    let atual = this.raiz;

    while (atual !== null) {
      if (valor === atual.valor) {
        return true;
      }

      if (valor < atual.valor) {
        atual = atual.esquerda;
      } else {
        atual = atual.direita;
      }
    }

    return false;
  }

  /*
    EM ORDEM

    Mostra os valores em ordem crescente.
  */
  emOrdem(no = this.raiz) {
    if (no !== null) {
      this.emOrdem(no.esquerda);
      console.log(no.valor);
      this.emOrdem(no.direita);
    }
  }

  /*
    MOSTRAR COM BALANCEAMENTO

    Ajuda para conferir se a AVL está balanceada.
  */
  mostrarComBalanceamento(no = this.raiz) {
    if (no !== null) {
      this.mostrarComBalanceamento(no.esquerda);

      console.log(
        "Valor: " + no.valor +
        " | Altura: " + no.altura +
        " | FB: " + this.obterFatorBalanceamento(no)
      );

      this.mostrarComBalanceamento(no.direita);
    }
  }
}

/*
  EXEMPLO DE TESTE
*/
const avl = new ArvoreAVL();

avl.inserir(50);
avl.inserir(20);
avl.inserir(60);
avl.inserir(10);
avl.inserir(30);
avl.inserir(25);
avl.inserir(27);

console.log("AVL em ordem:");
avl.emOrdem();

console.log("AVL com altura e fator de balanceamento:");
avl.mostrarComBalanceamento();

module.exports = { NoAVL, ArvoreAVL };
