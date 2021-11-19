// Home v3.0
// This file pulls data passed by clicking the favorites button for each card, changing the buttons color, adding or removing each item depending on if its there already or not

// favorites containers
const favoritesAddedContainer = document.getElementById('favorites-added-container');
const favoritesAddedName = document.getElementById('favorites-added-name');
const favoritesHideButton = document.getElementById('favorites-hide-button');
const favoritesTitle = document.getElementById('favorites-title');
const favoritesCountContainer = document.querySelector('.favorites-count-container');
const favoritesAddedMessage = document.querySelector('.favorites-added-message');

// data from local storage
const localStorageFavorites = JSON.parse(localStorage.getItem('favorites'));
const favorites = localStorage.getItem('favorites') !== null ? localStorageFavorites : [];

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
  // if the name is not there, add the item to favorites, color the button
  if (checkFavorites === false) {
    // window.addEventListener('scroll', stickFavoritesNotification);
    favorites.push(selectedFavorite);
    favoritesAddedContainer.style.webkitTransition = 'opacity 550ms ease-out, top 450ms ease-out';
    favoritesAddedContainer.style.transition = 'opacity 550ms ease-out, top 450ms ease-out';
    favoritesTitle.style.color = '#000';
    favoritesAddedName.style.color = '#fff';
    favoritesTitle.innerText = 'Added To Favorites';
    favoritesAddedName.innerText = selectedFavorite.name;
    favoritesButton.classList.add('favorite');
    favoritesCountContainer.innerHTML = `<span>${favorites.length}</span>`;
    favoritesAddedMessage.innerText = "View your collection through the user icon's dashboard.";
    favoritesAddedContainer.style.opacity = '1';
    if (window.innerWidth > 1000) {
      favoritesAddedContainer.style.top = '120px';
    }
    if (window.innerWidth < 1000 && window.innerWidth > 700) {
      favoritesAddedContainer.style.top = '140px';
    }
    if (window.innerWidth < 700 && window.innerWidth > 400) {
      favoritesAddedContainer.style.top = '75px';
    }
    if (window.innerWidth < 400) {
      favoritesAddedContainer.style.top = '50px';
    }
    // if the name is there, remove the item from favorites, uncolor the button
  } else if (checkFavorites === true) {
    // window.addEventListener('scroll', stickFavoritesNotification);
    removeFromFavorites(favorites, 'name', selectedFavorite.name);
    favoritesAddedContainer.style.webkitTransition = 'opacity 550ms ease-out, top 450ms ease-out';
    favoritesAddedContainer.style.transition = 'opacity 550ms ease-out, top 450ms ease-out';
    favoritesTitle.style.color = '#FF0000';
    favoritesAddedName.style.color = '#fff';
    favoritesTitle.innerText = 'Removed From Favorites';
    favoritesAddedName.innerText = selectedFavorite.name;
    favoritesButton.classList.remove('favorite');
    favoritesCountContainer.innerHTML = `<span>${favorites.length}</span>`;
    favoritesAddedMessage.innerText = "Continue to remove more from, or add new to, your collection.";
    favoritesAddedContainer.style.opacity = '1';
    if (favorites.length === 0) {
      favoritesAddedName.innerText = 'Favorites is now empty.';
    }
    if (window.innerWidth > 1000) {
      favoritesAddedContainer.style.top = '120px';
    }
    if (window.innerWidth < 1000 && window.innerWidth > 700) {
      favoritesAddedContainer.style.top = '125px';
    }
    if (window.innerWidth < 700 && window.innerWidth > 400) {
      favoritesAddedContainer.style.top = '75px';
    }
    if (window.innerWidth < 400) {
      favoritesAddedContainer.style.top = '50px';
    }
  }
  // reloads page and favorites but sets view back to default
  updateLocalStorageFavorites();
  loadFavorites();
  loadDashboard();
  loadMainPage();
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

// function stickFavoritesNotification() {
//   if (document.documentElement.scrollTop > 10 && window.innerWidth > 1000) {
//     favoritesAddedContainer.style.top = '90px';
//   } else if (document.documentElement.scrollTop > 10 && window.innerWidth < 1000 && window.innerWidth > 700) {
//     favoritesAddedContainer.style.top = '100px';
//   } else if (document.documentElement.scrollTop > 10 && window.innerWidth < 700 && window.innerWidth > 400) {
//     favoritesAddedContainer.style.top = '50px';
//   } else if (document.documentElement.scrollTop > 10 && window.innerWidth < 400) {
//     favoritesAddedContainer.style.top = '40px';
//   }
// }

// EVENT LISTENER
favoritesHideButton.addEventListener('click', () => {
  // window.removeEventListener('scroll', stickFavoritesNotification);
  favoritesAddedContainer.style.webkitTransition = 'opacity 350ms ease-in, top 650ms ease-in';
  favoritesAddedContainer.style.transition = 'opacity 350ms ease-in, top 650ms ease-in';
  favoritesAddedContainer.style.opacity = '0';
  favoritesAddedContainer.style.top = '-175px';
});
