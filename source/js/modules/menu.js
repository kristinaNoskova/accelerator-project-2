const menuElement = document.querySelector('.main-nav');
const burgerButtonElement = menuElement.querySelector('.main-nav__button');

burgerButtonElement.addEventListener('click', () => {
  menuElement.classList.toggle('main-nav--open');
});

export {};
