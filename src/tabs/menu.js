import kotaImg from '../images/kota.jpg';
import chickenImg from '../images/chicken.jpg';
import steakImg from '../images/steak.jpg';
import { WA_NUMBER } from '../config';

const menuItems = [
  {
    name: 'King Kota — Steak',
    desc: 'Rump steak, chips, cheese, peri-peri sauce',
    img: steakImg,
    price: 'R 55',
  },
  {
    name: 'King Kota — Chicken',
    desc: 'Fried chicken strips, chips, creamy coleslaw',
    img: chickenImg,
    price: 'R 45',
  },
  {
    name: 'Russian Special',
    desc: 'Flame-grilled Russian sausage, cheese, chips',
    img: kotaImg,
    price: 'R 40',
  },
];

export default function loadMenu() {
  const content = document.getElementById('content');

  const heading = document.createElement('h2');
  heading.className = 'section-heading fade-up';
  heading.textContent = '🍔 Our Menu';
  content.appendChild(heading);

  const grid = document.createElement('div');
  grid.className = 'menu-grid';

  menuItems.forEach((item, i) => {
    const card = document.createElement('article');
    card.className = 'menu-card fade-up';
    card.style.animationDelay = `${i * 0.08}s`;

    const imgWrap = document.createElement('div');
    imgWrap.className = 'menu-card-img-wrap';

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;
    img.loading = 'lazy';
    imgWrap.appendChild(img);

    const body = document.createElement('div');
    body.className = 'menu-card-body';

    const name = document.createElement('h3');
    name.textContent = item.name;

    const desc = document.createElement('p');
    desc.textContent = item.desc;

    body.appendChild(name);
    body.appendChild(desc);

    const footer = document.createElement('div');
    footer.className = 'menu-card-footer';

    const price = document.createElement('span');
    price.className = 'menu-price';
    price.textContent = item.price;

    const waMsg = encodeURIComponent(`Hi Kota King! I'd like to order: ${item.name} (${item.price})`);
    const orderBtn = document.createElement('a');
    // btn-shimmer applies the uiverse.io animated shimmer sweep
    orderBtn.className = 'btn btn-shimmer';
    orderBtn.href = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;
    orderBtn.target = '_blank';
    orderBtn.rel = 'noopener noreferrer';
    orderBtn.textContent = '💬 Order';

    footer.appendChild(price);
    footer.appendChild(orderBtn);

    card.appendChild(imgWrap);
    card.appendChild(body);
    card.appendChild(footer);

    grid.appendChild(card);
  });

  content.appendChild(grid);
}
