import { Navigation } from 'swiper/modules';
import { createSwiperIfExists } from './utils';

const BREAKPOINTS = {
  desktop: '(min-width: 1200px)',
  mobile: '(max-width: 767px)',
};

const breakpointDesktop = window.matchMedia(BREAKPOINTS.desktop);
const breakpointMobile = window.matchMedia(BREAKPOINTS.mobile);

const manageResponsiveSlider = (breakpoint, cb) => {
  breakpoint.addEventListener('change', cb);
};

let swiperAdv = null;
let originalSlides = null;

const swiperWrappeElement = document.querySelector('.adv-swiper__wrapper');
const swiperSlidesElements = swiperWrappeElement.querySelectorAll('.adv-swiper__item');

const initAdvSlider = () => {
  if(!originalSlides) {
    originalSlides = Array.from(swiperSlidesElements).map((slide) => slide.cloneNode(true));
  }

  if (breakpointDesktop.matches && !swiperAdv) {
    if(originalSlides.length % 2 !== 0) {

      originalSlides.forEach((element) => {
        const clone = element.cloneNode(true);
        swiperWrappeElement.appendChild(clone);
      });
    }

    swiperAdv = createSwiperIfExists('.adv-swiper', {
      modules: [Navigation],
      speed: 600,
      loop: true,
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      initialSlide: 2,
      centeredSlides: true,

      on: {
        init: function () {
          this.slideToLoop(2, 0);
        },
      },
      breakpoints: {
        1200: {
          spaceBetween: 30,
        },
      },

      navigation: {
        nextEl: '.adv-swiper__button--next',
        prevEl: '.adv-swiper__button--prev',
      },
    });

  } else if (!breakpointDesktop.matches && swiperAdv) {
    swiperAdv.destroy(true, true);
    swiperAdv = null;
    swiperWrappeElement.innerHTML = '';

    originalSlides.forEach((slide) => {
      swiperWrappeElement.appendChild(slide.cloneNode(true));
    });
  }
};

manageResponsiveSlider(breakpointDesktop, initAdvSlider);

let swiperTraining = null;

const initTrainingSlider = () => {
  if(!swiperTraining) {
    swiperTraining = createSwiperIfExists('.training-swiper', {
      modules: [Navigation],
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 16,
      initialSlide: breakpointMobile.matches ? 2 : 0,
      observer: true,

      navigation: {
        nextEl: '.training__slider-button--next',
        prevEl: '.training__slider-button--prev',
      },

      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  } else {
    swiperTraining.slideTo(breakpointMobile.matches ? 2 : 0, 0);
  }
};

manageResponsiveSlider(breakpointMobile, initTrainingSlider);

let swiperGallery = null;

const initGallerySlider = () => {
  if(!swiperGallery && !breakpointDesktop.matches) {
    swiperGallery = createSwiperIfExists('.gallery-swiper', {
      modules: [Navigation],
      speed: 600,
      loop: true,
      slidesPerView: 2,
      spaceBetween: 5.5,

      navigation: {
        nextEl: '.gallery__slider-button--next',
        prevEl: '.gallery__slider-button--prev',
      },

      breakpoints: {
        560: {
          slidesPerView: 3,
          spaceBetween: 5,

        },
        960: {
          slidesPerView: 4,
        },
      },
    });
  } else if (breakpointDesktop.matches && swiperGallery){
    swiperGallery.destroy(true, true);
    swiperGallery = null;
  }
};

manageResponsiveSlider(breakpointDesktop, initGallerySlider);


export {
  initAdvSlider,
  initTrainingSlider,
  initGallerySlider
};
