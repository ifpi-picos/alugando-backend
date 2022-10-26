const elementoPagina = document.querySelector('#paginaInicial')

async function consultaPaginaInicial ( ) {
   const retorno = await fetch('http://localhost:3000/paginaInicial')
   const paginaInicial = retorno.json( )
   console.log(paginaInicial)
}

function preencherTela (paginaInicial) {
    paginaInicial.forEach(paginaInicial => {
        const novoPostpaginaInicialHTML `
        <nav>
        <a class="logo" href="index.html">ALUGANDO</a>
        <div class="mobile-menu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul class="nav-list">
          <li><a href="login.html">Login</a></li>
          <li><a href="cadastroLoc.html">Cadastrar Locador</a></li>
          <li><a href="cadastroInq.html">Cadastrar Inquilino</a></li>
        </ul>
        </nav>
    `
        elementoPagina.innerHTML = elementoPagina.innerHTML + novoPostpaginaInicialHTML 
    });
}

// faz a chamada para a função
consultaPaginaInicial( )