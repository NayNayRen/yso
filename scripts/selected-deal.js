// Home v3.0
// This file pulls data from local storage passed by clicking the get deal button for each card, adding deal logo, discount and name to the display
// Share, Favorite, Text and Email buttons all have actions, styles and transitions when clicked

// all selected deal containers used in UI changes
// buttons
const selectedDealTextButton = document.getElementById('selected-deal-text-button');
const selectedDealEmailButton = document.getElementById('selected-deal-email-button');
const selectedDealSendButton = document.getElementById('selected-deal-send-button');
const shareDealButton = document.getElementById('share-deal-button');
const favoriteDealButton = document.getElementById('favorite-deal-button');
const closeShareButton = document.getElementById('close-share-button');
const selectedDealCheckbox = document.querySelector('.selected-deal-checkbox');

// selected deal data
const selectedDealImage = document.querySelector('.selected-deal-image');
const selectedDealDiscount = document.querySelector('.selected-deal-discount');
const selectedDealName = document.querySelector('.selected-deal-name');

// text and input containers
const selectedDealSendMethod = document.querySelector('.selected-deal-send-method');
const selectedDealLabel = document.getElementById('selected-deal-label');
const selectedDealResponse = document.querySelector('.selected-deal-response');
const selectedDealTextRedemption = document.querySelector('.selected-deal-text-redemption');
const selectedDealEmailRedemption = document.querySelector('.selected-deal-email-redemption');
const selectedDealShareContainer = document.getElementById('selected-deal-share-container');
const selectedDealFavoriteContainer = document.getElementById('selected-deal-favorite-container');
const selectedDealCheckboxContainer = document.querySelector('.selected-deal-checkbox-container');

// user stuff
const selectedUserProfileName = document.getElementById('selected-user-profile-name');
const selectedUserProfilePicture = document.querySelector('.selected-user-profile-picture');
const selectedDealUserHeading = document.querySelector('.selected-deal-user-heading');
const notSelectedUser = document.getElementById('not-selected-user');
const windowOverlay = document.getElementById('window-overlay');

// pulling user created data from localStorage created in register-user.js
const localStorageUsers = JSON.parse(localStorage.getItem('users'));
const users = localStorage.getItem('users') !== null ? localStorageUsers : [];

// gets 'access token' that was created on correct sign in
const localStorageToken = JSON.parse(localStorage.getItem('token'));
const token = localStorage.getItem('token') !== null ? localStorageToken : [];

// shows text display when text button is clicked
function showTextChoices() {
  selectedDealLabel.innerText = 'Send the coupon via text.';
  selectedDealResponse.innerText = 'Use or enter new phone number.';
  selectedDealResponse.style.opacity = '1';
  selectedDealEmailRedemption.innerText = 'Send via email.';
  selectedDealEmailRedemption.style.display = 'inline';
  selectedDealTextRedemption.style.display = 'none';
  selectedDealSendMethod.style.border = 'solid 1px #000';
  selectedDealEmailRedemption.addEventListener('click', showEmailChoices);
  if (window.innerWidth > 1300) {
    selectedDealSendMethod.style.height = '50px';
  } else if (window.innerWidth < 1300 && window.innerWidth > 700) {
    selectedDealSendMethod.style.height = '40px';
  } else if (window.innerWidth < 700) {
    selectedDealSendMethod.style.height = '30px';
  }
}

// shows email display when email button is clicked
function showEmailChoices() {
  selectedDealLabel.innerText = 'Send the coupon via email.';
  selectedDealResponse.innerText = 'Use or enter new email address.';
  selectedDealResponse.style.opacity = '1';
  selectedDealTextRedemption.innerText = 'Send via text.';
  selectedDealTextRedemption.style.display = 'inline';
  selectedDealEmailRedemption.style.display = 'none';
  selectedDealSendMethod.style.border = 'solid 1px #000';
  selectedDealTextRedemption.addEventListener('click', showTextChoices);
  if (window.innerWidth > 1300) {
    selectedDealSendMethod.style.height = '50px';
  } else if (window.innerWidth < 1300 && window.innerWidth > 700) {
    selectedDealSendMethod.style.height = '40px';
  } else if (window.innerWidth < 700) {
    selectedDealSendMethod.style.height = '30px';
  }
}

// activates redemption button after method is chosen
function activateSendDealButton() {
  selectedDealSendButton.style.backgroundColor = '#E6331F';
  selectedDealSendButton.disabled = false;
  selectedDealSendButton.addEventListener('mouseover', () => {
    selectedDealSendButton.style.backgroundColor = '#000';
    selectedDealSendButton.style.cursor = 'pointer';
  });
  selectedDealSendButton.addEventListener('mouseout', () => {
    selectedDealSendButton.style.backgroundColor = '#E6331F';
  });
}

// deactivates redemption button after method is chosen
function deactivateSendDealButton() {
  selectedDealSendButton.style.backgroundColor = '#808080';
  selectedDealSendButton.disabled = true;
  selectedDealSendButton.addEventListener('mouseover', () => {
    selectedDealSendButton.style.backgroundColor = '#808080';
    selectedDealSendButton.style.cursor = 'default';
  });
  selectedDealSendButton.addEventListener('mouseout', () => {
    selectedDealSendButton.style.backgroundColor = '#808080';
  });
}

// loads deal UI depending on if a user is registered or not
function loadSelectedDealUserInfo() {
  selectedDealImage.src = deal[0].img;
  selectedDealDiscount.innerText = deal[0].discount;
  selectedDealName.innerText = deal[0].name;
  if (token.length != 0) {
    selectedDealUserHeading.innerText = "We'll send the deal information to:";
    selectedUserProfilePicture.style.display = 'flex';
    selectedUserProfileName.innerText = `${users[0].firstName} ${users[0].lastName}`;
    notSelectedUser.style.textAlign = 'center';
    notSelectedUser.innerHTML = `<a href="registerUser.html">Not ${users[0].firstName}?</a>`;
    selectedDealTextButton.style.display = 'inline';
    selectedDealEmailButton.style.display = 'inline';
    selectedDealCheckboxContainer.style.display = 'none';
  } else {
    showTextChoices();
    selectedDealUserHeading.innerText = "Let's grab a few details so you can use it:";
    selectedUserProfilePicture.style.display = 'none';
    selectedUserProfileName.innerText = 'Your Full Name';
    notSelectedUser.innerHTML = `<input type="text" class="selected-deal-unregistered-user"></input>`;
    selectedDealTextButton.style.display = 'none';
    selectedDealEmailButton.style.display = 'none';
    selectedDealCheckboxContainer.style.display = 'block';
    selectedDealCheckbox.addEventListener('click', () => {
      if (selectedDealCheckbox.checked) {
        activateSendDealButton();
      } else {
        deactivateSendDealButton();
      }
    });
  }
}

// sticks the share/favorited notification containers
function positionContainer(container) {
  if (window.innerWidth > 1000) {
    container.style.top = '150px';
  } else if (window.innerWidth < 1000 && window.innerWidth > 700) {
    container.style.top = '100px';
  } else if (window.innerWidth < 700 && window.innerWidth > 400) {
    container.style.top = '75px';
  } else if (window.innerWidth < 400) {
    container.style.top = '75px';
  }
}

// EVENT LISTENERS
// drops shared confirmation window down
shareDealButton.addEventListener('click', () => {
  windowOverlay.style.webkitTransition = 'opacity 550ms ease-out';
  windowOverlay.style.transition = 'opacity 550ms ease-out';
  windowOverlay.classList.add('window-overlay-dim');
  positionContainer(selectedDealShareContainer);
});

// raises shared confirmation window up
closeShareButton.addEventListener('click', () => {
  windowOverlay.style.webkitTransition = 'opacity 250ms ease-in, z-index 650ms ease-in';
  windowOverlay.style.transition = 'opacity 250ms ease-in, z-index 650ms ease-in';
  windowOverlay.classList.remove('window-overlay-dim');
  selectedDealShareContainer.style.top = '-500px';
});

// drops favorited confirmation window down
favoriteDealButton.addEventListener('click', () => {
  windowOverlay.style.webkitTransition = 'opacity 550ms ease-out';
  windowOverlay.style.transition = 'opacity 550ms ease-out';
  windowOverlay.classList.add('window-overlay-dim');
  positionContainer(selectedDealFavoriteContainer);
});

// text redemption button
selectedDealTextButton.addEventListener('click', () => {
  showTextChoices();
  activateSendDealButton();
  selectedDealTextButton.style.display = 'none';
  selectedDealEmailButton.style.display = 'none';

});

// email redemption button
selectedDealEmailButton.addEventListener('click', () => {
  showEmailChoices();
  activateSendDealButton();
  selectedDealTextButton.style.display = 'none';
  selectedDealEmailButton.style.display = 'none';
});

// window load adds deal data to containers
window.addEventListener('load', loadSelectedDealUserInfo);
