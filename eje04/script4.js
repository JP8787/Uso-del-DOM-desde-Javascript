const btn = document.getElementById("reemplazar");
btn.addEventListener("click", () => {
  const viejo = document.getElementById("viejo");
  const contenedor = viejo.parentNode;

  const nuevo = document.createElement("div");
  nuevo.className = "alert alert-success";
  nuevo.textContent = "Soy un nuevo div ";

  contenedor.replaceChild(nuevo, viejo);
});
