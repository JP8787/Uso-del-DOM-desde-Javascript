window.onload = function() {
  
  const contenedorPrincipal = document.getElementById('contenedor');
  const botonCrear = document.getElementById('crear');
  const botonEliminar = document.getElementById('eliminar');
  
  if (!contenedorPrincipal) return;

  function generarNuevoParrafo() {
    const parrafo = document.createElement('p');
    parrafo.className = 'alert alert-secondary mb-2';
    
    const textoParrafo = document.createTextNode('Este es un párrafo creado dinámicamente');
    parrafo.appendChild(textoParrafo);
    
    return parrafo;
  }
  if (botonCrear) {
    botonCrear.onclick = function() {
      const nuevoParrafo = generarNuevoParrafo();
      contenedorPrincipal.appendChild(nuevoParrafo);
    };
  }

  if (botonEliminar) {
    botonEliminar.onclick = function() {
      const primerParrafo = contenedorPrincipal.querySelector('p');
      
      if (primerParrafo !== null) {
        primerParrafo.remove();
      }
    };
  }
  contenedorPrincipal.appendChild(generarNuevoParrafo());
  
};