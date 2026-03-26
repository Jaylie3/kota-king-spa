import shopImg from '../images/shopfront.jpg';

export default function loadHome() {
  const content = document.getElementById('content');

  // Hero section
  const hero = document.createElement('div');
  hero.className = 'hero fade-up';

  const img = document.createElement('img');
  img.src = shopImg;
  img.alt = 'Kota King shopfront';
  img.loading = 'eager';

  const overlay = document.createElement('div');
  overlay.className = 'hero-overlay';

  const heading = document.createElement('h2');
  heading.textContent = 'Welcome to Kota King 👑';

  const tagline = document.createElement('p');
  tagline.textContent = 'Authentic township flavours — Royal Taste, Real Food.';

  const menuBtn = document.createElement('button');
  menuBtn.className = 'btn btn-primary';
  menuBtn.textContent = '🍟 See Our Menu';
  menuBtn.addEventListener('click', () => {
    document.querySelector('.nav-btn[data-tab="menu"]')?.click();
  });

  overlay.appendChild(heading);
  overlay.appendChild(tagline);
  overlay.appendChild(menuBtn);

  hero.appendChild(img);
  hero.appendChild(overlay);
  content.appendChild(hero);

  // Feature tiles
  const features = [
    { icon: '🌶️', title: 'Bold Flavours', desc: 'Spiced to perfection, every time.' },
    { icon: '💰', title: 'Affordable', desc: 'Great food without breaking the bank.' },
    { icon: '📱', title: 'WhatsApp Orders', desc: 'Order ahead from your phone.' },
    { icon: '⚡', title: 'Fast Service', desc: 'Hot & ready in minutes.' },
  ];

  const grid = document.createElement('div');
  grid.className = 'features';

  features.forEach(({ icon, title, desc }, i) => {
    const tile = document.createElement('div');
    tile.className = 'feature-tile fade-up';
    tile.style.animationDelay = `${0.1 + i * 0.07}s`;

    tile.innerHTML = `
      <div class="icon" aria-hidden="true">${icon}</div>
      <h3>${title}</h3>
      <p>${desc}</p>
    `;
    grid.appendChild(tile);
  });

  content.appendChild(grid);
}
