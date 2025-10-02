document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#menu-ejercicio");
  const frame = document.querySelector("#visor");
  const externalLink = document.querySelector("#open-new");

  if (!menu || !frame) return;

  const buttons = Array.from(menu.querySelectorAll("button[data-src]"));
  if (!buttons.length) return;

  const cleanHash = (hash) => (hash && hash.startsWith("#")) ? hash.slice(1) : hash;

  const applyState = (button, active) => {
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  };

  const markActive = (current) => {
    buttons.forEach((button) => applyState(button, button === current));
  };

  const pickBySlug = (slug) => buttons.find((button) => button.dataset.slug === slug);

  const showExercise = (button) => {
    if (!button) return;

    const source = button.dataset.src;
    if (source) {
      frame.setAttribute("src", source);
      if (externalLink) {
        externalLink.setAttribute("href", source);
      }
    }

    markActive(button);

    const slug = button.dataset.slug;
    if (slug) {
      const targetHash = `#${slug}`;
      if (targetHash !== window.location.hash) {
        history.replaceState(null, "", targetHash);
      }
    }
  };

  menu.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-src]");
    if (!button) return;
    showExercise(button);
  });

  window.addEventListener("hashchange", () => {
    const slug = cleanHash(window.location.hash);
    const matching = pickBySlug(slug);
    if (matching) {
      showExercise(matching);
    }
  });

  const initial = pickBySlug(cleanHash(window.location.hash)) || buttons[0];
  showExercise(initial);
});
