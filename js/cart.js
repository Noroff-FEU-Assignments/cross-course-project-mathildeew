const cartItems = JSON.parse(localStorage.getItem("cartList"));

console.log(cartItems);

const checkoutCart = document.querySelector(".checkout-cart");
const subtotal = document.querySelector(".subtotal");

let total = 0;
cartItems.forEach(function (cartElement) {
  total += cartElement.price;
  checkoutCart.innerHTML += `
  <div class="checkout-cart-item">
  <img src="${cartElement.image}" alt="${cartElement.name}" />
  <div>
    <p>${cartElement.name}</p>
    <p>${cartElement.size} / ${cartElement.color}</p>
  </div>
  <p>${cartElement.price} NOK</p>
  </div>
  <hr/>
    `;
  subtotal.innerHTML = `
<div>
        <p>Total</p>
        <p>Shipping</p>
        <h3>Subtotal</h3>
      </div>
      <div>
        <p>${total} NOK</p>
        <p>INCLUDED</p>
        <h3>${total} NOK</h3>
      </div>
`;
});
