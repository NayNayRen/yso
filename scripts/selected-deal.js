// Home v3.0
// This file pulls data from local storage passed by clicking the get deal button for each card, adding deal logo, discount and name to the display
// Share, Favorite, Text and Email buttons all have actions, styles and transitions when clicked

// all selected deal containers used in UI changes
// buttons
const selectedDealTextButton = document.getElementById('selected-deal-text-button');
const selectedDealEmailButton = document.getElementById('selected-deal-email-button');
const selectedDealSendButton = document.getElementById('selected-deal-send-button');
const registeredShareDealButton = document.getElementById('registered-share-deal-button');
const registeredFavoriteDealButton = document.getElementById('registered-favorite-deal-button');
const closeShareButton = document.getElementById('close-share-button');
const selectedDealCheckbox = document.querySelector('.selected-deal-checkbox');

// selected deal data
const selectedDealImage = document.querySelector('.selected-deal-image');
const selectedDealDiscount = document.querySelector('.selected-deal-discount');
const selectedDealName = document.querySelector('.selected-deal-name');

// text and input containers
const selectedDealSendMethod = document.querySelector('.selected-deal-send-method');
const registeredDealLabel = document.getElementById('registered-deal-label');
const selectedDealResponse = document.querySelector('.selected-deal-response');
const selectedDealTextRedemption = document.querySelector('.selected-deal-text-redemption');
const selectedDealEmailRedemption = document.querySelector('.selected-deal-email-redemption');
const selectedDealShareContainer = document.getElementById('selected-deal-share-container');
const selectedDealFavoriteContainer = document.getElementById('selected-deal-favorite-container');
// const selectedDealCheckboxContainer = document.querySelector('.selected-deal-checkbox-container');

// user stuff
const registeredUserDisplay = document.querySelector('.registered-user-display');
const registeredUserProfileName = document.getElementById('registered-user-profile-name');
const selectedUserProfilePicture = document.querySelector('.selected-user-profile-picture');
const registeredUserHeading = document.querySelector('.registered-user-heading');
const notRegisteredUser = document.getElementById('not-registered-user');
const windowOverlay = document.getElementById('window-overlay');

const unregisteredUserDisplay = document.querySelector('.unregistered-user-display')
const unregisteredUserHeading = document.querySelector('.unregistered-user-heading');
const unregisteredDealLabel = document.getElementById('unregistered-deal-label');

// function

// shows text display when text button is clicked
function showTextChoices() {
  registeredDealLabel.innerText = 'Send the coupon via text.';
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
  registeredDealLabel.innerText = 'Send the coupon via email.';
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
    unregisteredUserDisplay.style.display = 'none';
    registeredUserHeading.innerText = "We'll send the deal information to:";
    selectedUserProfilePicture.style.display = 'flex';
    registeredUserProfileName.innerText = `${users[0].firstName} ${users[0].lastName}`;
    notRegisteredUser.style.textAlign = 'center';
    notRegisteredUser.innerHTML = `<a href="registerUser.html">Not ${users[0].firstName}?</a>`;
    selectedDealTextButton.style.display = 'inline';
    selectedDealEmailButton.style.display = 'inline';
  } else {
    showTextChoices();
    registeredUserDisplay.style.display = 'none';
    unregisteredUserHeading.innerText = "Let's grab a few details so you can use it:";
    selectedUserProfilePicture.style.display = 'none';
    selectedDealTextButton.style.display = 'none';
    selectedDealEmailButton.style.display = 'none';
    // selectedDealCheckboxContainer.style.display = 'block';
    // selectedDealCheckbox.addEventListener('click', () => {
    //   if (selectedDealCheckbox.checked) {
    //     activateSendDealButton();
    //   } else {
    //     deactivateSendDealButton();
    //   }
    // });
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
  console.log(favoriteNames);
  // checks for the name of the favorite item in the collection of favorites
  const checkFavorites = favoriteNames.includes(deal[0].name);
  // display data for added item
  if (checkFavorites === false) {
    favorites.push(deal);
    updateLocalStorageFavorites();
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
  console.log(favorites);
}

//update local storage favorites
function updateLocalStorageFavorites() {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// EVENT LISTENERS
// drops shared confirmation window down
registeredShareDealButton.addEventListener('click', () => {
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
registeredFavoriteDealButton.addEventListener('click', () => {
  addDealToFavorites();
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
