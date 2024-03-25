const readline = require('readline-sync');

let pares = 0;
let impares = 0;

for (i = 1; i <= 10; i++) {                                     
    let n = readline.questionInt(`Digite o ${i} numero: `);          //número digitado na entrada (serão 10)
    if ((n % 2) == 0) {                                              //divisível por 2 resto 0 
        pares++;                                                     //entra no par
    } else {                                                         //senão
        impares++;                                                   //entra no ímpar
    }
}
console.log(`\nTotal de números pares: ${pares}`);                   
console.log(`\nTotal de números ímpares: ${impares}`);