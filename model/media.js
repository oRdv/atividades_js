const mediaAluno = function(nomeInicialAluno, nomeInicialProf, sexoInAluno, sexoInProf, nomeInCurso, nomeIndisc, notain1, notain2, notain3, notain4 ){
    let nota1 = notain1
    let nota2 = notain2
    let nota3 = notain3
    let nota4 = notain4
    let media


    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
        console.log('ERRO: Demonstrar todos os valores')
    }else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) ){
        console.log('ERRO: É obrigatoria a entrada de dados')
    }else if(nota1 > 100 || nota1 < 0 || nota2 > 100 || nota2 < 0 || nota3 > 100 || nota3 < 0 || nota4 > 100 || nota4 < 0){
        console.log('ERRO: É permitido apenas notas abaixo de 100' )
    }else{

        nota1 = Number(nota1)
        nota2 = Number(nota2)
        nota3 = Number(nota3)
        nota4 = Number(nota4)

        media = nota1 + nota2 + nota3 + nota4 / 4
    }


    const situacaoMedia = (mediaValor) => {
        let media = mediaValor
        media = Number(media)

        let situacao

        if (media >= 70) {
            situacao = 'APROVADO'
        }else if (media >= 50){
            situacao = 'EXAME NECESSÁRIO'
        } else{
            situacao = 'REPROVADO'

        }
        return situacao
    }

    const  calculoMediaExame = (mediaExame, mediaValor) => {

        let notaExame
        let mediaFinal

        if(isNaN(notaExame) || notaExame > 100 || notaExame < 0 || notaExame == ''){
            console.log('ERRO: Nota de exame INVÁLIDA!!')
        }else{
            notaExame  = Number(notaExame)
            mediaFinal = (notaExame + media) / 2
        }
        if (mediaFinal != undefined){

            return novaMedia 
        }else {
            return false
        }  
        
    }
    
    const validacaoExame = (valMediaExame) => {
        let media
        media = Number(media)
        let situacao

        if(media >= 60){
            situacao = 'APROVADO EM EXAME'
        }else{
            situacao = 'REPROVADO EM EXAME'
        }
    }


    const pronomeProfessor = (pronProfessor) => {

        let sexo = (pronProfessor).toLocaleLowerCase(), pronome

        if (sexo == ''){
            console.log('ERRO: Demonstrar todos os valores')
            return false

        }else if(sexo == 'M'){
            pronome = 'Professor'
        }else if (sexo == 'F')
        pronome = 'Professora'
    }
    }

    const pronomeAluno = (pronomAluno) => {

        let sexo = (pronomAluno).toLocaleLowerCase(), pronome

        if (sexo == ''){
            console.log('ERRO: Demonstrar todos os valores')
            return false

        }else if(sexo == 'M'){
            pronome = 'Aluno'
        }else if(sexo == 'F'){
            pronome = 'Aluna'
        }
    
    }

   










    // if( media >= 50 && sexoAluno == 'masculino' && sexoProf == 'masculino' ){
    //     console.log('O aluno ' + nomeAluno + ' Foi reprovado na disciplina ' + disciplina )
    //     console.log('Curso: ' + curso)
    //     console.log('Professor: ' + nomeProf)
    //     console.log('Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4)
    //     console.log('Média Final: ' + media)
    //     console.log('Média Final do Exame: ' + media )
        


