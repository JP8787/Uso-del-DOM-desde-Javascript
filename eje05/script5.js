const clickMe = document.getElementById("clickMe")
const removeEvent = document.getElementById("remoEvent")

function handleClick() {
  alert("haz precinado el boton clickMe")
}

clickMe.addEventListener("click", handleClick)

removeEvent.addEventListener("click", () => {
  clickMe.removeEventListener("click", handleClick)
  removeEvent.disabled = true
  removeEvent.textContent = "evento eliminado"
})