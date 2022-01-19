// HOME v3.0
// This file handles user registration validations, not the sending of data, only empty inputs, email, and alphanumeric password.

// register inputs
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const registerEmail = document.getElementById('register-email');
const registerPhone = document.getElementById('register-phone');
const registerPassword = document.getElementById('register-password');

// password container, icon that changes, and reset button
const keyPressedList = /^[0-9a-zA-Z]+$/;
const registerPasswordContainer = document.querySelector('.register-password-container');
const passwordIcon = document.getElementById('register-password-icon');
// const resetButton = document.getElementById('reset-button');

// error message
const error = document.getElementById('error');
const errorMessage = document.getElementById('error-message');

// saved user to local storage from form
const registerForm = document.getElementById('register-form');
const localStorageUsers = JSON.parse(localStorage.getItem('users'));
const users = localStorage.getItem('users') !== null ? localStorageUsers : [];

// checks user input for empty fields, password length, and alphanumeric password match
function registerNewUser(e) {
  e.preventDefault();
  if (firstName.value === '') {
    showErrorMessage('First name is empty.');
    firstName.focus();
    return false;
  } else if (lastName.value === '') {
    showErrorMessage('Last name is empty.');
    lastName.focus();
    return false;
  } else if (registerEmail.value === '') {
    showErrorMessage('E-mail is empty.');
    registerEmail.focus();
    return false;
  } else if (registerPhone.value === '') {
    showErrorMessage('Phone is empty.');
    registerPhone.focus();
    return false;
  } else if (registerPassword.value === '') {
    showErrorMessage('Password is empty.');
    registerPassword.focus();
    return false;
  } else if (registerPassword.value.length < 8) { // less than 8 characters
    showErrorMessage('Password minimum of 8 characters long.');
    registerPassword.focus();
    return false;
  } else if (!registerPassword.value.match(keyPressedList)) { // checks password for alphanumeric match
    showErrorMessage('Alphanumeric values only.');
    registerPassword.focus();
    return false;
  } else {
    const newUser = { // if all validates, user is created
      firstName: `${capitalizeName(firstName.value)}`,
      lastName: `${capitalizeName(lastName.value)}`,
      email: registerEmail.value,
      password: registerPassword.value
    };
    if (users != null) {
      users.splice(0);
      showErrorMessage(`${capitalizeName(firstName.value)} ${capitalizeName(lastName.value)} has joined.`);
      users.push(newUser);
      updateLocalStorageUsers();
      console.log(users);
      resetForm();
      // location.replace('signIn.html');
      return true;
    }
  }
}

// generates error message
function showErrorMessage(errorType) {
  setTimeout(function() {
    errorMessage.innerText = errorType;
    error.style.opacity = '1';
  }, 100); // displays in .10 of a submission
  setTimeout(function() {
    error.style.opacity = '0';
  }, 5000); // displays for 5 seconds then fades out
}

// reset button clears all inputs, sets focus on first name field, and changes password icon back to red x
function resetForm() {
  firstName.value = '';
  lastName.value = '';
  registerEmail.value = '';
  registerPhone.value = '';
  registerPassword.value = '';
  firstName.focus();
  invalidPassword();
}

// checks password length and changes icon accordingly
function checkPasswordLength() {
  if (registerPassword.value.length >= 8) { // 8 or more
    validPassword();
  }
  if (registerPassword.value.length < 8) { // less than 8
    invalidPassword();
  }
}

// checks for alphanumeric keystrokes in password input
function checkAlphanumericPassword(e) {
  const keyPressed = e.key.toLowerCase();
  if (keyPressed.match(keyPressedList)) {
    checkPasswordLength();
    return;
  }
  checkPasswordLength();
}

// changes password icon based on password length
function validPassword() {
  passwordIcon.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
  passwordIcon.style.backgroundColor = '#008000';
  passwordIcon.style.padding = '2px 4px';
}

// changes password icon based on password length
function invalidPassword() {
  passwordIcon.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
  passwordIcon.style.backgroundColor = '#E6331F';
  passwordIcon.style.padding = ' 2px 5px';
}

//update local storage users
function updateLocalStorageUsers() {
  localStorage.setItem('users', JSON.stringify(users));
}

// capitalizes entered name
function capitalizeName(name) {
  const lowercaseName = name.toLowerCase().split(' '); // turns entered name to lowercase
  for (let i = 0; i < lowercaseName.length; i++) {
    lowercaseName[i] = `${lowercaseName[i].charAt(0).toUpperCase()}${lowercaseName[i].substring(1)}`; // splits first letter, capitalizes it, joins it back
  }
  return lowercaseName.join(' '); // returns the capitalized name
}

// event listeners
// window.addEventListener('load', () => {
//   console.log(users);
// });
registerForm.addEventListener('submit', registerNewUser);
// resetButton.addEventListener('click', resetForm);
// checks the password field for password length on each key press
registerPasswordContainer.addEventListener('keyup', checkAlphanumericPassword);
