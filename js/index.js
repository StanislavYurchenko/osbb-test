'use strict';
import Swiper from './modules/swiper/swiper-bundle.esm.browser.min.js';

// const swiper = new Swiper(...)

var mySwiper = new Swiper('.swiper-container', {
  // // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.control__list',
    bulletClass: 'control__item',
    bulletActiveClass: 'control__item--active',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.control__next-img',
    prevEl: '.control__prev-img',
  },
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});
console.log(mySwiper);
