const selectedDealSendButton = document.getElementById('selected-deal-send-button');
const selectedDealTextButton = document.getElementById('selected-deal-text-button');
const selectedDealEmailButton = document.getElementById('selected-deal-email-button');
const selectedDealSendMethod = document.querySelector('.selected-deal-send-method');
const selectedDealLabel = document.getElementById('selected-deal-label');
const selectedDealResponse = document.querySelector('.selected-deal-response');
const selectedDealSwitchRedemptionMethod = document.querySelector('.selected-deal-switch-redemption-method');

function showTextChoices(){
  selectedDealLabel.innerText = 'Send the coupon via text.';
  selectedDealResponse.innerText = 'Use or enter new phone number.';
  selectedDealResponse.style.opacity = '1';
  selectedDealSwitchRedemptionMethod.innerText = 'Send via email.';
  selectedDealSwitchRedemptionMethod.style.opacity = '1';
  selectedDealSendMethod.style.height = '50px';
  selectedDealSendMethod.style.border = 'solid 1px #000';
  selectedDealSendButton.style.backgroundColor = '#FF0000';
  selectedDealSendButton.disabled = false;
}

function showEmailChoices(){
  selectedDealLabel.innerText = 'Send the coupon via email.';
  selectedDealResponse.innerText = 'Use or enter new email address.';
  selectedDealResponse.style.opacity = '1';
  selectedDealSwitchRedemptionMethod.innerText = 'Send via text.';
  selectedDealSwitchRedemptionMethod.style.opacity = '1';
  selectedDealSendMethod.style.height = '50px';
  selectedDealSendMethod.style.border = 'solid 1px #000';
  selectedDealSendButton.style.backgroundColor = '#FF0000';
  selectedDealSendButton.disabled = false;
}

selectedDealTextButton.addEventListener('click', () => {
  showTextChoices();
  selectedDealSwitchRedemptionMethod.addEventListener('mouseover', () => {
    selectedDealSwitchRedemptionMethod.style.opacity = '0.75';
  });
  selectedDealSwitchRedemptionMethod.addEventListener('mouseout', () => {
    selectedDealSwitchRedemptionMethod.style.opacity = '1';
  });
  selectedDealSendButton.addEventListener('mouseover', () => {
    selectedDealSendButton.style.backgroundColor = '#000';
    selectedDealSendButton.style.cursor = 'pointer';
  });
  selectedDealSendButton.addEventListener('mouseout', () => {
    selectedDealSendButton.style.backgroundColor = '#FF0000';
  });
});

selectedDealEmailButton.addEventListener('click', () => {
  showEmailChoices();
  selectedDealSwitchRedemptionMethod.addEventListener('mouseover', () => {
    selectedDealSwitchRedemptionMethod.style.opacity = '0.75';
  });
  selectedDealSwitchRedemptionMethod.addEventListener('mouseout', () => {
    selectedDealSwitchRedemptionMethod.style.opacity = '1';
  });
  selectedDealSendButton.addEventListener('mouseover', () => {
    selectedDealSendButton.style.backgroundColor = '#000';
    selectedDealSendButton.style.cursor = 'pointer';
  });
  selectedDealSendButton.addEventListener('mouseout', () => {
    selectedDealSendButton.style.backgroundColor = '#FF0000';
  });
});

async function selectedDeal(url, img, name, discount){
    console.log(url);
    console.log(img);
    console.log(name);
    console.log(discount);
}
