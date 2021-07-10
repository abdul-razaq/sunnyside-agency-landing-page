const hamburger = document.querySelector(".hamburger");
const navigationMobile = document.querySelector(".navigation-mobile");

hamburger.addEventListener("click", function() {
  navigationMobile.classList.toggle("closed");
});
