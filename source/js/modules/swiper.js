import {createSwiperIfExists} from './utils';
import {Navigation, Pagination, A11y} from 'swiper/modules';

const observeSlideChanges = (swiperInstance) => {
  const target = swiperInstance.slides[swiperInstance.activeIndex];
  if (!target) {
    return;
  }

  const observer = new MutationObserver(() => {
    swiperInstance.updateAutoHeight();
  });

  observer.observe(target, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  return observer;
};

const initHeroSlider = () => {
  createSwiperIfExists('.hero-swiper', {
    loop: true,
    speed: 800,
    slidesPerView: 1,
    modules: [Pagination, A11y],
    simulateTouch: true,
    touchRatio: 1.5,
    threshold: 10,
    autoHeight: true,
    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
    pagination: {
      el: '.hero-swiper__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'hero-swiper__pagination-bullet',
      bulletActiveClass: 'hero-swiper__pagination-bullet--active',
      bulletElement: 'button',
    },
    observer: true,
    observeParents: true,
    on: {
      init(swiper) {
        observeSlideChanges(swiper);
      },
      slideChange(swiper) {
        swiper.updateAutoHeight();
      },
    },
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
