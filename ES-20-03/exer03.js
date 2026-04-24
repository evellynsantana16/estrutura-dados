let produtos = {
    "P001": { nome: "Produto A", preco: 45 },
    "P002": { nome: "Produto B", preco: 75 },
    "P003": { nome: "Produto C", preco: 60 }
};

// Iterando sobre o objeto e exibindo produtos com preço acima de R$ 50
for (let codigo in produtos) {
    if (produtos[codigo].preco > 50) {
        console.log(`Código: ${codigo}, Nome: ${produtos[codigo].nome}, Preço: R$ ${produtos[codigo].preco}`);
    }
}
