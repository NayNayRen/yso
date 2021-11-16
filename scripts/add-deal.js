// Home v3.0
// This file saves data passed by clicking the get deal button for each card, saves it's info to local storage

// saves selected deal to local storage for later use
const localStorageDeal = JSON.parse(localStorage.getItem('deal'));
const deal = localStorage.getItem('deal') !== null ? localStorageDeal : [];

// deal function takes passed data, makes a deal item, if there's a deal in storage, it's replaced with the newly chosen deal
function addSelectedDeal(url, img, name, discount) {
  const newDeal = {
    dealUrl: url,
    dealImg: img,
    dealName: name,
    dealDiscount: discount
  };
  if (deal != null) {
    deal.splice(0);
    deal.push(newDeal);
    updateLocalStorageDeal();
  }
}

// updates deal in storage
function updateLocalStorageDeal() {
  localStorage.setItem('deal', JSON.stringify(deal));
}
