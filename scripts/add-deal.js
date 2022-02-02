// Home v3.0
// This file saves data passed by clicking the get deal button for each card, saves it's info to local storage

// deal function takes passed data, makes a deal item, if there's a deal in storage, it's replaced with the newly chosen deal
function addSelectedDeal(url, img, name, discount, views) {
  const newDeal = {
    url: url,
    img: img,
    name: name,
    discount: discount,
    views: views,
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
