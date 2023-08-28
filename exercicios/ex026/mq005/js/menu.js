document.getElementById('burguer').addEventListener('click', function(){

    if (itens.style.display == 'flex'){
        itens.style.display = 'none'
    
    }else{
        itens.style.display = 'flex'
    }
})

/* FUNCIONA
const clickMenu = document.getElementById('burguer').addEventListener('click', function(){

    let itens = document.getElementById('itens');
    
    if (itens.style.display == 'flex') {
        itens.style.display = 'none';
    
    } else {
        itens.style.display = 'flex'
    }
})
*/
