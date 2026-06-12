/*Uma locadora de veículos possui um vetor desorganizado
 contendo placas de carros. (se tenho uma lista desorganizada vou procurar um por um)

[
  "ABC1234",
  "XYZ9999",
  "DEF5678",
  "JKL4321",
  "QWE1111"
]

O atendente precisa verificar se uma placa específica
 está cadastrada.

Faça:

a) Crie uma função de busca sequencial.

b) Retorne a posição encontrada.

c) Caso não exista, retorne -1.

Entregável: função buscaSequencial() comentada.*/

import { buscaSequencial } from "../05_OrdenacaoEBusca.js";
import MeuArray from "../MeuArray.js";

const placas = new MeuArray();

placas.adicionar("ABC1234");
placas.adicionar("XYZ9999");
placas.adicionar("DEF5678");


const posicao = buscaSequencial(placas.verItens(), "DEF5678");
console.log(posicao);