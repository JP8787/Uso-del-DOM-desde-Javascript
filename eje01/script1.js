const divInfo = document.getElementById("info");
console.log("Contenido del div info:", divInfo.textContent);

const detalle = document.querySelector(".detalle");
detalle.textContent = "Este es un detalle modificado";

document.querySelectorAll("p").forEach(p => {
  p.style.backgroundColor = "lightblue";
});