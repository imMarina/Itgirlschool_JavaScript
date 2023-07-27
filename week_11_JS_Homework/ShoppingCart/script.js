// 1. Create Variables

const btnAddCart1 = document.getElementById('btn-add-cart-1');
const btnAddCart2 = document.getElementById('btn-add-cart-2');
const btnAddCart3 = document.getElementById('btn-add-cart-3');

const btnDiscount = document.getElementById('btn-discount');
const inputDiscount = document.getElementById('input-discount');

const totalPrice = document.getElementById('total-price');
const inputTotal = document.getElementById('input-total');

let price1 = Number(btnAddCart1.value)
let price2 = Number(btnAddCart2.value)
let price3 = Number(btnAddCart3.value)

btnAddCart1.onclick = function () {
    inputTotal.value = price1
}

btnAddCart2.onclick = function () {
    inputTotal.value = price2
}

btnAddCart3.onclick = function () {
    inputTotal.value = price3
}



const cart = document.querySelector(".cart");

const prices = cart.querySelectorAll(".price");
const result = cart.querySelector(".result__value");

const discountBtn = cart.querySelector(".discount-btn");

const discount = 0.2;

function calcPricesWithDiscount(discount = 0) {
  let resultSum = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i].textContent.split(" ")[0];
    const priceWithDiscount = Number(price) * (1 - discount);

    resultSum = resultSum + priceWithDiscount;
    prices[i].textContent = `${priceWithDiscount.toFixed(2)} руб.`;
  }

  // for (const value of prices.values()) {
  //   const price = value.textContent.split(" ")[0];
  //   const priceWithDiscount = Number(price) * (1 - discount);

  //   resultSum = resultSum + priceWithDiscount;
  //   value.textContent = `${priceWithDiscount.toFixed(2)} руб.`;
  // }

  result.textContent = `${resultSum} руб.`;
}

discountBtn.addEventListener("click", () => {
  calcPricesWithDiscount(discount);
});





