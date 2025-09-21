const clickMe = document.getElementById("clickMe");
const removeEvent = document.getElementById("removeEvent");

function handleClick() {
  alert("¡Botón clickeado!");
}

clickMe.addEventListener("click", handleClick);

removeEvent.addEventListener("click", () => {
  clickMe.removeEventListener("click", handleClick);
  removeEvent.disabled = true;
  removeEvent.textContent = "Evento eliminado";
});