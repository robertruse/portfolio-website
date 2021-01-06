/* Nav menu */
const menuElement = document.querySelector(".nav-menu");
const menuLinks = document.querySelectorAll(".nav-menu a");
const menuListItems = document.querySelectorAll(".nav-menu li");
const toggleButton = document.querySelector(".toggle-btn");

//NodeList functions
function addShowClass(nodeList) {
  nodeList.forEach((item) => {
    item.classList.add("show");
  });
}

function removeShowClass(nodeList) {
  nodeList.forEach((item) => {
    item.classList.remove("show");
  });
}

function toggleShowClass(nodeList) {
  nodeList.forEach((item) => {
    item.classList.toggle("show");
  });
}

/*
function setTransitionDelay(nodeList) {
  nodeList.forEach((item, index) => {
    item.style.transitionDelay = `${index / 20}s`;
  });
}

// Add staggered 50ms transition delay ;
setTransitionDelay(menuListItems);
*/

toggleButton.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("show");
  menuElement.classList.toggle("show");
  toggleShowClass(menuListItems);
});

// Close nav menu after link click
menuLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    toggleButton.classList.remove("show");
    menuElement.classList.remove("show");
    removeShowClass(menuListItems);
  });
});

// Close nav menu if clicked outside
document.addEventListener("click", (e) => {
  const isNavParentElement = e.target.closest("#header");
  if (isNavParentElement) return;
  toggleButton.classList.remove("show");
  menuElement.classList.remove("show");
  removeShowClass(menuListItems);
});

/* Lightbox */
const lightboxElement = document.createElement("div");
const imageElements = document.querySelectorAll(".work .container-images img");

lightboxElement.id = "lightbox";
document.body.appendChild(lightboxElement);

function setImagePath(imagePath) {
  if (screen.width > 540) return imagePath;
  return `${imagePath.slice(0, -6)}sm.png`;
}

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

lightboxElement.addEventListener("click", (e) => {
  if (e.target.id !== e.currentTarget.id && screen.width > 540) return;
  lightboxElement.classList.remove("active");
});

/*
const lightboxElement = document.createElement("div");
lightboxElement.id = "lightbox";
document.body.appendChild(lightboxElement);

const img = document.createElement("img");
lightboxElement.appendChild(img);

function setImagePath(imagePath) {
  if (screen.width > 540) return imagePath;
  return `${imagePath.slice(0, -6)}sm.png`;
}

imageElements.forEach((item) => {
  item.addEventListener("click", (e) => {
    img.src = setImagePath(e.currentTarget.src);

    lightboxElement.classList.add("active");
  });
});

lightboxElement.addEventListener("click", (e) => {
  if (e.target.id !== e.currentTarget.id && screen.width > 540) return;
  lightboxElement.classList.remove("active");
});
*/
