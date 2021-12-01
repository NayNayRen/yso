// Home v3.0
// This file pulls data from local storage passed by clicking the get deal button for each card, adding deal logo, discount and name to the display
// Share, Favorite, Text and Email buttons all have actions, styles and transitions when clicked

// data from local storage
// const localStorageFavorites = JSON.parse(localStorage.getItem('favorites'));
// const favorites = localStorage.getItem('favorites') !== null ? localStorageFavorites : [];
// const localStorageUsers = JSON.parse(localStorage.getItem('users'));
// const users = localStorage.getItem('users') !== null ? localStorageUsers : [];

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
const windowOverlay = document.getElementById('window-overlay');

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
  selectedDealSendButton.style.backgroundColor = '#E6331F';
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
  selectedDealSendButton.style.backgroundColor = '#E6331F';
  selectedDealSendButton.style.margin = '15px 0';
  selectedDealSendButton.disabled = false;
  selectedDealTextRedemption.addEventListener('click', showTextChoices);
}

// function stickDealShareNotfication(){
//   if(document.documentElement.scrollTop > 105 && window.innerWidth > 1000){
//     selectedDealShareContainer.style.position = 'fixed';
//     selectedDealShareContainer.style.top = '100px';
//   }
//   else if (document.documentElement.scrollTop > 105 && window.innerWidth < 1000 && window.innerWidth > 700){
//     selectedDealShareContainer.style.position = 'fixed';
//     selectedDealShareContainer.style.top = '115px';
//   }else{
//     selectedDealShareContainer.style.position = 'absolute';
//     selectedDealShareContainer.style.top = '50px';
//   }
// }
//
// function stickDealFavoriteNotfication(){
//   if(document.documentElement.scrollTop > 105 && window.innerWidth > 1000){
//     selectedDealFavoriteContainer.style.position = 'fixed';
//     selectedDealFavoriteContainer.style.top = '100px';
//   }
//   else{
//     selectedDealFavoriteContainer.style.position = 'absolute';
//     selectedDealFavoriteContainer.style.top = '100px';
//   }
// }

// drops shared confirmation window down
shareDealButton.addEventListener('click', () => {
  windowOverlay.style.webkitTransition = 'opacity 550ms ease-out';
  windowOverlay.style.transition = 'opacity 550ms ease-out';
  selectedDealShareContainer.style.webkitTransition = 'opacity 650ms ease-out, top 450ms ease-out';
  selectedDealShareContainer.style.transition = 'opacity 650ms ease-out, top 450ms ease-out';
  windowOverlay.classList.add('window-overlay-dim');
  selectedDealShareContainer.style.opacity = '1';
  // window.addEventListener('scroll', stickDealShareNotfication);
  if (window.innerWidth > 1000) {
    selectedDealShareContainer.style.top = '100px';
  }
  else if(window.innerWidth < 1000 && window.innerWidth > 700){
    selectedDealShareContainer.style.top = '50px';
  }
  else if(window.innerWidth < 700 && window.innerWidth > 400){
    selectedDealShareContainer.style.top = '40px';
  }
  else if(window.innerWidth < 400){
    selectedDealShareContainer.style.top = '10px';
  }
});

// raises shared confirmation window up
closeShareButton.addEventListener('click', () => {
  // window.removeEventListener('scroll', stickDealShareNotfication);
  windowOverlay.style.webkitTransition = 'opacity 250ms ease-in, z-index 650ms ease-in';
  windowOverlay.style.transition = 'opacity 250ms ease-in, z-index 650ms ease-in';
  selectedDealShareContainer.style.webkitTransition = 'opacity 250ms ease-in, top 450ms ease-in';
  selectedDealShareContainer.style.transition = 'opacity 250ms ease-in, top 450ms ease-in';
  windowOverlay.classList.remove('window-overlay-dim');
  selectedDealShareContainer.style.top = '-500px';
});

// drops favorited confirmation window down
favoriteDealButton.addEventListener('click', () => {
  // addToFavorites(favoriteDealButton, deal[0].url, deal[0].img, deal[0].name, deal[0].discount, deal[0].views);
  // window.addEventListener('scroll', stickDealFavoriteNotfication);
  windowOverlay.style.webkitTransition = 'opacity 550ms ease-out';
  windowOverlay.style.transition = 'opacity 550ms ease-out';
  selectedDealFavoriteContainer.style.webkitTransition = 'opacity 650ms ease-out, top 450ms ease-out';
  selectedDealFavoriteContainer.style.transition = 'opacity 650ms ease-out, top 450ms ease-out';
  windowOverlay.classList.add('window-overlay-dim');
  selectedDealFavoriteContainer.style.top = '100px';
  selectedDealFavoriteContainer.style.opacity = '1';
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
    selectedDealSendButton.style.backgroundColor = '#E6331F';
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
    selectedDealSendButton.style.backgroundColor = '#E6331F';
  });
});

// window load adds deal data to containers
window.addEventListener('load', () => {
  // console.log(deal);
  // console.log(users);
  selectedDealImage.src = deal[0].img;
  selectedDealDiscount.innerText = deal[0].discount;
  selectedDealName.innerText = deal[0].name;
});
