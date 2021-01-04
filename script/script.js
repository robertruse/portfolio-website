const menuElement = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", (e) => {
  menuElement.classList.toggle("show");
});
