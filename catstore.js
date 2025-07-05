`use strict`;
const html = document.documentElement;
const themeIcon = document.getElementById("icon");
const themeSwitchButton = document.querySelector("#switchLight");

//zmiana ikony oraz trybu jasny ciemny + zapisywanie statusu do  browser memory
// const updateThemeIcon = function (isDark) {
//   themeIcon.innerHTML = isDark
//     ? `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z"/></svg>`
//     : `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z"/></svg>`;
// };

// if (localStorage.getItem("theme") === "dark") {
//   html.classList.add("dark");
//   updateThemeIcon(true);
// } else {
//   updateThemeIcon(false);
// }

// themeSwitchButton.addEventListener("click", function () {
//   const isDarkMode = html.classList.toggle("dark");
//   localStorage.setItem("theme", isDarkMode ? "dark" : "light");
//   updateThemeIcon(isDarkMode);
// });
//
const ulubione = document.querySelectorAll(".ulubione svg");
const ulubioneWrapper = document.querySelectorAll(".ulubione-wrapper");
const heart = document.querySelector(".heart");

const ulubioneKolor = ["#ffffff", "#F04848"];

ulubioneWrapper.forEach(function (wrapper) {
  let currentIndex = 0;
  const svg = wrapper.querySelector("svg");

  wrapper.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % ulubioneKolor.length;
    svg.setAttribute("fill", ulubioneKolor[currentIndex]);

    if (currentIndex === 1) {
      //Usuwma klasę na początku pętli
      heart.classList.remove("animate-rotate");
      //Wymuszam reflow w przeglądarce
      void heart.offsetWidth;
      //Dodaję klasę ponownie na koniec pętli
      heart.classList.add("animate-rotate");
    }
  });
});

const kontaktButton = document.getElementById("kontakt-link");
const sklepButton = document.getElementById("sklep-link");
// sklepButton.addEventListener("click", function (e) {
//   e.preventDefault(),
//     document
//       .querySelector(".mid-section")
//       .scrollIntoView({ behavior: "smooth" });
// });

// kontaktButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   document
//     .querySelector(".details-section")
//     .scrollIntoView({ behavior: "smooth" });
// });

const mobileMenuSwitch = document.getElementById("hamburger");
const mobileMenuSwitch1 = document.querySelectorAll("#hamburger svg");
const mobileNav = document.querySelector(".nav");

mobileMenuSwitch.addEventListener("click", function () {
  mobileNav.classList.toggle("active");

  mobileMenuSwitch1.forEach(function (svg) {
    svg.classList.toggle("hidden");
  });
});

html.addEventListener("click", function (event) {
  if (
    !mobileNav.contains(event.target) &&
    !mobileMenuSwitch.contains(event.target) &&
    mobileNav.classList.contains("active")
  ) {
    mobileNav.classList.remove("active");

    mobileMenuSwitch1.forEach(function (svg) {
      svg.classList.toggle("hidden");
    });
  }
});

const layoutIcon = document.querySelectorAll(".filter-layout svg");
const layoutButton = document.querySelector(".filter-layout");
const productContainerMerch = document.querySelector(
  ".product-container-merch"
);
const productContainerMugs = document.querySelector(".product-container-mugs");
const productContainerTshirts = document.querySelector(
  ".product-container-tshirts"
);
const productImage = document.querySelectorAll(".product-image");

//Zmiana layoutu produktów 1->2<-1
layoutButton.addEventListener("click", function () {
  layoutIcon.forEach(function (icon) {
    icon.classList.toggle("hidden");
  });

  productContainerMugs?.classList.toggle("switchLayout");
  productImage.forEach(function (image) {
    image.classList.toggle("imageSingleLayout");
  });

  productContainerMerch?.classList.toggle("switchLayout");
  productImage.forEach(function (image) {
    image.classList.toggle("imageSingleLayout");
  });

  productContainerTshirts?.classList.toggle("switchLayout");
  productImage.forEach(function (image) {
    image.classList.toggle("imageSingleLayout");
  });
});

//contrast swapper
const pinSwitch = document.querySelector(".test-pin");
const swapper = document.querySelector(".test-swapper");

const toggleTheme = function () {
  pinSwitch.classList.toggle("pin-active");
  swapper.classList.toggle("moon-phase");
};

swapper.addEventListener("click", toggleTheme);
