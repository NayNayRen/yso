// Home v3.0
// This file pulls from local storage the cards favorited from the home page
// Also displays a message if there is no favorites data
// Uses data to populate containers
// Gives the user a choice of what to see if all content is too much
// HTML is in index.html

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
// const favoritesPageCountHeading = document.getElementById("favorites-page-count-heading");
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
// const friendsPageCountHeading = document.getElementById("friends-page-count-heading");
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
// const registeredPageCountHeading = document.getElementById("registered-page-count-heading");
const registeredControls = document.querySelector('.registered-controls');
const registeredLinkCounter = document.querySelector('.registered-link-counter');
const registeredSelection = document.getElementById('registered-selection');
const registeredLink = document.getElementById('registered-link');

// pulling user created data from localStorage created in register-user.js
const localStorageUsers = JSON.parse(localStorage.getItem('users'));
const users = localStorage.getItem('users') !== null ? localStorageUsers : [];

// gets 'access token' that was created on correct sign in
const localStorageToken = JSON.parse(localStorage.getItem('token'));
const token = localStorage.getItem('token') !== null ? localStorageToken : [];

// shows collection of favorites and response if empty
function loadFavorites() {
  if (favorites.length === 0 && token.length === 0) {
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
    dashboardRightNavHeader.innerHTML = `
    <h2>Unregistered User</h2>
    <p>We can't show you a collection of favorited items since it looks like you haven't registered with us.</p>
    <div class="yso-link-container">
      <a href="registerUser.html" class="yso-link">
        Y<span class="grey-text">our</span>S<span class="grey-text">ocial</span>O<span class="grey-text">ffers</span><span class="red-background">.com</span>
      </a>
    </div>
    `;
  } else if (favorites.length === 0 && token.length != 0) {
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
    dashboardRightNavHeader.innerHTML = `
    <h2>Your Favorites</h2>
    <p>It seems like you haven't chosen any favorites. Head back to our home page and start adding and start saving.</p>
    `;
  } else {
    countPerPage = 3;
    defaultCardBuilder(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
    checkDashboardDisplayType();
    dashboardRightNavHeader.innerHTML = `
    <h2>Your Favorites</h2>
    <p>Here is the collection of favorites you've chosen. If you're not keen on keeping one, just poke the heart to remove it from the group. You'll have to go back to the main page to add it again.</p>
    `;
  }
  favoritesLinkCounter.innerHTML = favorites.length;
}

// shows collection of friends and response if empty
function loadFriends() {
  if (friends.length === 0 && token.length === 0) {
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
    dashboardRightNavHeader.innerHTML = `
    <h2>Unregistered User</h2>
    <p>We can't show you a collection of your friends since it looks like you haven't registered with us.</p>
    <div class="yso-link-container">
      <a href="registerUser.html" class="yso-link">
        Y<span class="grey-text">our</span>S<span class="grey-text">ocial</span>O<span class="grey-text">ffers</span><span class="red-background">.com</span>
      </a>
    </div>
    `;
  } else if (friends.length === 0 && token.length != 0) {
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
    dashboardRightNavHeader.innerHTML = `
    <h2>Your Friends</h2>
    <p>It seems as though you haven't added any friends. Meet, reach out to, and add some friends to start sharing your savings.</p>
    `;
  } else {
    defaultFriendsBuilder(friendsPreviousButton, friendsNextButton, friendsPageCount, 1, friends, friendsDisplay);
    checkDashboardDisplayType();
    friendsSelection.classList.add('targeted');
    dashboardRightNavHeader.innerHTML = `
    <h2>Your Friends</h2>
    <p>Here is the group of friends you've added to connect and share with.</p>
    `;
  }
  friendsLinkCounter.innerHTML = friends.length;
}

// shows collection of registered and response if empty
function loadRegistered() {
  if (registered.length === 0 && token.length === 0) {
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
    dashboardRightNavHeader.innerHTML = `
    <h2>Unregistered User</h2>
    <p>We can't show you a collection of registered items since it looks like you haven't registered with us.</p>
    <div class="yso-link-container">
      <a href="registerUser.html" class="yso-link">
        Y<span class="grey-text">our</span>S<span class="grey-text">ocial</span>O<span class="grey-text">ffers</span><span class="red-background">.com</span>
      </a>
    </div>
    `;
  } else if(registered.length === 0 && token.length != 0){
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
    dashboardRightNavHeader.innerHTML = `
    <h2>Your Registered</h2>
    <p>It seems as though your registered items collection is empty. Find deals associated with YSO and add them for future use.</p>
    `;
  } else {
    defaultCardBuilder(registeredPreviousButton, registeredNextButton, registeredPageCount, 1, registered, registeredDisplay);
    checkDashboardDisplayType();
    loadFavorites();
    registeredSelection.classList.add('targeted');
    dashboardRightNavHeader.innerHTML = `
    <h2>Your Registered</h2>
    <p>Here is a collection of choices you've picked from visiting other social medias.</p>
    `;
  }
  registeredLinkCounter.innerHTML = registered.length;
}

// creates user profile section when dashboard is opened
function loadUser() {
  if (token.length === 0) {
    document.querySelector('.user-initials').innerText = 'N/A';
    userName.innerText = 'Not Registered';
    userLocation.innerText = 'Not Registered';
  } else {
    const userInitials = users[0].firstName.charAt(0).toUpperCase() + users[0].lastName.charAt(0).toUpperCase();
    document.querySelector('.user-initials').innerText = userInitials;
    userName.innerText = `${users[0].firstName} ${users[0].lastName}`;
    userLocation.innerText = '33764';
  }
}

// loads dashboard when opened
function loadDashboard() {
  if (token.length === 0) {
    favorites = [];
    friends = [];
    registered = [];
    loadUser();
    loadFavorites();
    loadFriends();
    loadRegistered();
    dashboardRightNavHeader.innerHTML = `
  <h2>Unregistered User</h2>
  <p>It doesn't seem like you have registered with us. Head over to the register page from the button above, or our YSO link below, and sign up to start saving.</p>
  <div class="yso-link-container add-margin">
    <a href="registerUser.html" class="yso-link">
      Y<span class="grey-text">our</span>S<span class="grey-text">ocial</span>O<span class="grey-text">ffers</span><span class="red-background">.com</span>
    </a>
  </div>
  `;
  } else {
    favorites = favorites;
    friends = friends;
    registered = registered;
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
}

// checks the type of display and keeps it when favorites are chosen from each category
function checkDashboardDisplayType() {
  if (favoritesDisplay.style.display === 'grid') {
    defaultView(favoritesDisplay);
    defaultCardBuilder(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
  } else if (favoritesDisplay.style.display === 'flex') {
    paginationView(favoritesDisplay);
    pagination(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
  }
  if (friendsDisplay.style.display === 'grid') {
    defaultFriendsBuilder(friendsPreviousButton, friendsNextButton, friendsPageCount, 1, friends, friendsDisplay);
    defaultView(friendsDisplay);
  } else if (friendsDisplay.style.display === 'flex') {
    friendsPagination(friendsPreviousButton, friendsNextButton, friendsPageCount, 1, friends, friendsDisplay);
    paginationView(friendsDisplay);
  }
  if (registeredDisplay.style.display === 'grid') {
    defaultCardBuilder(registeredPreviousButton, registeredNextButton, registeredPageCount, 1, registered, registeredDisplay);
    defaultView(registeredDisplay);
  } else if (registeredDisplay.style.display === 'flex') {
    pagination(registeredPreviousButton, registeredNextButton, registeredPageCount, 1, registered, registeredDisplay);
    paginationView(registeredDisplay);
  }
}

// checks window width and adjusts top of dashboard accordingly
function positionDashboardDisplay(){
  if (window.innerWidth > 1300) {
    hiddenDashboard.style.top = '5px';
  }
  if (window.innerWidth < 1300 && window.innerWidth > 1000) {
    hiddenDashboard.style.top = '-50px';
  }
  if (window.innerWidth < 1000 && window.innerWidth > 700) {
    hiddenDashboard.style.top = '-75px';
  }
  if (window.innerWidth < 700 && window.innerWidth > 400) {
    hiddenDashboard.style.top = '-50px';
  }
  if(window.innerWidth < 400){
    hiddenDashboard.style.top = '-25px';
  }
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
  positionDashboardDisplay();
  window.addEventListener('resize', positionDashboardDisplay);
  windowOverlay.style.webkitTransition = 'opacity 550ms ease-out';
  windowOverlay.style.transition = 'opacity 550ms ease-out';
  windowOverlay.classList.add('window-overlay-dim');
  hiddenDashboard.style.webkitTransition = 'opacity 650ms ease-out, top 750ms ease-out';
  hiddenDashboard.style.transition = 'opacity 650ms ease-out, top 750ms ease-out';
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
  favoritesRemovedContainer.style.top = '-175px';
  if (window.innerWidth <= 700) {
    favoritesSelection.style.borderBottom = 'none';
    friendsSelection.style.borderBottom = 'none';
  }
});
closeHiddenDashboard.addEventListener('click', () => {
  window.removeEventListener('resize', positionDashboardDisplay);
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
  favoritesAddedContainer.style.top = '-175px';
  favoritesRemovedContainer.style.top = '-175px';
});

// section displays and header text
// when dashboard link is clicked all displays and adjustments
dashboardLink.addEventListener('click', () => {
  loadDashboard();
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
  if (window.innerWidth <= 700) {
    favoritesSelection.style.borderBottom = 'none';
    friendsSelection.style.borderBottom = 'none';
  }
});

// favorites link is clicked all others go away
favoritesLink.addEventListener('click', () => {
  loadFavorites();
  tabsContainer.style.position = 'relative';
  tabsContainer.style.bottom = '-25px';
  favoritesSelection.classList.add('targeted');
  favoritesSelection.style.borderBottom = 'none';
  friendsSelection.classList.remove('targeted');
  friendsSelection.style.borderBottom = 'none';
  registeredSelection.classList.remove('targeted');
  registeredSelection.style.borderBottom = 'none';
});

// friends link is clicked all others go away
friendsLink.addEventListener('click', () => {
  loadFriends();
  tabsContainer.style.position = 'relative';
  tabsContainer.style.bottom = '-25px';
  favoritesSelection.classList.remove('targeted');
  favoritesSelection.style.borderBottom = 'none';
  friendsSelection.classList.add('targeted');
  friendsSelection.style.borderBottom = 'none';
  registeredSelection.classList.remove('targeted');
  registeredSelection.style.borderBottom = 'none';
});

// registered link is clicked all others go away
registeredLink.addEventListener('click', () => {
  loadRegistered();
  tabsContainer.style.position = 'relative';
  tabsContainer.style.bottom = '-25px';
  favoritesSelection.classList.remove('targeted');
  favoritesSelection.style.borderBottom = 'none';
  friendsSelection.classList.remove('targeted');
  friendsSelection.style.borderBottom = 'none';
  registeredSelection.classList.add('targeted');
  registeredSelection.style.borderBottom = 'none';
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
  // favoritesPageCountHeading.style.display = 'none';
});
showLessFavorites.addEventListener('click', () => {
  favoritesCurrentPage = 1;
  defaultCardBuilder(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
  defaultView(favoritesDisplay);
  // favoritesPageCountHeading.style.display = 'inline';
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
  // friendsPageCountHeading.style.display = 'none';
});
showLessFriends.addEventListener('click', () => {
  friendsCurrentPage = 1;
  defaultFriendsBuilder(friendsPreviousButton, friendsNextButton, friendsPageCount, 1, friends, friendsDisplay);
  defaultView(friendsDisplay);
  // friendsPageCountHeading.style.display = 'inline';
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
  // registeredPageCountHeading.style.display = 'none';
});
showLessRegistered.addEventListener('click', () => {
  registeredCurrentPage = 1;
  defaultCardBuilder(registeredPreviousButton, registeredNextButton, registeredPageCount, 1, registered, registeredDisplay);
  defaultView(registeredDisplay);
  // registeredPageCountHeading.style.display = 'inline';
});
registeredPreviousButton.addEventListener('click', () => {
  registeredPrevPage(registeredPreviousButton, registeredNextButton, registeredPageCount, registered, registeredDisplay);
});
registeredNextButton.addEventListener('click', () => {
  registeredNextPage(registeredPreviousButton, registeredNextButton, registeredPageCount, registered, registeredDisplay);
});

// JSON handles the dashboard tab changing
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
