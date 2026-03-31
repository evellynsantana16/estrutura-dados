/*Você está ajudando um explorador a planejar sua trilha de aventura na
floresta. Cada ponto da trilha (nó) contém um local interessante, como uma
cachoeira, uma caverna ou um mirante. O explorador quer começar a trilha
em um ponto específico e adicionar novos pontos durante a jornada. Sua
missão é ajudá-lo a:

–/* Inserir pontos da trilha no início e no fim da lista de locais a serem visitados.
– Depois, o explorador decide remover um local que descobriu ser muito perigoso.
– Por fim, ele quer verificar se o mirante ainda faz parte da trilha.
– Implemente uma lista encadeada para representar a trilha e resolva essas tarefas.*/


// Importa a classe Fila do arquivo Fila.js
const Fila = require('./fila'); 

// Criamos uma classe para representar um documento
class Documento {
    constructor(nome, paginas) {
        this.nome = nome; // Nome do documento
        this.paginas = paginas; // Número de páginas do documento
    }
}

// Criamos uma fila para armazenar os documentos a serem impressos
const filaImpressao = new Fila();

// Adicionamos documentos à fila
filaImpressao.enqueue(new Documento("Relatório", 5));
filaImpressao.enqueue(new Documento("TCC", 20));
filaImpressao.enqueue(new Documento("Contrato", 10));

// Enquanto a fila não estiver vazia, imprimimos os documentos
while (!filaImpressao.estaVazia()) {

    // Remove o primeiro documento da fila
    let doc = filaImpressao.dequeue(); 

    // Simula a impressão
    console.log(`Imprimindo ${doc.nome} (${doc.paginas} páginas)...`); 
}

// Quando todos os documentos são impressos, exibimos uma mensagem final
console.log("Todos os documentos foram impressos!");


