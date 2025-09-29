const divInfo = document.getElementById("info")
console.log("contenido del div info:", divInfo.textContent)

const detalle = document.querySelector(".detalle")
detalle.textContent = "este es un detalle modificado"

document.querySelectorAll("p").forEach(p => {
  p.style.backgroundColor = "lightblue"
})