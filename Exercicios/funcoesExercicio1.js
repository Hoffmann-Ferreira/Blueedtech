// Faça um programa, com uma função que necessite de três parametros: dois números e um sinal de operador matemático (+, -, * ou /). Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.

const prompt = require("prompt-sync")();

function calculadora(n1, n2, n3){

    let operacoes = [[n1 + n2], [n1 - n2], [n1 * n2], [n1 / n2]];
    return operacoes[n3];
};

let p1 = +prompt("Digite um número: ");
let p2 = +prompt("Digite outro número: ");

console.log(`Digite:
0 para soma;
1 para subtração;
2 para multiplicação;
3 para divisão` );

let p3 = +prompt();

console.log(calculadora(p1, p2, p3));