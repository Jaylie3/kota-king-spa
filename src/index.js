import './styles.css';
import loadHome from './tabs/home';
import loadMenu from './tabs/menu';
import loadAbout from './tabs/about';

const TAB_LOADERS = { home: loadHome, menu: loadMenu, about: loadAbout };

function clearContent() {
  const content = document.getElementById('content');
  while (content.firstChild) content.removeChild(content.firstChild);
}

function setActiveNav(tab) {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
}

function loadTab(tab) {
  const loader = TAB_LOADERS[tab];
  if (!loader) return;

  const run = () => {
    clearContent();
    loader();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (document.startViewTransition) {
    document.startViewTransition(run);
  } else {
    run();
  }

  setActiveNav(tab);
}

document.addEventListener('DOMContentLoaded', () => {
  loadHome();

  // Nav buttons
  document.querySelector('.main-nav').addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-btn[data-tab]');
    if (btn) loadTab(btn.dataset.tab);
  });

  // Logo click → home
  document.querySelector('.logo').addEventListener('click', (e) => {
    e.preventDefault();
    loadTab('home');
  });
});
