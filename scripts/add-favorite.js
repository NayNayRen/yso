// Home v3.0
// This file pulls data passed by clicking the favorites button for each card, changing the buttons color, adding or removing each item depending on if its there already or not

// favorites containers
// const favoritesAddedContainer = document.getElementById('favorites-added-container');
const favoritesAddedText = document.getElementById('favorites-added-text');
const favoritesRemovedText = document.getElementById('favorites-removed-text');
const favoritesViewButton = document.querySelectorAll('#favorites-view-button');
const favoritesAddedContainer = document.getElementById('favorites-added-container');
const favoritesRemovedContainer = document.getElementById('favorites-removed-container');

// data from local storage
const localStorageFavorites = JSON.parse(localStorage.getItem('favorites'));
let favorites = localStorage.getItem('favorites') !== null ? localStorageFavorites : [];

// function uses passed parameters to make a favorited item and add it to a favorites array
function addToFavorites(favoritesButton, url, img, name, discount, views) {
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
  // display data for added item
  if (checkFavorites === false) {
    positionAddedDisplay();
    window.addEventListener('resize', positionAddedDisplay);
    favorites.push(selectedFavorite);
    favoritesRemovedContainer.style.top = '-175px';
    favoritesAddedContainer.style.backgroundColor = '#008000';
    favoritesAddedText.innerText = `${selectedFavorite.name} was added to favorites.`;
    favoritesButton.classList.add('favorite');
    setTimeout(() => {
      favoritesAddedContainer.style.top = '-175px';
      window.removeEventListener('resize', positionAddedDisplay);
    }, 5000);
    // display data for removed item
  } else if (checkFavorites === true) {
    positionRemovedDisplay();
    window.addEventListener('resize', positionRemovedDisplay);
    removeFromFavorites(favorites, 'name', selectedFavorite.name);
    favoritesAddedContainer.style.top = '-175px';
    favoritesRemovedContainer.style.backgroundColor = '#FF0000';
    favoritesRemovedText.innerText = `${selectedFavorite.name} was removed from favorites.`;
    favoritesButton.classList.remove('favorite');
    setTimeout(() => {
      favoritesRemovedContainer.style.top = '-175px';
      window.removeEventListener('resize', positionRemovedDisplay);
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
function positionAddedDisplay() {
  if (window.innerWidth > 1300) {
    favoritesAddedContainer.style.top = '110px';
  }
  if (window.innerWidth < 1300 && window.innerWidth > 1000) {
    favoritesAddedContainer.style.top = '100px';
  }
  if (window.innerWidth < 1000 && window.innerWidth > 700) {
    favoritesAddedContainer.style.top = '110px';
  }
  if (window.innerWidth < 700 && window.innerWidth > 400) {
    favoritesAddedContainer.style.top = '60px';
  }
  if (window.innerWidth < 400) {
    favoritesAddedContainer.style.top = '75px';
  }
}

function positionRemovedDisplay() {
  if (window.innerWidth > 1300) {
    favoritesRemovedContainer.style.top = '110px';
  }
  if (window.innerWidth < 1300 && window.innerWidth > 1000) {
    favoritesRemovedContainer.style.top = '100px';
  }
  if (window.innerWidth < 1000 && window.innerWidth > 700) {
    favoritesRemovedContainer.style.top = '110px';
  }
  if (window.innerWidth < 700 && window.innerWidth > 400) {
    favoritesRemovedContainer.style.top = '60px';
  }
  if (window.innerWidth < 400) {
    favoritesRemovedContainer.style.top = '75px';
  }
}

// checks what display is set for each container after favorited and keeps that same display
function checkContainerDisplayType() {
  if (cardDisplay.style.display === 'grid') {
    showLess();
  } else if (cardDisplay.style.display === 'flex') {
    showAll();
  }
  if (techCardDisplay.style.display === 'grid') {
    defaultView(techCardDisplay);
    defaultCardBuilder(techPreviousButton, techNextButton, techPageCount, 1, techData, techCardDisplay);
  } else if (techCardDisplay.style.display === 'flex') {
    paginationView(techCardDisplay);
    pagination(techPreviousButton, techNextButton, techPageCount, 1, techData, techCardDisplay);
  }
  if (popularCardDisplay.style.display === 'grid') {
    defaultView(popularCardDisplay);
    defaultCardBuilder(popularPreviousButton, popularNextButton, popularPageCount, 1, popularData, popularCardDisplay);
  } else if (popularCardDisplay.style.display === 'flex') {
    paginationView(popularCardDisplay);
    pagination(popularPreviousButton, popularNextButton, popularPageCount, 1, popularData, popularCardDisplay);
  }
  if (featuredCardDisplay.style.display === 'grid') {
    defaultView(featuredCardDisplay);
    defaultCardBuilder(featuredPreviousButton, featuredNextButton, featuredPageCount, 1, featuredData, featuredCardDisplay);
  } else if (featuredCardDisplay.style.display === 'flex') {
    paginationView(featuredCardDisplay);
    pagination(featuredPreviousButton, featuredNextButton, featuredPageCount, 1, featuredData, featuredCardDisplay);
  }
}

// EVENT LISTENER
// opens dashboard
favoritesViewButton.forEach(favoriteViewButton => {
  favoriteViewButton.addEventListener('click', () => {
    loadDashboard();
    positionDashboardDisplay();
    windowOverlay.style.webkitTransition = 'opacity 550ms ease-out';
    windowOverlay.style.transition = 'opacity 550ms ease-out';
    windowOverlay.classList.add('window-overlay-dim');
    hiddenDashboard.style.webkitTransition = 'opacity 650ms ease-out, top 750ms ease-out';
    hiddenDashboard.style.transition = 'opacity 650ms ease-out, top 750ms ease-out';
    // hiddenDashboard.style.top = '5px';
    hiddenDashboard.style.opacity = '1';
    favoritesAddedContainer.style.top = '-175px';
    favoritesRemovedContainer.style.top = '-175px';
  });
});
