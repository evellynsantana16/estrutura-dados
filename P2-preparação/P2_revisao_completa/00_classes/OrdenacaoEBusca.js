/*
==================================================
ARQUIVO: OrdenacaoEBusca.js

Este arquivo guarda FUNÇÕES, não classes.

REGRA DE OURO:
- Função NÃO usa new.
- Classe usa new.

Exemplo certo:
const { buscaSequencial } = require('../00_classes/OrdenacaoEBusca');
const posicao = buscaSequencial(vetor, valor);

Exemplo errado:
const busca = new buscaSequencial();
==================================================
*/

function normalizarVetor(estrutura) {
  // Aceita tanto array normal quanto objeto com verItens(), igual seu MeuArray.
  if (Array.isArray(estrutura)) return estrutura;
  if (estrutura && typeof estrutura.verItens === 'function') return estrutura.verItens();
  return [];
}

function buscaSequencial(estrutura, valorProcurado) {
  /*
    QUANDO USAR:
    - Dados desorganizados.
    - Placas, nomes, códigos em qualquer ordem.

    O QUE FAZ:
    Procura do começo ao fim, um por um.
    Se achar, retorna a posição.
    Se não achar, retorna -1.
  */
  const vetor = normalizarVetor(estrutura);

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === valorProcurado) {
      return i;
    }
  }

  return -1;
}

function buscaBinaria(estrutura, valorProcurado) {
  /*
    QUANDO USAR:
    - Dados ORDENADOS.

    O QUE FAZ:
    Divide a busca pela metade.
    Compara com o meio.
    Se o valor for maior, vai para direita.
    Se for menor, vai para esquerda.
  */
  const vetor = normalizarVetor(estrutura);
  let inicio = 0;
  let fim = vetor.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);

    if (vetor[meio] === valorProcurado) {
      return meio;
    }

    if (valorProcurado > vetor[meio]) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }

  return -1;
}

function buscaInterpolacao(estrutura, valorProcurado) {
  /*
    QUANDO USAR:
    - Dados numéricos.
    - Dados ordenados.
    - Valores mais ou menos distribuídos.

    IDEIA:
    Em vez de sempre ir no meio, tenta calcular uma posição provável.
  */
  const vetor = normalizarVetor(estrutura);
  let inicio = 0;
  let fim = vetor.length - 1;

  while (
    inicio <= fim &&
    valorProcurado >= vetor[inicio] &&
    valorProcurado <= vetor[fim]
  ) {
    if (vetor[inicio] === vetor[fim]) {
      return vetor[inicio] === valorProcurado ? inicio : -1;
    }

    const posicao = inicio + Math.floor(
      ((valorProcurado - vetor[inicio]) * (fim - inicio)) /
      (vetor[fim] - vetor[inicio])
    );

    if (vetor[posicao] === valorProcurado) {
      return posicao;
    }

    if (vetor[posicao] < valorProcurado) {
      inicio = posicao + 1;
    } else {
      fim = posicao - 1;
    }
  }

  return -1;
}

function bubbleSort(estrutura) {
  /*
    QUANDO USAR:
    - Ordenação simples.
    - Professor pediu Bubble Sort.

    IDEIA:
    Compara vizinhos e troca se estiverem fora de ordem.
    O maior vai "borbulhando" para o final.
  */
  const vetor = [...normalizarVetor(estrutura)];

  for (let i = 0; i < vetor.length - 1; i++) {
    for (let j = 0; j < vetor.length - 1 - i; j++) {
      if (vetor[j] > vetor[j + 1]) {
        const temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
      }
    }
  }

  return vetor;
}

function quickSort(estrutura) {
  /*
    QUANDO USAR:
    - Ordenar de forma eficiente.
    - Professor pediu Quick Sort.

    IDEIA:
    Escolhe um pivô, separa menores e maiores, depois junta tudo.
  */
  const vetor = [...normalizarVetor(estrutura)];

  if (vetor.length <= 1) {
    return vetor;
  }

  const pivo = vetor[0];
  const menores = [];
  const maiores = [];

  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] < pivo) {
      menores.push(vetor[i]);
    } else {
      maiores.push(vetor[i]);
    }
  }

  return [...quickSort(menores), pivo, ...quickSort(maiores)];
}

function mergeSort(estrutura) {
  /*
    QUANDO USAR:
    - Ordenar dividindo o vetor em partes menores.
    - Professor pediu Merge Sort.

    IDEIA:
    Divide ao meio até sobrar 1 elemento, depois junta ordenando.
  */
  const vetor = [...normalizarVetor(estrutura)];

  if (vetor.length <= 1) {
    return vetor;
  }

  const meio = Math.floor(vetor.length / 2);
  const esquerda = mergeSort(vetor.slice(0, meio));
  const direita = mergeSort(vetor.slice(meio));

  return mesclar(esquerda, direita);
}

function mesclar(esquerda, direita) {
  const resultado = [];
  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] <= direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}

module.exports = {
  buscaSequencial,
  buscaBinaria,
  buscaInterpolacao,
  bubbleSort,
  quickSort,
  mergeSort
};
