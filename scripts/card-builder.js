// HOME v3.0
// This file handles card population using data from data.js and controls default and pagination card layouts along with page arrow clicks.

let currentPage = 1;
let techCurrentPage = 1;
let popularCurrentPage = 1;
let featuredCurrentPage = 1;
let favoritesCurrentPage = 1;
let friendsCurrentPage = 1;
let registeredCurrentPage = 1;
let countPerPage;

// MINIMAL CARD DISPLAY
function defaultView(container) {
  container.style.overflowX = 'auto';
  container.style.display = 'grid';
  container.style.gridAutoFlow = 'column';
  // container.style.justifyContent = 'center';
  container.style.justifyContent = 'space-between';
  container.style.width = '100%';
}

// PAGINATED CARD DISPLAY
function paginationView(container) {
  container.style.display = 'flex';
  container.style.flexDirection = 'row';
  container.style.flexWrap = 'wrap';
  container.style.justifyContent = 'center';
}

// gets length of total pages
function totalPages(array) {
  return Math.ceil(array.length / countPerPage);
}

// function displayCardAmount(){
//   if (window.innerWidth > 2000) {
//     countPerPage = 5;
//   }
//   if (window.innerWidth < 2000 && window.innerWidth > 1800) {
//     countPerPage = 5;
//   }
//   if (window.innerWidth < 1800 && window.innerWidth > 1450) {
//     countPerPage = 4;
//   }
//   if (window.innerWidth < 1450 && window.innerWidth > 1100) {
//     countPerPage = 4;
//   }
//   if (window.innerWidth < 1100 && window.innerWidth > 750) {
//     countPerPage = 3;
//   }
//   if (window.innerWidth < 750 && window.innerWidth > 400) {
//     countPerPage = 3;
//   }
//   if (window.innerWidth < 400) {
//     countPerPage = 3;
//   }
// }

// paginated card and container view with paging arrows
function defaultCardBuilder(previous, next, pageCountContainer, page, array, container) {
  const favoritesFromLocalStorage = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteNames = favoritesFromLocalStorage.map(favorite => favorite.name);
  container.innerHTML = "";
  if (page < 1) {
    page = 1
  }
  if (page > totalPages(array)) {
    page = totalPages(array)
  }
  countPerPage = 3;
  // displayCardAmount();
  // generates each card
  for (let i = (page - 1) * countPerPage; i < (page * countPerPage) && i < array.length; i++) {
    const isFavorite = favoriteNames.includes(array[i].name);
    const favoriteIconClassnames = isFavorite ? "fa fa-star favorite" : "fa fa-star";
    container.innerHTML += `
    <div class="card">

      <div class='card-half'>
        <div class="card-logo">
          <img class='card-img' src=${array[i].img} alt='${array[i].name} Logo'>
        </div>
        <div class='card-info'>
          <span class='card-discount'>${array[i].discount}</span><br>
          <span class='card-name'>${array[i].name}</span>
        </div>
      </div>

      <div class='card-half'>
        <div class='card-views'>
          <div class='card-likes'>
            <span>Views: ${array[i].views}</span><br>
            <span>Likes: </span>
          </div>
          <div class='card-shares'>
            <i class="fa fa-share" aria-hidden="true"></i>
            <i class='${favoriteIconClassnames} favorite-button' aria-hidden="true" onclick="addToFavorites(this, '${array[i].url}', '${array[i].img}', '${array[i].name}', '${array[i].discount}', '${array[i].views}')"></i><br>
          </div>
        </div>
          <a href="selectedDeal.html" class="card-button" onclick="addSelectedDeal('${array[i].url}', '${array[i].img}', '${array[i].name}', '${array[i].discount}', '${array[i].views}')">Get Deal Now!</a>
      </div>

    </div>
        `;
  }
  // dims pagination arrows, first page previous dims, last page next dims
  if (page === 1) {
    previous.style.webkitTransition = 'all 250ms ease';
    previous.style.transition = 'all 250ms ease';
    previous.style.backgroundColor = '#808080';
    previous.style.opacity = "1";
    if(array === popularData){
      previous.style.backgroundColor = '#333333';
    }
  } else {
    previous.style.webkitTransition = 'all 250ms ease';
    previous.style.transition = 'all 250ms ease';
    previous.style.backgroundColor = '#E6331F';
    previous.style.opacity = "1";
  }
  if (page === totalPages(array)) {
    next.style.webkitTransition = 'all 250ms ease';
    next.style.transition = 'all 250ms ease';
    next.style.backgroundColor = '#808080';
    next.style.opacity = "1";
    if(array === popularData){
      next.style.backgroundColor = '#333333';
    }
  } else {
    next.style.webkitTransition = 'all 250ms ease';
    next.style.transition = 'all 250ms ease';
    next.style.backgroundColor = '#E6331F';
    next.style.opacity = "1";
  }
}

// all cards and container view
function pagination(page, array, container) {
  const favoritesFromLocalStorage = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteNames = favoritesFromLocalStorage.map(favorite => favorite.name);
  countPerPage = array.length;
  container.innerHTML = "";
  if (page < 1) {
    page = 1
  };
  if (page > totalPages(array)) {
    page = totalPages(array)
  };
  // generates each card
  for (let i = (page - 1) * countPerPage; i < (page * countPerPage) && i < array.length; i++) {
    const isFavorite = favoriteNames.includes(array[i].name);
    const favoriteIconClassnames = isFavorite ? "fa fa-star favorite" : "fa fa-star";
    container.innerHTML += `
    <div class="card">

      <div class='card-half'>
        <div class="card-logo">
          <img class='card-img' src=${array[i].img} alt='${array[i].name} Logo'>
        </div>
        <div class='card-info'>
          <span class='card-discount'>${array[i].discount}</span><br>
          <span class='card-name'>${array[i].name}</span>
        </div>
      </div>

      <div class='card-half'>
        <div class='card-views'>
          <div class='card-likes'>
            <span>Views: ${array[i].views}</span><br>
            <span>Likes: </span>
          </div>
          <div class='card-shares'>
            <i class="fa fa-share" aria-hidden="true"></i>
            <i class='${favoriteIconClassnames} favorite-button' aria-hidden="true" onclick="addToFavorites(this, '${array[i].url}', '${array[i].img}', '${array[i].name}', '${array[i].discount}', '${array[i].views}')"></i><br>
          </div>
        </div>
          <a href="selectedDeal.html" class="card-button" onclick="addSelectedDeal('${array[i].url}', '${array[i].img}', '${array[i].name}', '${array[i].discount}')">Get Deal Now!</a>
      </div>

    </div>
        `;
  }
}

// previous page action
function prevPage(previous, next, pageCountContainer, array, container) {
  if (currentPage > 1) {
    currentPage--;
  }else{
    currentPage = totalPages(array);
  }
  defaultCardBuilder(previous, next, pageCountContainer, currentPage, array, container);
}
// next page action
function nextPage(previous, next, pageCountContainer, array, container) {
  if (currentPage < totalPages(array)) {
    currentPage++;
  }else{
    currentPage = 1;
  }
  defaultCardBuilder(previous, next, pageCountContainer, currentPage, array, container);
}

// tech previous page action
function techPrevPage(previous, next, pageCountContainer, array, container) {
  if (techCurrentPage > 1) {
    techCurrentPage--;
  }else{
    techCurrentPage = totalPages(array);
  }
  defaultCardBuilder(previous, next, pageCountContainer, techCurrentPage, array, container);
}
// tech next page action
function techNextPage(previous, next, pageCountContainer, array, container) {
  if (techCurrentPage < totalPages(array)) {
    techCurrentPage++;
  }else{
    techCurrentPage = 1;
  }
  defaultCardBuilder(previous, next, pageCountContainer, techCurrentPage, array, container);
}

// popular previoius page action
function popularPrevPage(previous, next, pageCountContainer, array, container) {
  if (popularCurrentPage > 1) {
    popularCurrentPage--;
  }else{
    popularCurrentPage = totalPages(array);
  }
  defaultCardBuilder(previous, next, pageCountContainer, popularCurrentPage, array, container);
}
// popular next page action
function popularNextPage(previous, next, pageCountContainer, array, container) {
  if (popularCurrentPage < totalPages(array)) {
    popularCurrentPage++;
  }else{
    popularCurrentPage = 1;
  }
  defaultCardBuilder(previous, next, pageCountContainer, popularCurrentPage, array, container);
}

// featured previoius page action
function featuredPrevPage(previous, next, pageCountContainer, array, container) {
  if (featuredCurrentPage > 1) {
    featuredCurrentPage--;
  }else{
    featuredCurrentPage = totalPages(array);
  }
  defaultCardBuilder(previous, next, pageCountContainer, featuredCurrentPage, array, container);
}
// featured next page action
function featuredNextPage(previous, next, pageCountContainer, array, container) {
  if (featuredCurrentPage < totalPages(array)) {
    featuredCurrentPage++;
  }else{
    featuredCurrentPage = 1;
  }
  defaultCardBuilder(previous, next, pageCountContainer, featuredCurrentPage, array, container);
}

// favorites previoius page action
function favoritesPrevPage(previous, next, pageCountContainer, array, container) {
  if (favoritesCurrentPage > 1) {
    favoritesCurrentPage--;
  }else{
    favoritesCurrentPage = totalPages(array);
  }
  defaultCardBuilder(previous, next, pageCountContainer, favoritesCurrentPage, array, container);
}
// favorites next page action
function favoritesNextPage(previous, next, pageCountContainer, array, container) {
  if (favoritesCurrentPage < totalPages(array)) {
    favoritesCurrentPage++;
  }else{
    favoritesCurrentPage = 1;
  }
  defaultCardBuilder(previous, next, pageCountContainer, favoritesCurrentPage, array, container);
}
