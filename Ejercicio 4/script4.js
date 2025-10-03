document.addEventListener('DOMContentLoaded', inicializarEjercicio);

function inicializarEjercicio() {
  const botonReemplazar = document.getElementById('remplazar');
  
  if (botonReemplazar) {
    botonReemplazar.addEventListener('click', ejecutarReemplazo);
  }
}

function ejecutarReemplazo() {
  const divAntiguo = document.getElementById('viejo');
  if (!divAntiguo) return;

  const divNuevo = document.createElement('div');
  divNuevo.className = 'alert alert-primary mb-3';
  
  const textoNuevo = document.createTextNode('Nuevo div');
  divNuevo.appendChild(textoNuevo);
  const elementoPadre = divAntiguo.parentElement;
  
  if (elementoPadre) {
    elementoPadre.replaceChild(divNuevo, divAntiguo);
  }
}