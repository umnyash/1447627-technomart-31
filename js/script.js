// *** ОБЩИЕ СКРИПТЫ ***

// --- Корзина и закладки. ---

const cart = document.querySelector(".cart");
const cartAmount = cart.querySelector(".cart-amount");
const bookmarks = document.querySelector(".bookmarks");
const bookmarksAmount = bookmarks.querySelector(".bookmarks-amount");
let list = document.querySelector(".pop-goods-list");
const alert = document.querySelector(".alert");
const closeAlert = alert.querySelector(".modal-close");
const closeAlert2 = alert.querySelector(".btn-close");

if (!list) {
  list = document.querySelector(".catalog-list");
}

const buyButtons = list.querySelectorAll(".btn-buy");
const bookmarksButtons = list.querySelectorAll(".btn-bookmarks");

for (let i = 0; i < buyButtons.length; i++) {

  buyButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();

    if (cartAmount.textContent === "0") {
      cart.classList.remove("empty");
    }
    cartAmount.textContent++;

    alert.classList.remove("hidden");
  });

  bookmarksButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();

    if (bookmarksAmount.textContent === "0") {
      bookmarks.classList.remove("empty");
    }
    bookmarksAmount.textContent++;
  });
}

// Закрытие модального окна, сообщающего о добавлении в корзину.
// крестиком
closeAlert.addEventListener("click", function (evt) {
  evt.preventDefault();

  alert.classList.add("hidden");
});
// кнопкой "продолжить покупки"
closeAlert2.addEventListener("click", function (evt) {
  evt.preventDefault();

  alert.classList.add("hidden");
});
// кнопкой Esc
window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (!alert.classList.contains("hidden")) {
      evt.preventDefault();
      alert.classList.add("hidden");
    }
  }
});


// *** Проверка, является ли текущая страница главной. ***

const body = document.querySelector("body");

if (!body.classList.contains("inner-page")) {

  // *** СКРИПТЫ ТОЛЬКО ДЛЯ ГЛАВНОЙ СТРАНИЦЫ ***

  // --- promo-slider ---

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

  // --- services-slider ---

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

  // --- map ==-

  const mapLink = document.querySelector(".open-map");
  const mapPopup = document.querySelector(".our-location");
  const mapClose = mapPopup.querySelector(".modal-close");

  mapLink.classList.add("map-js");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("hidden");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("hidden");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === "Esc" || evt.key === "Escape") {
      if (!mapPopup.classList.contains("hidden")) {
        evt.preventDefault();
        mapPopup.classList.add("hidden");
      }
    }
  });

  // --- message ---

  const messageLink = document.querySelector(".write-message");
  const messagePopup = document.querySelector(".write-to-us");
  const messageClose = messagePopup.querySelector(".modal-close");
  const messageForm = messagePopup.querySelector("form");
  const messageName = messageForm.querySelector("[name=user-name]");
  const messageEmail = messageForm.querySelector("[name=user-email]");
  const messageText = messageForm.querySelector("[name=user-message]");

  let isStorageSupport = true;
  let storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

  messageLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.remove("hidden");

    if (storage) {
      messageName.value = storage;
      messageEmail.focus();
      if (localStorage.getItem("email")) {
        messageEmail.value = localStorage.getItem("email");
        messageText.focus();
      }
    } else {
      messageName.focus();
    }

    messageName.focus();
  });

  messageClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.add("hidden");
    messagePopup.classList.remove("modal-error");
  });


  messageForm.addEventListener("submit", function (evt) {
    if (!messageName.value || !messageEmail.value || !messageText.value) {
      evt.preventDefault();
      messagePopup.classList.remove("modal-error");
      messagePopup.offsetWidth = messagePopup.offsetWidth;
      messagePopup.classList.add("modal-error");
    } else if (isStorageSupport) {
      localStorage.setItem("name", messageName.value);
      localStorage.setItem("email", messageEmail.value);
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === "Esc" || evt.key === "Escape") {
      if (!messagePopup.classList.contains("hidden")) {
        evt.preventDefault();
        messagePopup.classList.add("hidden");
        messagePopup.classList.remove("modal-error");
      }
    }
  });
  // кончились скрипты.
}
