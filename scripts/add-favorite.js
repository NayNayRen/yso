// Home v3.0
// This file pulls data passed by clicking the favorites button for each card, changing the buttons color, adding or removing each item depending on if its there already or not

// favorites containers
// const favoritesAddedContainer = document.getElementById('favorites-added-container');
const favoritesAddedText = document.getElementById('favorites-confirmation-text');
const favoritesViewButton = document.getElementById('favorites-view-button');
const favoritesConfirmation = document.getElementById('favorites-confirmation-icon');
const favoritesConfirmationTextContainer = document.querySelector('.favorites-confirmation-text-container');

// data from local storage
const localStorageFavorites = JSON.parse(localStorage.getItem('favorites'));
let favorites = localStorage.getItem('favorites') !== null ? localStorageFavorites : [];

// function uses passed parameters to make a favorited item and add it to a favorites array
function addToFavorites(favoritesButton, url, img, name, discount, views) {
  positionFavoriteDisplay();
  // new favorite item created
  const selectedFavorite = {
    url: url,
    img: img,
    name: name,
    discount: discount,
    views: views,
  };
  // map across favorites to get only the names to check
  const favoriteNames = favorites.map(favorite => {
    return favorite.name;
  });
  // checks for the name of the favorite item in the collection of favorites
  const checkFavorites = favoriteNames.includes(selectedFavorite.name);
  // if the name is not there, add the item to favorites, color the button
  if (checkFavorites === false) {
    positionFavoriteDisplay();
    window.addEventListener('resize', positionFavoriteDisplay);
    favorites.push(selectedFavorite);
    favoritesConfirmationTextContainer.style.webkitTransition = 'top 550ms ease-out';
    favoritesConfirmationTextContainer.style.transition = 'top 550ms ease-out';
    favoritesConfirmationTextContainer.style.backgroundColor = '#008000';
    favoritesConfirmation.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    favoritesConfirmation.style.padding = '2px 4px';
    favoritesAddedText.innerText = `${selectedFavorite.name} was added to favorites.`;
    favoritesButton.classList.add('favorite');
    setTimeout(() => {
      favoritesConfirmationTextContainer.style.top = '-175px';
      window.removeEventListener('resize', positionFavoriteDisplay);
    }, 5000);
    // if the name is there, remove the item from favorites, uncolor the button
  } else if (checkFavorites === true) {
    positionFavoriteDisplay();
    window.addEventListener('resize', positionFavoriteDisplay);
    removeFromFavorites(favorites, 'name', selectedFavorite.name);
    favoritesConfirmationTextContainer.style.webkitTransition = 'top 550ms ease-out';
    favoritesConfirmationTextContainer.style.transition = 'top 550ms ease-out';
    favoritesConfirmationTextContainer.style.backgroundColor = '#FF0000';
    favoritesConfirmation.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    favoritesConfirmation.style.padding = '2px 6px';
    favoritesAddedText.innerText = `${selectedFavorite.name} was removed from favorites.`;
    favoritesButton.classList.remove('favorite');
    if (favorites.length === 0) {
      favoritesAddedText.innerText = 'Favorites is now empty.';
    }
    setTimeout(() => {
      favoritesConfirmationTextContainer.style.top = '-175px';
      window.removeEventListener('resize', positionFavoriteDisplay);
    }, 5000);
  }
  // reloads page containers
  updateLocalStorageFavorites();
  checkContainerDisplayType();
  loadFavorites();
  loadRegistered();
  loadMainPage();
  // loadFriends();
  // loadDashboard();
}

// function uses the array, property to remove by, and name of element to remove from favorites array
function removeFromFavorites(array, property, value) {
  array.forEach(function(result, index) {
    if (result[property] === value) {
      array.splice(index, 1);
    }
  });
}

//update local storage favorites
function updateLocalStorageFavorites() {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// checks for window width and moves favorite notification depending on so
function positionFavoriteDisplay(){
  if (window.innerWidth > 1300) {
    favoritesConfirmationTextContainer.style.top = '110px';
  }
  if (window.innerWidth < 1300 && window.innerWidth > 1000) {
    favoritesConfirmationTextContainer.style.top = '100px';
  }
  if (window.innerWidth < 1000 && window.innerWidth > 700) {
    favoritesConfirmationTextContainer.style.top = '110px';
  }
  if (window.innerWidth < 700 && window.innerWidth > 400) {
    favoritesConfirmationTextContainer.style.top = '60px';
  }
  if (window.innerWidth < 400) {
    favoritesConfirmationTextContainer.style.top = '75px';
  }
}

// checks what display is set for each container after favorited and keeps that same display
function checkContainerDisplayType(){
  if(cardDisplay.style.display === 'grid'){
    showLess();
  }
  else if(cardDisplay.style.display === 'flex'){
    showAll();
  }
  if(techCardDisplay.style.display === 'grid'){
    defaultView(techCardDisplay);
    defaultCardBuilder(techPreviousButton, techNextButton, techPageCount, 1, techData, techCardDisplay);
  }
  else if(techCardDisplay.style.display === 'flex'){
    paginationView(techCardDisplay);
    pagination(techPreviousButton, techNextButton, techPageCount, 1, techData, techCardDisplay);
  }
  if(popularCardDisplay.style.display === 'grid'){
    defaultView(popularCardDisplay);
    defaultCardBuilder(popularPreviousButton, popularNextButton, popularPageCount, 1, popularData, popularCardDisplay);
  }
  else if(popularCardDisplay.style.display === 'flex'){
    paginationView(popularCardDisplay);
    pagination(popularPreviousButton, popularNextButton, popularPageCount, 1, popularData, popularCardDisplay);
  }
  if(featuredCardDisplay.style.display === 'grid'){
    defaultView(featuredCardDisplay);
    defaultCardBuilder(featuredPreviousButton, featuredNextButton, featuredPageCount, 1, featuredData, featuredCardDisplay);
  }
  else if(featuredCardDisplay.style.display === 'flex'){
    paginationView(featuredCardDisplay);
    pagination(featuredPreviousButton, featuredNextButton, featuredPageCount, 1, featuredData, featuredCardDisplay);
  }
}

// EVENT LISTENER
favoritesViewButton.addEventListener('click', () => {
  loadDashboard();
  windowOverlay.style.webkitTransition = 'opacity 550ms ease-out';
  windowOverlay.style.transition = 'opacity 550ms ease-out';
  windowOverlay.classList.add('window-overlay-dim');
  hiddenDashboard.style.webkitTransition = 'opacity 650ms ease-out, top 750ms ease-out';
  hiddenDashboard.style.transition = 'opacity 650ms ease-out, top 750ms ease-out';
  hiddenDashboard.style.top = '5px';
  hiddenDashboard.style.opacity = '1';
  favoritesConfirmationTextContainer.style.top = '-175px';
});
