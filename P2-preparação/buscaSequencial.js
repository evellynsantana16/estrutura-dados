//Uma lista de pedidos está desorganizada. Verifique onde está o pedido 580.

// Veio do arquivo 05_OrdenacaoEBusca.js
const { buscaSequencial } = require("./05_OrdenacaoEBusca");

// Escolhi busca sequencial porque o vetor NÃO está ordenado
const pedidos = [420, 101, 690, 205, 580, 310];

// Procura item por item até achar 580
const posicao = buscaSequencial(pedidos, 580);

console.log("Pedido encontrado na posição:", posicao);