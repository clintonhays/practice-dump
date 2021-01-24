const button = document.querySelector(".signUpButton");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.querySelector(".formWrapper");
const errors = document.querySelector(".errors");

// regex
const nameRegEx = /^[\D]+$/g;
const emailRegEx = /^[^@]+@[^\.]+\..+$/g;
const passwordRegEx = /^.{6,}$/gm;

// validation

const validator = (input, regex) => {
  const value = input.value;
  const isValid = regex.test(value);

  console.log(isValid);
  return isValid;
};

form.addEventListener("submit", (e) => {
  const name = validator(nameInput, nameRegEx);
  const email = validator(emailInput, emailRegEx);
  const password = validator(passwordInput, passwordRegEx);

  if (!name) {
    e.preventDefault();
    const html = `
      <p class="error">&#8226 Name is required</p>
    `;

    errors.innerHTML += html;
  }

  if (!email) {
    e.preventDefault();

    const html = `
      <p class="error">&#8226 Email is invalid</p>
    `;

    errors.innerHTML += html;
  }

  if (!password) {
    e.preventDefault();

    const html = `
      <p class="error">&#8226 Password must be at least 6 characters</p>
    `;

    errors.innerHTML += html;
  }

  if (passwordInput.value !== confirmPassword.value) {
    e.preventDefault();

    const html = `
      <p class="error">&#8226 Password's must match</p>
    `;

    errors.innerHTML += html;
  }

  if (name && email && password && passwordInput.value === confirmPassword.value) {
    form.removeChild(errors);
  }
});
