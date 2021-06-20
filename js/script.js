// Слайдер в блоке .promo

let prevSlideButton = document.querySelector(".prev-slide");
let nextSlideButton = document.querySelector(".next-slide");
let sliderItems = document.querySelectorAll(".pop-goods-slider-item");
//let slideButton = document.querySelectorAll(".slider-controls button");
let currentPromoSlideNumber = 0;

let hidePromoSlide = function () {
  sliderItems[currentPromoSlideNumber].classList.add("hidden");
}
let showPromoSlide = function () {
  sliderItems[currentPromoSlideNumber].classList.remove("hidden");
}

prevSlideButton.onclick = function () {
  hidePromoSlide();
  if (currentPromoSlideNumber === 0) {
    currentPromoSlideNumber = sliderItems.length - 1;
  } else {
    currentPromoSlideNumber--;
  }
  showPromoSlide();
}

nextSlideButton.onclick = function () {
  hidePromoSlide();
  if (currentPromoSlideNumber === sliderItems.length - 1) {
    currentPromoSlideNumber = 0;
  } else {
    currentPromoSlideNumber++;
  }
  showPromoSlide();
}


// Слайдер в блоке .services

let servicesButtons = document.querySelectorAll(".services-button");
let servicesListItems = document.querySelectorAll(".services-list-item");
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
