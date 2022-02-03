// Home v3.0
// This file pulls data from local storage passed by clicking the get deal button for each card, adding deal logo, discount and name to the display
// Share, Favorite, Text and Email buttons all have actions, styles and transitions when clicked

// selected deal data
const selectedDealImage = document.querySelector('.selected-deal-image');
const selectedDealDiscount = document.querySelector('.selected-deal-discount');
const selectedDealName = document.querySelector('.selected-deal-name');
const closeShareButton = document.getElementById('close-share-button');
const windowOverlay = document.getElementById('window-overlay');
const selectedDealShareContainer = document.getElementById('selected-deal-share-container');
const selectedDealFavoriteContainer = document.getElementById('selected-deal-favorite-container');
const notRegisteredUser = document.getElementById('not-registered-user');

// const selectedDealCheckbox = document.querySelector('.selected-deal-checkbox');
// const selectedDealCheckboxContainer = document.querySelector('.selected-deal-checkbox-container');

// text and input containers
// user stuff
const registeredUserDisplay = document.querySelector('.registered-user-display');
const registeredUserHeading = document.querySelector('.registered-user-heading');
const registeredDealLabel = document.getElementById('registered-deal-label');
const registeredTextButton = document.getElementById('registered-text-button');
const registeredEmailButton = document.getElementById('registered-email-button');

const registeredSendButton = document.getElementById('registered-send-button');
const registeredSendMethod = document.querySelector('.registered-send-method');
const registeredDealResponse = document.querySelector('.registered-deal-response');
const registeredTextRedemption = document.querySelector('.registered-text-redemption');
const registeredEmailRedemption = document.querySelector('.registered-email-redemption');
const registeredUserProfileName = document.getElementById('registered-user-profile-name');
const registeredUserProfilePicture = document.getElementById('registered-user-profile-picture');
const registeredShareDealButton = document.getElementById('registered-share-deal-button');
const registeredFavoriteDealButton = document.getElementById('registered-favorite-deal-button');

const unregisteredUserDisplay = document.querySelector('.unregistered-user-display')
const unregisteredUserHeading = document.querySelector('.unregistered-user-heading');
const unregisteredDealLabel = document.getElementById('unregistered-deal-label');
const unregisteredTextButton = document.getElementById('unregistered-text-button');
const unregisteredEmailButton = document.getElementById('unregistered-email-button');

const unregisteredSendButton = document.getElementById('unregistered-send-button');
const unregisteredSendMethod = document.querySelector('.unregistered-send-method');
const unregisteredDealResponse = document.querySelector('.unregistered-deal-response');
const unregisteredTextRedemption = document.querySelector('.unregistered-text-redemption');
const unregisteredEmailRedemption = document.querySelector('.unregistered-email-redemption');
const unregisteredUserProfileName = document.getElementById('unregistered-user-profile-name');
const unregisteredUserProfilePicture = document.getElementById('unregistered-user-profile-picture');
const unregisteredShareDealButton = document.getElementById('unregistered-share-deal-button');
const unregisteredFavoriteDealButton = document.getElementById('unregistered-favorite-deal-button');

function unregisteredShowTextChoices() {
  unregisteredDealLabel.innerText = 'Send the coupon via text.';
  unregisteredDealResponse.innerText = 'Use or enter new phone number.';
  unregisteredDealResponse.style.opacity = '1';
  unregisteredEmailRedemption.innerText = 'Send via email.';
  unregisteredEmailRedemption.style.display = 'inline';
  unregisteredTextRedemption.style.display = 'none';
  unregisteredSendMethod.style.border = 'solid 1px #000';
  unregisteredEmailRedemption.addEventListener('click', unregisteredShowEmailChoices);
  if (window.innerWidth > 1300) {
    unregisteredSendMethod.style.height = '50px';
  } else if (window.innerWidth < 1300 && window.innerWidth > 700) {
    unregisteredSendMethod.style.height = '40px';
  } else if (window.innerWidth < 700) {
    unregisteredSendMethod.style.height = '30px';
  }
}

function unregisteredShowEmailChoices() {
  unregisteredDealLabel.innerText = 'Send the coupon via email.';
  unregisteredDealResponse.innerText = 'Use or enter new email address.';
  unregisteredDealResponse.style.opacity = '1';
  unregisteredTextRedemption.innerText = 'Send via text.';
  unregisteredTextRedemption.style.display = 'inline';
  unregisteredEmailRedemption.style.display = 'none';
  unregisteredSendMethod.style.border = 'solid 1px #000';
  unregisteredTextRedemption.addEventListener('click', unregisteredShowTextChoices);
  if (window.innerWidth > 1300) {
    unregisteredSendMethod.style.height = '50px';
  } else if (window.innerWidth < 1300 && window.innerWidth > 700) {
    unregisteredSendMethod.style.height = '40px';
  } else if (window.innerWidth < 700) {
    unregisteredSendMethod.style.height = '30px';
  }
}

// shows text display when text button is clicked
function showTextChoices() {
  registeredDealLabel.innerText = 'Send the coupon via text.';
  registeredDealResponse.innerText = 'Use or enter new phone number.';
  registeredDealResponse.style.opacity = '1';
  registeredEmailRedemption.innerText = 'Send via email.';
  registeredEmailRedemption.style.display = 'inline';
  registeredTextRedemption.style.display = 'none';
  registeredSendMethod.style.border = 'solid 1px #000';
  registeredEmailRedemption.addEventListener('click', showEmailChoices);
  if (window.innerWidth > 1300) {
    registeredSendMethod.style.height = '50px';
  } else if (window.innerWidth < 1300 && window.innerWidth > 700) {
    registeredSendMethod.style.height = '40px';
  } else if (window.innerWidth < 700) {
    registeredSendMethod.style.height = '30px';
  }
}

// shows email display when email button is clicked
function showEmailChoices() {
  registeredDealLabel.innerText = 'Send the coupon via email.';
  registeredDealResponse.innerText = 'Use or enter new email address.';
  registeredDealResponse.style.opacity = '1';
  registeredTextRedemption.innerText = 'Send via text.';
  registeredTextRedemption.style.display = 'inline';
  registeredEmailRedemption.style.display = 'none';
  registeredSendMethod.style.border = 'solid 1px #000';
  registeredTextRedemption.addEventListener('click', showTextChoices);
  if (window.innerWidth > 1300) {
    registeredSendMethod.style.height = '50px';
  } else if (window.innerWidth < 1300 && window.innerWidth > 700) {
    registeredSendMethod.style.height = '40px';
  } else if (window.innerWidth < 700) {
    registeredSendMethod.style.height = '30px';
  }
}

// activates redemption button after method is chosen
function activateSendDealButton(button) {
  button.style.backgroundColor = '#E6331F';
  button.disabled = false;
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#000';
    button.style.cursor = 'pointer';
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#E6331F';
  });
}

// deactivates redemption button after method is chosen
function deactivateButton(button) {
  button.style.backgroundColor = '#333333';
  button.disabled = true;
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#333333';
    button.style.cursor = 'default';
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#333333';
  });
}

// loads deal UI depending on if a user is registered or not
function loadSelectedDealUserInfo() {
  updateLocalStorageDeal();
  if(deal.length === 0 || deal.length === 0 && token.length != 0){
    deactivateButton(unregisteredShareDealButton);
    deactivateButton(unregisteredFavoriteDealButton);
    deactivateButton(unregisteredSendButton);
    registeredUserDisplay.style.display = 'none';
    unregisteredUserHeading.innerText = "Uh oh, looks like you got here without choosing a deal. Register, sign in, then try again.";
    unregisteredUserDisplay.style.display = 'flex';
    registeredUserProfilePicture.style.display = 'none';
    registeredTextButton.style.display = 'none';
    registeredEmailButton.style.display = 'none';
  }
  else if (token.length != 0) {
    selectedDealImage.src = deal[0].img;
    selectedDealDiscount.innerText = deal[0].discount;
    selectedDealName.innerText = deal[0].name;
    unregisteredUserDisplay.style.display = 'none';
    registeredUserDisplay.style.display = 'flex';
    registeredUserHeading.innerText = "We'll send the deal information to:";
    registeredUserProfilePicture.style.display = 'flex';
    registeredUserProfileName.innerText = `${users[0].firstName} ${users[0].lastName}`;
    notRegisteredUser.style.textAlign = 'center';
    notRegisteredUser.innerHTML = `<a href="registerUser.html">Not ${users[0].firstName}?</a>`;
    registeredTextButton.style.display = 'inline';
    registeredEmailButton.style.display = 'inline';
    unregisteredTextButton.style.display = 'none';
    unregisteredEmailButton.style.display = 'none';
  } else {
    showTextChoices();
    selectedDealImage.src = deal[0].img;
    selectedDealDiscount.innerText = deal[0].discount;
    selectedDealName.innerText = deal[0].name;
    registeredUserDisplay.style.display = 'none';
    unregisteredUserDisplay.style.display = 'flex';
    unregisteredUserHeading.innerText = "Let's grab a few details so you can use it:";
    registeredUserProfilePicture.style.display = 'none';
    registeredTextButton.style.display = 'none';
    registeredEmailButton.style.display = 'none';
    unregisteredTextButton.style.display = 'inline';
    unregisteredEmailButton.style.display = 'inline';
  }
}
// sticks the share/favorited notification containers
function positionContainer(container) {
    container.style.top = '130px';
}

function addDealToFavorites(){
  // map across favorites to get only the names to check
  const favoriteNames = favorites.map(favorite => {
    return favorite.name;
  });
  // console.log(favoriteNames);
  // checks for the name of the favorite item in the collection of favorites
  const checkFavorites = favoriteNames.includes(deal[0].name);
  // display data for added item
  if (checkFavorites === false) {
    // favorites.push(deal);
    // updateLocalStorageFavorites();
    console.log('added');
    windowOverlay.style.webkitTransition = 'opacity 550ms ease-out';
    windowOverlay.style.transition = 'opacity 550ms ease-out';
    windowOverlay.classList.add('window-overlay-dim');
    positionContainer(selectedDealFavoriteContainer);
    // display data for removed item
  } else if (checkFavorites === true) {
    console.log('already there');
    return false;
  }
  // console.log(favorites);
}

//update local storage favorites
function updateLocalStorageFavorites() {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// EVENT LISTENERS
unregisteredShareDealButton.addEventListener('click', () => {
  windowOverlay.style.webkitTransition = 'opacity 550ms ease-out';
  windowOverlay.style.transition = 'opacity 550ms ease-out';
  windowOverlay.classList.add('window-overlay-dim');
  positionContainer(selectedDealShareContainer);
});

// drops favorited confirmation window down
unregisteredFavoriteDealButton.addEventListener('click', () => {
  addDealToFavorites();
});

// text redemption button
unregisteredTextButton.addEventListener('click', () => {
  unregisteredShowTextChoices();
  activateSendDealButton(unregisteredSendButton);
  unregisteredTextButton.style.display = 'none';
  unregisteredEmailButton.style.display = 'none';
});

// email redemption button
unregisteredEmailButton.addEventListener('click', () => {
  unregisteredShowEmailChoices();
  activateSendDealButton(unregisteredSendButton);
  unregisteredTextButton.style.display = 'none';
  unregisteredEmailButton.style.display = 'none';
});

// drops shared confirmation window down
registeredShareDealButton.addEventListener('click', () => {
  windowOverlay.style.webkitTransition = 'opacity 550ms ease-out';
  windowOverlay.style.transition = 'opacity 550ms ease-out';
  windowOverlay.classList.add('window-overlay-dim');
  positionContainer(selectedDealShareContainer);
});

// drops favorited confirmation window down
registeredFavoriteDealButton.addEventListener('click', () => {
  addDealToFavorites();
});

// text redemption button
registeredTextButton.addEventListener('click', () => {
  showTextChoices();
  activateSendDealButton(registeredSendButton);
  registeredTextButton.style.display = 'none';
  registeredEmailButton.style.display = 'none';
});

// email redemption button
registeredEmailButton.addEventListener('click', () => {
  showEmailChoices();
  activateSendDealButton(registeredSendButton);
  registeredTextButton.style.display = 'none';
  registeredEmailButton.style.display = 'none';
});

// raises shared confirmation window up
closeShareButton.addEventListener('click', () => {
  windowOverlay.style.webkitTransition = 'opacity 250ms ease-in, z-index 650ms ease-in';
  windowOverlay.style.transition = 'opacity 250ms ease-in, z-index 650ms ease-in';
  windowOverlay.classList.remove('window-overlay-dim');
  selectedDealShareContainer.style.top = '-500px';
});

// window load adds deal data to containers
window.addEventListener('load', loadSelectedDealUserInfo);
