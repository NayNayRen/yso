// Home v3.0
// This file pulls from local storage the cards favorited from the home page
// Also displays a message if there is no favorites data

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

// dashboard buttons
const openHiddenDashboard = document.getElementById('open-hidden-dashboard');
const closeHiddenDashboard = document.querySelector('.hidden-dashboard span');
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
    document.querySelector('#friends-selection').classList.add('targeted');
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
  updateLocalStorage();
  loadFavorites();
  loadFriends();
  dashboardRightNavHeader.innerHTML = `
  <h2>Your User Preferences</h2>
  <p>Here is the collection of favorites you've chose, alongside friends you've picked to share with. Here you can see your entire dashboard collection.</p>
  `;
}

// EVENT LISTENERS
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

// user icon that opens and closes the dashboard
openHiddenDashboard.addEventListener('click', () => {
  document.querySelector('.hidden-dashboard').style.top = '5px';
  document.querySelector('.hidden-dashboard').style.opacity = '1';
  document.querySelector('#dashboard-link').parentNode.classList.add('active');
  document.querySelector('#tabs ul').style.position = 'relative';
  document.querySelector('#tabs ul').style.bottom = '0';
  document.querySelector('#favorites-selection').classList.add('targeted');
  document.querySelector('#favorites-selection').style.borderBottom = 'solid 3px #333333';
  document.querySelector('#favorites-tab').classList.add('active');
  document.querySelector('#friends-selection').classList.add('targeted');
  document.querySelector('#friends-selection').style.borderBottom = 'none';
  document.querySelector('#friends-tab').classList.remove('active');
  favoritesAddedContainer.classList.remove('move-favorites-on');
});
closeHiddenDashboard.addEventListener('click', () => {
  document.querySelector('.hidden-dashboard').style.top = '-1500px';
  document.querySelector('.hidden-dashboard').style.opacity = '0';
  document.querySelector('#favorites-link').parentNode.classList.remove('active');
  document.querySelector('#friends-link').parentNode.classList.remove('active');
  favoritesAddedContainer.classList.remove('move-favorites-on');
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
  document.querySelector('#friends-selection').style.borderBottom = 'none';
  document.querySelector('#friends-tab').classList.remove('active');
  dashboardRightNavHeader.innerHTML = `
  <h2>Your User Preferences</h2>
  <p>Here is the collection of favorites you've chose, alongside friends you've picked to share with. Here you can see your entire dashboard collection.</p>
  `;
  if (window.innerWidth <= 700) {
    document.querySelector('#favorites-selection').style.borderBottom = 'none';
    document.querySelector('#friends-selection').style.borderBottom = 'none';
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
  dashboardRightNavHeader.innerHTML = `
  <h2>Your Friends</h2>
  <p>Here is the group of friends you've added to connect and share with.</p>
  `;
});

// burger menu toggle action at 700px or less
document.querySelector('#menu-toggle').addEventListener('click', () => {
  document.body.classList.toggle('open-menu');
  document.querySelector('#menu-toggle').classList.toggle('rotate-menu-toggle-dots');
  if (document.querySelector('#menu-toggle').className === 'rotate-menu-toggle-dots') {
    document.querySelector('.dot-1').style.background = '#FF0000';
    document.querySelector('.dot-2').style.background = '#FF0000';
    document.querySelector('.dot-3').style.background = '#FF0000';
  } else {
    document.querySelector('.dot-1').style.background = '#000';
    document.querySelector('.dot-2').style.background = '#000';
    document.querySelector('.dot-3').style.background = '#000';
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
  document.querySelector('#favorites-selection').style.borderBottom = 'none';
  document.querySelector('#friends-selection').style.borderBottom = 'none';
});
