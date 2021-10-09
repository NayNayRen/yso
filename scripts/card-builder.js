// HOME v3.0
// This file handles card population using data from data.js and controls default and pagination card layouts along with page arrow clicks.

let filterCurrentPage = 1;
let techCurrentPage = 1;
let popularCurrentPage = 1;
let featuredCurrentPage = 1;
let favoritesCurrentPage = 1;
let friendsCurrentPage = 1;
let countPerPage;

// MINIMAL CARD DISPLAY
function defaultView(container){
  container.style.overflowX = 'auto';
  container.style.display = 'grid';
  container.style.gridAutoFlow = 'column';
  container.style.justifyContent = 'space-between';
  container.style.width = '100%';
}

// PAGINATED CARD DISPLAY
function paginationView(container){
  container.style.display = 'flex';
  container.style.flexDirection = 'row';
  container.style.flexWrap = 'wrap';
  container.style.justifyContent = 'center';
}

// gets length of total pages
function totalPages(array) {
  return Math.ceil(array.length / countPerPage);
}

// default card builder, and display when 'Less' is clicked
function defaultCardBuilder(previous, next, pageCountContainer, page, array, container) {
  const favoritesFromLocalStorage = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteNames = favoritesFromLocalStorage.map(favorite => favorite.name);
  container.innerHTML = "";
  if (page < 1) {page = 1};
  if (page > totalPages(array)) {page = totalPages(array)};
  if (window.innerWidth > 2000) {countPerPage = 5};
  if (window.innerWidth < 2000 && window.innerWidth > 1800) {countPerPage = 5};
  if (window.innerWidth < 1800 && window.innerWidth > 1450) {countPerPage = 4};
  if (window.innerWidth < 1450 && window.innerWidth > 1100) {countPerPage = 4};
  if (window.innerWidth < 1100 && window.innerWidth > 750) {countPerPage = 3};
  if (window.innerWidth < 750 && window.innerWidth > 400) {countPerPage = 3};
  if (window.innerWidth < 400) {countPerPage = 3};
  // generates each card
  for (var i = (page - 1) * countPerPage; i < (page * countPerPage) && i < array.length; i++) {
    const isFavorite = favoriteNames.includes(array[i].name);
    const favoriteIconClassnames = isFavorite ? "fa fa-heart favorite" : "fa fa-heart";
    container.innerHTML += `
    <div class="card">

        <div class="card-logo">
          <img class='card-img' src=${array[i].img} alt='${array[i].name} Logo'>
        </div>

        <div class='card-info'>
          <span class='card-discount'>${array[i].discount}</span><br>
          <span class='card-name'>${array[i].name}</span>
        </div>

        <div class='card-views'>
          <div class='card-likes'>
            <i>Views: ${array[i].views}</i><br>
            <i>Likes: </i>
          </div>
          <div class='card-shares'>
            <i class='${favoriteIconClassnames} favorite-button' aria-hidden="true" onclick="addToFavorites(this, '${array[i].url}', '${array[i].img}', '${array[i].name}', '${array[i].discount}', '${array[i].views}')"></i><br>
            <i class="fa fa-share" aria-hidden="true"></i>
          </div>
        </div>

        <a href="${array[i].url}" class="card-button">Get Deal Now!</a>

    </div>
        `;
  }
  // adds page of and total to display
  pageCountContainer.style.position = 'relative';
  pageCountContainer.style.top = '0';
  pageCountContainer.style.color = '#000';
  pageCountContainer.innerHTML = `${page} of ${totalPages(array)}`;
  // dims pagination arrows, first page previous dims, last page next dims
  if (page === 1) {
    previous.style.left = "-40px";
    previous.style.opacity = "0";
  } else {
    previous.style.left = "5px";
    previous.style.opacity = "1";
  }
  if (page === totalPages(array)) {
    next.style.right = "-40px";
    next.style.opacity = "0";
  } else {
    next.style.right = "5px";
    next.style.opacity = "1";
  }
}

// card builder when 'All' is clicked
function pagination(previous, next, pageCountContainer, page, array, container) {
  const favoritesFromLocalStorage = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteNames = favoritesFromLocalStorage.map(favorite => favorite.name);
  countPerPage = array.length;
  container.innerHTML = "";
  if (page < 1) {page = 1};
  if (page > totalPages(array)) {page = totalPages(array)};
  // generates each card
  for (var i = (page - 1) * countPerPage; i < (page * countPerPage) && i < array.length; i++) {
    const isFavorite = favoriteNames.includes(array[i].name);
    const favoriteIconClassnames = isFavorite ? "fa fa-heart favorite" : "fa fa-heart";
    container.innerHTML += `
    <div class="card">

        <div class="card-logo">
          <img class='card-img' src=${array[i].img} alt='${array[i].name} Logo'>
        </div>

        <div class='card-info'>
          <span class='card-discount'>${array[i].discount}</span><br>
          <span class='card-name'>${array[i].name}</span>
        </div>

        <div class='card-views'>
          <div class='card-likes'>
            <i>Views: ${array[i].views}</i><br>
            <i>Likes: </i>
          </div>
          <div class='card-shares'>
            <i class='${favoriteIconClassnames} favorite-button' aria-hidden="true" onclick="addToFavorites(this, '${array[i].url}', '${array[i].img}', '${array[i].name}', '${array[i].discount}', '${array[i].views}')"></i><br>
            <i class="fa fa-share" aria-hidden="true"></i>
          </div>
        </div>

        <a href="${array[i].url}" class="card-button">Get Deal Now!</a>

    </div>
        `;
  }
  // adds total of items to display
  pageCountContainer.style.position = 'absolute';
  pageCountContainer.style.top = '25px';
  pageCountContainer.style.left = '0';
  pageCountContainer.style.color = '#FF0000';
  pageCountContainer.style.width = '100%';
  pageCountContainer.innerHTML = `${array.length} Items`;
  // // dims pagination arrows, first page previous dims, last page next dims
  if (page === 1) {
    previous.style.left = "-40px";
    previous.style.opacity = "0";
  } else {
    previous.style.left = "5px";
    previous.style.opacity = "1";
  }
  if (page === totalPages(array)) {
    next.style.right = "-40px";
    next.style.opacity = "0";
  } else {
    next.style.right = "5px";
    next.style.opacity = "1";
  }
}

function defaultFriendsBuilder(previous, next, pageCountContainer, page, array, container) {
  container.innerHTML = "";
  if (page < 1) {page = 1};
  if (page > totalPages(array)) {page = totalPages(array)};
  if (window.innerWidth > 2000) {countPerPage = 5};
  if (window.innerWidth < 2000 && window.innerWidth > 1800) {countPerPage = 5};
  if (window.innerWidth < 1800 && window.innerWidth > 1450) {countPerPage = 4};
  if (window.innerWidth < 1450 && window.innerWidth > 1100) {countPerPage = 4};
  if (window.innerWidth < 1100 && window.innerWidth > 750) {countPerPage = 3};
  if (window.innerWidth < 750 && window.innerWidth > 400) {countPerPage = 3};
  if (window.innerWidth < 400) {countPerPage = 3};
  // generates each card
  for (var i = (page - 1) * countPerPage; i < (page * countPerPage) && i < array.length; i++) {

    container.innerHTML += `
    <div class="friends-card">
      <div class="friends-card-header">
        <img src="${array[i].img}" class="friends-profile-picture" alt="Profile Picture">
      </div>
      <span>${array[i].first}</span>
      <span>${array[i].last}</span>
    </div>
        `;
  }
  // adds page of and total to display
  pageCountContainer.style.position = 'relative';
  pageCountContainer.style.top = '0';
  pageCountContainer.style.color = '#000';
  pageCountContainer.innerHTML = `${page} of ${totalPages(array)}`;
  // dims pagination arrows, first page previous dims, last page next dims
  if (page === 1) {
    previous.style.left = "-40px";
    previous.style.opacity = "0";
  } else {
    previous.style.left = "5px";
    previous.style.opacity = "1";
  }
  if (page === totalPages(array)) {
    next.style.right = "-40px";
    next.style.opacity = "0";
  } else {
    next.style.right = "5px";
    next.style.opacity = "1";
  }
}

// card builder when 'All' is clicked
function friendsPagination(previous, next, pageCountContainer, page, array, container) {
  countPerPage = array.length;
  container.innerHTML = "";
  if (page < 1) {page = 1};
  if (page > totalPages(array)) {page = totalPages(array)};
  // generates each card
  for (var i = (page - 1) * countPerPage; i < (page * countPerPage) && i < array.length; i++) {

    container.innerHTML += `
    <div class="friends-card">
      <div class="friends-card-header">
        <img src="${array[i].img}" class="friends-profile-picture" alt="Profile Picture">
      </div>
      <span>${array[i].first}</span>
      <span>${array[i].last}</span>
    </div>
        `;
  }
  // adds total of items to display
  pageCountContainer.style.position = 'absolute';
  pageCountContainer.style.top = '30px';
  pageCountContainer.style.left = '0';
  pageCountContainer.style.color = '#FF0000';
  pageCountContainer.style.width = '100%';
  pageCountContainer.innerHTML = `${array.length} Friends`;
  // // dims pagination arrows, first page previous dims, last page next dims
  if (page === 1) {
    previous.style.left = "-40px";
    previous.style.opacity = "0";
  } else {
    previous.style.left = "5px";
    previous.style.opacity = "1";
  }
  if (page === totalPages(array)) {
    next.style.right = "-40px";
    next.style.opacity = "0";
  } else {
    next.style.right = "5px";
    next.style.opacity = "1";
  }
}

// previous page action
function prevPage(previous, next, pageCountContainer, array, container) {
  if (currentPage > 1) {
    currentPage--
  };
  defaultCardBuilder(previous, next, pageCountContainer, currentPage, array, container);
}
// next page action
function nextPage(previous, next, pageCountContainer, array, container) {
  if (currentPage < totalPages(array)) {
    currentPage++
  };
  defaultCardBuilder(previous, next, pageCountContainer, currentPage, array, container);
}

// tech previous page action
function techPrevPage(previous, next, pageCountContainer, array, container) {
  if (techCurrentPage > 1) {
    techCurrentPage--
  };
  defaultCardBuilder(previous, next, pageCountContainer, techCurrentPage, array, container);
}
// tech next page action
function techNextPage(previous, next, pageCountContainer, array, container) {
  if (techCurrentPage < totalPages(array)) {
    techCurrentPage++
  };
  defaultCardBuilder(previous, next, pageCountContainer, techCurrentPage, array, container);
}

// popular previoius page action
function popularPrevPage(previous, next, pageCountContainer, array, container) {
  if (popularCurrentPage > 1) {
    popularCurrentPage--
  };
  defaultCardBuilder(previous, next, pageCountContainer, popularCurrentPage, array, container);
}
// popular next page action
function popularNextPage(previous, next, pageCountContainer, array, container) {
  if (popularCurrentPage < totalPages(array)) {
    popularCurrentPage++
  };
  defaultCardBuilder(previous, next, pageCountContainer, popularCurrentPage, array, container);
}

// featured previoius page action
function featuredPrevPage(previous, next, pageCountContainer, array, container) {
  if (featuredCurrentPage > 1) {
    featuredCurrentPage--
  };
  defaultCardBuilder(previous, next, pageCountContainer, featuredCurrentPage, array, container);
}
// featured next page action
function featuredNextPage(previous, next, pageCountContainer, array, container) {
  if (featuredCurrentPage < totalPages(array)) {
    featuredCurrentPage++
  };
  defaultCardBuilder(previous, next, pageCountContainer, featuredCurrentPage, array, container);
}

// favorites previoius page action
function favoritesPrevPage(previous, next, pageCountContainer, array, container) {
  if (favoritesCurrentPage > 1) {
    favoritesCurrentPage--
  };
  defaultCardBuilder(previous, next, pageCountContainer, favoritesCurrentPage, array, container);
}
// favorites next page action
function favoritesNextPage(previous, next, pageCountContainer, array, container) {
  if (favoritesCurrentPage < totalPages(array)) {
    favoritesCurrentPage++
  };
  defaultCardBuilder(previous, next, pageCountContainer, favoritesCurrentPage, array, container);
}

// friends previoius page action
function friendsPrevPage(previous, next, pageCountContainer, array, container) {
  if (friendsCurrentPage > 1) {
    friendsCurrentPage--
  };
  defaultFriendsBuilder(previous, next, pageCountContainer, friendsCurrentPage, array, container);
}
// friends next page action
function friendsNextPage(previous, next, pageCountContainer, array, container) {
  if (friendsCurrentPage < totalPages(array)) {
    friendsCurrentPage++
  };
  defaultFriendsBuilder(previous, next, pageCountContainer, friendsCurrentPage, array, container);
}
