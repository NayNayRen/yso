// HOME v3.0
// This file handles user sign in validations, not the sending of data, only empty inputs, email, and the option to see or hide the password.

// sign in inputs
// const resetButton = document.getElementById('reset-button');
const signinEmail = document.getElementById('signin-email');
const signinPassword = document.getElementById('signin-password');
const showPassword = document.getElementById('show-password');
const hidePassword = document.getElementById('hide-password');

// error message
const error = document.getElementById('error');
const errorMessage = document.getElementById('error-message');

// sign in form
const signinForm = document.getElementById('signin-form');
const localStorageUsers = JSON.parse(localStorage.getItem('users'));
const users = localStorage.getItem('users') !== null ? localStorageUsers : [];

// creates an 'access token' in order to view dashboard data
const localStorageToken = JSON.parse(localStorage.getItem('token'));
const token = localStorage.getItem('token') !== null ? localStorageToken : [];
const validatedUser = {
  token: 'true'
};

// checks user input for empty fields
function signIn(e) {
  e.preventDefault();
  if(users.length === 0){
    showErrorMessage('No users have registered yet.');
    return false;
  }
  if (signinEmail.value === users[0].email && signinPassword.value === users[0].password) {
    token.splice(0);
    token.push(validatedUser);
    updateLocalStorageToken();
    console.log(token);
    location.replace('index.html');
    return true;
  } if (signinEmail.value === ''){
    showErrorMessage('E-mail is required.');
    // signinEmail.focus();
    return false;
  }else if (signinPassword.value === '') {
    showErrorMessage('Password is required.');
    signinPassword.focus();
    return false;
  }else {
    showErrorMessage(`Your sign in credentials are not correct.`);
    console.log('access denied');
    console.log(users);
    return false;
  }
}

// saves 'access token' to localStorage
function updateLocalStorageToken() {
  localStorage.setItem('token', JSON.stringify(token));
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
    error.style.height = '25px';
  }, 100); // displays in .10 of a submission
  setTimeout(function() {
    error.style.opacity = '0';
    error.style.height = '0';
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
// resetButton.addEventListener('click', resetForm);
