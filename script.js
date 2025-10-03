document.addEventListener('DOMContentLoaded', function() {
  
  const menuContenedor = document.getElementById('menu-ejercicio');
  const iframeVisor = document.getElementById('visor');
  if (!menuContenedor || !iframeVisor) return;
  const todosLosBotones = menuContenedor.querySelectorAll('button[data-src]');

  
  function limpiarHash(hashURL) {
    if (hashURL && hashURL.charAt(0) === '#') {
      return hashURL.substring(1);
    }
    return hashURL;
  }

  
  function actualizarEstadoBoton(boton, activo) {
    if (activo) {
      boton.classList.remove('btn-outline-primary');
      boton.classList.add('btn-primary');
    } else {
      boton.classList.remove('btn-primary');
      boton.classList.add('btn-outline-primary');
    }
  }

 
  function marcarBotonActivo(botonSeleccionado) {
    todosLosBotones.forEach(function(boton) {
      const esActivo = boton === botonSeleccionado;
      actualizarEstadoBoton(boton, esActivo);
    });
  }

  
  function buscarBotonPorSlug(slug) {
    for (let i = 0; i < todosLosBotones.length; i++) {
      if (todosLosBotones[i].dataset.slug === slug) {
        return todosLosBotones[i];
      }
    }
    return null;
  }

  
  function cargarEjercicio(boton) {
    if (!boton) return;

    const rutaArchivo = boton.dataset.src;
    
    if (rutaArchivo) {
      iframeVisor.src = rutaArchivo;
    }

    marcarBotonActivo(boton);

    const slugEjercicio = boton.dataset.slug;
    
    if (slugEjercicio) {
      const nuevoHash = '#' + slugEjercicio;
      
      if (window.location.hash !== nuevoHash) {
        history.replaceState(null, '', nuevoHash);
      }
    }
  }

  
  menuContenedor.addEventListener('click', function(evento) {
    const botonPresionado = evento.target.closest('button[data-src]');
    
    if (botonPresionado) {
      cargarEjercicio(botonPresionado);
    }
  });

  
  window.addEventListener('hashchange', function() {
    const slugActual = limpiarHash(window.location.hash);
    const botonCorrespondiente = buscarBotonPorSlug(slugActual);
    
    if (botonCorrespondiente) {
      cargarEjercicio(botonCorrespondiente);
    }
  });

  
  const hashInicial = limpiarHash(window.location.hash);
  const botonInicial = buscarBotonPorSlug(hashInicial);
  
  if (botonInicial) {
    cargarEjercicio(botonInicial);
  } else {
    cargarEjercicio(todosLosBotones[0]);
  }
  
});