export default function loadAbout() {
  const content = document.getElementById('content');
  const h = document.createElement('h2'); 
  h.textContent = 'About Kota King';

  const p1 = document.createElement('p');
  p1.textContent = 'Kota King is a township fast-food spot serving the best kotas, Russians, and chicken meals.';

  const p2 = document.createElement('p');
  p2.textContent = 'We pride ourselves on community, affordability, and flavour — WhatsApp ordering is available for convenience.';

  content.appendChild(h);
  content.appendChild(p1);
  content.appendChild(p2);
}