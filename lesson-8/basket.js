"use strict";

const cardIconWrap = document.querySelector('.cartIconWrap');
const basketTotalValue = document.querySelector('.basketTotalValue');
const basketSpan = document.querySelector('.cartIconWrap span');
const basketEl = document.querySelector(".basket");
const basketTotalEl = document.querySelector(".basketTotal");

cardIconWrap.addEventListener("click", () => {
    basketEl.classList.toggle('hidden');
});

/**
 * В корзине хранится количество каждого товара
 * Ключ это id продукта, значение это товар в корзине - объект, содержащий
 * id, название товара, цену, и количество штук
 */
const basket = {
    // 1: {id: 1, name: "blue jacket", price: 52, count: 0},
    // 2: {id: 2, name: "costume", price: 85, count: 0},
    // 3: {id: 3, name: "shorts", price: 21, count: 0},
    // 4: {id: 4, name: "pants", price: 33, count: 0},
    // 5: {id: 5, name: "blouse", price: 45, count: 0},
    // 6: {id: 6, name: "shirt", price: 24, count: 0}
}

document.querySelector('.featuredItems').addEventListener('click', (event) => {
    if (!event.target.closest('.addToCart')) {
        return;
    }
    const featuredItemEl = event.target.closest('.featuredItem');
    const idCard = +featuredItemEl.dataset.id;
    const nameCard = featuredItemEl.dataset.name;
    const priceCard = +featuredItemEl.dataset.price;
    addToCart(idCard, nameCard, priceCard);
})

function addToCart(id, name, price) {
    if (!(id in basket)) {
        basket[id] = {id, name, price, count: 0};
    }
    basket[id].count++;
    basketSpan.textContent = getTotalMoneyItems();
    basketTotalValue.textContent = getTotalMoneyPrice();
    renderProductInBasket(id);
}

function getTotalMoneyItems() {
    const productsArr = Object.values(basket);
    let count = 0;
    for (const product of productsArr) {
        count += product.count;
    }
    return count;
}

function getTotalMoneyPrice() {
    const products = Object.values(basket);
    let count = 0;
    for (const product of products) {
        count += product.count * product.price;
    }
    return count;
}

function renderProductInBasket(id) {
    const basketRowEl = basketEl
        .querySelector(`.basketRow[data-Id="${id}"]`);
    if (!basketRowEl) {
        renderNewProductInBasket(id);
        return;
    }
    basketRowEl.querySelector('.productCount')
        .textContent = basket[id].count;
    basketRowEl.querySelector('.productTotalRow')
        .textContent = basket[id].count * basket[id].price;
}

function renderNewProductInBasket(productId) {
    const productRow = `
    <div class="basketRow" data-Id="${productId}">
      <div>${basket[productId].name}</div>
      <div>
        <span class="productCount">${basket[productId].count}</span> шт.
      </div>
      <div>$${basket[productId].price}</div>
      <div>
      $<span class="productTotalRow">${(basket[productId]
        .price * basket[productId].count)}</span>
      </div>
    </div>
    `;
    basketTotalEl.insertAdjacentHTML('beforebegin', productRow)
}