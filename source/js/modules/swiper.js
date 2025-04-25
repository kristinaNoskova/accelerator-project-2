import {createSwiperIfExists} from './utils';
import {Navigation, Pagination, Parallax, EffectFade} from 'swiper/modules';

const initHeroSlider = () => {
  createSwiperIfExists('.hero-swiper', {
    loop: true,
    speed: 800,
    slidesPerView: 1,
    modules: [Pagination, Parallax, EffectFade],
    effect: 'fade',
    ease: 'easeInOutCubic',
    watchSlidesVisibility: true,
    simulateTouch: true,
    touchRatio: 1,
    parallax: true,
    pagination: {
      el: '.hero-swiper__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'hero-swiper__pagination-bullet',
      bulletActiveClass: 'hero-swiper__pagination-bullet--active',
      bulletElement: 'button',
    },
    resizeObserver: false,
    observer: true,
  });
};

const initToursSlider = () => {
  createSwiperIfExists('.tours-swiper', {
    speed: 800,
    modules: [Navigation],
    simulateTouch: true,
    touchRatio: 1,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 18 },
      992: { slidesPerView: 3, spaceBetween: 30 },
    },
    navigation: {
      nextEl: '.tours__slider-button--next',
      prevEl: '.tours__slider-button--prev',
    },
  });
};

const initReviewsSlider = () => {
  createSwiperIfExists('.reviews-swiper', {
    speed: 800,
    modules: [Navigation],

    simulateTouch: true,
    touchRatio: 1,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    autoHeight: true,

    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        slidesOffsetAfter: 200,
        centeredSlides: false,
        autoHeight: false,

      },

      1200: {
        slidesPerView: 'auto',
        spaceBetween: 120,
        autoHeight: false,
        slidesOffsetAfter: 350 },
    },

    navigation: {
      nextEl: '.reviews__slider-button--next',
      prevEl: '.reviews__slider-button--prev',
    },
  });
};

export {
  initHeroSlider,
  initToursSlider,
  initReviewsSlider,
};

