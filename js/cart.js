"use strict";

let cart = document.querySelector(".cart");
let cartAmount = cart.querySelector(".cart-amount");
let list = document.querySelector(".pop-goods-list");

if (!list) {
  list = document.querySelector(".catalog-list");
}

let buyButtons = list.querySelectorAll(".btn-buy");

for (let i = 0; i < buyButtons.length; i++) {

  buyButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();

    console.log(cartAmount.textContent);
    console.log( Boolean(cartAmount.textContent) );

    if (cartAmount.textContent === "0") {
      cart.classList.remove("empty");
    }

    cartAmount.textContent++;
  });
}
