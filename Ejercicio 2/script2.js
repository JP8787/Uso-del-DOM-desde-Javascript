
window.addEventListener('load', function() {
  const todosLosEnlaces = document.querySelectorAll('a');
 
  if (todosLosEnlaces.length > 0) {
    const primerEnlace = todosLosEnlaces[0];
    primerEnlace.href = 'https://www.google.com';
  }

  const elementoTitulo = document.querySelector('.titulo');
  if (elementoTitulo) {
    elementoTitulo.textContent = 'Título Modificado';
  }
  
});