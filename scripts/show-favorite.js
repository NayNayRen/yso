// Home v3.0
// This file pulls from local storage the cards favorited from the home page
// Also displays a message if there is no favorites data

// favorites page buttons
const favoritesDisplay = document.getElementById('favorites-display');
const favoritesNextButton = document.getElementById("favorites-next-button");
const favoritesPreviousButton = document.getElementById("favorites-previous-button");
const showAllFavorites = document.getElementById('show-all-favorites');
const showLessFavorites = document.getElementById('show-less-favorites');
const favoritesPageCount = document.getElementById('favorites-page-count');
const favoritesPageCountHeading = document.getElementById("favorites-page-count-heading");
const favoritesControls = document.querySelector('.favorites-controls');

// favorites containers
const favoritesAddedContainer = document.getElementById('favorites-added-container');
const favoritesAddedName = document.getElementById('favorites-added-name');
const favoritesHideButton = document.getElementById('favorites-hide-button');
const favoritesTitle = document.getElementById('favorites-title');

// data from local storage.
const localStorageFavorites = JSON.parse(localStorage.getItem('favorites'));
const favorites = localStorage.getItem('favorites') !== null ? localStorageFavorites : [];

// MINIMAL CARD DISPLAY
function defaultView(container) {
  container.style.overflowX = 'auto';
  container.style.display = 'grid';
  container.style.gridAutoFlow = 'column';
  container.style.justifyContent = 'space-between';
  container.style.width = '100%';
}

// PAGINATED CARD DISPLAY
function paginationView(container) {
  container.style.display = 'flex';
  container.style.flexDirection = 'row';
  container.style.flexWrap = 'wrap';
  container.style.justifyContent = 'center';
}

// function uses passed parameters to make a favorited item and add it to a favorites array
function addToFavorites(favoritesButton, url, img, name, discount, views) {
  // new favorite item created
  const selectedFavorite = {
    url: url,
    img: img,
    name: name,
    discount: discount,
    views: views,
    status: 'saved'
  };
  // map across favorites to get only the names to check
  const favoriteNames = favorites.map(favorite => {
    return favorite.name;
  });
  // checks for the name of the favorite item in the collection of favorites
  const checkFavorites = favoriteNames.includes(selectedFavorite.name);

  // if the name is not there, add the item to favorites, color the button
 if (checkFavorites === true) {
    removeFromFavorites(favorites, 'name', selectedFavorite.name);
    favoritesTitle.style.color = '#FF0000';
    favoritesTitle.innerText = 'Removed From Favorites';
    favoritesAddedName.innerText = selectedFavorite.name;
    favoritesButton.classList.remove('favorite');
    favoritesAddedContainer.classList.add('move-favorites-on');
    console.log('Favorites after removal:');
    favorites.map(favorite => {
      console.log(`${favorite.name}`);
    });
  }
  updateLocalStorage();
  init();
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
function updateLocalStorage() {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// sticks favorites added/removed notification to the bottom of nav box when  scrolled
function stickFavoritesNotification(){
  if(window.innerWidth > 1300){
    favoritesAddedContainer.style.top = '100px';
  }
  if(document.documentElement.scrollTop > 5 && window.innerWidth > 1300) {
    favoritesAddedContainer.style.top = '70px';
  }
  if(window.innerWidth < 1300 && window.innerWidth > 1000){
    favoritesAddedContainer.style.top = '90px';
  }
  if(document.documentElement.scrollTop > 10 && window.innerWidth < 1300 && window.innerWidth > 1000){
    favoritesAddedContainer.style.top = '65px';
  }
  if(window.innerWidth < 1000 && window.innerWidth > 700){
    favoritesAddedContainer.style.top = '80px';
  }
  if(document.documentElement.scrollTop > 20 && window.innerWidth < 1000 && window.innerWidth > 940){
    favoritesAddedContainer.style.top = '60px';
  }
  if(window.innerWidth < 940 && window.innerWidth > 700){
    favoritesAddedContainer.style.top = '105px';
  }
  if(document.documentElement.scrollTop > 15 && window.innerWidth < 940 && window.innerWidth > 700){
    favoritesAddedContainer.style.top = '85px';
  }
  if(window.innerWidth < 700){
    favoritesAddedContainer.style.top = '85px';
  }
  if(document.documentElement.scrollTop > 5 && window.innerWidth < 700 && window.innerWidth > 400){
    favoritesAddedContainer.style.top = '60px';
  }
  if(window.innerWidth < 400){
    favoritesAddedContainer.style.top = '90px';
  }
  if(document.documentElement.scrollTop > 10 && window.innerWidth < 400){
    favoritesAddedContainer.style.top = '55px';
  }
}

function init() {
  if (favorites.length === 0) {
    favoritesDisplay.innerHTML = `
    <div class='favorites-empty'>
      <h3>Oh no...</h3>
      <h1>Your favorites list is empty.</h1>
      <h3>If you'd like to make a list, please return to the main page.</h3>
      <span>
        <i class="fa fa-frown-o" aria-hidden="true"></i>
      </span>
    </div>
    `;
    favoritesDisplay.style.display = 'flex';
    favoritesDisplay.style.flexDirection = 'column';
    favoritesControls.style.display = 'none';
  } else {
    defaultCardBuilder(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
    favoritesControls.style.display = 'flex';
  }
}

// FAVORITES EVENTS
window.addEventListener('load', init);
window.addEventListener('scroll', stickFavoritesNotification);
favoritesHideButton.addEventListener('click', () => {
  favoritesAddedContainer.classList.remove('move-favorites-on');
});

showAllFavorites.addEventListener('click', () => {
  favoritesCurrentPage = 1;
  pagination(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
  paginationView(favoritesDisplay);
  favoritesPageCountHeading.style.display = 'none';
});
showLessFavorites.addEventListener('click', () => {
  defaultCardBuilder(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
  defaultView(favoritesDisplay);
  favoritesPageCountHeading.style.display = 'inline';
});
favoritesPreviousButton.addEventListener('click', () => {
  favoritesPrevPage(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, favorites, favoritesDisplay);
});
favoritesNextButton.addEventListener('click', () => {
  favoritesNextPage(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, favorites, favoritesDisplay);
});