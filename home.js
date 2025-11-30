
// navigation menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav ul');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');  // toggle class instead of inline style
});

