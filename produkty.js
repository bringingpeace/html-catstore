"use strict";

const produkty = [
  {
    id: 1,
    name: "Kubek testowy",
    currentPrice: 15.99,
    previousPrice: 10.99,
    images: [`../ai/HOME/KUBKI/cup1.jpg`, `../ai/HOME/KUBKI/cup2.jpg`],
    pattern: ["red", "orange", "brown", "black"],
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

const bluzy = [
  {
    id: 1,
    name: "Bluza ze śpiącym Mruczkiem",
    currentPrice: 21.5,
    previousPrice: 26.99,
    amound: 10,
    pattern: ["pink", "brown"],
    sex: "woman",
    styl: "bluza z kapturem",
    description:
      "Bluza z długim rękawem o luźnym kroju. U góry znajduje się szeroki kaptur. Dół bluzy oraz zakończenia rękawów zostały obszyte taśmą ściągającą, która pozwoli osadzić się bluzie na sylwetce. Z przodu znajduje się naszyta aplikacja śpiącego kotka.",
    composition: "60% BAWEŁNA, 40% POLIESTER",
    size: ["XS", "S", "M", "L"],
    images: [`../ai/UBRANIA/BLUZY/1.1.jpg`, "../ai/UBRANIA/BLUZY/1.2.jpg"],
  },

  {
    id: 2,
    name: "Bluza z bajecznym kotkiem",
    currentPrice: 25.5,
    previousPrice: 24.99,
    amound: 15,
    pattern: ["pink", "beige", "yellow"],
    sex: ["woman", "man", "unisex"],
    styl: "bluza z kapturem",
    description:
      "Bluza z długim rękawem o luźnym kroju. U góry znajduje się szeroki kaptur. Dół bluzy oraz zakończenia rękawów zostały obszyte taśmą ściągającą, która pozwoli osadzić się bluzie na sylwetce. Z przodu znajduje się naszyta aplikacja śnieżnobiałego kotka, który ucina sobie drzemkę.",
    composition: "60% BAWEŁNA, 40% POLIESTER",
    size: ["XS", "S", "M", "L"],
    images: [
      `../ai/UBRANIA/BLUZY/2.1.jpg`,
      "../ai/UBRANIA/BLUZY/2.2.jpg",
      "../ai/UBRANIA/BLUZY/2.3.jpg",
    ],
  },

  {
    id: 3,
    name: "Bluza ze słodkim buraskiem",
    currentPrice: 25.5,
    previousPrice: 27.25,
    amound: 4,
    sex: ["woman", "man", "unisex"],
    styl: ["bluza z kapturem", "bluza z kieszenią"],
    description:
      "Bluza z kapturem o kroju loose fit, wyróżniająca się uroczym nadrukiem kotka. Bluza na co dzień. Bluza wykonana z miękkiej dzianiny o wysokiej zawartości bawełny.",
    composition: "60% BAWEŁNA, 40% POLIESTER",
    size: ["XS", "S", "M", "L", "XL"],
    images: ["../ai/UBRANIA/BLUZY/3.jpg"],
  },

  {
    id: 4,
    name: "Bluza z ucinającym sobie drzemkę kotem na laptopie",
    currentPrice: 28.5,
    previousPrice: 28.5,
    amound: 20,
    sex: ["woman", "man", "unisex"],
    styl: ["bluza z kapturem", "bluza z kieszenią"],
    description:
      '"Kończ tą pracę i zajmij się mną!".Bluza z kotem śpiącym na laptopie. Bluza z długim rękawem o luźnym kroju. U góry znajduje się szeroki kaptur. Dół bluzy oraz zakończenia rękawów zostały obszyte taśmą ściągającą, która pozwoli osadzić się bluzie na sylwetce. Z przodu znajduje się naszyta aplikacja śnieżnobiałego kotka, który ucina sobie drzemkę na Twoim narzędziu pracy.Bluza posiada z przodu tzw. kieszeń kangurka.',
    composition: "60% BAWEŁNA, 40% POLIESTER",
    size: ["XS", "S", "M", "L", "XL"],
    images: ["../ai/UBRANIA/BLUZY/4.jpg"],
  },

  {
    id: 5,
    name: "Bluza z uroczym kociakiem",
    currentPrice: 22.25,
    previousPrice: 23.5,
    amound: 17,
    sex: ["woman", "man", "unisex"],
    styl: ["bluza z kapturem", "bluza z kieszenią"],
    description:
      "Bluza z uroczym kociakiem o długiej sierści. Bluza z długim rękawem. U góry znajduje się kaptur. Dół bluzy oraz zakończenia rękawów zostały obszyte taśmą ściągającą, która pozwoli osadzić się bluzie na sylwetce. Z przodu znajduje się pojemna tzw. kieszeń kangurka.",
    composition: "77% BAWEŁNA, 23% POLIESTER",
    size: ["XS", "S", "M", "L", "XL"],
    images: ["../ai/UBRANIA/BLUZY/5.1.jpg", "../ai/UBRANIA/BLUZY/5.2.jpg"],
  },

  {
    id: 6,
    name: "Bluza z przyjaciółmi",
    currentPrice: 26.5,
    previousPrice: 25.5,
    amound: 27,
    sex: ["woman", "man", "unisex"],
    styl: ["bluza bez kaptura"],
    description:
      "Luźna bluza z długim rękawem. Dół bluzy oraz zakończenia rękawów zostały obszyte taśmą ściągającą, która pozwoli osadzić się bluzie na sylwetce. Pozytywny pomarańczowy kolor ożywia bluzę.Na bluzie znajduje się nadruk kota z psem.",
    composition: "77% BAWEŁNA, 23% POLIESTER",
    size: ["XS", "S", "M", "L", "XL"],
    images: ["../ai/UBRANIA/BLUZY/6.jpg"],
  },

  {
    id: 7,
    name: "Bluza z rozbrykanym kotkiem",
    currentPrice: 22.5,
    previousPrice: 25.5,
    amound: 18,
    sex: "woman",
    styl: ["bluza z kapturem", "bluza z kieszenią"],
    description:
      '"Pobawmy się piłeczką!".Bluza z kotem bawiązym się piłeczką. Damska bluza z długim rękawem. U góry znajduje się kaptur. Dół bluzy oraz zakończenia rękawów zostały obszyte taśmą ściągającą, która pozwoli osadzić się bluzie na sylwetce. Z przodu znajduje się pojemna tzw. kieszeń kangurka.',
    composition: "60% BAWEŁNA, 40% POLIESTER",
    size: ["XS", "S", "M"],
    images: ["../ai/UBRANIA/BLUZY/7.jpg"],
  },

  {
    id: 8,
    name: "Bluza z kotem ogrodnika",
    currentPrice: 24.5,
    previousPrice: 25.5,
    amound: 14,
    sex: ["woman", "man", "unisex"],
    styl: ["bluza bez kaptura"],
    description:
      "Bluza z kotem siedzącym wśród kwiatków. Spokojny odcień zieleni bluzy działa uspokajająco. Luźna bluza z długim rękawem. Dół bluzy oraz zakończenia rękawów zostały obszyte taśmą ściągającą, która pozwoli osadzić się bluzie na sylwetce.",
    composition: "60% BAWEŁNA, 40% POLIESTER",
    size: ["XS", "S", "M", "L", "XL"],
    images: ["../ai/UBRANIA/BLUZY/8.jpg"],
  },

  {
    id: 9,
    name: "Bluza z puszystym kotkiem",
    currentPrice: 24.5,
    previousPrice: 25.5,
    amound: 14,
    sex: ["woman", "man", "unisex"],
    styl: ["bluza bez kaptura"],
    description:
      "Bluza z pociesznym puszystym kotkiem. Luźna bluza z długim rękawem. Jej miękki materiał zagwarantuje Ci miłe  w dotyku doznania. Dół bluzy oraz zakończenia rękawów zostały obszyte taśmą ściągającą, która pozwoli osadzić się bluzie na sylwetce.",
    composition: "66% BAWEŁNA, 34% POLIESTER",
    size: ["XS", "S", "M", "L", "XL"],
    images: ["../ai/UBRANIA/BLUZY/9.jpg"],
  },
];

const koszulki = [
  {
    id: 1,
    name: "Koszulka z białym futrzakiem",
    currentPrice: 25.5,
    previousPrice: 27.25,
    amount: 6,
    sex: ["woman", "man"],
    styl: ["koszulka na krótki rękaw"],
    description:
      "T-shirt z wysokiej jakości bawełny.Koszulka została zaprojektowana z modnym wzorem kultowego kota. Idealny zarówno do casualowych stylizacji, na spotkanie z przyjaciółmi jak i na imprezę. Koszulka stworzona z myślą o Tobie oraz z miłości do zwierząt.",
    composition: "100% BAWEŁNA",
    size: ["XS", "S", "M", "L", "XL"],
    images: ["../ai/UBRANIA/KOSZULKI/1.jpg"],
  },
  {
    id: 2,
    name: "Top - Chodź się PSItul",
    currentPrice: 25.5,
    previousPrice: 27.25,
    amount: 9,
    sex: ["woman", "man"],
    styl: ["top"],
    description:
      "Top Best Friends Kot I Pies. Przewiewny top idealny na gorące dni. Wysokiej jakości bawełna.",
    composition: "90% BAWEŁNA, 10% POLIESTER",
    size: ["XS", "S", "M", "L", "XL"],
    images: ["../ai/UBRANIA/KOSZULKI/2.jpg"],
  },
  {
    id: 3,
    name: "Koszulka z kocią rodzinką",
    currentPrice: 15.85,
    previousPrice: 23.25,
    amount: 15,
    sex: ["woman"],
    styl: ["koszulka na krótki rękaw"],
    description:
      "Koszulka wykonana z wysokiej jakości bawełny. Idealna na codzień. Stworzona z myślą o Tobie oraz z miłości do zwierząt. Przedstawia szczęśliwą kocią rodzinkę.",
    composition: "100% BAWEŁNA",
    size: ["XS", "S", "M"],
    images: ["../ai/UBRANIA/KOSZULKI/3.jpg"],
  },
  {
    id: 4,
    name: "Koszulka z trzema łobuzami",
    currentPrice: 17.5,
    previousPrice: 20.4,
    amount: 8,
    sex: ["woman", "man"],
    styl: ["koszulka na krótki rękaw"],
    description:
      "Koszulka z trzema kocimi łobuzami siedzącymi w koszyku. Koszulka wykonana z wysokiej jakości bawełny. Idealna na codzień. Stworzona z myślą o Tobie oraz z miłości do zwierząt.",
    composition: "70% BAWEŁNA, 30% POLIESTER",
    size: ["XS", "S", "M", "L", "XL"],
    images: ["../ai/UBRANIA/KOSZULKI/4.jpg"],
  },
  {
    id: 5,
    name: "Koszulka/Top dla gamera",
    currentPrice: 10.7,
    previousPrice: 12.45,
    amount: 4,
    sex: ["woman", "man"],
    styl: ["top"],
    description:
      "Top dla prawdziwego gamera. Przypomina Ci coś? Koszulka wykonana z wysokiej jakości bawełny. Idealna na codzień. Stworzona z myślą o Tobie oraz z miłości do zwierząt.",
    composition: "60% BAWEŁNA, 40% POLIESTER",
    size: ["XS", "S", "M", "L", "XL"],
    images: ["../ai/UBRANIA/KOSZULKI/5.jpg"],
  },
  {
    id: 6,
    name: "Koszulka/Top ze śpioszkami",
    currentPrice: 8,
    previousPrice: 15.25,
    amount: 11,
    sex: ["woman", "man"],
    styl: ["top"],
    description:
      "Top z dwoma śpioszkami - kotkiem i pieskiem. Dla prawdziwego miłośnika zwierząt domowych! Koszulka wykonana z wysokiej jakości bawełny. Idealna na codzień. Stworzona z myślą o Tobie oraz z miłości do zwierząt.",
    composition: "90% BAWEŁNA, 10% POLIESTER",
    size: ["XS", "S", "M", "L", "XL"],
    images: ["../ai/UBRANIA/KOSZULKI/6.jpg"],
  },
  {
    id: 7,
    name: "Top z kotem kanapowcem",
    currentPrice: 15.5,
    previousPrice: 10,
    amount: 7,
    sex: ["woman", "man"],
    styl: ["top"],
    description:
      "Top z kotem rozwalonym na kanapie z tajemniczym napojem w łapce. Koszulka wykonana z wysokiej jakości bawełny. Idealna na codzień. Stworzona z myślą o Tobie oraz z miłości do zwierząt.",
    composition: "100% BAWEŁNA",
    size: ["XS", "S", "M", "L", "XL"],
    images: ["../ai/UBRANIA/KOSZULKI/7.jpg"],
  },
  {
    id: 8,
    name: "Top z głodnym kotem",
    currentPrice: 17.5,
    previousPrice: 9,
    amount: 3,
    sex: ["woman", "man"],
    styl: ["top"],
    description:
      "Top z głodnym lub wybrednym na jedzenie kotem. Koszulka wykonana z wysokiej jakości bawełny. Idealna na codzień. Stworzona z myślą o Tobie oraz z miłości do zwierząt. ",
    composition: "60% BAWEŁNA, 40% POLIESTER",
    size: ["XS", "S", "M", "L", "XL"],
    images: ["../ai/UBRANIA/KOSZULKI/8.jpg"],
  },
];

const wszystkieProdukty = [...produkty, ...bluzy, ...koszulki];

const nameShortener = function (arr) {
  arr.forEach(function (element) {
    const imie = element.name;
    const shortName = imie.slice(0, 26) + "...";
    return (element.shortName = shortName);
  });
};
nameShortener(produkty);
nameShortener(bluzy);
nameShortener(koszulki);

const productAreaMugs = document.querySelector(".product-container-mugs");
const productAreaMerch = document.querySelector(".product-container-merch");
const productAreaTshirts = document.querySelector(".product-container-tshirts");

const addMugs = function (arr) {
  productAreaMugs.innerHTML = "";
  arr.forEach(function (produkt, index) {
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
                  <h4 class="product_name">${produkt.shortName}</h4>
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
    productAreaMugs.innerHTML += productHTML;
  });
};

const addMerch = function (arr) {
  productAreaMerch.innerHTML = "";
  arr.forEach(function (produkt, index) {
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
                  <h4 class="product_name">${produkt.shortName}</h4>
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
    productAreaMerch.innerHTML += productHTML;
  });
};

const addTshirts = function (arr) {
  productAreaTshirts.innerHTML = "";
  arr.forEach(function (produkt, index) {
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
                  <h4 class="product_name">${produkt.shortName}</h4>
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
    productAreaTshirts.innerHTML += productHTML;
  });
};

if (productAreaMugs) addMugs(produkty);

if (productAreaMerch) addMerch(bluzy);

if (productAreaTshirts) addTshirts(koszulki);
