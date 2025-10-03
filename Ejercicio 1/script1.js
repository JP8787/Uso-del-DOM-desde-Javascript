document.addEventListener('DOMContentLoaded', function() {
  const divInfo = document.getElementById('info');
  
  if (divInfo) {
    const textoContenido = divInfo.textContent.trim();
    console.log('Contenido actual del div #info:', textoContenido);
  }
  const elementoDetalle = document.getElementsByClassName('detalle')[0];
  
  if (elementoDetalle) {
    elementoDetalle.textContent = 'Este es un detalle actualizado';
  }

  const todosLosParrafos = document.getElementsByTagName('p');
  for (let i = 0; i < todosLosParrafos.length; i++) {
    todosLosParrafos[i].style.backgroundColor = '#e9ecef';
  }
  
});