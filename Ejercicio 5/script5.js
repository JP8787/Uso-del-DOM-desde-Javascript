document.addEventListener('DOMContentLoaded', configurarEventos);

function configurarEventos() {
  const botonPrincipal = document.getElementById('clickMe');
  const botonEliminar = document.getElementById('remoEvent');
  
  if (!botonPrincipal || !botonEliminar) return;
  botonPrincipal.addEventListener('click', mostrarAlerta);
  
 
  botonEliminar.addEventListener('click', function() {
    botonPrincipal.removeEventListener('click', mostrarAlerta);
  
    this.disabled = true;
    this.textContent = 'Evento eliminado';
  });
}

function mostrarAlerta() {
  alert('Has presionado el botón Click Me');
}