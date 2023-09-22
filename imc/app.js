var calculoIMC = require('./model/imc')
var readline = require('readline')
var entradaDedados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDedados.question('Digite o seu peso: ', function (pesoInicial){
    let peso = pesoInicial

    entradaDedados.question('Digite sua altura ', function (alturaInicial){
        let altura = alturaInicial




        calculoIMC.gerarImc(peso, altura)
    })
})