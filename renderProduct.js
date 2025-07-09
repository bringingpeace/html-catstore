"use strict";

//Odczytuje ID produktu z localStorage
const transferedId = localStorage.getItem("selectedProductId");
//Szukam produktu z takim samym ID jak przechowane w localStorage
const clickedProduct = kubki.find(function (kubek) {
  return kubek.id === Number(transferedId);
});
//Renderuje produkt jeśli przekazane id znalazło swój obiekt
// if (clickedProduct) {
//   renderProduct(clickedProduct);
// }
// function renderProduct(product) {
//   const dataFlow = document.querySelector(".dataFlow");
//   dataFlow.innerHTML = `

//   `;
// }
//Akordeony pod produktem
const akordeony = document.querySelectorAll(".productCard-accordeon-header");
akordeony.forEach(function (akordeon) {
  function toggleAccordeon() {
    const contentId = akordeon.getAttribute("aria-controls");
    const content = document.getElementById(contentId);
    const isOpen = akordeon.getAttribute("aria-expanded") === "true";
    const ikony = akordeon.querySelector(
      ".productCard-accordeon-iconContainer2"
    );

    akordeony.forEach(function (akord) {
      const conId = akord.getAttribute("aria-controls");
      const con = document.getElementById(conId);
      const ico = akord.querySelector(".productCard-accordeon-iconContainer2");

      akord.setAttribute("aria-expanded", "false");
      con.style.maxHeight = "0px";
      ico.classList.remove("productCard-accordeon-iconContainer2-animate");
    });

    if (!isOpen) {
      akordeon.setAttribute("aria-expanded", "true");
      content.style.maxHeight = content.scrollHeight + "px";
      ikony.classList.add("productCard-accordeon-iconContainer2-animate");
    }
  }

  akordeon.addEventListener("click", toggleAccordeon);
  akordeon.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordeon();
    }
  });
});

//product counter
const more = document.querySelector(".more");
const less = document.querySelector(".less");
const numDisplay = document.querySelector(".numDisplay");
const maxAmount = clickedProduct.amount;
console.log(`Max ilość: ${maxAmount}`);

const amountNum = document.querySelector(".productAmount-wrapper input");
amountNum.value = 1;

amountNum.addEventListener("input", function () {
  if (amountNum.value < 1) {
    amountNum.value = 1;
    amountNum.classList.toggle("amountError");
  }
  if (amountNum.value > 1 && amountNum.value < maxAmount) {
  }
  if (amountNum.value > maxAmount) {
    amountNum.value = maxAmount;
    amountNum.classList.toggle("amountError");
  }
});

// numDisplay.textContent = 1;

// more.addEventListener("click", function (e) {
//   numDisplay.textContent++;

//   if (numDisplay.textContent > maxAmount) {
//     numDisplay.style.background = "red";
//     numDisplay.textContent = maxAmount;
//   }
//   if (numDisplay.textContent > 1 && numDisplay.textContent < maxAmount) {
//     numDisplay.style.background = "#fff";
//   }
// });

// less.addEventListener("click", function (e) {
//   numDisplay.textContent--;

//   if (numDisplay.textContent < 1) {
//     numDisplay.style.background = "red";
//     numDisplay.textContent = 1;
//   }
//   if (numDisplay.textContent > 1 && numDisplay.textContent < maxAmount) {
//     numDisplay.style.background = "#fff";
//   }
// });

//Zapisuję wybraną ilość podczas dodawania do koszyka
// const addToCart = document.querySelector(".addToCartButton");
// addToCart.addEventListener("click", function () {
//   const selectedAmount = numDisplay.textContent;
//   console.log(selectedAmount);
// });
const addToCart = document.querySelector(".addToCartButton");
addToCart.addEventListener("click", function () {
  const selectedAmount = amountNum.value;
  console.log(selectedAmount);
});
