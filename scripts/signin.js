// HOME v3.0
// This file handles user sign in validations, not the sending of data, only empty inputs, email, and the option to see or hide the password.

// signin inputs
const resetButton = document.getElementById('reset-button');
const signinEmail = document.getElementById('signin-email');
const signinPassword = document.getElementById('signin-password');
const showPassword = document.getElementById('show-password');
const hidePassword = document.getElementById('hide-password');

// error message
const error = document.getElementById('error');
const errorMessage = document.getElementById('error-message');

// form
const signinForm = document.getElementById('signin-form');

// checks user input for empty fields
function signIn(e) {
  e.preventDefault();
  if (signinEmail.value === '') {
    showErrorMessage('E-mail is required.');
    signinEmail.focus();
    return false;
  } else if (signinPassword.value === '') {
    showErrorMessage('Password is required.');
    signinPassword.focus();
    return false;
  } else {
    showErrorMessage('Thank you and welcome to YSO.');
    return true;
  }
}

// reset button clears all inputs, sets focus on first email field, and changes password icon back
function resetForm() {
  signinEmail.value = '';
  signinPassword.value = '';
  signinEmail.focus();
  show();
}

// generates error message
function showErrorMessage(errorType) {
  setTimeout(function() {
    errorMessage.innerText = errorType;
    error.style.opacity = '1'
  }, 100); // displays in .10 of a submission
  setTimeout(function() {
    error.style.opacity = '0';
  }, 5000); // displays for 5 seconds
}

// shows password text and switches icon
function show() {
  signinPassword.type = 'password';
  hidePassword.style.display = 'inline';
  showPassword.style.display = 'none';
}

// hides password text and switches icon
function hide() {
  signinPassword.type = 'text';
  hidePassword.style.display = 'none';
  showPassword.style.display = 'inline';
}

// event listeners
signinForm.addEventListener('submit', signIn);
resetButton.addEventListener('click', resetForm);
