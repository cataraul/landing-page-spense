const hamburger = document.getElementById("hamburger");
const modal = document.querySelector(".modal");

hamburger.addEventListener("click", function () {
  modal.classList.toggle("open-modal");
});
