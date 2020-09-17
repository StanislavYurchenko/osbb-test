'use strict';
import Swiper from './modules/swiper/swiper-bundle.esm.browser.min.js';

const newsSwiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.control__list',
    bulletClass: 'control__item',
    bulletActiveClass: 'control__item--active',
    clickable: true,
  },
  navigation: {
    nextEl: '.control__next-img',
    prevEl: '.control__prev-img',
  },
});

const photosSwiper = new Swiper('.photo-swiper-container', {
  loop: true,
  pagination: {
    el: '.control__list',
    bulletClass: 'control__item',
    bulletActiveClass: 'control__item--active',
    clickable: true,
  },
  navigation: {
    nextEl: '.control__next-img',
    prevEl: '.control__prev-img',
  },
  breakpoints: {
    100: {
      direction: 'vertical',
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
    },
    375: {
      direction: 'vertical',
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      direction: 'horizontal',
    },
  },
});
