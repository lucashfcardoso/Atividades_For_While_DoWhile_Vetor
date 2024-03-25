const readline = require('readline-sync');

const n1 = readline.questionInt("Digite um número: ");
const n2 = readline.questionInt("Digite um número maior que o anterior: ");

if (n1 < n2) { //afirmação de que n2 é maior que n1 - abertura if principal
    console.log(`No intervalo entre ${n1} e ${n2}: `)
    
    for (contador = n1; contador <= n2; contador++) {             //abertura for
        if (contador % 3 == 0 && contador % 5 == 0) {   //contador diferente de 0 E divisível por 0 E divisível por 5 abertura if for
            console.log(`${contador} é múltiplo de 3 e 5`);
        }                                                         //fechamento if for
    }                                                             //fechamento for

} else {                                                          //fechamento if e abertura else
    console.log ("O intervalo é inválido.")
}                                                                 //fechemento else