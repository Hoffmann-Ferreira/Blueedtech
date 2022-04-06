
// Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato 'D de mes PorExtenso de AAAA'. Valide a data e retorne NULL caso a data seja inválida.

// Utilização de função arrow. Verificação de datas com o is not a number (isNaN);
let datas = (d, m, a) => {

    let mes = ["AC", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto,", "Setembro", "Outubro", "Novembro", "Dezembro"];
   
    if (isNaN(d) || isNaN(m) || isNaN(a)) {
        return null;
    }

    return `${d}, de ${mes[m]}, de ${a}`;
};

// Estrutura de perguntas;
const prompt = require("prompt-sync")();

let dia = +prompt("Digite um dia: ");
let mes = +prompt("Dite um mês em número: ");
let ano = +prompt("Digite um ano: ");

// Exibição da function;
console.log(datas(dia, mes, ano));