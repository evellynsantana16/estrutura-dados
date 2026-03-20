const apiResponse = {
   status: "success", // Chave indicando o sucesso da operação
   data: {            // Dados reais retornados
        id: 1,
        nome: "Produto A",
        preco: 100
   }
};

console.log(apiResponse.data.sorvete);


const dicionario = {
    fruta: "maçã",
    cor: "vermelho",
    preco: 5
};

// Usando `for...in` para percorrer o dicionário
for (const chave in dicionario) {
    console.log(`${chave}: ${dicionario[chave]}`);
}