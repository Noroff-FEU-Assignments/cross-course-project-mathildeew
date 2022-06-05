import { productArray } from "./constants/productList.js";

const jacketContainer = document.querySelector(".shop-jackets-grid");
let cartArray = [];

productArray.forEach(function (product) {
  jacketContainer.innerHTML += `
    <div class="jacket">
        <a href="jacketpage.html"><img src="${product.image}"alt="${product.name}"></a>
        <h2>${product.name}</h2>
        <p>${product.price} NOK</p>
        <button class="cta" data-product="${product.id}">Add to cart</button>
    </div>
  `;
});

const buttons = document.querySelectorAll("button");
const cartContainer = document.querySelector(".cart-items-container");
const subtotal = document.querySelector(".subtotal-container");
const shoppingCart = document.querySelector(".shopping-cart");

buttons.forEach(function (button) {
  button.onclick = function (event) {
    shoppingCart.classList.toggle("active");
    overlay.classList.toggle("active");

    const itemToAdd = productArray.find((item) => item.id === event.target.dataset.product);
    cartArray.push(itemToAdd);
    addToCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  };
});

function addToCart(cartItems) {
  cartContainer.innerHTML = "";
  let total = 0;
  cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    cartContainer.innerHTML += `
    <div class="cart-item">
        <img src="${cartElement.image}" alt="${cartElement.name}" />
        <div>
            <p>${cartElement.name}</p>
            <p>Color: ${cartElement.color}</p>
            <p>Size: ${cartElement.size}</p>
            <p>Price: ${cartElement.price}</p>
        </div>
    </div>
    <hr/>
    `;
  });
  subtotal.innerHTML = `
          <div class="subtotal">
              <h3>Subtotal:</h3>
              <h3>${total} NOK</h3>
          </div>
          <p>Shipping and taxes calculated at checkout</p>
          <a href="checkout.html" class="cta">Go to cart</a>
      `;
}
