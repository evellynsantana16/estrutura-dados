/*Use a estrutura para simular o histórico de páginas acessadas. Com
traverseReverse, mostre a navegação para trás (voltar página).
Extra: implementar "ir para página específica" usando find.*/


let historico = new DoublyLinkedList();
historico.append("google.com");
historico.append("youtube.com");
historico.append("github.com");
console.log("Últimos acessos (ordem reversa):");
historico.traverseReverse();
console.log("Buscando 'github.com':");
let idx = historico.find("github.com");
console.log (idx >= 0 ? `Encontrado no índice ${idx}` : "Não encontrado");