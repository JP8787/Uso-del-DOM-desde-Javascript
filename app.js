function cargar(url, linkEl) {
  const visor = document.getElementById('visor');
  visor.src = url;

  const openBtn = document.getElementById('open-new');
  openBtn.href = url;

  document.querySelectorAll('.menu-link').forEach(a => a.classList.remove('active'));
  if (linkEl) linkEl.classList.add('active');

  const id = linkEl?.getAttribute('href')?.replace('#', '') || '';
  if (id) location.hash = id;
}

function init() {
  const links = Array.from(document.querySelectorAll('.menu-link'));
  if (!links.length) return;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      cargar(link.dataset.href, link);
    });
  });

  const hash = location.hash?.trim();
  const linkByHash = hash ? links.find(a => a.getAttribute('href') === hash) : null;
  if (linkByHash) cargar(linkByHash.dataset.href, linkByHash);
  else cargar(links[0].dataset.href, links[0]);
}

document.addEventListener('DOMContentLoaded', init);function cargar(url, linkEl) {
  const visor = document.getElementById('visor');
  visor.src = url;

  const openBtn = document.getElementById('open-new');
  openBtn.href = url;

  document.querySelectorAll('.menu-link').forEach(a => a.classList.remove('active'));
  if (linkEl) linkEl.classList.add('active');

  const id = linkEl?.getAttribute('href')?.replace('#', '') || '';
  if (id) location.hash = id;
}

function init() {
  const links = Array.from(document.querySelectorAll('.menu-link'));
  if (!links.length) return;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      cargar(link.dataset.href, link);
    });
  });

  const hash = location.hash?.trim();
  const linkByHash = hash ? links.find(a => a.getAttribute('href') === hash) : null;
  if (linkByHash) cargar(linkByHash.dataset.href, linkByHash);
  else cargar(links[0].dataset.href, links[0]);
}

document.addEventListener('DOMContentLoaded', init);
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu-ejercicio");
  const visor = document.getElementById("visor");
  const openNew = document.getElementById("open-new");

  function setActive(link) {
    document.querySelectorAll(".menu-link").forEach(a => a.classList.remove("active"));
    if (link) link.classList.add("active");
  }

  function loadExercise(link) {
    if (!link) return;
    const href = link.dataset.href;
    if (!href) return;
    visor.src = href;          // carga en el iframe
    openNew.href = href;       // para abrir en pestaña nueva
    setActive(link);
  }

  // Click en el menú
  menu.addEventListener("click", (e) => {
    const a = e.target.closest(".menu-link");
    if (!a) return;
    e.preventDefault();
    loadExercise(a);
    // Mantener el hash coherente (#eje01, #eje02, ...)
    history.replaceState(null, "", a.getAttribute("href"));
  });

  // Cargar inicial según hash o el primero
  const initial =
    document.querySelector(`.menu-link[href="${location.hash}"]`) ||
    document.querySelector(".menu-link"); // el primero de la lista

  loadExercise(initial);
});document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu-ejercicio");
  const visor = document.getElementById("visor");
  const openNew = document.getElementById("open-new");

  function setActive(link) {
    document.querySelectorAll(".menu-link").forEach(a => a.classList.remove("active"));
    if (link) link.classList.add("active");
  }

  function loadExercise(link) {
    if (!link) return;
    const href = link.dataset.href;
    if (!href) return;
    visor.src = href;          // carga en el iframe
    openNew.href = href;       // para abrir en pestaña nueva
    setActive(link);
  }

  // Click en el menú
  menu.addEventListener("click", (e) => {
    const a = e.target.closest(".menu-link");
    if (!a) return;
    e.preventDefault();
    loadExercise(a);
    // Mantener el hash coherente (#eje01, #eje02, ...)
    history.replaceState(null, "", a.getAttribute("href"));
  });

  // Cargar inicial según hash o el primero
  const initial =
    document.querySelector(`.menu-link[href="${location.hash}"]`) ||
    document.querySelector(".menu-link"); // el primero de la lista

  loadExercise(initial);
});
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu-ejercicio");
  const visor = document.getElementById("visor");
  const openNew = document.getElementById("open-new");

  function setActive(link) {
    document.querySelectorAll(".menu-link").forEach(a => a.classList.remove("active"));
    if (link) link.classList.add("active");
  }

  function loadExercise(link) {
    if (!link) return;
    const href = link.dataset.href;
    if (!href) return;
    visor.src = href;          // carga en el iframe
    openNew.href = href;       // para abrir en pestaña nueva
    setActive(link);
  }

  // Click en el menú
  menu.addEventListener("click", (e) => {
    const a = e.target.closest(".menu-link");
    if (!a) return;
    e.preventDefault();
    loadExercise(a);
    // Mantener el hash coherente (#eje01, #eje02, ...)
    history.replaceState(null, "", a.getAttribute("href"));
  });

  // Cargar inicial según hash o el primero
  const initial =
    document.querySelector(`.menu-link[href="${location.hash}"]`) ||
    document.querySelector(".menu-link"); // el primero de la lista

  loadExercise(initial);
});document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu-ejercicio");
  const visor = document.getElementById("visor");
  const openNew = document.getElementById("open-new");

  function setActive(link) {
    document.querySelectorAll(".menu-link").forEach(a => a.classList.remove("active"));
    if (link) link.classList.add("active");
  }

  function loadExercise(link) {
    if (!link) return;
    const href = link.dataset.href;
    if (!href) return;
    visor.src = href;          // carga en el iframe
    openNew.href = href;       // para abrir en pestaña nueva
    setActive(link);
  }

  // Click en el menú
  menu.addEventListener("click", (e) => {
    const a = e.target.closest(".menu-link");
    if (!a) return;
    e.preventDefault();
    loadExercise(a);
    // Mantener el hash coherente (#eje01, #eje02, ...)
    history.replaceState(null, "", a.getAttribute("href"));
  });

  // Cargar inicial según hash o el primero
  const initial =
    document.querySelector(`.menu-link[href="${location.hash}"]`) ||
    document.querySelector(".menu-link"); // el primero de la lista

  loadExercise(initial);
});document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu-ejercicio");
  const visor = document.getElementById("visor");
  const openNew = document.getElementById("open-new");

  function setActive(link) {
    document.querySelectorAll(".menu-link").forEach(a => a.classList.remove("active"));
    if (link) link.classList.add("active");
  }

  function loadExercise(link) {
    if (!link) return;
    const href = link.dataset.href;
    if (!href) return;
    visor.src = href;          // carga en el iframe
    openNew.href = href;       // para abrir en pestaña nueva
    setActive(link);
  }

  // Click en el menú
  menu.addEventListener("click", (e) => {
    const a = e.target.closest(".menu-link");
    if (!a) return;
    e.preventDefault();
    loadExercise(a);
    // Mantener el hash coherente (#eje01, #eje02, ...)
    history.replaceState(null, "", a.getAttribute("href"));
  });

  // Cargar inicial según hash o el primero
  const initial =
    document.querySelector(`.menu-link[href="${location.hash}"]`) ||
    document.querySelector(".menu-link"); // el primero de la lista

  loadExercise(initial);
});