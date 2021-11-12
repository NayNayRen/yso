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

// shows text display when text button is clicked
function showTextChoices(){
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
function showEmailChoices(){
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

shareDealButton.addEventListener('click', () => {
  selectedDealShareContainer.style.top = '125px';
  selectedDealShareContainer.style.opacity = '1';
  selectedDealFavoriteContainer.style.top = '-500px';
  selectedDealFavoriteContainer.style.opacity = '0';
  if(window.innerWidth <= 700){
    selectedDealShareContainer.style.top = '75px';
  }
});

closeShareButton.addEventListener('click', () => {
  selectedDealShareContainer.style.top = '-500px';
});

favoriteDealButton.addEventListener('click', () => {
  selectedDealFavoriteContainer.style.top = '125px';
  selectedDealFavoriteContainer.style.opacity = '1';
  selectedDealShareContainer.style.top = '-500px';
  selectedDealShareContainer.style.opacity = '0';
  if(window.innerWidth <= 700){
    selectedDealFavoriteContainer.style.top = '75px';
  }
});



// text button
selectedDealTextButton.addEventListener('click', () => {
  showTextChoices();
  selectedDealTextButton.style.display = 'none';
  selectedDealEmailButton.style.display = 'none';
  selectedDealSendButton.addEventListener('mouseover', () => {
    selectedDealSendButton.style.backgroundColor = '#000';
    selectedDealSendButton.style.cursor = 'pointer';
  });
  selectedDealSendButton.addEventListener('mouseout', () => {
    selectedDealSendButton.style.backgroundColor = '#FF0000';
  });
});

// email button
selectedDealEmailButton.addEventListener('click', () => {
  showEmailChoices();
  selectedDealTextButton.style.display = 'none';
  selectedDealEmailButton.style.display = 'none';
  selectedDealSendButton.addEventListener('mouseover', () => {
    selectedDealSendButton.style.backgroundColor = '#000';
    selectedDealSendButton.style.cursor = 'pointer';
  });
  selectedDealSendButton.addEventListener('mouseout', () => {
    selectedDealSendButton.style.backgroundColor = '#FF0000';
  });
});

function selectedDeal(url, img, name, discount){
  const newDeal = {
    dealImg: img,
    dealName: name,
    dealDiscount: discount
  };
    console.log(newDeal);
}
