const leia = require ('readline-sync')

let matriz = new Array(2)       //Definir quantidade de linhas (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

for (let indice = 0; indice < matriz.length; indice ++) {    //Definir Matriz, empilhamento de vetores
    matriz[indice] = Array(4);   //Definir quantidade de colunas  (0, 1, 2, 3)
}

let media = [];   //Vetor vazio para guarda resultado das médias
let soma = 0.0;   //Guardar valor da soma das notas
let nNotas = 0;   //Número de notas que foram processadas

    for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha ++) {                //Construção da matriz
        for (let indiceColuna = 0; indiceColuna < matriz[indiceLinha].length; indiceColuna ++) { 
            matriz[indiceLinha][indiceColuna] = leia.questionInt ("Digite uma nota: ")
        }
    }

    console.table(matriz)        //printar tabela da matriz

    for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha ++) {               //Dados na matriz
        for (let indiceColuna = 0; indiceColuna < matriz[indiceLinha].length; indiceColuna ++) { 
            soma += matriz[indiceLinha][indiceColuna]                                      //Somar notas
            nNotas ++;                                                                     //Contar quantas notas foram digitadas

        }

        media[indiceLinha] = soma/nNotas;                                                  //Conta para descobrir média
        soma = 0,0;                                                                        //Em seguida soma zera (para receber novas notas)
        nNotas = 0;                                                                        //Também zero
    }

    console.table(media);                                                                 //Mostrar cálculo da média