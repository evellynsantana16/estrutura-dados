/*
  05_OrdenacaoEBusca.js

  ASSUNTO DO SLIDE:
  ALGORITMOS DE ORDENAÇÃO E BUSCA

  QUANDO USAR NA PROVA:
  Use quando o enunciado falar de:
  - ordenar
  - Bubble Sort
  - Quick Sort
  - Merge Sort
  - busca sequencial
  - busca binária
  - busca por interpolação

  MACETES:
  - Bubble Sort: compara vizinhos e troca.
  - Quick Sort: escolhe pivô e divide menores/maiores.
  - Merge Sort: divide ao meio e depois mescla.
  - Busca Binária: só funciona em array ordenado.
*/

/*
  BUBBLE SORT

  QUANDO USAR:
  Quando o enunciado pedir Bubble Sort ou algoritmo simples de ordenação.

  IDEIA:
  O maior valor vai "borbulhando" para o final.
*/
function bubbleSort(array) {
  const vetor = [...array];

  for (let i = 0; i < vetor.length - 1; i++) {
    for (let j = 0; j < vetor.length - 1 - i; j++) {
      if (vetor[j] > vetor[j + 1]) {
        const auxiliar = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = auxiliar;
      }
    }
  }

  return vetor;
}

/*
  QUICK SORT

  QUANDO USAR:
  Quando o enunciado falar de:
  - pivô
  - dividir para conquistar
  - ordenar rápido

  IDEIA:
  Escolhe um pivô.
  Separa menores e maiores.
  Ordena cada parte.
*/
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivo = array[0];
  const menores = [];
  const maiores = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivo) {
      menores.push(array[i]);
    } else {
      maiores.push(array[i]);
    }
  }

  return [...quickSort(menores), pivo, ...quickSort(maiores)];
}

/*
  MERGE SORT

  QUANDO USAR:
  Quando o enunciado falar de:
  - dividir o vetor ao meio
  - mesclar partes ordenadas
  - dividir para conquistar
*/
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const meio = Math.floor(array.length / 2);
  const esquerda = array.slice(0, meio);
  const direita = array.slice(meio);

  return mesclar(mergeSort(esquerda), mergeSort(direita));
}

/*
  MESCLAR

  Junta dois arrays já ordenados em um array ordenado.
*/
function mesclar(esquerda, direita) {
  const resultado = [];
  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}

/*
  BUSCA SEQUENCIAL

  QUANDO USAR:
  Quando o array NÃO estiver ordenado ou o enunciado pedir busca simples.

  IDEIA:
  Procura item por item.
*/
function buscaSequencial(array, valor) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valor) {
      return i;
    }
  }

  return -1;
}

/*
  BUSCA BINÁRIA

  QUANDO USAR:
  Quando o array estiver ORDENADO.

  IDEIA:
  Olha o meio.
  Se o valor for menor, corta a direita.
  Se o valor for maior, corta a esquerda.
*/
function buscaBinaria(array, valor) {
  let inicio = 0;
  let fim = array.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);

    if (array[meio] === valor) {
      return meio;
    }

    if (valor < array[meio]) {
      fim = meio - 1;
    } else {
      inicio = meio + 1;
    }
  }

  return -1;
}

/*
  BUSCA POR INTERPOLAÇÃO

  QUANDO USAR:
  Quando o enunciado pedir esse nome.
  Funciona melhor em dados numéricos ordenados e bem distribuídos.
*/
function buscaInterpolacao(array, valor) {
  let baixo = 0;
  let alto = array.length - 1;

  while (
    baixo <= alto &&
    valor >= array[baixo] &&
    valor <= array[alto]
  ) {
    if (baixo === alto) {
      if (array[baixo] === valor) {
        return baixo;
      }

      return -1;
    }

    const posicao = baixo + Math.floor(
      ((valor - array[baixo]) * (alto - baixo)) /
      (array[alto] - array[baixo])
    );

    if (array[posicao] === valor) {
      return posicao;
    }

    if (array[posicao] < valor) {
      baixo = posicao + 1;
    } else {
      alto = posicao - 1;
    }
  }

  return -1;
}



module.exports = {
  bubbleSort,
  quickSort,
  mergeSort,
  buscaSequencial,
  buscaBinaria,
  buscaInterpolacao
};
