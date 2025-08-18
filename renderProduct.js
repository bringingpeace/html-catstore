"use strict";

// pobieram id z url produktu
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"), 10);
const product = wszystkieProdukty.find((p) => p.id === productId);

const renderedProduct = document.querySelector(".product-section");
renderedProduct.innerHTML = "";
if (product) {
  renderedProduct.innerHTML = `
    <div class="product-section-content">
          <div class="product-section-images">
            <div class="backButton">
              <div class="back-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="#000000"
                >
                  <path
                    d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"
                  />
                </svg>
              </div>
            </div>

            <div class="productCard-image-box">
              <img id="image-preview-1" src="${product.images[0]}" alt="">
          <img id="image-preview-2" src="${
            product.images[1] || product.images[0]
          }" alt="">
          <img id="image-preview-3" src="${
            product.images[2] || product.images[0]
          }" alt="">
          <img id="image-preview-4" src="${
            product.images[3] || product.images[0]
          }" alt="">
            </div>

            <div class="image-sliders">
              <div class="image-slider-dot"></div>
              <div class="image-slider-dot"></div>
              <div class="image-slider-dot"></div>
            </div>
          </div>

          <div class="productCard-summary">
            <div class="productCard-summary-header">
              <div class="productCard-summary-header-text">
                <p class="productCard-summary-name">
                  ${product.name}
                </p>
                <p class="productCard-summary-composition">
                  Dostępnych sztuk: ${product.amount}
                </p>
              </div>
              <div class="productCard-summary-header-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-heart"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
                  />
                </svg>
              </div>
            </div>
            <div class="productCard-summary-sizes">
              <div class="productCard-summary-sizes-box">XS</div>
              <div class="productCard-summary-sizes-box">S</div>
              <div class="productCard-summary-sizes-box">M</div>
              <div class="productCard-summary-sizes-box">L</div>
            </div>

            <div class="productCard-summary-ux">
              <p class="productCard-summary-price">${product.currency} ${
    product.currentPrice
  }</p>
              <div class="productCard-summary-amount-wrapper">
                <p id="less">-</p>
                <p class="productCard-summary-amount"></p>
                <p id="more">+</p>
              </div>
              <button>
                Do koszyka
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path
                    d="M444-576v-132H312v-72h132v-132h72v132h132v72H516v132h-72ZM263.79-96Q234-96 213-117.21t-21-51Q192-198 213.21-219t51-21Q294-240 315-218.79t21 51Q336-138 314.79-117t-51 21Zm432 0Q666-96 645-117.21t-21-51Q624-198 645.21-219t51-21Q726-240 747-218.79t21 51Q768-138 746.79-117t-51 21ZM48-792v-72h133l155 360h301l113-264h78L703-476q-9 20-26.5 32T637-432H317l-42 72h493v72H276q-42 0-63-36.5t0-71.5l52-90-131-306H48Z"
                  />
                </svg>
              </button>
            </div>

            <div class="accordeons-wrapper">
              <div class="productCard-accordeon">
                <div
                  class="productCard-accordeon-header"
                  role="button"
                  tabindex="0"
                  aria-expanded="false"
                  aria-controls="product-description2"
                >
                  Opis produktu
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
                   ${product.description}
                  </div>
                </div>
              </div>
              <div class="productCard-accordeon">
                <div
                  class="productCard-accordeon-header"
                  role="button"
                  tabindex="0"
                  aria-expanded="false"
                  aria-controls="product-description"
                >
                  Więcej szczegółów
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
                    <p>${product?.composition}</p>
                    <p>${product?.capacity}</p>
                    <p>${product?.diameter}</p>
                    <p>${product?.weight}</p>
                  </div>
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
