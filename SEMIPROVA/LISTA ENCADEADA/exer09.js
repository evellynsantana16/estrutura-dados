/*Cada nó é uma música de uma playlist. Insira músicas no fim, remova uma
específica e permita busca por nome.
Desafio extra: Adicionar opção de "tocar próxima" (avançar no ponteiro).*/

let playlist = new LinkedList();
playlist.insertAtEnd("Música A");
playlist.insertAtEnd("Música B");
playlist.insertAtEnd("Música C");
playlist.printList();
playlist.removeByValue("Música B");
playlist.printList();
let musica = playlist.find("Música C");
console.log(musica ? "Tocando: " + musica.value : "Música não encontrada");