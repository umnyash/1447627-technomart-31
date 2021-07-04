"use strict";

// Слайдер в блоке .promo

const prevSlideButton = document.querySelector(".prev-slide");
const nextSlideButton = document.querySelector(".next-slide");
const sliderItems = document.querySelectorAll(".pop-goods-slider-item");
const slideButtons = document.querySelectorAll(".slider-controls button");
let currentPromoSlideNumber = 1;

const changePromoSlide = function () {
  sliderItems[currentPromoSlideNumber].classList.toggle("hidden");
  slideButtons[currentPromoSlideNumber].classList.toggle("active");
}

prevSlideButton.onclick = function () {
  changePromoSlide();
  if (currentPromoSlideNumber === 0) {
    currentPromoSlideNumber = sliderItems.length - 1;
  } else {
    currentPromoSlideNumber--;
  }
  changePromoSlide();
}

nextSlideButton.onclick = function () {
  changePromoSlide();
  if (currentPromoSlideNumber === sliderItems.length - 1) {
    currentPromoSlideNumber = 0;
  } else {
    currentPromoSlideNumber++;
  }
  changePromoSlide();
}

for (let i = 0; i < slideButtons.length; i++ ) {
  slideButtons[i].onclick = function () {

    if (i === currentPromoSlideNumber) {
      return;
    }

    changePromoSlide();

    currentPromoSlideNumber = i;
    changePromoSlide();
  }
}


// Слайдер в блоке .services

const servicesButtons = document.querySelectorAll(".services-button");
const servicesListItems = document.querySelectorAll(".services-item");
let currentSlideNumber = 0;

for (let i = 0; i < servicesButtons.length; i++ ) {
  servicesButtons[i].onclick = function () {

    if (i === currentSlideNumber) {
      return;
    }

    servicesButtons[currentSlideNumber].classList.remove("services-button-active");
    servicesListItems[currentSlideNumber].classList.add("hidden");

    servicesButtons[i].classList.add("services-button-active");
    servicesListItems[i].classList.remove("hidden");

    currentSlideNumber = i;
  }
}

/*
// Модальное окно "Напишите нам"

const writeButton = document.querySelector(".write");
const writeToUs = document.querySelector(".write-to-us");
const form = writeToUs.querySelector("form");
const userName = form.querySelector("[name=user-name]");
const userEmail = form.querySelector("[name=user-email");
const userMessage = form.querySelector("[name=user-message]");
const closeWriteToUs = writeToUs.querySelector(".modal-close");

let isStorageSupport = true;
let storage = "";

// Проверка поддержки хранилища.
try {
  storage = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

// Получение данных из хранилища и установка фокуса.
writeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeToUs.classList.remove("hidden");

  if ( localStorage.getItem("userName") ) {
    userName.value = localStorage.getItem("userName");
    if (storage) {
      userEmail.value = storage;
      userMessage.focus();
    }
  } else {
    userName.focus();
  }
});

// Проверка заполненности важных полей.
form.addEventListener("submit", function (evt) {
  if (!userEmail.value || !userMessage.value) {
    evt.preventDefault();
    writeToUs.classList.remove("modal-error");
    writeToUs.classList.add("modal-error");
  } else {
    if(isStorageSupport) {
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

// Закрытие окна крестиком.
closeWriteToUs.addEventListener("click", function (evt) {
  evt.preventDefault();

  writeToUs.classList.add("hidden");
  writeToUs.classList.remove("modal-error");
});

// Закрытие окна кнопкой Esc.
window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (!writeToUs.classList.contains("hidden")) {
      evt.preventDefault();

      writeToUs.classList.add("hidden");
      writeToUs.classList.remove("modal-error");
    }
  }
});

*/
