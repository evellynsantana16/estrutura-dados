function objectParaMap(obj) {
    return new Map(Object.entries(obj)); // Converte o objeto em um Map
}

function mapParaObject(map) {
    return Object.fromEntries(map); // Converte o Map em um objeto
}

// Exemplo de uso
let exemploObj = { a: 1, b: 2 };
let exemploMap = objectParaMap(exemploObj);
console.log(exemploMap);

let novoObj = mapParaObject(exemploMap);
console.log(novoObj);
