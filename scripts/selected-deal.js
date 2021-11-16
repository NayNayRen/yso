// Home v3.0
// This file pulls data from local storage passed by clicking the get deal button for each card, adding deal logo, discount and name to the display
// Share, Favorite, Text and Email buttons all have actions, styles and transitions when clicked

// all selected deal containers used in UI changes
const selectedDealSendButton = document.getElementById('selected-deal-send-button');
const selectedDealTextButton = document.getElementById('selected-deal-text-button');
const selectedDealEmailButton = document.getElementById('selected-deal-email-button');
const selectedDealSendMethod = document.querySelector('.selected-deal-send-method');
const selectedDealLabel = document.getElementById('selected-deal-label');
const selectedDealResponse = document.querySelector('.selected-deal-response');
const selectedDealTextRedemption = document.querySelector('.selected-deal-text-redemption');
const selectedDealEmailRedemption = document.querySelector('.selected-deal-email-redemption');
const shareDealButton = document.getElementById('share-deal-button');
const favoriteDealButton = document.getElementById('favorite-deal-button');
const selectedDealShareContainer = document.getElementById('selected-deal-share-container');
const selectedDealFavoriteContainer = document.getElementById('selected-deal-favorite-container');
const closeShareButton = document.getElementById('close-share-button');
const selectedDealImage = document.querySelector('.selected-deal-image');
const selectedDealDiscount = document.querySelector('.selected-deal-discount');
const selectedDealName = document.querySelector('.selected-deal-name');


// shows text display when text button is clicked
function showTextChoices() {
  selectedDealLabel.innerText = 'Send the coupon via text.';
  selectedDealResponse.innerText = 'Use or enter new phone number.';
  selectedDealResponse.style.opacity = '1';
  selectedDealEmailRedemption.innerText = 'Send via email.';
  selectedDealEmailRedemption.style.display = 'inline';
  selectedDealTextRedemption.style.display = 'none';
  selectedDealSendMethod.style.height = '50px';
  selectedDealSendMethod.style.border = 'solid 1px #000';
  selectedDealSendButton.style.backgroundColor = '#FF0000';
  selectedDealSendButton.style.margin = '15px 0';
  selectedDealSendButton.disabled = false;
  selectedDealEmailRedemption.addEventListener('click', showEmailChoices);
}

// shows email display when email button is clicked
function showEmailChoices() {
  selectedDealLabel.innerText = 'Send the coupon via email.';
  selectedDealResponse.innerText = 'Use or enter new email address.';
  selectedDealResponse.style.opacity = '1';
  selectedDealTextRedemption.innerText = 'Send via text.';
  selectedDealTextRedemption.style.display = 'inline';
  selectedDealEmailRedemption.style.display = 'none';
  selectedDealSendMethod.style.height = '50px';
  selectedDealSendMethod.style.border = 'solid 1px #000';
  selectedDealSendButton.style.backgroundColor = '#FF0000';
  selectedDealSendButton.style.margin = '15px 0';
  selectedDealSendButton.disabled = false;
  selectedDealTextRedemption.addEventListener('click', showTextChoices);
}

// drops shared confirmation window down
shareDealButton.addEventListener('click', () => {
  selectedDealShareContainer.style.top = '100px';
  selectedDealShareContainer.style.opacity = '1';
  selectedDealFavoriteContainer.style.top = '-500px';
  selectedDealFavoriteContainer.style.opacity = '0';
  if (window.innerWidth <= 700) {
    selectedDealShareContainer.style.top = '60px';
  }
});

// raises shared confirmation window up
closeShareButton.addEventListener('click', () => {
  selectedDealShareContainer.style.top = '-500px';
});

// drops favorited confirmation window down
favoriteDealButton.addEventListener('click', () => {
  selectedDealFavoriteContainer.style.top = '100px';
  selectedDealFavoriteContainer.style.opacity = '1';
  selectedDealShareContainer.style.top = '-500px';
  selectedDealShareContainer.style.opacity = '0';
  if (window.innerWidth <= 700) {
    selectedDealFavoriteContainer.style.top = '60px';
  }
});

// text redemption button
selectedDealTextButton.addEventListener('click', () => {
  showTextChoices();
  selectedDealTextButton.style.display = 'none';
  selectedDealEmailButton.style.display = 'none';
  selectedDealSendButton.addEventListener('mouseover', () => {
    selectedDealSendButton.style.backgroundColor = '#000';
    selectedDealSendButton.style.cursor = 'pointer';
  });
  // activates redemption button after method is chosen
  selectedDealSendButton.addEventListener('mouseout', () => {
    selectedDealSendButton.style.backgroundColor = '#FF0000';
  });
});

// email redemption button
selectedDealEmailButton.addEventListener('click', () => {
  showEmailChoices();
  selectedDealTextButton.style.display = 'none';
  selectedDealEmailButton.style.display = 'none';
  selectedDealSendButton.addEventListener('mouseover', () => {
    selectedDealSendButton.style.backgroundColor = '#000';
    selectedDealSendButton.style.cursor = 'pointer';
  });
  // activates redemption button after method is chosen
  selectedDealSendButton.addEventListener('mouseout', () => {
    selectedDealSendButton.style.backgroundColor = '#FF0000';
  });
});

// window load adds deal data to containers
window.addEventListener('load', () => {
  selectedDealImage.src = deal[0].dealImg;
  selectedDealDiscount.innerText = deal[0].dealDiscount;
  selectedDealName.innerText = deal[0].dealName;
});
