const taskText = document.getElementById("taskText");
const addTask  = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function crearTarea(texto) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex align-items-center justify-content-between";

  const left = document.createElement("div");
  left.className = "d-flex align-items-center gap-2";

  const checkBtn = document.createElement("button");
  checkBtn.className = "btn btn-sm btn-outline-success";
  checkBtn.setAttribute("aria-label", "Marcar realizada");
  checkBtn.textContent = "✔";

  const span = document.createElement("span");
  span.className = "text";
  span.textContent = texto;

  left.append(checkBtn, span);

  const delBtn = document.createElement("button");
  delBtn.className = "btn btn-sm btn-outline-danger";
  delBtn.setAttribute("aria-label", "Eliminar");
  delBtn.textContent = "✖";

  li.append(left, delBtn);

  checkBtn.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  delBtn.addEventListener("click", () => {
    if (confirm("¿Seguro que quieres eliminar esta tarea?")) li.remove();
  });

  return li;
}

addTask.addEventListener("click", () => {
  const texto = taskText.value.trim();
  if (!texto) return taskText.focus();

  const li = crearTarea(texto);
  taskList.appendChild(li);
  taskText.value = "";
  taskText.focus();
});

taskText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask.click();
});