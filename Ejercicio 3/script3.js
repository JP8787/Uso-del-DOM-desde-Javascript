(() => {
  const contenedor = document.querySelector(".list-panel");
  if (!contenedor) return;

  const crearNodo = () => {
    const parrafo = document.createElement("p");
    parrafo.className = "mb-0";
    parrafo.append(document.createTextNode("Este es un parrafo creado dinamicamente"));
    return parrafo;
  };

  const agregarParrafo = () => {
    contenedor.append(crearNodo());
  };

  const quitarPrimero = () => {
    const primero = contenedor.querySelector("p");
    if (primero) primero.remove();
  };

  const acciones = [
    ["crear", agregarParrafo],
    ["eliminar", quitarPrimero]
  ];

  for (const [id, accion] of acciones) {
    const boton = document.getElementById(id);
    if (boton) boton.addEventListener("click", accion);
  }

  agregarParrafo();
})();
