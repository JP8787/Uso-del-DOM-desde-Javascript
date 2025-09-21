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