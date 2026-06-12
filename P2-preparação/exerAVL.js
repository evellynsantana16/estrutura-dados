const { ArvoreAVL } = require("./02_ArvoreAVL");

const arvore = new ArvoreAVL();

arvore.inserir(30);
arvore.inserir(20);
arvore.inserir(10);
arvore.inserir(40);
arvore.inserir(50);
arvore.inserir(25);

/*Quando uma AVL é balanceada?"

Responde:

👉 Após cada inserção ou remoção, a AVL verifica o fator de 
balanceamento dos nós e realiza rotações quando necessário
 para manter o FB entre -1 e 1.*/