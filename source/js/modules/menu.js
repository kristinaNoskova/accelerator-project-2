const menuElement = document.querySelector('.main-nav');
const bodyElement = document.querySelector('.page-body');
const burgerButtonElement = menuElement.querySelector('.main-nav__button');

const initMobileMenu = () => {
  burgerButtonElement.addEventListener('click', () => {
    menuElement.classList.toggle('main-nav--open');
    bodyElement.classList.toggle('page-body--overlay');
  });

  menuElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('main-nav__menu-link')) {
      menuElement.classList.remove('main-nav--open');
      bodyElement.classList.remove('page-body--overlay');
    }
  });
};
export {initMobileMenu};
