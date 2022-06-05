const form = document.querySelector("#contact-form");
const sentMessage = document.querySelector(".sent-message");

const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const tel = document.querySelector("#tel");
const telError = document.querySelector("#tel-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const textArea = document.querySelector("textarea");

function validateForm() {
  event.preventDefault();

  if (checkLength(name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
    name.style.border = "2px solid #ff9f00";
  }
  if (validateTel(tel.value) === true) {
    telError.style.display = "none";
  } else {
    telError.style.display = "block";
    tel.style.border = "2px solid #ff9f00";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    email.style.border = "2px solid #ff9f00";
  }
  if (checkLength(message.value, 9) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    textArea.style.border = "2px solid #ff9f00";
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

function validateTel(tel) {
  const regEx = /^[4|9]\d{7}$/;
  const patternMatches = regEx.test(tel);
  return patternMatches;
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function sendForm(event) {
  if (checkLength(name.value, 0) === true && validateTel(tel.value) === true && validateEmail(email.value) === true && checkLength(message.value, 9) === true) {
    sentMessage.style.display = "block";
    form.style.display = "none";
  } else {
    sentMessage.style.display = "none";
  }
}
