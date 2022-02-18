// HOME v3.0
// This file handles the index.html card layout and pagination actions by function calls from card-builder.js and population from data.js.

// containers
const cardDisplay = document.getElementById('card-display');
const techCardDisplay = document.getElementById('tech-card-display');
const popularCardDisplay = document.getElementById('popular-card-display');
const featuredCardDisplay = document.getElementById('featured-card-display');
const cardDisplayHeading = document.getElementById('card-display-heading');

// selection buttons
const all = document.getElementById('all');
const auto = document.getElementById('auto');
const fashion = document.getElementById('fashion');
const food = document.getElementById('food');
const fun = document.getElementById('fun');
const health = document.getElementById('health');

// selection page buttons
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const showAllFilter = document.getElementById('show-all-filter');
const showLessFilter = document.getElementById('show-less-filter');
const filterPageCount = document.getElementById("filter-page-count");

// tech page buttons
const techNextButton = document.getElementById("tech-next-button");
const techPreviousButton = document.getElementById("tech-previous-button");
const showAllTech = document.getElementById('show-all-tech');
const showLessTech = document.getElementById('show-less-tech');
const techPageCount = document.getElementById('tech-page-count');

// popular page buttons
const popularNextButton = document.getElementById("popular-next-button");
const popularPreviousButton = document.getElementById("popular-previous-button");
const showAllPopular = document.getElementById('show-all-popular');
const showLessPopular = document.getElementById('show-less-popular');
const popularPageCount = document.getElementById('popular-page-count');

// featured page buttons
const featuredNextButton = document.getElementById("featured-next-button");
const featuredPreviousButton = document.getElementById("featured-previous-button");
const showAllFeatured = document.getElementById('show-all-featured');
const showLessFeatured = document.getElementById('show-less-featured');
const featuredPageCount = document.getElementById('featured-page-count');

// CATEGORY SHOW ALL BUTTON CLICKS
function showAll() {
  // currentPage = 1;
  if (cardDisplayHeading.innerText === 'Food') {
    pagination(previousButton, nextButton, filterPageCount, 1, foodData, cardDisplay);
    paginationView(cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Fashion') {
    pagination(previousButton, nextButton, filterPageCount, 1, fashionData, cardDisplay);
    paginationView(cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Auto') {
    pagination(previousButton, nextButton, filterPageCount, 1, autoData, cardDisplay);
    paginationView(cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Fun') {
    pagination(previousButton, nextButton, filterPageCount, 1, funData, cardDisplay);
    paginationView(cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Health') {
    pagination(previousButton, nextButton, filterPageCount, 1, healthData, cardDisplay);
    paginationView(cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'All') {
    pagination(previousButton, nextButton, filterPageCount, 1, allArrays, cardDisplay);
    paginationView(cardDisplay);
  }
}

// CATEGORY SHOW LESS BUTTON CLICKS
function showLess() {
  currentPage = 1;
  if (cardDisplayHeading.innerText === 'Food') {
    defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, foodData, cardDisplay);
    defaultView(cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Fashion') {
    defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, fashionData, cardDisplay);
    defaultView(cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Auto') {
    defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, autoData, cardDisplay);
    defaultView(cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Fun') {
    defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, funData, cardDisplay);
    defaultView(cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Health') {
    defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, healthData, cardDisplay);
    defaultView(cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'All') {
    defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, allArrays, cardDisplay);
    defaultView(cardDisplay);
  }
}

// CATEGORY PREVIOUS BUTTON CLICKS
function clickPrevious() {
  if (cardDisplayHeading.innerText === 'Food') {
    prevPage(previousButton, nextButton, filterPageCount, foodData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Fashion') {
    prevPage(previousButton, nextButton, filterPageCount, fashionData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Auto') {
    prevPage(previousButton, nextButton, filterPageCount, autoData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Fun') {
    prevPage(previousButton, nextButton, filterPageCount, funData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Health') {
    prevPage(previousButton, nextButton, filterPageCount, healthData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'All') {
    prevPage(previousButton, nextButton, filterPageCount, allArrays, cardDisplay);
  }
}

// CATEGORY NEXT BUTTON CLICKS
function clickNext() {
  if (cardDisplayHeading.innerText === 'Food') {
    nextPage(previousButton, nextButton, filterPageCount, foodData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Fashion') {
    nextPage(previousButton, nextButton, filterPageCount, fashionData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Auto') {
    nextPage(previousButton, nextButton, filterPageCount, autoData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Fun') {
    nextPage(previousButton, nextButton, filterPageCount, funData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Health') {
    nextPage(previousButton, nextButton, filterPageCount, healthData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'All') {
    nextPage(previousButton, nextButton, filterPageCount, allArrays, cardDisplay);
  }
}

// INITIAL PAGE LOAD
function loadMainPage() {
  countPerPage = 3;
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, foodData, cardDisplay);
  defaultCardBuilder(techPreviousButton, techNextButton, techPageCount, 1, techData, techCardDisplay);
  defaultCardBuilder(popularPreviousButton, popularNextButton, popularPageCount, 1, popularData, popularCardDisplay);
  defaultCardBuilder(featuredPreviousButton, featuredNextButton, featuredPageCount, 1, featuredData, featuredCardDisplay);
  checkContainerDisplayType();
}

// EVENT LISTENERS
window.addEventListener('load', loadMainPage);

// actions when categories are chosen
food.addEventListener('click', () => {
  currentPage = 1;
  cardDisplayHeading.innerText = 'Food';
  showAllFilter.href = 'food.html';
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, foodData, cardDisplay);
  defaultView(cardDisplay);
});
fashion.addEventListener('click', () => {
  currentPage = 1;
  cardDisplayHeading.innerText = 'Fashion';
  showAllFilter.href = 'pageTemplate.html';
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, fashionData, cardDisplay);
  defaultView(cardDisplay);
});
auto.addEventListener('click', () => {
  currentPage = 1;
  cardDisplayHeading.innerText = 'Auto';
  showAllFilter.href = 'pageTemplate.html';
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, autoData, cardDisplay);
  defaultView(cardDisplay);
});
fun.addEventListener('click', () => {
  currentPage = 1;
  cardDisplayHeading.innerText = 'Fun';
  showAllFilter.href = 'pageTemplate.html';
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, funData, cardDisplay);
  defaultView(cardDisplay);
});
health.addEventListener('click', () => {
  currentPage = 1;
  cardDisplayHeading.innerText = 'Health';
  showAllFilter.href = 'pageTemplate.html';
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, healthData, cardDisplay);
  defaultView(cardDisplay);
});
all.addEventListener('click', () => {
  currentPage = 1;
  cardDisplayHeading.innerText = 'All';
  showAllFilter.href = 'pageTemplate.html';
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, allArrays, cardDisplay);
  defaultView(cardDisplay);
});

// container category arrows
previousButton.addEventListener('click', clickPrevious);
nextButton.addEventListener('click', clickNext);

featuredPreviousButton.addEventListener('click', () => {
  featuredPrevPage(featuredPreviousButton, featuredNextButton, featuredPageCount, featuredData, featuredCardDisplay);
});
featuredNextButton.addEventListener('click', () => {
  featuredNextPage(featuredPreviousButton, featuredNextButton, featuredPageCount, featuredData, featuredCardDisplay);
});

techPreviousButton.addEventListener('click', () => {
  techPrevPage(techPreviousButton, techNextButton, techPageCount, techData, techCardDisplay);
});
techNextButton.addEventListener('click', () => {
  techNextPage(techPreviousButton, techNextButton, techPageCount, techData, techCardDisplay);
});

popularPreviousButton.addEventListener('click', () => {
  popularPrevPage(popularPreviousButton, popularNextButton, popularPageCount, popularData, popularCardDisplay);
});
popularNextButton.addEventListener('click', () => {
  popularNextPage(popularPreviousButton, popularNextButton, popularPageCount, popularData, popularCardDisplay);
});
