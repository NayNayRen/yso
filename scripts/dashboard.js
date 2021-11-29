// Home v3.0
// This file pulls from local storage the cards favorited from the home page
// Also displays a message if there is no favorites data
// Uses data to populate containers
// Gives the user a choice of what to see if all content is too much
// HTML is in index.html

// fake user created
const user = {
  firstName: 'phil',
  lastName: 'esposito',
  location: 33764,
  gender: 'Male'
};
const userInitials = user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase();

// logged in user info
const userImage = document.getElementById('profile-image');
const userName = document.getElementById('profile-name');
const userLocation = document.getElementById('profile-location');

// selection tabs
const tabsContainer = document.querySelector('#tabs ul');
const favoritesTab = document.getElementById('favorites-tab');
const friendsTab = document.getElementById('friends-tab');
const registeredTab = document.getElementById('registered-tab');
const elipsesMenu = document.getElementById('menu-toggle');

// elipses dots
const dotOne = document.querySelector('.dot-1');
const dotTwo = document.querySelector('.dot-2');
const dotThree = document.querySelector('.dot-3');

// dashboard buttons
const openHiddenDashboard = document.getElementById('open-hidden-dashboard');
const closeHiddenDashboard = document.querySelector('.hidden-dashboard span');
const hiddenDashboard = document.querySelector('.hidden-dashboard');
const dashboardLink = document.getElementById('dashboard-link');
const dashboardRightNavHeader = document.getElementById('dashboard-right-nav-container-header');
const windowOverlay = document.getElementById('window-overlay');

// favorites page buttons and containers
const favoritesDisplay = document.getElementById('favorites-display');
const favoritesNextButton = document.getElementById("favorites-next-button");
const favoritesPreviousButton = document.getElementById("favorites-previous-button");
const showAllFavorites = document.getElementById('show-all-favorites');
const showLessFavorites = document.getElementById('show-less-favorites');
const favoritesPageCount = document.getElementById('favorites-page-count');
const favoritesPageCountHeading = document.getElementById("favorites-page-count-heading");
const favoritesControls = document.querySelector('.favorites-controls');
const favoritesLinkCounter = document.querySelector('.favorites-link-counter');
const favoritesSelection = document.getElementById('favorites-selection');
const favoritesLink = document.getElementById('favorites-link');

// friends page buttons
const friendsDisplay = document.getElementById('friends-display');
const friendsNextButton = document.getElementById("friends-next-button");
const friendsPreviousButton = document.getElementById("friends-previous-button");
const showAllFriends = document.getElementById('show-all-friends');
const showLessFriends = document.getElementById('show-less-friends');
const friendsPageCount = document.getElementById('friends-page-count');
const friendsPageCountHeading = document.getElementById("friends-page-count-heading");
const friendsControls = document.querySelector('.friends-controls');
const friendsLinkCounter = document.querySelector('.friends-link-counter');
const friendsSelection = document.getElementById('friends-selection');
const friendsLink = document.getElementById('friends-link');

// registered page buttons
const registeredDisplay = document.getElementById('registered-display');
const registeredNextButton = document.getElementById("registered-next-button");
const registeredPreviousButton = document.getElementById("registered-previous-button");
const showAllRegistered = document.getElementById('show-all-registered');
const showLessRegistered = document.getElementById('show-less-registered');
const registeredPageCount = document.getElementById('registered-page-count');
const registeredPageCountHeading = document.getElementById("registered-page-count-heading");
const registeredControls = document.querySelector('.registered-controls');
const registeredLinkCounter = document.querySelector('.registered-link-counter');
const registeredSelection = document.getElementById('registered-selection');
const registeredLink = document.getElementById('registered-link');

// shows collection of favorites and response if empty
function loadFavorites() {
  if (favorites.length === 0) {
    favoritesAddedName.innerText = 'Favorites is empty.';
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
    favoritesDisplay.style.display = 'flex';
    favoritesDisplay.style.flexDirection = 'column';
    favoritesControls.style.display = 'none';
    friendsSelection.classList.add('targeted');
  }
  else {
    defaultCardBuilder(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
    checkDashboardDisplayType();
    // defaultView(favoritesDisplay);
    // favoritesControls.style.display = 'flex';
    // favoritesPageCountHeading.style.display = 'inline';
  }
  favoritesLinkCounter.innerHTML = favorites.length;
}

// shows collection of friends and response if empty
function loadFriends() {
  if (friends.length === 0) {
    friendsDisplay.innerHTML = `
    <div class='favorites-empty'>
      <h3>Oh no...</h3>
      <h1>Your friends list is empty.</h1>
      <h3>Find friends you know, or make new ones.<br>Connect, add, and share<br>your social offers!</h3>
      <span>
        <i class="fa fa-frown-o" aria-hidden="true"></i>
      </span>
    </div>
    `;
    friendsDisplay.style.display = 'flex';
    friendsDisplay.style.flexDirection = 'column';
    friendsControls.style.display = 'none';
    friendsSelection.classList.add('targeted');
  } else {
    defaultFriendsBuilder(friendsPreviousButton, friendsNextButton, friendsPageCount, 1, friends, friendsDisplay);
    checkDashboardDisplayType();
    // defaultView(friendsDisplay);
    // friendsPageCountHeading.style.display = 'inline';
    friendsSelection.classList.add('targeted');
  }
  friendsLinkCounter.innerHTML = friends.length;
}

// shows collection of registered and response if empty
function loadRegistered() {
  if (registered.length === 0) {
    registeredDisplay.innerHTML = `
    <div class='favorites-empty'>
      <h3>Oh no...</h3>
      <h1>Your registered list is empty.</h1>
      <h3>Find redemptions on social media platforms,<br>add them to your registered content,<br>and start saving!</h3>
      <span>
        <i class="fa fa-frown-o" aria-hidden="true"></i>
      </span>
    </div>
    `;
    registeredDisplay.style.display = 'flex';
    registeredDisplay.style.flexDirection = 'column';
    registeredControls.style.display = 'none';
    registeredSelection.classList.add('targeted');
  } else {
    defaultCardBuilder(registeredPreviousButton, registeredNextButton, registeredPageCount, 1, registered, registeredDisplay);
    checkDashboardDisplayType();
    // defaultView(registeredDisplay);
    // registeredPageCountHeading.style.display = 'inline';
    registeredSelection.classList.add('targeted');
    loadFavorites();
  }
  registeredLinkCounter.innerHTML = registered.length;
}

// creates user profile section when dashboard is opened
function loadUser() {
  document.querySelector('.user-initials').innerText = userInitials;
  userName.innerText = `${user.firstName} ${user.lastName}`;
  userLocation.innerText = user.location;
}

function checkDashboardDisplayType(){
  if(favoritesDisplay.style.display === 'grid'){
    defaultView(favoritesDisplay);
    defaultCardBuilder(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
  }
  else if(favoritesDisplay.style.display === 'flex'){
    paginationView(favoritesDisplay);
    pagination(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
  }
  if(friendsDisplay.style.display === 'grid'){
    defaultFriendsBuilder(friendsPreviousButton, friendsNextButton, friendsPageCount, 1, friends, friendsDisplay);
    defaultView(friendsDisplay);
  }
  else if(friendsDisplay.style.display === 'flex'){
    friendsPagination(friendsPreviousButton, friendsNextButton, friendsPageCount, 1, friends, friendsDisplay);
    paginationView(friendsDisplay);
  }
  if(registeredDisplay.style.display === 'grid'){
    defaultCardBuilder(registeredPreviousButton, registeredNextButton, registeredPageCount, 1, registered, registeredDisplay);
    defaultView(registeredDisplay);
  }
  else if(registeredDisplay.style.display === 'flex'){
    pagination(registeredPreviousButton, registeredNextButton, registeredPageCount, 1, registered, registeredDisplay);
    paginationView(registeredDisplay);
  }
}

// loads dashboard when opened
function loadDashboard() {
  updateLocalStorageFavorites();
  loadUser();
  loadFavorites();
  loadFriends();
  loadRegistered();
  dashboardRightNavHeader.innerHTML = `
  <h2>User Preferences</h2>
  <p>Here is the collection of favorites you've chose, alongside friends you've picked to share with. Here you can see your entire dashboard collection.</p>
  `;
}

// removes the light gray bottom border from favorites container
window.addEventListener('resize', () => {
  if (window.innerWidth <= 700 && favoritesSelection.classList.contains('targeted') && friendsSelection.classList.contains('targeted') && registeredSelection.classList.contains('targeted')) {
    favoritesSelection.style.borderBottom = 'none';
    friendsSelection.style.borderBottom = 'none';
  }
  if (window.innerWidth > 700 && favoritesSelection.classList.contains('targeted') && friendsSelection.classList.contains('targeted') && registeredSelection.classList.contains('targeted')) {
    favoritesSelection.style.borderBottom = 'solid 3px #808080';
    friendsSelection.style.borderBottom = 'solid 3px #808080';
  }
});

// EVENT LISTENERS
// user icon that opens and closes the dashboard
openHiddenDashboard.addEventListener('click', () => {
  loadDashboard();
  windowOverlay.style.webkitTransition = 'opacity 550ms ease-out';
  windowOverlay.style.transition = 'opacity 550ms ease-out';
  windowOverlay.classList.add('window-overlay-dim');
  hiddenDashboard.style.webkitTransition = 'opacity 650ms ease-out, top 750ms ease-out';
  hiddenDashboard.style.transition = 'opacity 650ms ease-out, top 750ms ease-out';
  hiddenDashboard.style.top = '5px';
  hiddenDashboard.style.opacity = '1';
  dashboardLink.parentNode.classList.add('active');
  tabsContainer.style.position = 'relative';
  tabsContainer.style.bottom = '0';
  favoritesSelection.classList.add('targeted');
  favoritesSelection.style.borderBottom = 'solid 3px #808080';
  favoritesTab.classList.add('active');
  friendsSelection.classList.add('targeted');
  friendsSelection.style.borderBottom = 'solid 3px #808080';
  friendsTab.classList.remove('active');
  registeredSelection.classList.add('targeted');
  registeredSelection.style.borderBottom = 'none';
  registeredTab.classList.remove('active');
  favoritesAddedContainer.style.top = '-175px';
  favoritesAddedContainer.style.opacity = '0';
  if (window.innerWidth <= 700) {
    favoritesSelection.style.borderBottom = 'none';
    friendsSelection.style.borderBottom = 'none';
  }
});
closeHiddenDashboard.addEventListener('click', () => {
  windowOverlay.style.webkitTransition = 'opacity 250ms ease-in, z-index 650ms ease-in';
  windowOverlay.style.transition = 'opacity 250ms ease-in, z-index 650ms ease-in';
  windowOverlay.classList.remove('window-overlay-dim');
  hiddenDashboard.style.webkitTransition = 'opacity 750ms ease-in, top 650ms ease-in';
  hiddenDashboard.style.transition = 'opacity 750ms ease-in, top 650ms ease-in';
  hiddenDashboard.style.top = '-2100px';
  hiddenDashboard.style.opacity = '0';
  favoritesLink.parentNode.classList.remove('active');
  friendsLink.parentNode.classList.remove('active');
  registeredLink.parentNode.classList.remove('active');
  favoritesAddedContainer.style.top = '-150px';
  favoritesAddedContainer.style.opacity = '0';
});

// section displays and header text
// when dashboard link is clicked all displays and adjustments
dashboardLink.addEventListener('click', () => {
  tabsContainer.style.position = 'relative';
  tabsContainer.style.bottom = '0';
  favoritesSelection.classList.add('targeted');
  favoritesSelection.style.borderBottom = 'solid 3px #808080';
  favoritesTab.classList.add('active');
  friendsSelection.classList.add('targeted');
  friendsSelection.style.borderBottom = 'solid 3px #808080';
  friendsTab.classList.remove('active');
  registeredSelection.classList.add('targeted');
  registeredSelection.style.borderBottom = 'none';
  registeredTab.classList.remove('active');
  dashboardRightNavHeader.innerHTML = `
  <h2>User Preferences</h2>
  <p>Here is the collection of favorites you've chose, alongside friends you've picked to share with. Here you can see your entire dashboard collection.</p>
  `;
  if (window.innerWidth <= 700) {
    favoritesSelection.style.borderBottom = 'none';
    friendsSelection.style.borderBottom = 'none';
  }
});

// favorites link is clicked all others go away
favoritesLink.addEventListener('click', () => {
  tabsContainer.style.position = 'relative';
  tabsContainer.style.bottom = '-25px';
  favoritesSelection.classList.add('targeted');
  favoritesSelection.style.borderBottom = 'none';
  friendsSelection.classList.remove('targeted');
  friendsSelection.style.borderBottom = 'none';
  registeredSelection.classList.remove('targeted');
  registeredSelection.style.borderBottom = 'none';
  dashboardRightNavHeader.innerHTML = `
  <h2>Your Favorites</h2>
  <p>Here is the collection of favorites you've chosen. If you're not keen on keeping one, just poke the heart to remove it from the group. You'll have to go back to the main page to add it again.</p>
  `;
});

// friends link is clicked all others go away
friendsLink.addEventListener('click', () => {
  tabsContainer.style.position = 'relative';
  tabsContainer.style.bottom = '-25px';
  favoritesSelection.classList.remove('targeted');
  favoritesSelection.style.borderBottom = 'none';
  friendsSelection.classList.add('targeted');
  friendsSelection.style.borderBottom = 'none';
  registeredSelection.classList.remove('targeted');
  registeredSelection.style.borderBottom = 'none';
  dashboardRightNavHeader.innerHTML = `
  <h2>Your Friends</h2>
  <p>Here is the group of friends you've added to connect and share with.</p>
  `;
});

// registered link is clicked all others go away
registeredLink.addEventListener('click', () => {
  tabsContainer.style.position = 'relative';
  tabsContainer.style.bottom = '-25px';
  favoritesSelection.classList.remove('targeted');
  favoritesSelection.style.borderBottom = 'none';
  friendsSelection.classList.remove('targeted');
  friendsSelection.style.borderBottom = 'none';
  registeredSelection.classList.add('targeted');
  registeredSelection.style.borderBottom = 'none';
  dashboardRightNavHeader.innerHTML = `
  <h2>Your Registered</h2>
  <p>Here is a collection of choices you've picked from visiting other social medias.</p>
  `;
});

// elipses menu toggle action at 700px or less
elipsesMenu.addEventListener('click', () => {
  document.body.classList.toggle('open-menu');
  elipsesMenu.classList.toggle('rotate-menu-toggle-dots');
  if (elipsesMenu.className === 'rotate-menu-toggle-dots') {
    dotOne.style.background = '#FF0000';
    dotOne.style.boxShadow = '0 -2px 2px #000';
    dotTwo.style.background = '#FF0000';
    dotTwo.style.boxShadow = '0 -2px 2px #000';
    dotThree.style.background = '#FF0000';
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
showAllFavorites.addEventListener('click', () => {
  pagination(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
  paginationView(favoritesDisplay);
  favoritesPageCountHeading.style.display = 'none';
});
showLessFavorites.addEventListener('click', () => {
  favoritesCurrentPage = 1;
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
  friendsPagination(friendsPreviousButton, friendsNextButton, friendsPageCount, 1, friends, friendsDisplay);
  paginationView(friendsDisplay);
  friendsPageCountHeading.style.display = 'none';
});
showLessFriends.addEventListener('click', () => {
  friendsCurrentPage = 1;
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
// registered controls
showAllRegistered.addEventListener('click', () => {
  pagination(registeredPreviousButton, registeredNextButton, registeredPageCount, 1, registered, registeredDisplay);
  paginationView(registeredDisplay);
  registeredPageCountHeading.style.display = 'none';
});
showLessRegistered.addEventListener('click', () => {
  registeredCurrentPage = 1;
  defaultCardBuilder(registeredPreviousButton, registeredNextButton, registeredPageCount, 1, registered, registeredDisplay);
  defaultView(registeredDisplay);
  registeredPageCountHeading.style.display = 'inline';
});
registeredPreviousButton.addEventListener('click', () => {
  registeredPrevPage(registeredPreviousButton, registeredNextButton, registeredPageCount, registered, registeredDisplay);
});
registeredNextButton.addEventListener('click', () => {
  registeredNextPage(registeredPreviousButton, registeredNextButton, registeredPageCount, registered, registeredDisplay);
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
  favoritesSelection.style.borderBottom = 'none';
  friendsSelection.style.borderBottom = 'none';
  registeredSelection.style.borderBottom = 'none';
});
