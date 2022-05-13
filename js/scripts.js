(function() {
  let form = document.querySelector('#contactform');
  let emailInput = document.querySelector('#contact-email');
  let phoneInput = document.querySelector('#telephone-number');

  function showErrorMessage(input, message) {
    let container = input.parentElement;
    let error = container.querySelector('error-message');

    if (error) {
      container.appendChild(error);
    }

    if(message) {
      let erro = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, 'Email is required.');
      return false;
    }

    if(value.indexof('@') === -1) {
      showErrorMessage(emailInput, 'Enter a valid Email address');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  //validation of phone
  function validatePhoneNumber() {
    let value = phoneInput.value;

    if (!value) {
      showErrorMessage(phoneInput, 'please add a number number.');
      return false;
    }

    if (value.length !== 10) {
      showErrorMessage(phoneInput, 'Phone number must have 10 digits.');
      return false;
    }

    showErrorMessage(phoneInput, null);
    return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPhoneNumber = validatePhoneNumber();
    return isValidEmail && isValidPhoneNumber;
  }

  //Stop default behavoir, form will not be submited to the server
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Your request has been submited successfully. I will be getting back to you shortly.');
    }
  });

  emailInput.addEventListener('input', validateEmail);
  phoneInput.addEventListener('input', validatePhoneNumber);
})();
