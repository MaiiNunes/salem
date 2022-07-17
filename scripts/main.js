let estrela = 'cadente';
if (estrela === 'cadente') {
  alert('Opa, passou uma estrela cadente!');
} else {
  alert('Ahh, faz um pedido...');
}

//img//
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'img/cat.png') {
      minhaImagem.setAttribute ('src','img/lua.png');
    } else {
      minhaImagem.setAttribute ('src','img/cat.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Fale com Salém, ' + meuNome;
    }
}

meuBotao.onclick = function() { defineNomeUsuario();
}
