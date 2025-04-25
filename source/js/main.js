import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/effect-fade';
import 'swiper/css/mousewheel';

import './modules/menu.js';
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

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initToursSlider();
  initReviewsSlider();
  initTrainingSlider();
  initAdvSlider();
  initGallerySlider();
});
