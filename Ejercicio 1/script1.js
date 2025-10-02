(() => {
  const infoBox = document.querySelector("#info");
  if (infoBox) {
    const contenido = infoBox.textContent.trim();
    console.log(`Contenido actual del div #info: ${contenido}`);
  }

  const primerDetalle = document.querySelector(".detalle");
  if (primerDetalle) {
    primerDetalle.textContent = "Este es un detalle actualizado";
  }

  const parrafos = Array.from(document.querySelectorAll("p"));
  for (const item of parrafos) {
    item.style.backgroundColor = "#d7dbe2";
  }
})();
