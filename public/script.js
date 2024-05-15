function animateNumber(element, start, end, duration, decimalPlaces, append) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(function () {
    current += increment;
    if (
      (increment > 0 && current >= end) ||
      (increment < 0 && current <= end)
    ) {
      clearInterval(timer);
      //  current value to the end value to ensure precision
      current = end;
    }
    let roundedValue = current.toFixed(decimalPlaces);
    element.innerHTML = roundedValue + append;
    // if (current == end) {
    //   clearInterval(timer);
  }, stepTime);
}
let customerCountElement = document.getElementById("percent");
let thirty = document.getElementById("thirty");
let twoPointSix = document.getElementById("twoPointSix");

animateNumber(thirty, 0, 37.2, 200, 1, "%");
animateNumber(customerCountElement, 0, 90.7, 200, 1, "%");
animateNumber(twoPointSix, 0, 2.6, 200, 1, "x");
