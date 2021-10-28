// Home v3.0
// This file pulls from local storage the cards favorited from the home page
// Also displays a message if there is no favorites data

// const dashboardSearchField = document.getElementById('dashboard-search-field');
// const dashboardSearchFieldLabel = document.getElementById('dashboard-search-field-label');
// const dashboardSearchFieldButton = document.getElementById('dashboard-search-field-button');

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
const favoritesLinkCounter = document.querySelector('.favorites-link-counter');
const dashboardRightNavHeader = document.getElementById('dashboard-right-nav-container-header');

// friends page buttons
const friendsDisplay = document.getElementById('friends-display');
const friendsNextButton = document.getElementById("friends-next-button");
const friendsPreviousButton = document.getElementById("friends-previous-button");
const showAllFriends = document.getElementById('show-all-friends');
const showLessFriends = document.getElementById('show-less-friends');
const friendsPageCount = document.getElementById('friends-page-count');
const friendsPageCountHeading = document.getElementById("friends-page-count-heading");
const friendsControls = document.querySelector('.friends-controls');

// data from local storage.
// const localStorageFavorites = JSON.parse(localStorage.getItem('favorites'));
// const favorites = localStorage.getItem('favorites') !== null ? localStorageFavorites : [];

// function uses passed parameters to make a favorited item and add it to a favorites array
// function addToFavorites(favoritesButton, url, img, name, discount, views) {
//   // map across favorites to get only the names to check
//   const favoriteNames = favorites.map(favorite => {
//     return favorite.name;
//   });
//   // checks for the name of the favorite item in the collection of favorites
//   const checkFavorites = favoriteNames.includes(name);
//
//   // if the name is not there, add the item to favorites, color the button
//   if (checkFavorites === true) {
//     removeFromFavorites(favorites, 'name', name);
//     favoritesTitle.style.color = '#FF0000';
//     favoritesAddedName.style.color = '#FF0000';
//     favoritesTitle.innerText = 'Removed From Favorites';
//     favoritesAddedName.innerText = name;
//     favoritesButton.classList.remove('favorite');
//     favoritesAddedContainer.classList.add('move-favorites-on');
//     favoritesCountContainer.style.display = 'flex';
//     favoritesCountContainer.innerHTML = `<span>${favorites.length}</span>`;
//   }
//   updateLocalStorage();
//   init();
// }

// function uses the array, property to remove by, and name of element to remove from favorites array
// function removeFromFavorites(array, property, value) {
//   array.forEach(function(result, index) {
//     if (result[property] === value) {
//       array.splice(index, 1);
//     }
//   });
// }
//
// //update local storage favorites
// function updateLocalStorage() {
//   localStorage.setItem('favorites', JSON.stringify(favorites));
// }

function loadFavorites() {
  if (favorites.length === 0) {
    favoritesAddedName.innerText = 'Favorites is empty.';
    favoritesDisplay.innerHTML = `
    <div class='favorites-empty'>
      <h3>Oh no...</h3>
      <h1>Your favorites list is empty.</h1>
      <h3>If you'd like to make a list,<br>please return to the main page <br> via the YSO link at the top,<br> or the <i class="fa fa-home" aria-hidden="true"></i>
       icon next to your profile photo.</h3>
      <span>
        <i class="fa fa-frown-o" aria-hidden="true"></i>
      </span>
    </div>
    `;
    favoritesDisplay.style.display = 'flex';
    favoritesDisplay.style.flexDirection = 'column';
    favoritesControls.style.display = 'none';
    document.querySelector('#friends-selection').classList.add('targeted');
  } else {
    defaultCardBuilder(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
    defaultView(favoritesDisplay);
    favoritesPageCountHeading.style.display = 'inline';
    document.querySelector('#friends-selection').classList.add('targeted');
  }
  favoritesLinkCounter.innerHTML = favorites.length;
}

function loadFriends() {
  if (friends.length === 0) {
    friendsDisplay.innerHTML = `
    <div class='favorites-empty'>
      <h3>Oh no...</h3>
      <h1>Your friends list is empty.</h1>
      <span>
        <i class="fa fa-frown-o" aria-hidden="true"></i>
      </span>
    </div>
    `;
    friendsDisplay.style.display = 'flex';
    friendsDisplay.style.flexDirection = 'column';
    friendsControls.style.display = 'none';
    document.querySelector('#friends-selection').classList.add('targeted');
  } else {
    defaultFriendsBuilder(friendsPreviousButton, friendsNextButton, friendsPageCount, 1, friends, friendsDisplay);
    defaultView(friendsDisplay);
    friendsPageCountHeading.style.display = 'inline';
    document.querySelector('#friends-selection').classList.add('targeted');
  }
  document.querySelector('.friends-link-counter').innerHTML = friends.length;
}

function loadDashboard() {
  loadFavorites();
  loadFriends();
  dashboardRightNavHeader.innerHTML = `
  <h2>Your Dashboard</h2>
  <p>Here is the collection of favorites you've chose, alongside friends you picked to share with, a map with pinned locations, and a calendar for...well why not have a calendar? Here you can see your entire dashboard collection. Use the tabs below, or pick individual viewing from the navigation to the left, to see everything.</p>
  `;
}

// EVENT LISTENERS
window.addEventListener('scroll', stickFavoritesNotification);
window.addEventListener('load', loadDashboard);

favoritesHideButton.addEventListener('click', () => {
  favoritesAddedContainer.classList.remove('move-favorites-on');
});
// favorites control
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
// friends controls
showAllFriends.addEventListener('click', () => {
  friendsCurrentPage = 1;
  friendsPagination(friendsPreviousButton, friendsNextButton, friendsPageCount, 1, friends, friendsDisplay);
  paginationView(friendsDisplay);
  friendsPageCountHeading.style.display = 'none';
});
showLessFriends.addEventListener('click', () => {
  defaultFriendsBuilder(friendsPreviousButton, friendsNextButton, friendsPageCount, 1, friends, friendsDisplay);
  defaultView(friendsDisplay);
  friendsPageCountHeading.style.display = 'inline';
});
friendsPreviousButton.addEventListener('click', () => {
  friendsPrevPage(friendsPreviousButton, friendsNextButton, friendsPageCount, friends, friendsDisplay);
});
friendsNextButton.addEventListener('click', () => {
  friendsNextPage(friendsPreviousButton, friendsNextButton, friendsPageCount, friends, friendsDisplay);
});

// section displays and header text
// when dashboard link is clicked all displays and adjustments
document.querySelector('#dashboard-link').addEventListener('click', () => {
  document.querySelector('#tabs ul').style.position = 'relative';
  document.querySelector('#tabs ul').style.bottom = '0';
  document.querySelector('#favorites-selection').classList.add('targeted');
  document.querySelector('#favorites-selection').style.borderBottom = 'solid 3px #333333';
  document.querySelector('#favorites-tab').classList.add('active');
  document.querySelector('#friends-selection').classList.add('targeted');
  document.querySelector('#friends-selection').style.borderBottom = 'solid 3px #333333';
  document.querySelector('#friends-tab').classList.remove('active');
  // document.querySelector('#map-selection').classList.add('targeted');
  // document.querySelector('#map-selection').style.borderBottom = 'solid 3px #333333';
  // document.querySelector('#map-tab').classList.remove('active');
  // document.querySelector('#calendar-selection').classList.add('targeted');
  // document.querySelector('#calendar-tab').classList.remove('active');
  dashboardRightNavHeader.innerHTML = `
  <h2>Your Dashboard</h2>
  <p>Here is the collection of favorites you've chose, alongside friends you picked to share with, a map with pinned locations, and a calendar for...well why not have a calendar? Here you can see your entire dashboard collection. Use the tabs below, or pick individual viewing from the navigation to the left, to see everything.</p>
  `;
  if (window.innerWidth <= 700) {
    document.querySelector('#favorites-selection').style.borderBottom = 'none';
    document.querySelector('#friends-selection').style.borderBottom = 'none';
    // document.querySelector('#map-selection').style.borderBottom = 'none';
  }
});
// favorites link is clicked all others go away
document.querySelector('#favorites-link').addEventListener('click', () => {
  document.querySelector('#tabs ul').style.position = 'relative';
  document.querySelector('#tabs ul').style.bottom = '-25px';
  document.querySelector('#favorites-selection').classList.add('targeted');
  document.querySelector('#favorites-selection').style.borderBottom = 'none';
  document.querySelector('#friends-selection').classList.remove('targeted');
  document.querySelector('#friends-selection').style.borderBottom = 'none';
  // document.querySelector('#map-selection').classList.remove('targeted');
  // document.querySelector('#map-selection').style.borderBottom = 'none';
  // document.querySelector('#calendar-selection').classList.remove('targeted');
  dashboardRightNavHeader.innerHTML = `
  <h2>Your Favorites</h2>
  <p>Here is the collection of favorites you've chosen. If you're not keen on keeping one, just poke the heart to remove it from the group. You'll have to go back to the main page to add it again.</p>
  `;
});
// friends link is clicked all others go away
document.querySelector('#friends-link').addEventListener('click', () => {
  document.querySelector('#tabs ul').style.position = 'relative';
  document.querySelector('#tabs ul').style.bottom = '-25px';
  document.querySelector('#favorites-selection').classList.remove('targeted');
  document.querySelector('#favorites-selection').style.borderBottom = 'none';
  document.querySelector('#friends-selection').classList.add('targeted');
  document.querySelector('#friends-selection').style.borderBottom = 'none';
  // document.querySelector('#map-selection').classList.remove('targeted');
  // document.querySelector('#map-selection').style.borderBottom = 'none';
  // document.querySelector('#calendar-selection').classList.remove('targeted');
  dashboardRightNavHeader.innerHTML = `
  <h2>Your Friends</h2>
  <p>Here is the group of friends you've added to connect and share with.</p>
  `;
});
// map link is clicked all others go away
// document.querySelector('#map-link').addEventListener('click', () => {
//   document.querySelector('#tabs ul').style.position = 'relative';
//   document.querySelector('#tabs ul').style.bottom = '-25px';
//   document.querySelector('#favorites-selection').classList.remove('targeted');
//   document.querySelector('#favorites-selection').style.borderBottom = 'none';
//   document.querySelector('#friends-selection').classList.remove('targeted');
//   document.querySelector('#friends-selection').style.borderBottom = 'none';
//   document.querySelector('#map-selection').classList.add('targeted');
//   document.querySelector('#map-selection').style.borderBottom = 'none';
//   // document.querySelector('#calendar-selection').classList.remove('targeted');
//   dashboardRightNavHeader.innerHTML = `
//   <h2>Your Map</h2>
//   <p>Possible location display, search and/or pin abilities in the future.</p>
//   `;
// });
// calendar link is clicked all others go away
// document.querySelector('#calendar-link').addEventListener('click', () => {
//   document.querySelector('#tabs ul').style.position = 'relative';
//   document.querySelector('#tabs ul').style.bottom = '-25px';
//   document.querySelector('#calendar-selection').classList.add('targeted');
//   document.querySelector('#favorites-selection').classList.remove('targeted');
//   document.querySelector('#favorites-selection').style.borderBottom = 'none';
//   document.querySelector('#friends-selection').classList.remove('targeted');
//   document.querySelector('#friends-selection').style.borderBottom = 'none';
//   document.querySelector('#map-selection').classList.remove('targeted');
//   document.querySelector('#map-selection').style.borderBottom = 'none';
//   dashboardRightNavHeader.innerHTML = `
//   <h2>Your Calendar</h2>
//   <p>Here is...well, the calendar, because, why not?</p>
//   `;
// });

// burger menu toggle action at 700px or less
document.querySelector('#menu-toggle').addEventListener('click', () => {
  document.body.classList.toggle('open-menu');
  document.querySelector('#dashboard-burger-bars-1').classList.toggle('burger-bars-rotate-clockwise');
  document.querySelector('#dashboard-burger-bars-2').classList.toggle('burger-bars-remove');
  document.querySelector('#dashboard-burger-bars-3').classList.toggle('burger-bars-rotate-counter-clockwise');
});

$("#dashboard-left-nav-links li span").click(function() {
  $("#dashboard-left-nav-links li").removeClass("active");
  $(this).parent().addClass("active");
});

$("#tabs li").click(function() {
  const clickTarget = $(this).attr("data-target");
  $(".tab-target").removeClass("targeted");
  $("#" + clickTarget).addClass("targeted");
  $("#tabs li").removeClass("active");
  $(this).addClass("active");
  document.querySelector('#favorites-selection').style.borderBottom = 'none';
  document.querySelector('#friends-selection').style.borderBottom = 'none';
  // document.querySelector('#map-selection').style.borderBottom = 'none';
});
