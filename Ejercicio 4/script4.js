(() => {
  const boton = document.getElementById("remplazar");
  if (!boton) return;

  const crearSustituto = () => {
    const nuevo = document.createElement("div");
    nuevo.className = "alert alert-primary";
    nuevo.textContent = "Nuevo div";
    return nuevo;
  };

  boton.addEventListener("click", () => {
    const actual = document.getElementById("viejo");
    if (!actual || !actual.parentNode) return;
    actual.parentNode.replaceChild(crearSustituto(), actual);
  });
})();
