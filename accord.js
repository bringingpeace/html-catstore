`use strict`;
const html = document.documentElement;
const themeIcon = document.getElementById("icon");
const themeSwitchButton = document.querySelector("#switchLight");

// const updateThemeIcon = function (isDark) {
//   themeIcon.innerHTML = isDark
//     ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`
//     : `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#f04848" class="bi bi-fire" viewBox="0 -5 24 24">
//   <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
// </svg>`;
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

// const ulubione = document.querySelectorAll(".ulubione svg");
// const ulubioneWrapper = document.querySelectorAll(".ulubione-wrapper");
// const heart = document.querySelector(".heart");

// const ulubioneKolor = ["#ffffff", "#F04848"];

// ulubioneWrapper.forEach(function (wrapper) {
//   let currentIndex = 0;
//   const svg = wrapper.querySelector("svg");

//   wrapper.addEventListener("click", function () {
//     currentIndex = (currentIndex + 1) % ulubioneKolor.length;
//     svg.setAttribute("fill", ulubioneKolor[currentIndex]);

//     if (currentIndex === 1) {
//       //Usuwma klasę na początku pętli
//       heart.classList.remove("animate-rotate");
//       //Wymuszam reflow w przeglądarce
//       void heart.offsetWidth;
//       //Dodaję klasę ponownie na koniec pętli
//       heart.classList.add("animate-rotate");
//     }
//   });
// });

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
    !mobileMenuSwitch.contains(event.target)
  ) {
    mobileNav.classList.remove("active");
    mobileMenuSwitch1.forEach(function (svg) {
      svg.classList.toggle("hidden");
    });
  }
});

const layoutIcon = document.querySelectorAll(".filter-layout svg");
const layoutButton = document.querySelector(".filter-layout");
const productContainer = document.querySelector(".product-container");
const productImage = document.querySelectorAll(".product-image");

layoutButton.addEventListener("click", function () {
  layoutIcon.forEach(function (icon) {
    icon.classList.toggle("hidden");
  });
  productContainer.classList.toggle("switchLayout");
  productImage.forEach(function (image) {
    image.classList.toggle("imageSingleLayout");
  });
});
