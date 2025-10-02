(() => {
  const primerVinculo = document.links.item(0);
  if (primerVinculo) {
    primerVinculo.setAttribute("href", "https://www.google.com");
  }

  const encabezado = document.querySelector(".titulo");
  if (encabezado) {
    encabezado.textContent = "Titulo Modificado";
  }
})();
