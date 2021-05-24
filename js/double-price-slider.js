let minPriceSlider = document.querySelector(".min-price-slider");
let maxPriceSlider = document.querySelector(".max-price-slider")
let minPriceField = document.querySelector(".min-price-field");
let maxPriceField = document.querySelector(".max-price-field");

minPriceSlider.oninput = function() {
  minPriceField.value = minPriceSlider.value;
}
maxPriceSlider.oninput = function() {
  maxPriceField.value = maxPriceSlider.value;
}
minPriceField.oninput = function() {
  minPriceSlider.value = minPriceField.value;
}
maxPriceField.oninput = function() {
  maxPriceSlider.value = maxPriceField.value;
}
