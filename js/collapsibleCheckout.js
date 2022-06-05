const checkoutCollapse = document.querySelector(".checkout-collapse");
const showItemsBtn = document.querySelector(".showitems-button");
const collapsible = document.querySelector(".checkout-cart");

showItemsBtn.addEventListener("click", showItems);

function showItems() {
  if (collapsible.classList.toggle("active")) {
    showItemsBtn.innerHTML = "Hide items";
  } else {
    showItemsBtn.innerHTML = "Show items";
  }
}
