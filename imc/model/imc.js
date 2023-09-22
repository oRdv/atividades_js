
const gerarImc = function(pesoInicial, alturaInicial){
    let peso = pesoInicial
    let imc
    let altura = alturaInicial
    let status = false

    peso = Number(peso)
    altura = Number(altura)


    if(peso == '' || altura == ''){
        console.log('ERRO: Demonstrar todos os valores')
    }else if (isNaN(peso) || isNaN(altura)){
        console.log('ERRO: É obrigatoria a entrada de dados')
    }else{
      
        imc = peso / (altura * altura)
    
        if(imc < 18.5){
            console.log('seu imc é: ' + imc)
            console.log('ABAIXO DO PESO')
    
        }else if(imc >= 18.5 && imc <= 24.9){
            console.log('seu imc é: ' + imc)
            console.log('PESO NORMAL')
    
        }else if(imc >= 25.0 && imc <= 29.9){
            console.log('seu imc é: ' + imc)
            console.log('ACIMA DO PESO')
    
        }else if (imc >= 25.0 && imc <= 29.9){
            console.log('seu imc é: ' + imc)
            console.log('OBESIDADE I')
    
        }else if(imc >= 30.0 && imc <= 39.9){
            console.log('seu imc é: ' + imc)
            console.log('OBESIDADE II')
    
        }else if (imc>= 40.0 ){
            console.log('seu imc é: ' + imc)
            console.log('OBESIDADE III')
        }

        status = true

    }

    return status
}

module.exports = {
    gerarImc
}