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
