"use strict";

const transferedId = localStorage.getItem("selectedProductId");

const clickedProduct = kubki.find(function (kubek) {
  return kubek.id === Number(transferedId);
});

if (clickedProduct) {
  renderProduct(clickedProduct);
}

function renderProduct(product) {
  const dataFlow = document.querySelector(".dataFlow");
  dataFlow.innerHTML = `
  <img width="200px" src="${product.images[0]}"/>
  <p>${product.name} ${product.currentPrice}</p>
  `;
}
