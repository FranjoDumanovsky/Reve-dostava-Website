const form = document.querySelector("form");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const successMessage = document.querySelector(".success-message")


// Validating the inputs for email and name
nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);


const inputFields = [nameInput, emailInput];

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  successMessage.classList.add("hidden");

  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hidden");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hidden");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  
  if (isFormValid) {
    successMessage.classList.remove("hidden");
    handleSubmit(e);
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));

async function handleSubmit(event) {
  event.preventDefault();
  console.log("we are here");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    form.reset()
  }).catch(error => {
  });
}