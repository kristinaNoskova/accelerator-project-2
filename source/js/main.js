import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/effect-fade';
import 'swiper/css/mousewheel';

import {initMobileMenu} from './modules/menu.js';
import {
  initHeroSlider,
  initToursSlider,
  initReviewsSlider,
} from './modules/swiper.js';
import {
  initTrainingSlider,
  initAdvSlider,
  initGallerySlider
} from './modules/responsive-swipers.js';

import {initFormSubmit} from './modules/form-validate.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeroSlider();
  initToursSlider();
  initReviewsSlider();
  initTrainingSlider();
  initAdvSlider();
  initGallerySlider();
  initFormSubmit();
});
