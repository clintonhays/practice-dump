const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const telephoneInput = document.getElementById('telephone');
const emailInput = document.getElementById('email');

/**
 * 
 * VALIDATORS
 *  
 */

// Can only contain letters a-z in lowercase
const isValidUsername = (username) => {
  return /^[a-z]+$/.test(username);
};

// Must contain a lowercase, uppercase letter and a number
const isValidPassword = (password) => {
  // prettier-ignore
  return /[a-z]/.test(password) &&
         /[A-Z]/.test(password) &&
         /[0-9]/.test(password)
};

// The telephone number must be in the format of (555) 555-5555
const isValidTelephone = (telephone) => {
  return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(telephone);
};

// Must be a valid email address
const isValidEmail = (email) => {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
};

/**
 * 
 * FORMATTING FUNCTIONS
 * 
 */

const formatTelephone = (text) => {
  const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
  return text.replace(regex, `($1) $2-$3`);
};

/**
 * 
 * SET UP EVENTS
 * 
 */

const showOrHideTip = (show, element) => {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = 'inherit';
  } else {
    element.style.display = 'none';
  }
};

const createListener = (validator) => {
  return (e) => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== '' && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
};

usernameInput.addEventListener('input', createListener(isValidUsername));

passwordInput.addEventListener('input', createListener(isValidPassword));

telephoneInput.addEventListener('input', createListener(isValidTelephone));

telephoneInput.addEventListener('blur', (e) => {
  e.target.value = formatTelephone(e.target.value);
});

emailInput.addEventListener('input', createListener(isValidEmail));
