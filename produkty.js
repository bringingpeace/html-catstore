"use strict";

const kubki = [
  {
    id: 1,
    name: "Kubek z poranną kawusią",
    currentPrice: 23.5,
    previousPrice: 27.25,
    amount: 8,
    style: ["wysoki kubek"],
    pattern: ["beige", "pink", "purple"],
    description:
      "Piękny i wesoły kubek z kotem pijącym kawusię w roli głównej. To kubek dla prawdziwego smakosza kawy. Został wykonany z wysokiej jakości porcelany. Jest on świetnym pomysłem na prezent. ",
    composition: "PORCELAIN",
    capacity: "500ml",
    height: "16cm",
    diameter: "8,4cm",
    weight: "0,34kg",
    images: ["KUBKI/1.1.jpg", "KUBKI/1.2.jpg", "KUBKI/1.3.jpg"],
  },
  {
    id: 2,
    name: "Kubek z milusińskimi kotkami",
    currentPrice: 18.99,
    previousPrice: 20.55,
    amount: 14,
    style: ["niski kubek"],
    pattern: ["beige", "pink"],
    description:
      "Piękny kubek z kotami w roli głównej. Kotki wtulają się w siebie i dodają uroczego charakteru temu kubkowi. Został on wykonany z wysokiej jakości terakoty. Jest on świetnym pomysłem na prezent. ",
    composition: "TERRACOTTA",
    capacity: "300ml",
    height: "8cm",
    diameter: "10,2cm",
    weight: "0,29kg",
    images: ["KUBKI/2.1.jpg", "KUBKI/2.2.jpg"],
  },
  {
    id: 3,
    name: "Kubek z kotem wyprowadzającym psy na spacer",
    currentPrice: 17.59,
    previousPrice: 21.25,
    amount: 2,
    style: ["niski kubek"],
    description:
      "Piękny i zabawny kubek z kotem w roli głównej. Kot wyprowadza psy na spacer na smyczy. Jeśli żyłeś z kotem wiesz już, że to on jest panem wszystkich i wszystkiego-kubek pokazuje wyższą hierarchię kota nad psem. Został wykonany z wysokiej jakości porcelany. Jest on świetnym pomysłem na prezent. ",
    composition: "PORCELAIN",
    capacity: "400ml",
    height: "11cm",
    diameter: "9,4cm",
    weight: "0,31kg",
    images: ["KUBKI/3.jpg"],
  },
  {
    id: 4,
    name: "Kubek z uroczym kotkiem",
    currentPrice: 14.99,
    previousPrice: 18,
    amount: 8,
    style: ["niski kubek"],
    description:
      "Piękny i wesoły kubek z kotem w roli głównej. Czy skradł również Twoje serce? Został wykonany z wysokiej jakości ceramiki. Jest on świetnym pomysłem na prezent. ",
    composition: "CERAMICS",
    capacity: "350ml",
    height: "10cm",
    diameter: "9,4cm",
    weight: "0,31kg",
    images: ["KUBKI/4.jpg"],
  },
  {
    id: 5,
    name: "Kubek z kotem w płaszczyku",
    currentPrice: 24.25,
    previousPrice: 28.25,
    amount: 11,
    style: ["wysoki kubek"],
    pattern: ["beige", "pink", "white"],
    description:
      "Piękny i wesoły kubek z kotem w płaszczyku w roli głównej. Czy ten kotem się dokądś wybiera? Został wykonany z wysokiej jakości porcelany. Jest on świetnym pomysłem na prezent. ",
    composition: "PORCELAIN",
    capacity: "500ml",
    height: "16cm",
    diameter: "8,4cm",
    weight: "0,34kg",
    images: ["KUBKI/5.1.jpg", "KUBKI/5.2.jpg", "KUBKI/5.3.jpg"],
  },
  {
    id: 6,
    name: "Kubek z kawą na wynos",
    currentPrice: 17.45,
    previousPrice: 21.25,
    amount: 16,
    style: ["wysoki kubek"],
    description:
      "Piękny i wesoły kubek z kotem trzymającym bezkłaczkową kawusię na wynos w roli głównej. To kubek dla prawdziwego smakosza kawy. Został wykonany z wysokiej jakości porcelany. Jest on świetnym pomysłem na prezent. ",
    composition: "PORCELAIN",
    capacity: "500ml",
    height: "16cm",
    diameter: "8,4cm",
    weight: "0,34kg",
    images: ["KUBKI/6.jpg"],
  },
  {
    id: 7,
    name: "Kubek z dwoma rudzielcami",
    currentPrice: 13.35,
    previousPrice: 15.25,
    amount: 6,
    style: ["niski kubek"],
    description:
      "Piękny i wesoły kubek z dwoma rudymi kotkami bawiącymi się kłębkiem włóczki w roli głównej. Został wykonany z wysokiej jakości porcelany. Jest on świetnym pomysłem na prezent. ",
    composition: "PORCELAIN",
    capacity: "300ml",
    height: "9cm",
    diameter: "8cm",
    weight: "0,30kg",
    images: ["KUBKI/7.jpg"],
  },
  {
    id: 8,
    name: "Kubek z kocią jogą",
    currentPrice: 25.55,
    previousPrice: 20.99,
    amount: 8,
    style: ["wysoki kubek"],
    pattern: ["beige", "pink", "purple"],
    description:
      "Piękny i wesoły kubek z ćwiczącym na macie kotem w roli głównej. Ten kubek motywuje do działania o każdej porze dnia. Został wykonany z wysokiej jakości porcelany. Jest on świetnym pomysłem na prezent. ",
    composition: "PORCELAIN",
    capacity: "500ml",
    height: "16cm",
    diameter: "8,4cm",
    weight: "0,34kg",
    images: ["KUBKI/8.jpg"],
  },
  {
    id: 9,
    name: "Kubek z kotem w koszyczku",
    currentPrice: 10.5,
    previousPrice: 8.5,
    amount: 5,
    style: ["niski kubek"],
    pattern: ["beige", "pink"],
    description:
      "Piękny i wesoły kubek z białym kotem w koszyczku. Został wykonany z wysokiej jakości porcelany. Jest on świetnym pomysłem na prezent. ",
    composition: "PORCELAIN",
    capacity: "350ml",
    height: "12cm",
    diameter: "9,4cm",
    weight: "0,32kg",
    images: ["KUBKI/9.1.jpg", "KUBKI/9.2.jpg"],
  },
  {
    id: 10,
    name: "Kubek z kotami na drapaku",
    currentPrice: 12.5,
    previousPrice: 12.5,
    amount: 5,
    style: ["niski kubek"],
    description:
      "Piękny i wesoły kubek z kotami drapiącymi drapak. Został wykonany z wysokiej jakości porcelany. Jest on świetnym pomysłem na prezent. ",
    composition: "PORCELAIN",
    capacity: "350ml",
    height: "11cm",
    diameter: "8,4cm",
    weight: "0,31kg",
    images: ["KUBKI/10.jpg"],
  },
  {
    id: 11,
    name: "Kubek z zielonookim kotem",
    currentPrice: 15.25,
    previousPrice: 15.25,
    amount: 15,
    style: ["wysoki kubek"],
    description:
      "Piękny kubek z zielonookim kotem w roli głównej. Został wykonany z wysokiej jakości porcelany. Jest on świetnym pomysłem na prezent. ",
    composition: "PORCELAIN",
    capacity: "500ml",
    height: "16cm",
    diameter: "10cm",
    weight: "0,35kg",
    images: ["KUBKI/11.jpg"],
  },
  {
    id: 12,
    name: "Kubek z Yin i Yang",
    currentPrice: 10.5,
    previousPrice: 8.5,
    amount: 5,
    style: ["niski kubek"],
    pattern: ["beige", "pink", "green"],
    description:
      "Piękny i wesoły kubek z kotami tworzącymi harmonię jak Yin i Yang. Został wykonany z wysokiej jakości porcelany. Jest on świetnym pomysłem na prezent. ",
    composition: "PORCELAIN",
    capacity: "400ml",
    height: "10cm",
    diameter: "9,4cm",
    weight: "0,32kg",
    images: ["KUBKI/12.1.jpg", "KUBKI/12.2.jpg", "KUBKI/12.3.jpg"],
  },
];

const bluzy = [
  {
    id: 1,
    name: "Bluza ze śpiącym Mruczkiem",
    currentPrice: 21.5,
    previousPrice: 26.99,
    amount: 10,
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
    amount: 15,
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
    amount: 4,
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
    amount: 20,
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
    amount: 17,
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
    amount: 27,
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
    amount: 18,
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
    amount: 14,
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
    amount: 14,
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

const wszystkieProdukty = [...kubki, ...bluzy, ...koszulki];

const nameShortener = function (arr) {
  arr.forEach(function (element) {
    const imie = element.name;
    const shortName = imie.slice(0, 26);
    return (element.shortName = shortName);
  });
};
nameShortener(kubki);
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
                  <h4 class="product-name">${produkt.shortName}</h4> 
                  <div class="product-price">
                  <h5 class="product-current-price">${produkt.currentPrice}</h5>
                  <h5 class="product-previous-price"><s>${produkt.previousPrice}</s></h5>
                  </div>
                  <div class="product-patterns">
                  ${patternHTML}
                  </div>
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
                  <h4 class="product-name">${produkt.shortName}</h4>
                   <div class="product-price">
                  <h5 class="product-current-price">${produkt.currentPrice}</h5>
                  <h5 class="product-previous-price"><s>${produkt.previousPrice}</s></h5>
                  </div>
                  <div class="product-patterns">
                  ${patternHTML}
                  </div>
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
                  <h4 class="product-name">${produkt.shortName}</h4>
                   <div class="product-price">
                  <h5 class="product-current-price">${produkt.currentPrice}</h5>
                  <h5 class="product-previous-price"><s>${produkt.previousPrice}</s></h5>
                  </div>
                  <div class="product-patterns">
                  ${patternHTML}
                  </div>
                </div>
              </div>
            </div>
    `;
    productAreaTshirts.innerHTML += productHTML;
  });
};

if (productAreaMugs) addMugs(kubki);

if (productAreaMerch) addMerch(bluzy);

if (productAreaTshirts) addTshirts(koszulki);
