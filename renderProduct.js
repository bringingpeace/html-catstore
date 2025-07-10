"use strict";

//Odczytuje ID produktu z localStorage
const transferedId = localStorage.getItem("selectedProductId");
//Szukam produktu z takim samym ID jak przechowane w localStorage
const clickedProduct = wszystkieProdukty.find(function (produkt) {
  return produkt.id === Number(transferedId);
});
//Renderuje produkt jeśli przekazane id znalazło swój obiekt
if (clickedProduct) {
  renderProduct(clickedProduct);
}

let kategoria;
function fillData() {
  if (clickedProduct.category === "Kubki") {
    return `
                  <span style="font-weight: 600"> Height</span>: ${clickedProduct.height},<br />
                  <span style="font-weight: 600"> Diameter</span>: ${clickedProduct.diameter},<br />
                  <span style="font-weight: 600"> Weight:</span> ${clickedProduct.weight},<br />
                  <span style="font-weight: 600"> Capacity:</span> ${clickedProduct.capacity}
    `;
  } else if (clickedProduct.category === "Bluzy") {
    return `
                  <span style="font-weight: 600"> Sex</span>: ${clickedProduct.sex},<br />
                  <span style="font-weight: 600"> Style</span>: ${clickedProduct.styl},<br />
    `;
  } else if (clickedProduct.category === "Koszulki") {
    return `
                  <span style="font-weight: 600"> Sex</span>: ${clickedProduct.sex},<br />
                  <span style="font-weight: 600"> Style</span>: ${clickedProduct.styl},<br />
    `;
  }
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
          <p>Strona główna > <a class="sourceLink" href="${
            clickedProduct.category
          }.html">${clickedProduct.category}</a> > ${clickedProduct.name}</p>
        </div>
        <div class="product-global-wrapper">
          <div class="productCard-image-wrapper">
           <div class="productCard-image-control-left">
           <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
           </div>
           <div class="productCard-image-control-right">
           <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
           </div>
            <div class="productCard-mainImage" dir="ltr">
              ${zdjecia}
            </div>
          </div>

          <div class="productCard-textData-wrapper">
            <div class="productCard-textData">
              <p class="productCard-name">${clickedProduct.name}</p>
              <p class="productCard-currentPrice">${clickedProduct.currency} ${
    clickedProduct.currentPrice
  }</p>
              <p class="productCard-previousPrice"><s>${
                clickedProduct.currency
              } ${clickedProduct.previousPrice}</s></p>
              <p class="productCard-omnibus">
                Najniższa cena tego produktu, w ostatnich 30 dniach wynosiła: ${
                  clickedProduct.currency
                } ${clickedProduct.previousPrice}
              </p>
              <p class="productCard-amount">Pozostało sztuk: ${
                clickedProduct.amount
              }</p>
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
                Cechy
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
                  ${fillData()}
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
//productImage controls
const slideLeft = document.querySelector(".productCard-image-control-left");
const slideRight = document.querySelector(".productCard-image-control-right");
const productImageSlider = document.querySelector(".productCard-mainImage");

const sliders = [slideLeft, slideRight];

sliders.forEach(function (slider) {
  if (clickedProduct.images.length > 1) {
    slideLeft.style.display = "flex";
    slideRight.style.display = "flex";
  }
  slider.addEventListener("click", function () {
    if (slider.classList.contains("productCard-image-control-left")) {
      productImageSlider.scrollBy({
        left: -1,
        behavior: "smooth",
      });
    } else {
      productImageSlider.scrollBy({
        left: 1,
        behavior: "smooth",
      });
    }
  });
});

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
    // amountNum.value = 1;
    amountNum.classList.toggle("amountError");
    amountNum.style.border = "3px solid red";
  }
  if (amountNum.value > 1 && amountNum.value < maxAmount) {
    amountNum.style.border = "";
  }
  if (amountNum.value > maxAmount) {
    // amountNum.value = maxAmount;
    amountNum.classList.toggle("amountError");
    amountNum.style.border = "3px solid red";
  }
});

const addToCart = document.querySelector(".addToCartButton");
addToCart.addEventListener("click", function () {
  const selectedAmount = amountNum.value;
  console.log(selectedAmount);
});
