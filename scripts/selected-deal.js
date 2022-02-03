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
// const selectedDealCheckbox = document.querySelector('.selected-deal-checkbox');
// const selectedDealCheckboxContainer = document.querySelector('.selected-deal-checkbox-container');

// text and input containers
// user stuff
const registeredSendButton = document.getElementById('registered-send-button');
const registeredSendMethod = document.querySelector('.registered-send-method');
const registeredDealResponse = document.querySelector('.registered-deal-response');
const registeredTextRedemption = document.querySelector('.registered-text-redemption');
const registeredEmailRedemption = document.querySelector('.registered-email-redemption');
const registeredTextButton = document.getElementById('registered-text-button');
const registeredEmailButton = document.getElementById('registered-email-button');
const registeredUserDisplay = document.querySelector('.registered-user-display');
const registeredUserProfileName = document.getElementById('registered-user-profile-name');
const registeredUserProfilePicture = document.getElementById('registered-user-profile-picture');
const registeredUserHeading = document.querySelector('.registered-user-heading');
const registeredDealLabel = document.getElementById('registered-deal-label');
const registeredShareDealButton = document.getElementById('registered-share-deal-button');
const registeredFavoriteDealButton = document.getElementById('registered-favorite-deal-button');
const notRegisteredUser = document.getElementById('not-registered-user');

const unregisteredUserDisplay = document.querySelector('.unregistered-user-display')
const unregisteredUserHeading = document.querySelector('.unregistered-user-heading');
const unregisteredDealLabel = document.getElementById('unregistered-deal-label');

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
function activateSendDealButton() {
  registeredSendButton.style.backgroundColor = '#E6331F';
  registeredSendButton.disabled = false;
  registeredSendButton.addEventListener('mouseover', () => {
    registeredSendButton.style.backgroundColor = '#000';
    registeredSendButton.style.cursor = 'pointer';
  });
  registeredSendButton.addEventListener('mouseout', () => {
    registeredSendButton.style.backgroundColor = '#E6331F';
  });
}

// deactivates redemption button after method is chosen
function deactivateSendDealButton() {
  registeredSendButton.style.backgroundColor = '#808080';
  registeredSendButton.disabled = true;
  registeredSendButton.addEventListener('mouseover', () => {
    registeredSendButton.style.backgroundColor = '#808080';
    registeredSendButton.style.cursor = 'default';
  });
  registeredSendButton.addEventListener('mouseout', () => {
    registeredSendButton.style.backgroundColor = '#808080';
  });
}

// loads deal UI depending on if a user is registered or not
function loadSelectedDealUserInfo() {
  updateLocalStorageDeal();
  if(deal.length === 0 || deal.length === 0 && token.length != 0){
    // showTextChoices();
    registeredUserDisplay.style.display = 'none';
    unregisteredUserHeading.innerText = "Uh oh, looks like you got here without choosing a deal. Register, sign in, then try again.";
    registeredUserProfilePicture.style.display = 'none';
    registeredTextButton.style.display = 'none';
    registeredEmailButton.style.display = 'none';
  }
  else if (token.length != 0) {
    selectedDealImage.src = deal[0].img;
    selectedDealDiscount.innerText = deal[0].discount;
    selectedDealName.innerText = deal[0].name;
    unregisteredUserDisplay.style.display = 'none';
    registeredUserHeading.innerText = "We'll send the deal information to:";
    registeredUserProfilePicture.style.display = 'flex';
    registeredUserProfileName.innerText = `${users[0].firstName} ${users[0].lastName}`;
    notRegisteredUser.style.textAlign = 'center';
    notRegisteredUser.innerHTML = `<a href="registerUser.html">Not ${users[0].firstName}?</a>`;
    registeredTextButton.style.display = 'inline';
    registeredEmailButton.style.display = 'inline';
  } else {
    showTextChoices();
    selectedDealImage.src = deal[0].img;
    selectedDealDiscount.innerText = deal[0].discount;
    selectedDealName.innerText = deal[0].name;
    registeredUserDisplay.style.display = 'none';
    unregisteredUserHeading.innerText = "Let's grab a few details so you can use it:";
    registeredUserProfilePicture.style.display = 'none';
    registeredTextButton.style.display = 'none';
    registeredEmailButton.style.display = 'none';
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
registeredTextButton.addEventListener('click', () => {
  showTextChoices();
  activateSendDealButton();
  registeredTextButton.style.display = 'none';
  registeredEmailButton.style.display = 'none';

});

// email redemption button
registeredEmailButton.addEventListener('click', () => {
  showEmailChoices();
  activateSendDealButton();
  registeredTextButton.style.display = 'none';
  registeredEmailButton.style.display = 'none';
});

// window load adds deal data to containers
window.addEventListener('load', loadSelectedDealUserInfo);

// updated just went up, been doing this since 7, calling it a day. i had to pull it all apart and build unregistered user elements and registered user elements. displays load differently depending on user status, if you're registered AND signed in the registered version is displayed. delete the token from local storage or clear your cache then reload the deal page to see the unregistered user version. all the elements are there but some don't show as i haven't wired the unregistered stuff yet
