const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://flower-power.site/wp-json/wc/store/products/" + id;
const jacketSection = document.querySelector(".jacket-section");
const headingRight = document.querySelector(".heading-right");

async function getJacket(url) {
  const response = await fetch(url);
  const jacket = await response.json();
  console.log(jacket);

  jacketSection.innerHTML += ` 
    <div class="heading-center">
        <h1>${jacket.name}</h1>
        <h2>${jacket.prices.currency_code} ${jacket.prices.price}</h2>
    </div>
    <img src="${jacket.images[0].src}">
  `;

  headingRight.innerHTML += `
  <h1>${jacket.name}</h1>
  <h2>${jacket.prices.currency_code} ${jacket.prices.price}</h2>
  `;
}

getJacket(url);
