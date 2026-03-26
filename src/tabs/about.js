import shopImg from '../images/shopfront.jpg';
import { WA_NUMBER, WA_NUMBER_DISPLAY } from '../config';

export default function loadAbout() {
  const content = document.getElementById('content');

  // Intro grid
  const intro = document.createElement('div');
  intro.className = 'about-intro fade-up';

  const img = document.createElement('img');
  img.src = shopImg;
  img.alt = 'Kota King shopfront';
  img.loading = 'lazy';

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
  waBtn.className = 'btn btn-whatsapp';
  waBtn.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi Kota King! I would like to place an order.')}`;
  waBtn.target = '_blank';
  waBtn.rel = 'noopener noreferrer';
  waBtn.textContent = '💬 WhatsApp Us';

  text.appendChild(heading);
  text.appendChild(p1);
  text.appendChild(p2);
  text.appendChild(waBtn);

  intro.appendChild(img);
  intro.appendChild(text);
  content.appendChild(intro);

  // Info cards
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