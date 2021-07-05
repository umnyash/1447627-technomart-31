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
