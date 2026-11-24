const nav = document.getElementById('nav');
document.getElementById('burger').onclick = () => nav.classList.toggle('open');
nav.onclick = () => nav.classList.remove('open');

const buttons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.card');
buttons.forEach(btn => btn.onclick = () => {
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  cards.forEach(c => c.classList.toggle('hide', btn.dataset.cat !== 'all' && c.dataset.cat !== btn.dataset.cat));
});