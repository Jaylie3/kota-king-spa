import shopImg from '../images/shopfront.jpg';

export default function loadHome() {
  const content = document.getElementById('content');

  const h = document.createElement('h2');
  h.textContent = 'Welcome to Kota King';

  const p = document.createElement('p');
  p.textContent = 'Authentic township flavours — Royal Taste, Real Food.';

  const img = document.createElement('img');
  img.src = shopImg;
  img.alt = "Kota King Shopfront";

  content.appendChild(h);
  content.appendChild(p);
  content.appendChild(img);
}
