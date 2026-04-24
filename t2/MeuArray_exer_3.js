 import MeuArray from "../ES-27-02/MeuArray.js"

const familiaDrinks = new MeuArray();

// adicionando famílias
familiaDrinks.adicionar("Destilados - Whisky");
familiaDrinks.adicionar("Destilados - Vodka");
familiaDrinks.adicionar("Coquetéis Clássicos");
familiaDrinks.adicionar("Drinks Tropicais");

console.log("Carta inicial:", familiaDrinks.verItens());

//  buscar uma família existente
console.log("Índice:", familiaDrinks.obterIndice("Coquetéis Clássicos"));


console.log("Índice:", familiaDrinks.obterIndice("Drinks Sem Álcool")); // buscar drink q n existe


familiaDrinks.editar(1, "Destilados - Vodka Premium"); //  editar (alterar nome da família)


console.log("Carta atualizada:", familiaDrinks.verItens());

