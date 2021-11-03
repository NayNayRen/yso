// Home v3.0
// This file pulls from local storage the cards favorited from the home page
// Also displays a message if there is no favorites data
// Uses data to populate containers
// Gives the user a choice of what to see if all content is too much

// fake user created
const user = {
  firstName: 'Janet',
  lastName: 'Jackson',
  location: 33764,
  gender: 'Female'
};

// logged in user info
const userImage = document.getElementById('profile-image');
const userName = document.getElementById('profile-name');
const userLocation = document.getElementById('profile-location');

// selection tabs
const tabsContainer = document.querySelector('#tabs ul');
const favoritesTab = document.getElementById('favorites-tab');
const friendsTab = document.getElementById('friends-tab');
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

// shows collection of favorites and response if empty
function loadFavorites() {
  if (favorites.length === 0) {
    favoritesAddedName.innerText = 'Favorites is empty.';
    favoritesDisplay.innerHTML = `
    <div class='favorites-empty'>
      <h3>Oh no...</h3>
      <h1>Your favorites list is empty.</h1>
      <h3>If you'd like to make a list,<br>please return to the main page <br> via closing your dashboard and<br>choosing which savings you'd like.</h3>
      <span>
        <i class="fa fa-frown-o" aria-hidden="true"></i>
      </span>
    </div>
    `;
    favoritesDisplay.style.display = 'flex';
    favoritesDisplay.style.flexDirection = 'column';
    favoritesControls.style.display = 'none';
    friendsSelection.classList.add('targeted');
  } else {
    defaultCardBuilder(favoritesPreviousButton, favoritesNextButton, favoritesPageCount, 1, favorites, favoritesDisplay);
    defaultView(favoritesDisplay);
    favoritesControls.style.display = 'flex';
    favoritesPageCountHeading.style.display = 'inline';
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
    defaultView(friendsDisplay);
    friendsPageCountHeading.style.display = 'inline';
    friendsSelection.classList.add('targeted');
  }
  friendsLinkCounter.innerHTML = friends.length;
}

// creates user profile section when dashboard is opened
function loadUser(){
  if(user.gender === 'Male'){
    userImage.src = 'imgs/male-profile.png';
  }
  if(user.gender === 'Female'){
    userImage.src = 'imgs/female-profile.png';
  }
  userName.innerText = `${user.firstName} ${user.lastName}`;
  userLocation.innerText = user.location;
}

// loads dashboard when opened
function loadDashboard() {
  updateLocalStorage();
  loadUser();
  loadFavorites();
  loadFriends();
  dashboardRightNavHeader.innerHTML = `
  <h2>User Preferences</h2>
  <p>Here is the collection of favorites you've chose, alongside friends you've picked to share with. Here you can see your entire dashboard collection.</p>
  `;
}

// EVENT LISTENERS
// window.addEventListener('load', loadDashboard);

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

// user icon that opens and closes the dashboard
openHiddenDashboard.addEventListener('click', () => {
  loadDashboard();
  hiddenDashboard.style.top = '5px';
  hiddenDashboard.style.opacity = '1';
  hiddenDashboard.style.transition = 'top 650ms ease-out, opacity 450ms ease-out';
  dashboardLink.parentNode.classList.add('active');
  tabsContainer.style.position = 'relative';
  tabsContainer.style.bottom = '0';
  favoritesSelection.classList.add('targeted');
  favoritesSelection.style.borderBottom = 'solid 3px #808080';
  favoritesTab.classList.add('active');
  friendsSelection.classList.add('targeted');
  friendsSelection.style.borderBottom = 'none';
  friendsTab.classList.remove('active');
  favoritesAddedContainer.classList.remove('move-favorites-on');
  if (window.innerWidth <= 700) {
    favoritesSelection.style.borderBottom = 'none';
  }
});
closeHiddenDashboard.addEventListener('click', () => {
  hiddenDashboard.style.top = '-1500px';
  hiddenDashboard.style.opacity = '0';
  hiddenDashboard.style.transition = 'top 650ms ease-in, opacity 450ms ease-in';
  favoritesLink.parentNode.classList.remove('active');
  friendsLink.parentNode.classList.remove('active');
  favoritesAddedContainer.classList.remove('move-favorites-on');
});

// removes the light gray bottom border from favorites container
window.addEventListener('resize', () => {
  if (window.innerWidth <= 700 && favoritesSelection.classList.contains('targeted') && friendsSelection.classList.contains('targeted')) {
    favoritesSelection.style.borderBottom = 'none';
  }
  if (window.innerWidth > 700 && favoritesSelection.classList.contains('targeted') && friendsSelection.classList.contains('targeted')) {
    favoritesSelection.style.borderBottom = 'solid 3px #808080';
  }
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
  friendsSelection.style.borderBottom = 'none';
  friendsTab.classList.remove('active');
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
  dashboardRightNavHeader.innerHTML = `
  <h2>Your Friends</h2>
  <p>Here is the group of friends you've added to connect and share with.</p>
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
});
