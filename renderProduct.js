"use strict";

//Odczytuje ID produktu z localStorage
const transferedId = localStorage.getItem("selectedProductId");
//Szukam produktu z takim samym ID jak przechowane w localStorage
const clickedProduct = kubki.find(function (kubek) {
  return kubek.id === Number(transferedId);
});
//Renderuje produkt jeśli przekazane id znalazło swój obiekt
if (clickedProduct) {
  renderProduct(clickedProduct);
}
function renderProduct() {
  const globalProductCard = document.querySelector(".globalProductCard");

  const renderImages = clickedProduct.images;
  const zdjecia = renderImages
    .map(function (image) {
      return ` <img src="${image}" alt="" />`;
    })
    .join("");

  globalProductCard.innerHTML = `

     <div class="productSource">
          <p>Strona główna > Kubki z nadrukiem > ${clickedProduct.name}</p>
        </div>
        <div class="product-global-wrapper">
          <div class="productCard-image-wrapper">
            <div class="productCard-mainImage" dir="ltr">
              ${zdjecia}
            </div>
          </div>

          <div class="productCard-textData-wrapper">
            <div class="productCard-textData">
              <p class="productCard-name">${clickedProduct.name}</p>
              <p class="productCard-currentPrice">${clickedProduct.currency} ${clickedProduct.currentPrice}</p>
              <p class="productCard-previousPrice"><s>${clickedProduct.currency} ${clickedProduct.previousPrice}</s></p>
              <p class="productCard-omnibus">
                Najniższa cena tego produktu w ostatnich 30 dniach: ${clickedProduct.currency} ${clickedProduct.previousPrice}
              </p>
              <p class="productCard-amount">Pozostało sztuk: ${clickedProduct.amount}</p>
            </div>
          </div>

          <div class="productAmount-wrapper">
            <input type="number" />
            <button class="addToCartButton">Dodaj do koszyka</button>
          </div>

          <div class="accordeons-wrapper">
            <div class="productCard-accordeon">
              <div
                class="productCard-accordeon-header"
                role="button"
                tabindex="0"
                aria-expanded="false"
                aria-controls="product-description"
              >
                Opis produktu
                <div class="productCard-accordeon-iconContainer">
                  <div class="productCard-accordeon-iconContainer1"></div>
                  <div class="productCard-accordeon-iconContainer2"></div>
                </div>
              </div>
              <div
                class="productCard-accordeon-content"
                id="product-description"
              >
                <div class="content-in">
                  ${clickedProduct.description}
                </div>
              </div>
            </div>

            <div class="productCard-accordeon">
              <div
                class="productCard-accordeon-header"
                role="button"
                tabindex="0"
                aria-expanded="false"
                aria-controls="product-description2"
              >
                Waga i wymiary
                <div class="productCard-accordeon-iconContainer">
                  <div class="productCard-accordeon-iconContainer1"></div>
                  <div class="productCard-accordeon-iconContainer2"></div>
                </div>
              </div>
              <div
                class="productCard-accordeon-content"
                id="product-description2"
              >
                <div class="content-in">
                  <span style="font-weight: 600"> Height</span>: ${clickedProduct.height},<br />
                  <span style="font-weight: 600"> Diameter</span>: ${clickedProduct.diameter},<br />
                  <span style="font-weight: 600"> Weight:</span> ${clickedProduct.weight},<br />
                  <span style="font-weight: 600"> Capacity:</span> ${clickedProduct.capacity},
                </div>
              </div>
            </div>

            <div class="productCard-accordeon">
              <div
                class="productCard-accordeon-header"
                role="button"
                tabindex="0"
                aria-expanded="false"
                aria-controls="product-description3"
              >
                Skład
                <div class="productCard-accordeon-iconContainer">
                  <div class="productCard-accordeon-iconContainer1"></div>
                  <div class="productCard-accordeon-iconContainer2"></div>
                </div>
              </div>
              <div
                class="productCard-accordeon-content"
                id="product-description3"
              >
                <div class="content-in">
                  ${clickedProduct.composition}
                </div>
              </div>
            </div>
          </div>
        </div>

  `;
}
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
