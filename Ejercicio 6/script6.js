(() => {
  const input = document.getElementById("taskText");
  const addButton = document.getElementById("addTask");
  const list = document.getElementById("taskList");

  if (!input || !addButton || !list) return;

  const crearItem = (texto) => {
    const elemento = document.createElement("li");
    elemento.className = "list-group-item d-flex align-items-center justify-content-between";

    const contenedor = document.createElement("div");
    contenedor.className = "d-flex align-items-center gap-2";

    const etiqueta = document.createElement("span");
    etiqueta.className = "text";
    etiqueta.textContent = texto;

    const botonBorrar = document.createElement("button");
    botonBorrar.className = "btn btn-sm btn-gray";
    botonBorrar.setAttribute("aria-label", "eliminar");
    botonBorrar.textContent = "Eliminar";

    contenedor.append(etiqueta);
    elemento.append(contenedor, botonBorrar);

    botonBorrar.addEventListener("click", () => {
      const confirmar = confirm("Quieres eliminar esta tarea?");
      if (confirmar) {
        elemento.remove();
      }
    });

    return elemento;
  };

  const limpiarEntrada = () => {
    input.value = "";
    input.focus();
  };

  const agregarTarea = () => {
    const texto = input.value.trim();
    if (!texto) {
      input.focus();
      return;
    }

    const item = crearItem(texto);
    list.append(item);
    limpiarEntrada();
  };

  addButton.addEventListener("click", agregarTarea);

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      agregarTarea();
    }
  });
})();
