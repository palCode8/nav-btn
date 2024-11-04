const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
// let isAnimating = false;

menuToggle.addEventListener("click", function() {
  // if (isAnimating) return;

  if (menuToggle.classList.contains("closed")) {
    menuToggle.classList.remove("closed");
    menuToggle.classList.add("opened");

    // isAnimating = true;

  } else {
    menuToggle.classList.remove("opened");
    menuToggle.classList.add("closed");

    // isAnimating = true;
  }
});