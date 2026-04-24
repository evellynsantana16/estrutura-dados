function contarFrequenciaLetras(str) {
    let frequencia = new Map();
    for (let letra of str) {
        if (letra !== ' ') { // Ignora espaços
            frequencia.set(letra, (frequencia.get(letra) || 0) + 1);
        }
    }
    return frequencia;
}

// Exemplo de uso
let resultadoFrequencia = contarFrequenciaLetras("Hello World");
console.log(resultadoFrequencia);
