'use strict';
const checkBoxRef = document.querySelector('#burger');
const burgerRef = document.querySelector('.header__nav-burger-box');
const bodyRef = document.querySelector('body');

burgerRef.addEventListener('click', burgerHolder);

function burgerHolder(event) {
  const overflow = checkBoxRef.checked ? 'visible' : 'hidden';
  bodyRef.style.overflow = overflow;
}
