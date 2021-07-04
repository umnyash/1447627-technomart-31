"use strict";

// Пополнение корзины и закладок

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
closeAlert.addEventListener("click", function (evt) {
  evt.preventDefault();

  alert.classList.add("hidden");
});

closeAlert2.addEventListener("click", function (evt) {
  evt.preventDefault();

  alert.classList.add("hidden");
});
