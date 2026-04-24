function contarCaracteres(str) {
    let contador = {};
    for (let char of str) {
        if (char !== ' ') {
            contador[char] = (contador[char] || 0) + 1; // Incrementa o contador
        }
    }
    return contador;
}

// Exemplo de uso
let resultado = contarCaracteres("hello world");
console.log(resultado);
