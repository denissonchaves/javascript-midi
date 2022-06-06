function tocaSom (selectorAudio) {
  
  const elemento = document.querySelector(selectorAudio);

  if (elemento && elemento.localName === 'audio') {
    elemento.play();  
  } else {
    console.log('Elemento não encontrado ou seletor inválido');
  }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

// ---- Utilizando o while ----

let contador = 0;

while (contador < listaDeTeclas.length) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  // console.log(instrumento);

  const idAudio = `#som_${instrumento}`; // template string
  // console.log(idAudio);
  
  tecla.onclick = function () {
    tocaSom (idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }

  contador += 1;
  // console.log(contador);
}
