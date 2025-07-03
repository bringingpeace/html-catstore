"use strict";

const produkty = [
  {
    id: 1,
    name: "Kubek testowy",
    currentPrice: 15.99,
    previousPrice: 10.99,
    images: [`../ai/HOME/KUBKI/cup1.jpg`, `../ai/HOME/KUBKI/cup2.jpg`],
    pattern: ["red", "orange", "brown"],
  },
  {
    id: 2,
    name: "Kubek testowy2",
    currentPrice: 25.99,
    previousPrice: 20.99,
    images: [`../ai/HOME/KUBKI/cup3.jpg`, `../ai/HOME/KUBKI/cup4.jpg`],
    pattern: ["blue", "green"],
  },
  {
    id: 3,
    name: "Kubek testowy3",
    currentPrice: 35.99,
    previousPrice: 30.99,
    images: [`../ai/HOME/KUBKI/cup5.jpg`, `../ai/HOME/KUBKI/cup6.jpg`],
  },
];

const productArea = document.querySelector(".product-container");

const addProduct = function (produkty) {
  productArea.innerHTML = "";
  produkty.forEach(function (produkt, index) {
    const patternHTML = produkt.pattern
      ? produkt.pattern
          .map(
            (color) =>
              `<div class="product-pattern" style="background-color:${color}"></div>`
          )
          .join("")
      : "";
    const productHTML = `
    <div class="product">
              <img class="product-image" src="${produkt.images[0]}" alt="" />
              <div class="product-data">
                <div class="product-text-data">
                  <h4 class="product_name">${produkt.name}</h4>
                  <h5>${produkt.currentPrice}</h5>
                  <h5><s>${produkt.previousPrice}</s></h5>
                  <div class="product-patterns">
                  ${patternHTML}
                  </div>
                </div>
                <div class="product-addtocart-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#000000"
                  >
                    <path
                      d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
    `;
    productArea.innerHTML += productHTML;
  });
};

addProduct(produkty);
