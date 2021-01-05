/* Nav menu */
const menuElement = document.querySelector(".nav-menu");
const menuItemElements = document.querySelectorAll(".nav-menu a");
const menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", (e) => {
  menuElement.classList.toggle("show");
});

menuItemElements.forEach((item) => {
  item.addEventListener("click", (e) => {
    menuElement.classList.remove("show");
  });
});

// Close nav menu if clicked outside
document.addEventListener("click", (e) => {
  const isNav = e.target.closest("#header");
  if (isNav) return;
  menuElement.classList.remove("show");
});

/* Lightbox */
const lightboxElement = document.createElement("div");
lightboxElement.id = "lightbox";
document.body.appendChild(lightboxElement);

const imageElements = document.querySelectorAll(".work .container-images img");

imageElements.forEach((item) => {
  item.addEventListener("click", (e) => {
    const img = document.createElement("img");
    img.src = setImagePath(e.currentTarget.src);

    while (lightboxElement.firstElementChild) {
      lightboxElement.removeChild(lightbox.firstElementChild);
    }
    lightboxElement.appendChild(img);
    lightboxElement.classList.add("active");
  });
});

function setImagePath(imagePath) {
  if (screen.width > 540) return imagePath;
  return `${imagePath.slice(0, -6)}sm.png`;
}

lightboxElement.addEventListener("click", (e) => {
  if (e.target.id !== e.currentTarget.id && screen.width > 540) return;
  lightboxElement.classList.remove("active");
});
