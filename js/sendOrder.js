const form = document.querySelector("#send-order-form");
const sentMessage = document.querySelector(".order-success");
const formContainer = document.querySelector(".customer-information-form");
const checkOutContent = document.querySelector(".checkout");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const tel = document.querySelector("#tel");
const telError = document.querySelector("#tel-error");
const fname = document.querySelector("#fname");
const fnameError = document.querySelector("#fname-error");
const lname = document.querySelector("#lname");
const lnameError = document.querySelector("#lname-error");
const addr = document.querySelector("#address");
const addrError = document.querySelector("#address-error");
const city = document.querySelector("#city");
const cityError = document.querySelector("#city-error");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip-error");

function validateForm() {
  event.preventDefault();

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    email.style.border = "2px solid #ff9f00";
  }
  if (checkLength(tel.value, 7) === true) {
    telError.style.display = "none";
  } else {
    telError.style.display = "block";
    tel.style.border = "2px solid #ff9f00";
  }
  if (checkLength(fname.value, 0) === true) {
    fnameError.style.display = "none";
  } else {
    fnameError.style.display = "block";
    fname.style.border = "2px solid #ff9f00";
  }
  if (checkLength(lname.value, 0) === true) {
    lnameError.style.display = "none";
  } else {
    lnameError.style.display = "block";
    lname.style.border = "2px solid #ff9f00";
  }
  if (checkLength(addr.value, 0) === true) {
    addrError.style.display = "none";
  } else {
    addrError.style.display = "block";
    addr.style.border = "2px solid #ff9f00";
  }
  if (checkLength(city.value, 0) === true) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
    city.style.border = "2px solid #ff9f00";
  }
  if (checkLength(zip.value, 0) === true) {
    zipError.style.display = "none";
  } else {
    zipError.style.display = "block";
    zip.style.border = "2px solid #ff9f00";
  }

  sendForm();
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// function validateTel(tel) {
//   const regEx = /^(\+47?)[4|9]\d{7}$/;
//   const patternMatches = regEx.test(tel);
//   return patternMatches;
// }

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function sendForm(event) {
  if (checkLength(fname.value, 0) === true && checkLength(tel.value, 7) === true && validateEmail(email.value) === true && checkLength(lname.value, 0) === true && checkLength(addr.value, 0) === true && checkLength(city.value, 0) === true && checkLength(zip.value, 0) === true) {
    sentMessage.style.display = "block";
    formContainer.style.display = "none";
    checkOutContent.style.display = "none";
  } else {
    sentMessage.style.display = "none";
  }
}
