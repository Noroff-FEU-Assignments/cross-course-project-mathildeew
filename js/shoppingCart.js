import { productArray } from "./constants/productList.js";

const jacketContainer = document.querySelector(".shop-jackets-grid");
let cartArray = [];

productArray.forEach(function (product) {
  jacketContainer.innerHTML += `
    <div class="jacket">
        <img src="${product.image}"alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price} NOK</p>
        <button class="cta" data-product="${product.id}">Add to cart</button>
        </div>
  `;
});

const buttons = document.querySelectorAll("button");
const cartContainer = document.querySelector(".cart-items-container");
const subtotal = document.querySelector(".subtotal-container");

buttons.forEach(function (button) {
  button.onclick = function (event) {
    const itemToAdd = productArray.find((item) => item.id === event.target.dataset.product);
    cartArray.push(itemToAdd);
    showCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  };
});

function showCart(cartItems) {
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
              <p>${total}</p>
          </div>
          <p>Shipping and taxes calculated at checkout</p>
          <a href="checkout.html" class="cta">Go to cart</a>
      `;
}

// --------------------------------------------------------------------------------------------------------------------

// import { productArray } from "./constants/productList.js";

// const productsContainer = document.querySelector(".products");
// const cart = document.querySelector(".cart");
// const cartList = document.querySelector(".cart-list");
// const totalContainer = document.querySelector(".total");

// let cartArray = [];

// productArray.forEach(function (product) {
//   productsContainer.innerHTML += `
//     <div class="product">
//         <h2>${product.name}
//         <p>${product.description}</p>
//         <h4>Pris: ${product.price}</h4>
//         <button class="cta" data-product="${product.id}">Add to cart</button>
//     </div>
//     `;
// });

// const buttons = document.querySelectorAll("button");
// buttons.forEach(function (button) {
//   button.onclick = function (event) {
//     const itemToAdd = productArray.find((item) => item.id === event.target.dataset.product);
//     cartArray.push(itemToAdd);
//     // console.log(cartArray);
//     showCart(cartArray);
//     localStorage.setItem("cartList", JSON.stringify(cartArray));
//   };
// });

// function showCart(CartItems) {
//   cartList.innerHTML = "";
//   let total = 0;
//   CartItems.forEach(function (cartElement) {
//     total += cartElement.price;
//     cartList.innerHTML += `
//     <div class="cart-item">
//     <h4>${cartElement.name}</h4>
//     `;
//   });
//   totalContainer.innerHTML = `Total: ${total}`;
// }
