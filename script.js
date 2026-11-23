const visor = document.querySelector('.visor');
const imagenVisor = visor.querySelector('.visor__imagen');
const cerrarVisor = visor.querySelector('.visor__cerrar');
const botonesImagen = document.querySelectorAll('.producto__boton-imagen');

function abrirImagen(imagen) {
  imagenVisor.src = imagen.src;
  imagenVisor.alt = imagen.alt;
  imagenVisor.classList.remove('esta-ampliada');
  visor.showModal();
  document.body.style.overflow = 'hidden';
}

function cerrarImagen() {
  visor.close();
  imagenVisor.classList.remove('esta-ampliada');
  document.body.style.overflow = '';
}

botonesImagen.forEach((boton) => {
  boton.addEventListener('click', () => {
    abrirImagen(boton.querySelector('img'));
  });
});

imagenVisor.addEventListener('click', () => {
  imagenVisor.classList.toggle('esta-ampliada');
});

cerrarVisor.addEventListener('click', cerrarImagen);

visor.addEventListener('click', (evento) => {
  if (evento.target === visor) {
    cerrarImagen();
  }
});

visor.addEventListener('close', () => {
  document.body.style.overflow = '';
});
