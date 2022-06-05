const newsletterSubscribe = document.querySelector("#newsletter-email");
const errorMessage = document.querySelector("#email-error-newsletter");
const hideSubscribe = document.querySelector(".hide-subscribe");
const subscribedMessage = document.querySelector(".subscribed-message");

newsletterSubscribe.addEventListener("submit", validateNewsletter);

function validateNewsletter() {
  event.preventDefault();
  if (validateEmail(email.value) === true) {
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
    email.style.border = "2px solid #ff9f00";
  }
  subscribe();
}

function subscribe(event) {
  if (validateEmail(email.value) === true) {
    hideSubscribe.style.display = "none";
    subscribedMessage.style.display = "block";
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
