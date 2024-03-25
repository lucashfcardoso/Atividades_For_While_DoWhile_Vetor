const leia = require ('readline-sync')

let diagonalprincipal = ''
let diagonalsecundaria = ''
let somaPrincipal = 0
let somaSecundaria = 0

let matrizInteiros = new Array(3); //Definir quantidade de linhas

for (let iLinha = 0; iLinha < matrizInteiros.length; iLinha ++) {
    matrizInteiros[iLinha] = Array(3);       //Definir quantidade de colunas
    
    for (let iColuna = 0; iColuna < matrizInteiros.length; iColuna ++) {

        matrizInteiros[iLinha][iColuna] = leia.questionInt (`Digite o número do elemento [${iLinha}][${iColuna}]: `);

        if (iLinha == iColuna) {
            somaPrincipal += matrizInteiros[iLinha][iColuna]
            diagonalprincipal += `${matrizInteiros[iLinha][iColuna]}`
        }
        if ((iLinha == 0 && iColuna == 2) || (iLinha == 1 && iColuna == 1) || (iLinha == 2 && iColuna == 0)) {
            somaSecundaria += matrizInteiros[iLinha][iColuna]
            diagonalsecundaria += `${matrizInteiros[iLinha][iColuna]}`
        }
    }
}

console.table(matrizInteiros);

console.log (`Elementos da Diagonal Principal: ${diagonalprincipal}`)
console.log (`Elementos da Diagonal Secundária: ${diagonalsecundaria}`)
console.log (`Soma dos Elementos da Diagonal Principal: ${somaPrincipal}`)
console.log (`Soma dos Elementos da Diagonal Principal: ${somaSecundaria}`)