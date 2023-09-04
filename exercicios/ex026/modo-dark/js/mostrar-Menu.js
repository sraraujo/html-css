function mostrarMennu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    
    }else {
        itens.style.display = 'block'
    }
}

function mudarDimensao(){
    if (window.innerWidth >= 768){
        itens.style.display = 'block'

    } else{
        itens.style.display = 'none'
    }
}


function modoDark(){
    if(Body.style.BackgroundColor == 'black'){
        Body.style.BackgroundColor = ' white'
        Body.style.Color = 'black'
    }else{
        Body.style.BackgroundColor = 'black'
    }
}


var modo = document.getElementById('modo')
modo.addEventListener('click', 'modoDark()')
