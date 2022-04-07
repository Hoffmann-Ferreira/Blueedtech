//Escreva uma função para conversão de temperatura. Ela deve receber 2 argumentos: um número e um caracter 'C', 'F' ou 'K', indicando que a temperatura está em Celsius, Fahrenheit ou Kelvin. A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.

const prompt = require("prompt-sync")();
//Função de conversão;
function convresao(temp, tipo){
    
    if(tipo === "c"){ 
        let celsiusPfahre = temp * 1.8 + 32 + "°F";
        let celsiusPkel= temp + 273 + "K"; 
        return `A temperatura em Kelvin é ${celsiusPkel} e em Fahrenheit é ${celsiusPfahre}`;
    } else if(tipo === "f"){ 
        let fahrenheitPcel= (temp - 32) / 1.8 + "°C";
        let fahrenheitPkel= (temp - 32) * 5/9 + 237 + "K";
        return `A temperatura em Celsius é ${fahrenheitPcel} e em Kelvin é ${fahrenheitPkel}`;
    } else if(tipo === "k" ){ 
        let kelvinPcel= temp - 173 + "°C";
        let kelvinPfahre = (temp - 273) * 1.8 +32 + "°F";
        return `A temperatura em Celsius é ${kelvinPcel} e em Fahrenheit é ${kelvinPfahre}`;
    };

};
//Perguntas;
console.log(`Digite a temperatura que você deseja converter, seguindo as regras a baixo:

*Celsius = C;
*Fahrenheit = F;
*Kelvin = K;`);

let tipoDeTemp = prompt("Digite o timpo de temperatura: ").toLowerCase();
let temperatura = +prompt("Digite a temperatura: ");
//Exibição dos resultados;
console.log(convresao(temperatura, tipoDeTemp));
