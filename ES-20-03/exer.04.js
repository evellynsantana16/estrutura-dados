function removerNulos(obj) {
    for (let chave in obj) {
        if (obj[chave] === null || obj[chave] === undefined) {
            delete obj[chave]; // Remove a chave se o valor for null ou undefined
        }
    }
}

// Exemplo de uso
let dicionario = {
    a: 1,
    b: null,
    c: 3,
    d: undefined
};

removerNulos(dicionario);
console.log(dicionario);
