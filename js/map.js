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
