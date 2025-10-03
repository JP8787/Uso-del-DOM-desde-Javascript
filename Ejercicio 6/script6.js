document.addEventListener('DOMContentLoaded', function() {
  
  const campoTexto = document.getElementById('taskText');
  const botonAgregar = document.getElementById('addTask');
  const listaTareas = document.getElementById('taskList');

  if (!campoTexto || !botonAgregar || !listaTareas) return;

  function crearElementoTarea(textoTarea) {
    const itemLista = document.createElement('li');
    itemLista.className = 'list-group-item d-flex justify-content-between align-items-center';
    
    const spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarea;
    const botonBorrar = document.createElement('button');
    botonBorrar.className = 'btn btn-sm btn-danger';
    botonBorrar.textContent = 'Eliminar';
    
    itemLista.appendChild(spanTexto);
    itemLista.appendChild(botonBorrar);
    
    botonBorrar.addEventListener('click', function() {
      const confirmar = confirm('¿Quieres eliminar esta tarea?');
      if (confirmar === true) {
        itemLista.remove();
      }
    });
    
    return itemLista;
  }

  function agregarTarea() {
    const textoIngresado = campoTexto.value.trim();
    
    if (textoIngresado === '') {
      campoTexto.focus();
      return;
    }
    
    const nuevaTarea = crearElementoTarea(textoIngresado);
    listaTareas.appendChild(nuevaTarea);
    
    campoTexto.value = '';
    campoTexto.focus();
  }

  botonAgregar.addEventListener('click', agregarTarea);
  campoTexto.addEventListener('keydown', function(evento) {
    if (evento.key === 'Enter') {
      evento.preventDefault();
      agregarTarea();
    }
  });
  
});