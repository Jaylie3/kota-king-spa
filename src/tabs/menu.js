import kotaImg from '../images/kota.jpg';
import chickenImg from '../images/chicken.jpg';
import steakImg from '../images/steak.jpg';

const menuItems = [
  { name: 'King Kota - Steak', desc: 'Rump steak, chips, cheese, sauce', img: steakImg },
  { name: 'King Kota - Chicken', desc: 'Fried chicken, chips, salad', img: chickenImg },
  { name: 'Russian Special', desc: 'Russian sausage, cheese, chips', img: kotaImg }
];

export default function loadMenu() {
  const content = document.getElementById('content');
  const h = document.createElement('h2'); 
  h.textContent = 'Menu';
  content.appendChild(h);

  menuItems.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;

    const text = document.createElement('div');
    const name = document.createElement('h3'); 
    name.textContent = item.name;
    const desc = document.createElement('p'); 
    desc.textContent = item.desc;

    text.appendChild(name);
    text.appendChild(desc);

    card.appendChild(img);
    card.appendChild(text);

    content.appendChild(card);
  });
}
