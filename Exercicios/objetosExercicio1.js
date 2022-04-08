// Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista. Ao final de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo, e caso não haja mais funcionários para cadastrar, ele deve chamar uma função que deve apresentar a quantidade de funcionários com cada cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.

const prompt = require("prompt-sync")();

//Lista que armazena todos os funcionários;
let listaFuncionarios = [];

//Obejto que irá receber as informações dos funcionários;
let funcionario = {};

//função que cria as propriedades do objeto;
function criarlista() {
    funcionario.nome = prompt(`Nome do funcionário: `);
    funcionario.cargo = prompt(`Cargo do funcioário: `);
    funcionario.salario = +prompt(`Salário do funcionário: `);
};
//função exibir funcionários;
function exibir(lista) {
    let perg = prompt("Deseja ver a lista de funcionários? SIM para ver e NAO para finalizar").toLowerCase();
    if (perg == "sim") {
        console.log(lista);
    } else {
        console.log(`Sistema finalizado..`)
    };
};

// variável de controle do do while;
let continuar;

//Gerador da lista;
do {
    console.log(`\nPara cadastrar funcionários preencha os dados a baixo`);
    criarlista();

    const listaArmazena = {};
    Object.assign(listaArmazena, funcionario);
    listaFuncionarios.push(listaArmazena);

    continuar = prompt(`Deseja cadastrar mais funcionários? Digite SIM para continuar e NAO para sair. `).toLowerCase();

} while (continuar == "sim");

exibir(listaFuncionarios);



