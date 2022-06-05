function tocaSom (idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// ---- Utilizando o for ----

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; // template string
  
  tecla.onclick = function () {
    tocaSom (idAudio);
  };
}

// ---- Utilizando o while ----

/* let contador = 0;

while (contador < listaDeTeclas.length) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  // console.log(instrumento);

  const idAudio = `#som_${instrumento}`; // template string
  // console.log(idAudio);
  
  tecla.onclick = function () {
    tocaSom (idAudio);
  };

  contador += 1;
  // console.log(contador);
} */
