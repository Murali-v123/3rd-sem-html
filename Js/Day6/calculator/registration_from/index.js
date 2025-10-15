const form = document.getElementById("register-form");
//fields
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("c-password");
const formSuccess = document.getElementById("form-success");

//errors
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const cPasswordError = document.getElementById("c-password-error");

const validate = () => {
  let isValid = true;
  if (name.value === "") {
    isValid = false;
    nameError.textContent = "Name is required";
  } else {
    isValid = true;
    nameError.textContent = "";
  }

  if (email.value === "") {
    isValid = false;
    emailError.textContent = "Email is required";
  } else {
    isValid = true;
    emailError.textContent = "";
  }

  if (email.value === "") {
    isValid = false;
    emailError.textContent = "Email is required";
  } else {
    isValid = true;
    emailError.textContent = "";
  }
  if (password.value === "") {
    isValid = false;
    passwordError.textContent = "Password is required";
  } else {
    isValid = true;
    passwordError.textContent = "";
  }

  if (cPassword.value === "") {
    isValid = false;
    cPasswordError.textContent = "Confirm Password is required";
  } else if (password.value !== cPassword.value) {
    isValid = false;
    cPasswordError.textContent = "Password is mismatch";
  } else {
    isValid = true;
    cPasswordError.textContent = "";
  }

  if (isValid) {
    formSuccess.textContent = "Form submitted successfully!!!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});
