function crearParrafo() {
  const nuevo = document.createElement("p")
  nuevo.textContent = "Este es un párrafo creado dinámicamente"
  nuevo.className = "mb-0"
  document.querySelector(".card").appendChild(nuevo)
}

crearParrafo(); 
document.getElementById("crear").addEventListener("click", crearParrafo)

document.getElementById("eliminar").addEventListener("click", () => {
  const primerp = document.querySelector(".card p")
  if (primerp) primerp.remove()
})