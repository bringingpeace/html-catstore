`use strict`;
const html = document.documentElement;

//Animacja polubionego produktu
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

//Zmiana trybu jasności
const switcher = document.querySelector(".contrast-pin");
const slider = document.querySelector(".contrast-slider");
const logo = document.querySelector(".logo");
// const logoLightTheme = document.querySelector(".logo-light-theme");
// const logoDarkTheme = document.querySelector(".logo-dark-theme");
//1. Funkcja przełączająca tryb

function toggleTheme() {
  const isDark = html.classList.toggle("dark");

  //2. Prezłączanie klasy styli
  //a) switcher i slider toogluje klase na podstawie boolean isDark
  // logoLightTheme.classList.toggle("hidden", isDark);
  // logoDarkTheme.classList.toggle("hidden", isDark);
  switcher.classList.toggle("pin-active", isDark);
  slider.classList.toggle("moon-phase", isDark);
  isDark
    ? (logo.innerHTML =
        '<img class="logo-dark-theme" src="logo-dark-theme.png" alt="" />')
    : (logo.innerHTML =
        '<img class="logo-light-theme" src="logo-light-theme.png" alt="" />');
  // logoLightTheme.classList.toggle("hidden", isDark);
  // logoDarkTheme.classList.toggle("hidden", !isDark);

  //b) zapisuję do localStorage. Ustawiam 'theme' na boolean isDark czyli jeśli isDark istnieje(html ma .dark) to theme ustawia się na dark, jeśli isDark nie istnieje, jest false, to theme ustawia się na light.
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
//3.Odczytywanie localstorage i ustawianie trybu. Czyli na odświeżeniu strony, odwołuję się do localStorage i sparwdzam jaki był theme. Jeśli był dark, to znowu przypisuję klasę dark żeby ten tryb sie wyświetlił. Jeśli go nie było to nie robię nic, bo defaultowo jest ustawiony tryb light.
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme === "dark") {
//   html.classList.toggle("dark");
//   switcher.classList.toggle("pin-active");
//   slider.classList.toggle("moon-phase");
// }
//Update: Jeśli w pamięci zapisany był tryb dark, przy wejściu na stronę, za każdym razem triggerowała się animacja slidera. Korygujemy stan przy rozruchu strony:
window.addEventListener("DOMContentLoaded", function () {
  const savedTheme = this.localStorage.getItem("theme");
  if (savedTheme === "dark") {
    html.classList.add("dark");
    slider.classList.add("moon-phase");
    logo.innerHTML =
      '<img class="logo-dark-theme" src="logo-dark-theme.png" alt="" />';
    // logoLightTheme.classList.remove("hidden");
    // logoDarkTheme.classList.add("hidden");

    //wyłączam na chwilę transition z pinu, aby animacja przy jego wczytaniu z pamięci się nie ładowała
    switcher.style.transition = "none";
    switcher.classList.add("pin-active");
    //Włączam transition ponownie po krótkiej chwili
    this.requestAnimationFrame(function () {
      switcher.style.transition = "left 0.6s ease";
    });
  } else {
    logo.innerHTML =
      '<img class="logo-light-theme" src="logo-light-theme.png" alt="" />';
  }
});
slider.addEventListener("click", toggleTheme);

//
//Back to top icon
const scrollTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    scrollTop.classList.add("back-to-top-show");
  } else {
    scrollTop.classList.remove("back-to-top-show");
  }
});
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
