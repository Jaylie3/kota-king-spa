import './styles.css';
import loadHome from './tabs/home';
import loadMenu from './tabs/menu';
import loadAbout from './tabs/about';

function clearContent() {
  const content = document.getElementById('content');
  while (content.firstChild) content.removeChild(content.firstChild);
}

function loadTab(tab) {
  clearContent();
  if (tab === 'home') loadHome();
  else if (tab === 'menu') loadMenu();
  else if (tab === 'about') loadAbout();
}

document.addEventListener('DOMContentLoaded', () => {
  loadHome();

  const nav = document.querySelector('nav');
  nav.addEventListener('click', (e) => {
    const button = e.target.closest('button[data-tab]');
    if (!button) return;
    loadTab(button.dataset.tab);
  });
});
