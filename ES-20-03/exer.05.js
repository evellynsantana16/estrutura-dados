//Crie uma função que receba uma frase e use um Map para contar quantas
//vezes cada palavra aparece.

function contarPalavras(frase) {
    const mapa = new Map();
    const palavras = frase.split(' ');

    for (let palavra of palavras) {
        if (mapa.has(palavra)) {
            mapa.set(palavra, mapa.get(palavra) + 1);
        } else {
            mapa.set(palavra, 1);
        }
    }

    return mapa;
}

const resultado = contarPalavras("testando um teste que nao sei se esse teste vai dar certo");
console.log(resultado);