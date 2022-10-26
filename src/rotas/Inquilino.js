const elementoInquilino = document.querySelector('#Inquilino1')

//consultar o cadastro inquilino
async function consultaInquilino ( ) {
   const retorno = await fetch('http://localhost:3000/Inquilino')
   const Inquilino = await  retorno.json( )
   preencherTela(Inquilino)
}

// faz a chamada para a função
consultaInquilino( )

function preencherTela (Inquilino) {
    Inquilino.forEach(Inquilino => {
        const novoPostInquilinoHTML = `
        <label class="tabelacadastro">${Inquilino.nome}</label><br>
        <input class="campos-login"  type="text" nome="name" id="name" placeholder="Digite seu nome"> <br>

    `    
        elementoInquilino.innerHTML = elementoInquilino.innerHTML + novoPostInquilinoHTML 
    } )
}


