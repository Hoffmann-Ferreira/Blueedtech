// Implementando o exercício anterior, escreva uma função que deve calcular um aumento de salário baseado no cargo. Ela deve receber como argumento o cargo que receberá o aumento, e a taxa que ele irá aumentar. Após isso, aplique esse aumento à todos os funcionários daquele cargo e exiba o valor dos novos salários.

const prompt = require("prompt-sync")();

//Lista que armazena todos os funcionários;
let listaFun = [];

//Obejto que irá receber as informações dos funcionários;
let funcionario = {};

//função que cria as propriedades do objeto chave/valor;
function criarlista() {
    funcionario.nome = prompt(`Nome do funcionário: `);
    funcionario.cargo = prompt(`Cargo do funcioário: `);
    funcionario.salario = +prompt(`Salário do funcionário: `);
};
//função exibir funcionários;
function exibir(lista) {
    let perg = prompt("Deseja ver a lista de funcionários? SIM para ver e NAO para continuar ").toLowerCase();
    if (perg == "sim") {
        console.log(lista);
    } else {
        console.log(`Direcionando para alterações saláriais`)
    };
};
//função para alterar salários;

function alterSalario(cargo, taxa) {

    for (let i in listaFun) {

        if (listaFun[i].cargo == cargo) {

            listaFun[i].salario = listaFun[i].salario * taxa + listaFun[i].salario;
            console.log(`Funcionários que tiveram o salário modificado:`);
            console.log(listaFun[i]);
        };
    };
    return listaFun;
};

// variável de controle do do while;
let continuar;

//Gerador da lista;
do {
    console.log(`\nPara cadastrar funcionários preencha os dados a baixo`);

    criarlista();
    const listaArmazena = {};
    Object.assign(listaArmazena, funcionario);
    listaFun.push(listaArmazena);

    exibir(listaFun);
    const modificar = prompt("Deseja fazer alterações saláriais? ").toLowerCase();

    if (modificar == "sim") {
        console.log(`Digitar a porcentagem em valor decimal`)
        const pergCargo = prompt("Qual cargo deve receber moidicações no salário? ");
        const pergSala = +prompt("Qual a porcentagem de aumento no salário? ");
        alterSalario(pergCargo, pergSala);
    };

    continuar = prompt(`Deseja cadastrar mais funcionários? Digite SIM para continuar e NAO para sair do cadastro. `).toLowerCase();

} while (continuar == "sim");

exibir(listaFun);
