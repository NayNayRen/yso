// logged in user info
const userImage = document.getElementById('profile-image');
const userName = document.getElementById('profile-name');
const userLocation = document.getElementById('profile-location');

// elipses dots
const elipsesMenu = document.getElementById('menu-toggle');
const dotOne = document.querySelector('.dot-1');
const dotTwo = document.querySelector('.dot-2');
const dotThree = document.querySelector('.dot-3');

// dashboard buttons
const openHiddenDashboard = document.getElementById('open-hidden-dashboard');
const closeHiddenDashboard = document.querySelector('.hidden-dashboard span');
const hiddenDashboard = document.querySelector('.hidden-dashboard');
const windowOverlay = document.getElementById('window-overlay');
const dashboardRightNavHeader = document.getElementById('dashboard-right-nav-container-header');

// favorites page buttons and containers
const dashboardContentContainer = document.querySelector('.dashboard-content-container');
const favoritesDisplay = document.getElementById('favorites-display');
const favoritesNextButton = document.getElementById("favorites-next-button");
const favoritesPreviousButton = document.getElementById("favorites-previous-button");
const favoritesPageCount = document.getElementById('favorites-page-count');
const favoritesLinkCounter = document.querySelector('.favorites-link-counter');
const profilePictureContainer = document.getElementById('profile-picture-container');
// const showAllFavorites = document.getElementById('show-all-favorites');
// const showLessFavorites = document.getElementById('show-less-favorites');

// creates user profile section when dashboard is opened
function loadUser() {
  if (token.length === 0) {
    profilePictureContainer.innerHTML = `
    <h3 class="profile-picture">N/A</h3>`;
    userName.innerText = 'Not Registered';
    userLocation.innerText = 'Not Registered';
  } else {
    profilePictureContainer.innerHTML = `
    <img src="imgs/male-profile.png" id="profile-image" class="profile-picture" alt="Profile Picture">`;
    userName.innerText = `${users[0].firstName} ${users[0].lastName}`;
    userLocation.innerText = '33764';
  }
}

// shows collection of favorites and response if empty
function loadFavorites() {
  if (favorites.length === 0 && token.length != 0) {
    favoritesDisplay.innerHTML = `
    <div class='favorites-empty'>
      <h3>Oh no...</h3>
      <h1>Your favorites list is empty.</h1>
      <h3>If you'd like to make a list,<br>please return to the main page<br>via closing your dashboard and<br>choosing which savings you'd like.</h3>
      <span>
        <i class="fa fa-frown-o" aria-hidden="true"></i>
      </span>
    </div>
    `;
    dashboardContentContainer.style.display = 'flex';
    dashboardContentContainer.style.flexDirection = 'column';
    favoritesDisplay.style.margin = 'auto';
    favoritesDisplay.style.display = 'flex';
    favoritesDisplay.style.flexDirection = 'column';
  } else {
    pagination(1, favorites, favoritesDisplay);
    favoritesDisplay.style.margin = '0';
    favoritesDisplay.style.display = 'flex';
    favoritesDisplay.style.flexDirection = 'row';
    favoritesDisplay.style.flexWrap = 'wrap';
    favoritesDisplay.style.justifyContent = 'flex-start';
    favoritesDisplay.style.alignItems = 'flex-start';
  }
  // favoritesLinkCounter.innerHTML = favorites.length;
}

// loads dashboard when opened
function loadDashboard() {
  if (token.length === 0) {
    favorites = [];
    loadUser();
    loadFavorites();
    dashboardContentContainer.style.display = 'flex';
    dashboardContentContainer.style.flexDirection = 'column';
    favoritesDisplay.style.margin = 'auto';
    favoritesDisplay.innerHTML = `
    <div class='unregistered-user'>
      <h1>Unregistered User</h1>
      <h3>It doesn't seem like you have registered with us. Head over to the register page from the button above, or our YSO link below, and sign up to start saving.</h3>
      <div class="unregistered-yso-link">
        <a href="registerUser.html" class="yso-link">
          Y<span class="grey-text">our</span>S<span class="grey-text">ocial</span>O<span class="grey-text">ffers</span><span class="red-background">.com</span>
        </a>
      </div>
      <span>
      <i class="fa fa-frown-o" aria-hidden="true"></i>
      </span>
    </div>
  `;
  } else {
    favorites = favorites;
    updateLocalStorageFavorites();
    loadUser();
    loadFavorites();
  }
}

// EVENT LISTENERS
// user icon that opens and closes the dashboard
openHiddenDashboard.addEventListener('click', () => {
  loadDashboard();
  windowOverlay.style.webkitTransition = 'opacity 250ms ease-out';
  windowOverlay.style.transition = 'opacity 250ms ease-out';
  windowOverlay.classList.add('window-overlay-dim');
  hiddenDashboard.style.top = '0';
  hiddenDashboard.style.webkitTransition = 'opacity 350ms ease-out';
  hiddenDashboard.style.transition = 'opacity 350ms ease-out';
  hiddenDashboard.style.opacity = '1';
  hiddenDashboard.style.zIndex = '2'

});
closeHiddenDashboard.addEventListener('click', () => {
  loadDashboard();
  windowOverlay.style.webkitTransition = 'opacity 250ms ease-in, z-index 450ms ease-in';
  windowOverlay.style.transition = 'opacity 250ms ease-in, z-index 450ms ease-in';
  windowOverlay.classList.remove('window-overlay-dim');
  hiddenDashboard.style.webkitTransition = 'opacity 250ms ease-in';
  hiddenDashboard.style.transition = 'opacity 250ms ease-in';
  hiddenDashboard.style.opacity = '0';
  hiddenDashboard.style.zIndex = '-1';
  // cheks url end point and only loads the main page when the dashboard is closed
  if(urlEndPoint === 'index.html' || urlEndPoint === 'index.html#top' || urlGitHubEndPoint === 'o/' || urlGitHubEndPoint === 'o/index.html#top' || urlGitHubEndPoint === 'o/index.html?#top' || urlGitHubEndPoint === 'o/#top' || urlGitHubEndPoint === '0/'){
    loadMainPage();
  }
});

// elipses menu toggle action at 700px or less
elipsesMenu.addEventListener('click', () => {
  document.body.classList.toggle('open-menu');
  elipsesMenu.classList.toggle('rotate-menu-toggle-dots');
  if (elipsesMenu.className === 'rotate-menu-toggle-dots') {
    dotOne.style.background = '#E6331F';
    dotOne.style.boxShadow = '0 -2px 2px #000';
    dotTwo.style.background = '#E6331F';
    dotTwo.style.boxShadow = '0 -2px 2px #000';
    dotThree.style.background = '#E6331F';
    dotThree.style.boxShadow = '0 -2px 2px #000';
  } else {
    dotOne.style.background = '#fff';
    dotOne.style.boxShadow = '0 2px 2px #000';
    dotTwo.style.background = '#fff';
    dotTwo.style.boxShadow = '0 2px 2px #000';
    dotThree.style.background = '#fff';
    dotThree.style.boxShadow = '0 2px 2px #000';
  }
});

// favorites control
// showAllFavorites.addEventListener('click', () => {
//   pagination(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
//   paginationView(favoritesDisplay);
//   // favoritesPageCountHeading.style.display = 'none';
// });
// showLessFavorites.addEventListener('click', () => {
//   favoritesCurrentPage = 1;
//   defaultCardBuilder(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
//   defaultView(favoritesDisplay);
//   // favoritesPageCountHeading.style.display = 'inline';
// });
// favoritesPreviousButton.addEventListener('click', () => {
//   favoritesPrevPage(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, favorites, favoritesDisplay);
// });
// favoritesNextButton.addEventListener('click', () => {
//   favoritesNextPage(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, favorites, favoritesDisplay);
// });
