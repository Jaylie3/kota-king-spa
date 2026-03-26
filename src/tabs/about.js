import { WA_NUMBER, WA_NUMBER_DISPLAY } from '../config';

/* ── undraw.co-style SVG: Chef holding a kota/burger ──────────────────────
   Flat-vector illustration using geometric shapes and the brand's primary
   colour (#e63946), mirroring the undraw.co illustration style.          */
const CHEF_SVG = `
<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" aria-label="Kota King chef illustration" role="img">
  <!-- Ground shadow blob -->
  <ellipse cx="160" cy="278" rx="100" ry="18" fill="#f0d8b8" opacity="0.7"/>

  <!-- Legs -->
  <rect x="128" y="218" width="28" height="50" rx="10" fill="#3D405B"/>
  <rect x="164" y="218" width="28" height="50" rx="10" fill="#3D405B"/>
  <!-- Shoes -->
  <ellipse cx="142" cy="267" rx="20" ry="9" fill="#2a2a38"/>
  <ellipse cx="178" cy="267" rx="20" ry="9" fill="#2a2a38"/>

  <!-- Chef body (uniform) -->
  <rect x="108" y="128" width="104" height="98" rx="18" fill="#e63946"/>
  <!-- Apron panel -->
  <rect x="132" y="140" width="56" height="82" rx="10" fill="white" opacity="0.55"/>
  <!-- Uniform buttons -->
  <circle cx="160" cy="152" r="4" fill="white"/>
  <circle cx="160" cy="168" r="4" fill="white"/>
  <circle cx="160" cy="184" r="4" fill="white"/>

  <!-- Left arm -->
  <rect x="72" y="128" width="40" height="22" rx="11" fill="#e63946"/>
  <!-- Right arm -->
  <rect x="208" y="128" width="40" height="22" rx="11" fill="#e63946"/>

  <!-- Hands -->
  <circle cx="70"  cy="152" r="16" fill="#FFB8A0"/>
  <circle cx="250" cy="152" r="16" fill="#FFB8A0"/>

  <!-- Burger (held between hands) -->
  <!-- Bun bottom -->
  <ellipse cx="160" cy="172" rx="44" ry="13" fill="#d4873a"/>
  <!-- Patty -->
  <ellipse cx="160" cy="161" rx="42" ry="10" fill="#6b3320"/>
  <!-- Lettuce edge -->
  <ellipse cx="160" cy="154" rx="44" ry="8"  fill="#4a9a5e"/>
  <!-- Cheese -->
  <rect    x="118" y="146" width="84" height="8" rx="4"  fill="#f4c430"/>
  <!-- Bun top -->
  <ellipse cx="160" cy="140" rx="44" ry="14" fill="#d4873a"/>
  <!-- Sesame seeds -->
  <ellipse cx="145" cy="131" rx="5" ry="3" fill="#b56020" transform="rotate(-20 145 131)"/>
  <ellipse cx="160" cy="128" rx="5" ry="3" fill="#b56020"/>
  <ellipse cx="175" cy="131" rx="5" ry="3" fill="#b56020" transform="rotate(20 175 131)"/>

  <!-- Neck -->
  <rect x="144" y="116" width="32" height="18" rx="8" fill="#FFB8A0"/>

  <!-- Head -->
  <circle cx="160" cy="92" r="36" fill="#FFB8A0"/>

  <!-- Chef hat (toque blanche) -->
  <!-- Brim -->
  <rect x="128" y="68" width="64" height="12" rx="6" fill="white"/>
  <!-- Tall crown -->
  <rect x="138" y="20" width="44" height="54" rx="10" fill="white"/>
  <!-- Top crease -->
  <rect x="138" y="20" width="44" height="8"  rx="6" fill="#ececec"/>

  <!-- Face — simple eyes -->
  <circle cx="149" cy="90" r="5" fill="#3D405B"/>
  <circle cx="171" cy="90" r="5" fill="#3D405B"/>
  <!-- Eye shine -->
  <circle cx="151" cy="88" r="2" fill="white"/>
  <circle cx="173" cy="88" r="2" fill="white"/>
  <!-- Smile -->
  <path d="M150 104 Q160 114 170 104" stroke="#3D405B" stroke-width="3" fill="none" stroke-linecap="round"/>

  <!-- Floating crown above hat -->
  <rect x="142" y="4"  width="36" height="14" rx="3" fill="#f77f00"/>
  <polygon points="142,4 148,0  154,4" fill="#f77f00"/>
  <polygon points="154,4 160,0  166,4" fill="#f77f00"/>
  <polygon points="166,4 172,0  178,4" fill="#f77f00"/>
  <circle cx="148" cy="10" r="3" fill="#e63946"/>
  <circle cx="160" cy="8"  r="3.5" fill="#e63946"/>
  <circle cx="172" cy="10" r="3" fill="#e63946"/>

  <!-- Decorative dots -->
  <circle cx="42"  cy="90"  r="7" fill="#f77f00" opacity="0.3"/>
  <circle cx="278" cy="90"  r="7" fill="#f77f00" opacity="0.3"/>
  <circle cx="30"  cy="190" r="5" fill="#e63946" opacity="0.2"/>
  <circle cx="290" cy="190" r="5" fill="#e63946" opacity="0.2"/>
  <circle cx="50"  cy="240" r="9" fill="#ffd166" opacity="0.35"/>
  <circle cx="270" cy="240" r="9" fill="#ffd166" opacity="0.35"/>
</svg>`;

export default function loadAbout() {
  const content = document.getElementById('content');

  // Intro grid: undraw.co SVG illustration + text
  const intro = document.createElement('div');
  intro.className = 'about-intro fade-up';

  // undraw.co-style illustration replaces the shopfront photo
  const svgWrap = document.createElement('div');
  svgWrap.className = 'undraw-wrap';
  svgWrap.innerHTML = CHEF_SVG;

  const text = document.createElement('div');
  text.className = 'about-text';

  const heading = document.createElement('h2');
  heading.className = 'section-heading';
  heading.textContent = '🏪 About Kota King';

  const p1 = document.createElement('p');
  p1.textContent =
    'Kota King is a township fast-food spot serving the best kotas, Russians, and chicken meals since day one.';

  const p2 = document.createElement('p');
  p2.textContent =
    'We pride ourselves on community, affordability, and flavour — WhatsApp ordering available for your convenience.';

  const waBtn = document.createElement('a');
  waBtn.className = 'btn btn-shimmer';
  waBtn.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi Kota King! I would like to place an order.')}`;
  waBtn.target = '_blank';
  waBtn.rel = 'noopener noreferrer';
  waBtn.textContent = '💬 WhatsApp Us';

  text.appendChild(heading);
  text.appendChild(p1);
  text.appendChild(p2);
  text.appendChild(waBtn);

  intro.appendChild(svgWrap);
  intro.appendChild(text);
  content.appendChild(intro);

  // Neumorphic info cards (uiverse.io neumorphism style)
  const infoItems = [
    { icon: '📍', title: 'Location', body: 'Township area — ask us on WhatsApp for the exact spot.' },
    { icon: '🕐', title: 'Hours', body: 'Mon – Sat: 9 am – 8 pm\nSunday: 10 am – 5 pm' },
    { icon: '📞', title: 'Contact', body: `WhatsApp orders preferred.\nCall: ${WA_NUMBER_DISPLAY}` },
    { icon: '💳', title: 'Payment', body: 'Cash · SnapScan · EFT accepted.' },
  ];

  const infoGrid = document.createElement('div');
  infoGrid.className = 'info-grid';

  infoItems.forEach(({ icon, title, body }, i) => {
    const card = document.createElement('div');
    card.className = 'info-card fade-up';
    card.style.animationDelay = `${0.1 + i * 0.07}s`;
    card.innerHTML = `
      <div class="icon" aria-hidden="true">${icon}</div>
      <h4>${title}</h4>
      <p>${body.replace(/\n/g, '<br>')}</p>
    `;
    infoGrid.appendChild(card);
  });

  content.appendChild(infoGrid);
}