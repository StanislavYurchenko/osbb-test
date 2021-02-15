'use strict';
const formRef = document.querySelector('#registration-form');
const phoneRef = document.querySelector('.form__input-phone');

const regExp = /^([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})$/;
const mask = '+$1($2)-$3-$4';

phoneRef.addEventListener('input', phoneHolder);
formRef.addEventListener('submit', formHolder);

function formHolder(event) {
  event.preventDefault();
  const { currentTarget } = event;
  const formData = new FormData(currentTarget);
  const formDataList = [];
  formData.forEach((value, key) => (formDataList[key] = value));
  currentTarget.reset();
}

function phoneHolder(event) {
  event.target.value = phoneMask(event.target.value);
}

function phoneMask(phone) {
  return phone.replace(/[^\d]/g, '').replace(regExp, mask);
}
