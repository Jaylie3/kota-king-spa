import shopImg from '../images/shopfront.jpg';
import { WA_NUMBER } from '../config';

/* ── undraw.co-style SVG: mobile phone with WhatsApp food order ────────────
   Flat-vector illustration (geometric shapes, single primary colour)
   mirroring the undraw.co illustration style                              */
const MOBILE_SVG = `
<svg viewBox="0 0 220 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <!-- Decorative background blob -->
  <ellipse cx="110" cy="260" rx="90" ry="28" fill="#ffecd1" opacity="0.7"/>

  <!-- Phone body -->
  <rect x="45" y="18" width="130" height="230" rx="22" fill="#3D405B"/>
  <!-- Screen bezel -->
  <rect x="53" y="36" width="114" height="194" rx="12" fill="#f5ede0"/>
  <!-- Notch -->
  <rect x="82" y="20" width="56" height="10" rx="5" fill="#2a2a38"/>
  <!-- Home bar -->
  <rect x="83" y="238" width="54" height="5" rx="2.5" fill="#2a2a38"/>

  <!-- Status bar header (WhatsApp green) -->
  <rect x="53" y="36" width="114" height="32" rx="0" fill="#25D366"/>
  <rect x="53" y="36" width="114" height="32" rx="12 12 0 0" fill="#25D366"/>
  <!-- Avatar circle -->
  <circle cx="73" cy="52" r="11" fill="rgba(255,255,255,0.25)"/>
  <!-- Name bar -->
  <rect x="89" y="45" width="56" height="7" rx="3.5" fill="rgba(255,255,255,0.6)"/>
  <rect x="89" y="55" width="36" height="5" rx="2.5" fill="rgba(255,255,255,0.35)"/>

  <!-- Chat bubble 1 — incoming (white) -->
  <rect x="60" y="80" width="84" height="36" rx="14" fill="white"/>
  <!-- Burger inside bubble: bun top -->
  <ellipse cx="85" cy="92" rx="12" ry="5" fill="#d4873a"/>
  <!-- Patty -->
  <ellipse cx="85" cy="97" rx="11" ry="4" fill="#6b3320"/>
  <!-- Bun bottom -->
  <ellipse cx="85" cy="102" rx="12" ry="4" fill="#d4873a"/>
  <!-- Text lines -->
  <rect x="102" y="87" width="34" height="6" rx="3" fill="#ddd"/>
  <rect x="102" y="96" width="24" height="5" rx="2.5" fill="#eee"/>
  <!-- R45 price chip -->
  <rect x="102" y="105" width="28" height="7" rx="3.5" fill="#e63946" opacity="0.75"/>

  <!-- Chat bubble 2 — outgoing (light green) -->
  <rect x="76" y="128" width="84" height="28" rx="14" fill="#e2ffc7"/>
  <rect x="84" y="136" width="48" height="6" rx="3" fill="#7cbf6e"/>
  <rect x="84" y="145" width="34" height="5" rx="2.5" fill="#a0d090"/>

  <!-- Chat bubble 3 — confirmation incoming -->
  <rect x="60" y="168" width="84" height="30" rx="14" fill="white"/>
  <rect x="68" y="177" width="44" height="6" rx="3" fill="#ddd"/>
  <rect x="68" y="186" width="30" height="5" rx="2.5" fill="#eee"/>
  <!-- Tick checks -->
  <path d="M123 178 l4 4 7-7" stroke="#25D366" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M127 178 l4 4 7-7" stroke="#25D366" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Send button -->
  <circle cx="160" cy="210" r="14" fill="#25D366"/>
  <path d="M154 210 h12 M162 206 l4 4-4 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Floating crown (top-left) -->
  <rect x="15" y="48" width="26" height="12" rx="3" fill="#f77f00"/>
  <polygon points="15,48 20,40 25,48" fill="#f77f00"/>
  <polygon points="25,48 28,42 31,48" fill="#f77f00"/>
  <polygon points="31,48 36,40 41,48" fill="#f77f00"/>
  <circle cx="20" cy="53" r="2.5" fill="#e63946"/>
  <circle cx="28" cy="52" r="2.5" fill="#e63946"/>
  <circle cx="36" cy="53" r="2.5" fill="#e63946"/>

  <!-- Decorative dots -->
  <circle cx="178" cy="75"  r="7" fill="#e63946" opacity="0.18"/>
  <circle cx="190" cy="95"  r="5" fill="#f77f00" opacity="0.18"/>
  <circle cx="22"  cy="190" r="6" fill="#25D366" opacity="0.18"/>
  <circle cx="30"  cy="215" r="4" fill="#25D366" opacity="0.18"/>
</svg>`;

export default function loadHome() {
  const content = document.getElementById('content');

  // ── Hero section ──────────────────────────────────────────────────────
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
  // uiverse.io glow button applied here
  menuBtn.className = 'btn btn-glow';
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

  // ── Glassmorphism feature tiles (uiverse.io glass card) ───────────────
  const features = [
    { icon: '🌶️', title: 'Bold Flavours', desc: 'Spiced to perfection, every time.' },
    { icon: '💰', title: 'Affordable', desc: 'Great food without breaking the bank.' },
    { icon: '📱', title: 'WhatsApp Orders', desc: 'Order ahead from your phone.' },
    { icon: '⚡', title: 'Fast Service', desc: 'Hot & ready in minutes.' },
  ];

  const tileGrid = document.createElement('div');
  tileGrid.className = 'features';

  features.forEach(({ icon, title, desc }, i) => {
    const tile = document.createElement('div');
    tile.className = 'feature-tile fade-up';
    tile.style.animationDelay = `${0.1 + i * 0.07}s`;
    tile.innerHTML = `
      <div class="icon" aria-hidden="true">${icon}</div>
      <h3>${title}</h3>
      <p>${desc}</p>
    `;
    tileGrid.appendChild(tile);
  });

  content.appendChild(tileGrid);

  // ── "Order Online" CTA section with undraw.co-style mobile SVG ────────
  const orderSection = document.createElement('div');
  orderSection.className = 'order-cta fade-up';
  orderSection.style.animationDelay = '0.35s';

  const orderText = document.createElement('div');
  orderText.className = 'order-cta-text';
  orderText.innerHTML = `
    <h3>Order straight from WhatsApp 📲</h3>
    <p>Browse the menu, pick your kota, and send us a message — we handle the rest. Fast, easy, no app needed.</p>
  `;

  const waBtn = document.createElement('a');
  waBtn.className = 'btn btn-shimmer';
  waBtn.href = `https://wa.me/${WA_NUMBER}`;
  waBtn.target = '_blank';
  waBtn.rel = 'noopener noreferrer';
  waBtn.textContent = '💬 WhatsApp Us Now';

  orderText.appendChild(waBtn);

  const svgWrap = document.createElement('div');
  svgWrap.className = 'undraw-wrap';
  svgWrap.innerHTML = MOBILE_SVG;

  orderSection.appendChild(orderText);
  orderSection.appendChild(svgWrap);
  content.appendChild(orderSection);
}
