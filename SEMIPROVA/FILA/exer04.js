let fila = new Fila();
//cria fila vazia

//enqueue - adiciona no final da fila
fila.push("Paulinha");
fila.push("Aninha");
fila.push("Zeca");


// enquanto a fila NAO estiver vazia
while (!fila.isEmpty()) {

    let tempo = Math.floor(Math.random() * 3000) + 100;

// Math.random() -> geranumero entre 0 e 1
//(*) 3000 -> transforma em intervalo maior
//+1000 -> garante minimo tempo
//Math.floor -> arredondapara inteiro
// => resultado: tempo aleatorio entre 1000 e 4000 ms

console.log(`brincano: ${fila.dequeue()} por ${tempo}ms`);
//dequeue = remove do INICIO da fila
//implime quem esta sendo atendido + tempo
}