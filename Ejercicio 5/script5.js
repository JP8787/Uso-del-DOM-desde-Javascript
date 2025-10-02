(() => {
  const principal = document.getElementById("clickMe");
  const quitador = document.getElementById("remoEvent");
  if (!principal || !quitador) return;

  const manejarClick = () => {
    alert("Has presionado el boton Click Me");
  };

  principal.addEventListener("click", manejarClick);

  quitador.addEventListener("click", () => {
    principal.removeEventListener("click", manejarClick);
    quitador.disabled = true;
    quitador.textContent = "Evento eliminado";
  });
})();
