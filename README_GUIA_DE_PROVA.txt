GUIA DE PROVA - COMO SABER QUAL ARQUIVO ABRIR

IMPORTANTE:
Os arquivos estão em português para você não se perder:
- ArvoreBinaria
- ArvoreAVL
- Grafo
- GrafoPonderado
- OrdenacaoEBusca
- FilaEPilha

============================================================
1) ENUNCIADO FALA DE CIDADE LIGADA COM OUTRA?
============================================================

Use:
03_Grafo.js

Palavras-chave:
- cidade
- estrada
- conexão
- vértice
- aresta
- rede social
- amigos
- visitar todos

Começo típico:

const grafo = new Grafo();

grafo.adicionarAresta("Jau", "Bauru");
grafo.adicionarAresta("Jau", "Bariri");

grafo.imprimirGrafo();

Se pedir "visitar por perto primeiro":
grafo.buscaEmLargura("Jau");

Se pedir "ir até o fundo antes de voltar":
grafo.buscaEmProfundidade("Jau");


============================================================
2) ENUNCIADO FALA DE DISTÂNCIA, PESO, CUSTO OU TEMPO?
============================================================

Use:
04_GrafoPonderado.js

Palavras-chave:
- distância
- custo
- tempo
- peso
- energia
- menor caminho
- Dijkstra

Começo típico:

const grafo = new GrafoPonderado();

grafo.adicionarAresta("Jau", "Bauru", 58);
grafo.adicionarAresta("Jau", "Bariri", 32);

const resultado = grafo.dijkstra("Jau");
const caminho = grafo.gerarCaminho(resultado.anteriores, "Bauru");

console.log(resultado.distancias);
console.log(caminho);


============================================================
3) ENUNCIADO FALA DE ÁRVORE, RAIZ, NÓ, ESQUERDA E DIREITA?
============================================================

Use:
01_ArvoreBinaria.js

Palavras-chave:
- árvore binária
- raiz
- nó
- filho esquerdo
- filho direito
- busca
- inserir
- ordem crescente

Começo típico:

const arvore = new ArvoreBinaria();

arvore.inserir(50);
arvore.inserir(30);
arvore.inserir(70);

console.log(arvore.buscar(30));
arvore.emOrdem();


============================================================
4) ENUNCIADO FALA DE AVL, BALANCEAMENTO OU ROTAÇÃO?
============================================================

Use:
02_ArvoreAVL.js

Palavras-chave:
- AVL
- altura
- fator de balanceamento
- rotação
- balancear
- desbalanceado

Macete:
FB = altura esquerda - altura direita

Começo típico:

const avl = new ArvoreAVL();

avl.inserir(50);
avl.inserir(20);
avl.inserir(60);

avl.emOrdem();
avl.mostrarComBalanceamento();


============================================================
5) ENUNCIADO FALA DE ORDENAR?
============================================================

Use:
05_OrdenacaoEBusca.js

Palavras-chave:
- ordenar
- Bubble Sort
- Quick Sort
- Merge Sort
- crescente
- decrescente

Começo típico:

const numeros = [5, 2, 8, 1];

console.log(bubbleSort(numeros));
console.log(quickSort(numeros));
console.log(mergeSort(numeros));


============================================================
6) ENUNCIADO FALA DE PROCURAR EM ARRAY?
============================================================

Use:
05_OrdenacaoEBusca.js

Se o array NÃO estiver ordenado:
buscaSequencial(array, valor);

Se o array estiver ordenado:
buscaBinaria(array, valor);


============================================================
7) ENUNCIADO FALA DE FILA OU PILHA?
============================================================

Use:
06_FilaEPilha.js

Fila:
- ordem de chegada
- primeiro a entrar, primeiro a sair
- FIFO

Pilha:
- topo
- empilhar
- desempilhar
- último a entrar, primeiro a sair
- LIFO


============================================================
EXEMPLO DO SEU JEITO
============================================================

Enunciado:
"Uma cidade liga a outra e queremos saber o caminho todo e por onde passa."

Se NÃO tiver distância/custo:
É Grafo normal.

const grafo = new Grafo();

grafo.adicionarAresta("Jau", "Bauru");
grafo.adicionarAresta("Jau", "Bariri");
grafo.adicionarAresta("Bariri", "Ibitinga");

console.log(grafo.buscaEmLargura("Jau"));

Se TIVER distância/custo:
É Grafo Ponderado.

const grafo = new GrafoPonderado();

grafo.adicionarAresta("Jau", "Bauru", 58);
grafo.adicionarAresta("Jau", "Bariri", 32);
grafo.adicionarAresta("Bariri", "Ibitinga", 41);

const resultado = grafo.dijkstra("Jau");
const caminho = grafo.gerarCaminho(resultado.anteriores, "Ibitinga");

console.log("Distâncias:", resultado.distancias);
console.log("Caminho:", caminho);
