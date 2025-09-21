function crearParrafo() {
  const nuevoP = document.createElement("p");
  nuevoP.textContent = "Este es un párrafo creado dinámicamente";
  nuevoP.className = "mb-0";
  document.querySelector(".card").appendChild(nuevoP);
}

crearParrafo(); 
document.getElementById("crear").addEventListener("click", crearParrafo);

document.getElementById("eliminar").addEventListener("click", () => {
  const primerP = document.querySelector(".card p");
  if (primerP) primerP.remove();
});