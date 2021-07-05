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
