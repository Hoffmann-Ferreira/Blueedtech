// Faça um programa que solicite o total gasto pelo cliente de uma loja, imprima as opções de pagamento com os valores totais, solicite a opção desejada e imprima o valor total das prestações (se houverem). Ao final ele deve retornar o valor total da opção escolhida, guardar em uma lista e recomeçar a operação perguntando o valor total gasto pelo próximo cliente. Quando o valor informado for 0, significa que não há mais clientes, então ele chamar uma nova função que vai mostrar quantas compras foram feitas em cada opção, e a soma do valor total de todas elas.
// Opção: a vista com 10% de desconto
// Opção: em duas vezes (preço da etiqueta)
// Opção: de 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00).


// Função que realiza a verificação das formas de pagamento e cálculos, com operadores ternários nas variáveis de divisão de valores.Toda lógica e execução de cálculos foi feita com os operadores ternários;

let comprasClientes = [];

function pagamento(valor, tipoPaga, quantida) {

    const opcao1 = `O valor à vista é: R$${valor * 0.1 - valor}`;
    const opcao2 = tipoPaga === 1 ? `O valor em 1X de R$` + valor : `O valor em 2X é de R$ ${valor / 2}`;
    const opcao3 = quantida <= 10 ? `O valor em ${quantida}X é de R$${((valor * 0.03) + valor) / 10}` : `O valor não é permitido nesta número de parcelas`;

    if (tipoPaga === 1) {
        comprasClientes.push(tipoPaga);
        console.clear();
        console.log("\n");
        return opcao1;
    } else if (tipoPaga === 2) {
        comprasClientes.push(tipoPaga);
        console.clear();
        console.log("\n");
        return opcao2;
    } else if (tipoPaga === 3) {
        comprasClientes.push(tipoPaga);
        console.clear();
        console.log("\n");
        return opcao3;
    };
};

// estrutura de perguntas; 
const prompt = require("prompt-sync")();

let sistema = prompt("Iniciar sistema de compras? SIM para acessar e NAO para sair: ").toLowerCase();
console.log("\n");

while (sistema == "sim") {

    let totalGastos = +prompt("Digite o valor total gasto em compras: ");

    console.log("\n");

    console.log(`O total de compras foi de ${totalGastos}, excolha uma forma de pagamento:
    1 = Opção: à vista com 10% de desconto
    2 = Opção: em duas vezes (preço da etiqueta)
    3 = Opção: de 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00).
    `);

    let opcao = +prompt();

    console.log("\n");

    // Estrutura de controle da quantidade de vezes, acrescentando o numero de vezes;
    let vezes = 0;
    if (opcao > 2) {
        vezes = +prompt("Quantas vezes? ");
    };

    //Chamando a função de pagamentos, imprimindo os dados solicitados;

    console.log(pagamento(totalGastos, opcao, vezes));
    
    let sair = +prompt("Para SAIR do sistema digite 0, fica FICAR digite 1: ");

    if(sair == 0){
        break;
    };

};

//Estrutura para contar a quantidade de vezes que as opções de pagamentos foram usadas

let formaPag1 = 0;
let formaPag2 = 0;
let formaPag3 = 0;

for(let i = 0; i < 1; i++){
    for (let i of comprasClientes) {
        if (i == 1) {
            formaPag1++;
        } else if (i== 2) {
            formaPag2++;
        } else if (i == 3) {
            formaPag3++;
        };
    };
}
console.log(`As formas de pagamentos forão utilizadas da seguinte maneira: 
    * Opção 1 = ${formaPag1} vezes;
    * Opção 2 = ${formaPag2} vezes;
    * Opção 3 = ${formaPag3} vezes;`
);
