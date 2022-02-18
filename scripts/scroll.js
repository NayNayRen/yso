// HOME v3.0
// This file handles the sticky nav bar at the top, as well as the up arrow that appears at the bottom of each page, and the burger menu that takes over as navigation location when display geta too 700px or less.

// containers that have actions
const header = document.querySelector('.header');
const scrollPoint = document.getElementById('scroll-point');
const burgerMenu = document.querySelector('.burger-menu');
const upArrow = document.getElementById('up-arrow');
const upArrowMessage = document.getElementById('up-arrow-message');

// saves created user to local storage for later use
const localStorageUsers = JSON.parse(localStorage.getItem('users'));
const users = localStorage.getItem('users') !== null ? localStorageUsers : [];

// saves created token to local storage for user cred
const localStorageToken = JSON.parse(localStorage.getItem('token'));
const token = localStorage.getItem('token') !== null ? localStorageToken : [];

// saves favorited to local storage for later use
const localStorageFavorites = JSON.parse(localStorage.getItem('favorites'));
let favorites = localStorage.getItem('favorites') !== null ? localStorageFavorites : [];

// saves selected deal to local storage for later use
const localStorageDeal = JSON.parse(localStorage.getItem('deal'));
const deal = localStorage.getItem('deal') !== null ? localStorageDeal : [];

// checks the url for what page loads, used to check user creds
const urlEndPoint = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
const urlGitHubEndPoint = window.location.href.substring(window.location.href.lastIndexOf('/') - 1);

//check if a user is registered and signed in, looks at url endpoints to no display log in icons
function checkCredentials() {
  if (window.innerWidth > 700 && urlEndPoint === 'signIn.html' || window.innerWidth > 700 && urlEndPoint === 'signIn.html#top' || window.innerWidth > 700 && urlEndPoint === 'registerUser.html' || window.innerWidth > 700 && urlEndPoint === 'registerUser.html#top' || window.innerWidth > 700 && urlEndPoint === 'selectedDeal.html' || window.innerWidth > 700 && urlEndPoint === 'selectedDeal.html#top' || window.innerWidth > 700 && urlEndPoint === 'rewards.html' || window.innerWidth > 700 && urlEndPoint === 'rewards.html#top' || window.innerWidth > 700 && urlEndPoint === 'enhance.html' || window.innerWidth > 700 && urlEndPoint === 'enhance.html#top' || window.innerWidth > 700 && urlEndPoint === 'enhance.html#gains' || window.innerWidth > 700 && urlEndPoint === 'enhance.html#values' || window.innerWidth > 700 && urlEndPoint === 'enhance.html#loyalties' || window.innerWidth > 700 && urlEndPoint === 'enhance.html#campaigns' || window.innerWidth > 700 && urlEndPoint === 'support.html' || window.innerWidth > 700 && urlEndPoint === 'support.html#top' || window.innerWidth > 700 && urlEndPoint === 'about.html' || window.innerWidth > 700 && urlEndPoint === 'about.html#top') {
    return;
  } else if (token.length === 0 || users.length === 0) {
    document.querySelector('.users-initials-container').style.display = 'none';
    document.querySelector('.register-button-container').style.display = 'flex';
  } else {
    let userInitials = users[0].firstName.charAt(0).toUpperCase() + users[0].lastName.charAt(0).toUpperCase();
    document.querySelector('.users-initials-container').style.display = 'flex';
    document.querySelector('.users-initials').innerText = userInitials;
    document.querySelector('.register-button-container').style.display = 'none';
  }
}

// sticky settings for makeItStick
function makeItStickSettings() {
  header.style.position = 'fixed';
  header.style.width = '100%';
  header.style.top = '0';
  header.style.zIndex = '10';
}

// function to add sticky settings on the header/navigation when scrolled 0px from the top of page
function makeItStick() {
  if (document.documentElement.scrollTop > 0) {
    makeItStickSettings();
    scrollPoint.style.paddingTop = '100px';
    upArrow.style.left = '5px';
  } else {
    header.style.position = 'relative';
    scrollPoint.style.paddingTop = '0px';
    upArrow.style.left = '-40px';
  }
}

// event listeners
// sticks navigation to the top of the page
window.addEventListener('load', () => {
  makeItStick();
  checkCredentials();
});
window.addEventListener('scroll', () => {
  makeItStick();
});

// toggles the links menu left and right when clicked
burgerMenu.addEventListener('click', () => {
  checkCredentials();
  document.querySelector('#burger-overlay').classList.toggle('burger-overlay-dim');
  document.querySelector('.links-register-container').classList.toggle('move-links-on');
  document.querySelector('#burger-bars-1').classList.toggle('burger-bars-rotate-clockwise');
  document.querySelector('#burger-bars-2').classList.toggle('burger-bars-remove');
  document.querySelector('#burger-bars-3').classList.toggle('burger-bars-rotate-counter-clockwise');
  // document.querySelector('#burger-bars-4').classList.toggle('burger-bars-remove');
});

// added hover effect to up arrow
upArrow.addEventListener('mouseover', () => {
  upArrowMessage.style.opacity = '1';
  upArrowMessage.style.left = '0';
});
upArrow.addEventListener('mouseout', () => {
  upArrowMessage.style.opacity = '0';
  upArrowMessage.style.left = '-80px';
});
