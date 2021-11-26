// HOME v3.0
// This file handles the index.html card layout and pagination actions by function calls from card-builder.js and population from data.js.

// containers
const cardDisplay = document.getElementById('card-display');
const techCardDisplay = document.getElementById('tech-card-display');
const popularCardDisplay = document.getElementById('popular-card-display');
const featuredCardDisplay = document.getElementById('featured-card-display');
const cardDisplayHeading = document.getElementById('card-display-heading');
const bannerAd = document.getElementById('ad');
const adLink = document.getElementById('ad-link');

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
const filterPageCountHeading = document.getElementById("filter-page-count-heading");

// tech page buttons
const techNextButton = document.getElementById("tech-next-button");
const techPreviousButton = document.getElementById("tech-previous-button");
const showAllTech = document.getElementById('show-all-tech');
const showLessTech = document.getElementById('show-less-tech');
const techPageCount = document.getElementById('tech-page-count');
const techPageCountHeading = document.getElementById("tech-page-count-heading");

// popular page buttons
const popularNextButton = document.getElementById("popular-next-button");
const popularPreviousButton = document.getElementById("popular-previous-button");
const showAllPopular = document.getElementById('show-all-popular');
const showLessPopular = document.getElementById('show-less-popular');
const popularPageCount = document.getElementById('popular-page-count');
const popularPageCountHeading = document.getElementById("popular-page-count-heading");

// featured page buttons
const featuredNextButton = document.getElementById("featured-next-button");
const featuredPreviousButton = document.getElementById("featured-previous-button");
const showAllFeatured = document.getElementById('show-all-featured');
const showLessFeatured = document.getElementById('show-less-featured');
const featuredPageCount = document.getElementById('featured-page-count');
const featuredPageCountHeading = document.getElementById("featured-page-count-heading");

// FILTERED SHOW ALL BUTTON CLICKS
function showAll() {
  currentPage = 1;
  if (cardDisplayHeading.innerText === 'Food') {
    pagination(previousButton, nextButton, filterPageCount, 1, foodData, cardDisplay);
    paginationView(cardDisplay);
    filterPageCountHeading.style.display = 'none';
  }
  if (cardDisplayHeading.innerText === 'Fashion') {
    pagination(previousButton, nextButton, filterPageCount, 1, fashionData, cardDisplay);
    paginationView(cardDisplay);
    filterPageCountHeading.style.display = 'none';
  }
  if (cardDisplayHeading.innerText === 'Automotive') {
    pagination(previousButton, nextButton, filterPageCount, 1, autoData, cardDisplay);
    paginationView(cardDisplay);
    filterPageCountHeading.style.display = 'none';
  }
  if (cardDisplayHeading.innerText === 'Entertainment') {
    pagination(previousButton, nextButton, filterPageCount, 1, funData, cardDisplay);
    paginationView(cardDisplay);
    filterPageCountHeading.style.display = 'none';
  }
  if (cardDisplayHeading.innerText === 'Health') {
    pagination(previousButton, nextButton, filterPageCount, 1, healthData, cardDisplay);
    paginationView(cardDisplay);
    filterPageCountHeading.style.display = 'none';
  }
  if (cardDisplayHeading.innerText === 'All Choices') {
    pagination(previousButton, nextButton, filterPageCount, 1, allArrays, cardDisplay);
    paginationView(cardDisplay);
    filterPageCountHeading.style.display = 'none';
  }
}

// FILTERED SHOW LESS BUTTON CLICKS
function showLess() {
  if (cardDisplayHeading.innerText === 'Food') {
    defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, foodData, cardDisplay);
    defaultView(cardDisplay);
    filterPageCountHeading.style.display = 'inline';
  }
  if (cardDisplayHeading.innerText === 'Fashion') {
    defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, fashionData, cardDisplay);
    defaultView(cardDisplay);
    filterPageCountHeading.style.display = 'inline';
  }
  if (cardDisplayHeading.innerText === 'Automotive') {
    defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, autoData, cardDisplay);
    defaultView(cardDisplay);
    filterPageCountHeading.style.display = 'inline';
  }
  if (cardDisplayHeading.innerText === 'Entertainment') {
    defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, funData, cardDisplay);
    defaultView(cardDisplay);
    filterPageCountHeading.style.display = 'inline';
  }
  if (cardDisplayHeading.innerText === 'Health') {
    defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, healthData, cardDisplay);
    defaultView(cardDisplay);
    filterPageCountHeading.style.display = 'inline';
  }
  if (cardDisplayHeading.innerText === 'All Choices') {
    defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, allArrays, cardDisplay);
    defaultView(cardDisplay);
    filterPageCountHeading.style.display = 'inline';
  }
}

// FILTERED PREVIOUS BUTTON CLICKS
function clickPrevious() {
  if (cardDisplayHeading.innerText === 'Food') {
    prevPage(previousButton, nextButton, filterPageCount, foodData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Fashion') {
    prevPage(previousButton, nextButton, filterPageCount, fashionData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Automotive') {
    prevPage(previousButton, nextButton, filterPageCount, autoData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Entertainment') {
    prevPage(previousButton, nextButton, filterPageCount, funData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Health') {
    prevPage(previousButton, nextButton, filterPageCount, healthData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'All Choices') {
    prevPage(previousButton, nextButton, filterPageCount, allArrays, cardDisplay);
  }
}

// FILTERED NEXT BUTTON CLICKS
function clickNext() {
  if (cardDisplayHeading.innerText === 'Food') {
    nextPage(previousButton, nextButton, filterPageCount, foodData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Fashion') {
    nextPage(previousButton, nextButton, filterPageCount, fashionData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Automotive') {
    nextPage(previousButton, nextButton, filterPageCount, autoData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Entertainment') {
    nextPage(previousButton, nextButton, filterPageCount, funData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'Health') {
    nextPage(previousButton, nextButton, filterPageCount, healthData, cardDisplay);
  }
  if (cardDisplayHeading.innerText === 'All Choices') {
    nextPage(previousButton, nextButton, filterPageCount, allArrays, cardDisplay);
  }
}

// INITIAL PAGE LOAD
function loadMainPage() {
  // currentPage = 1;
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, foodData, cardDisplay);
  defaultCardBuilder(techPreviousButton, techNextButton, techPageCount, 1, techData, techCardDisplay);
  defaultCardBuilder(popularPreviousButton, popularNextButton, popularPageCount, 1, popularData, popularCardDisplay);
  defaultCardBuilder(featuredPreviousButton, featuredNextButton, featuredPageCount, 1, featuredData, featuredCardDisplay);
  checkContainerDisplayType();
}

// EVENT LISTENERS
window.addEventListener('load', loadMainPage);
showAllFilter.addEventListener('click', showAll);
showLessFilter.addEventListener('click', showLess);
previousButton.addEventListener('click', clickPrevious);
nextButton.addEventListener('click', clickNext);

// actions when categories are chosen
food.addEventListener('click', () => {
  cardDisplayHeading.innerText = 'Food';
  filterPageCountHeading.style.display = 'inline';
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, foodData, cardDisplay);
  defaultView(cardDisplay);
});
fashion.addEventListener('click', () => {
  cardDisplayHeading.innerText = 'Fashion';
  filterPageCountHeading.style.display = 'inline';
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, fashionData, cardDisplay);
  defaultView(cardDisplay);
});
auto.addEventListener('click', () => {
  cardDisplayHeading.innerText = 'Automotive';
  filterPageCountHeading.style.display = 'inline';
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, autoData, cardDisplay);
  defaultView(cardDisplay);
});
fun.addEventListener('click', () => {
  cardDisplayHeading.innerText = 'Entertainment';
  filterPageCountHeading.style.display = 'inline';
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, funData, cardDisplay);
  defaultView(cardDisplay);
});
health.addEventListener('click', () => {
  cardDisplayHeading.innerText = 'Health';
  filterPageCountHeading.style.display = 'inline';
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, healthData, cardDisplay);
  defaultView(cardDisplay);
});
all.addEventListener('click', () => {
  cardDisplayHeading.innerText = 'All Choices';
  filterPageCountHeading.style.display = 'inline';
  defaultCardBuilder(previousButton, nextButton, filterPageCount, 1, allArrays, cardDisplay);
  defaultView(cardDisplay);
});

// TECH EVENTS
showAllTech.addEventListener('click', () => {
  techCurrentPage = 1;
  pagination(techPreviousButton, techNextButton, techPageCount, 1, techData, techCardDisplay);
  paginationView(techCardDisplay);
  techPageCountHeading.style.display = 'none';
});
showLessTech.addEventListener('click', () => {
  defaultCardBuilder(techPreviousButton, techNextButton, techPageCount, 1, techData, techCardDisplay);
  defaultView(techCardDisplay);
  techPageCountHeading.style.display = 'inline';
});
techPreviousButton.addEventListener('click', () => {
  techPrevPage(techPreviousButton, techNextButton, techPageCount, techData, techCardDisplay);
});
techNextButton.addEventListener('click', () => {
  techNextPage(techPreviousButton, techNextButton, techPageCount, techData, techCardDisplay);
});

// POPULAR EVENTS
showAllPopular.addEventListener('click', () => {
  popularCurrentPage = 1;
  pagination(popularPreviousButton, popularNextButton, popularPageCount, 1, popularData, popularCardDisplay);
  paginationView(popularCardDisplay);
  popularPageCountHeading.style.display = 'none';
});
showLessPopular.addEventListener('click', () => {
  defaultCardBuilder(popularPreviousButton, popularNextButton, popularPageCount, 1, popularData, popularCardDisplay);
  defaultView(popularCardDisplay);
  popularPageCountHeading.style.display = 'inline';
});
popularPreviousButton.addEventListener('click', () => {
  popularPrevPage(popularPreviousButton, popularNextButton, popularPageCount, popularData, popularCardDisplay);
});
popularNextButton.addEventListener('click', () => {
  popularNextPage(popularPreviousButton, popularNextButton, popularPageCount, popularData, popularCardDisplay);
});

// FEATURED EVENTS
showAllFeatured.addEventListener('click', () => {
  featuredCurrentPage = 1;
  pagination(featuredPreviousButton, featuredNextButton, featuredPageCount, 1, featuredData, featuredCardDisplay);
  paginationView(featuredCardDisplay);
  featuredPageCountHeading.style.display = 'none';
});
showLessFeatured.addEventListener('click', () => {
  defaultCardBuilder(featuredPreviousButton, featuredNextButton, featuredPageCount, 1, featuredData, featuredCardDisplay);
  defaultView(featuredCardDisplay);
  featuredPageCountHeading.style.display = 'inline';
});
featuredPreviousButton.addEventListener('click', () => {
  featuredPrevPage(featuredPreviousButton, featuredNextButton, featuredPageCount, featuredData, featuredCardDisplay);
});
featuredNextButton.addEventListener('click', () => {
  featuredNextPage(featuredPreviousButton, featuredNextButton, featuredPageCount, featuredData, featuredCardDisplay);
});
