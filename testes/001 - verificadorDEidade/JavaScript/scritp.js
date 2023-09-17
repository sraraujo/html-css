var verificar = document.getElementById('bt-verificar')
verificar.addEventListener('click', verificador)

function verificador() {

    var dataNasc = document.getElementById("idataNasc")
    var sexo = document.getElementsByName("sexo")
    var resultado = document.getElementById("resultado")

    var agora = new Date()
    var anoAtual = agora.getFullYear()

    if (dataNasc.value.length == 0 || dataNasc.vlaue < 0 || dataNasc.vlaue > anoAtual) {
        alert("[ ERRO ] - Digite uma data válida!")

    } else {

        var idade = anoAtual - Number(dataNasc.value)
        var frase;

        // variável que receberá a imagem referente a idade
        var imagem = document.createElement("img")

        if (idade > 120) {
            frase = "Um fóssil"
            imagem.src = "imagens/esqueleto.png"
            imagem.alt = "Foto de um esqueleto."

        } else {

            // caso sexo FEMININO seja marcado
            if (sexo[0].checked) {
                if (idade < 12) {
                    frase = "Uma criança"
                    imagem.src = "imagens/criança-f.png"
                    imagem.alt = "Foto de uma criança"

                } else if (idade < 18) {
                    frase = "Uma adolescente"
                    imagem.src = "imagens/adolescente-f.png"
                    imagem.alt = "Foto de uma adolescente"

                } else if (idade < 65) {
                    frase = "Uma mulher"
                    imagem.src = "imagens/mulher.png"
                    imagem.alt = "Foto de uma mulher"

                } else if (idade <= 120) {
                    frase = "Uma idosa"
                    imagem.src = "imagens/idosa.png"
                    imagem.alt = "Foto de uma idosa"
                }

                // caso sexo FEMININO seja marcado
            } else if (sexo[1].checked) {
                if (idade < 12) {
                    frase = "Uma criança"
                    imagem.src = "imagens/criança-m.png"
                    imagem.alt = "Foto de uma criança"

                } else if (idade < 18) {
                    frase = "Um adolescente"
                    imagem.src = "imagens/adolescente-m.png"
                    imagem.alt = "Foto de um adolescente"

                } else if (idade < 65) {
                    frase = "Um homem"
                    imagem.src = "imagens/homem.png"
                    imagem.alt = "Foto de um homem"

                } else if (idade <= 120) {
                    frase = "Um idoso"
                    imagem.src = "imagens/idoso.png"
                    imagem.alt = "Foto de um idoso"
                }
            }     
        }

        resultado.innerHTML = `<p id="especial"><strong>Detectamos:</strong> ${frase} com ${idade} ano(s).<hr>`
        resultado.append(imagem)
        resultado.innerHTML += "<hr>"
    }
}