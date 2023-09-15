var data_nascimento = document.getElementById('inascimento')
var sexo = document.getElementsByName('sexo')

var resultado = document.getElementById('resultado')


function verifcadorIdade(){

    var hoje = new Date()
    var anoAtual = hoje.getFullYear()

    var data_nasc = Number(data_nascimento.value)

    if (data_nasc == '' || data_nasc == null || data_nasc > anoAtual){
        alert('[ ERRO ] - Ano de nascimento inválido, tente novamente!')
    
    } else {    
        // variável que receberá o sexo do requerente
        var frase;

        // variável que receberá a idade do requerente
        var idade = anoAtual - data_nasc

        // variável criada para receber a foto compatível com a idade
        var imagem = document.createElement('img')

        if (idade <= 120) {
    
            if (sexo[0].checked){
    
                if (idade <=11){
                    frase = 'Uma <strong>Criança</strong>'
                    imagem.src = "../imagens/criança-f.png"
                    imagem.alt = "Foto de uma cirança"
                
                } else if (idade < 18){
                    frase = 'Uma <strong>adolescente</strong>'
                    imagem.src = "../imagens/adolescente-f.png"
                    imagem.alt = "Foto de uma adolescente"
                
                } else if (idade < 65){
                    frase = "Uma <strong>mulher</strong>"
                    imagem.src = "../imagens/mulher.png"
                    imagem.alt = "Foto de uma mulher"
                
                } else if (idade < 120){
                    frase = "Uma <strong>idosa</strong>"
                    imagem.src = "../imagens/idosa.png"
                    imagem.alt = "Foto de idosa"
                }

            } else if (sexo[1].checked){
    
                if (idade < 12){
                    frase = "Uma <strong>criança</strong>"
                    imagem.src = "../imagens/criança-m.png"
                    imagem.alt = "Foto de uma criança"
                
                } else if (idade < 18){
                    frase = "Um <strong>adolescente</strong>"
                    imagem.src = "../imagens/adolescente-m.png"
                    imagem.alt = "Foto de um adolescente"
                
                } else if (idade < 65){
                    frase = "Um <strong>homem</strong>"
                    imagem.src = "../imagens/homem.png"
                    imagem.alt = "Foto de um homem"
                
                } else if (idade < 120){
                    frase = "Um <strong>idoso</strong>"
                    imagem.src = "../imagens/idoso.png"
                    imagem.alt = "Foto de um idoso"
                }
            } 

        } else if ( idade > 120){
            frase = "Um <strong>fóssil</strong>"
            imagem.src = "../imagens/esqueleto.png"
            imagem.alt = "Foto de um esqueleto."
        }
     
        resultado.innerHTML = `<p id="especial"><strong>Detectamos:</strong> ${frase} com ${idade} anos.</p><hr>`
        resultado.appendChild(imagem)
        resultado.innerHTML += "<hr>"
    }
}