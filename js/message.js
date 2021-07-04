const messageLink = document.querySelector(".write-message");
const messagePopup = document.querySelector(".write-to-us");
const messageClose = messagePopup.querySelector(".modal-close");
const messageForm = messagePopup.querySelector("form");
const messageName = messageForm.querySelector("[name=user-name]");
const messageEmail = messageForm.querySelector("[name=user-email]");
const messageText = messageForm.querySelector("[name=user-message]");

messageLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.remove("hidden");
  messageName.focus();
});

messageClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.add("hidden");
});


messageForm.addEventListener("submit", function (evt) {
  if (!messageName.value || !messageEmail.value || !messageText.value) {
    evt.preventDefault();
  }
});

