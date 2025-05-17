const hamburger = document.querySelector('.hamb-sec');
const hambbutton = document.querySelector('.hamb-button');

hambbutton.addEventListener('click', () => {
  hamburger.classList.toggle('show');
});