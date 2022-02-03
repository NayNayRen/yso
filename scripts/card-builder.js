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

// default card builder, and display when 'Less' is clicked
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
        <div class="card-button">
          <a href="selectedDeal.html" onclick="addSelectedDeal('${array[i].url}', '${array[i].img}', '${array[i].name}', '${array[i].discount}', '${array[i].views}')">Get Deal Now!</a>
        </div>
      </div>

    </div>
        `;
  }
  // adds page of and total to display
  // pageCountContainer.style.webkitTransition = 'top 250ms ease';
  // pageCountContainer.style.transition = 'top 250ms ease';
  // pageCountContainer.style.position = 'relative';
  // pageCountContainer.style.top = '0';
  // pageCountContainer.style.color = '#000';
  // pageCountContainer.innerHTML = `${page} of ${totalPages(array)}`;
  // keeps count font color white for favorites container in dashboard display
  // if (array === favorites) {
  //   pageCountContainer.style.color = '#fff';
  // } else if (array === registered) {
  //   pageCountContainer.style.color = '#fff';
  // } else {
  //   pageCountContainer.style.color = '000';
  // }
  // dims pagination arrows, first page previous dims, last page next dims
  if (page === 1) {
    previous.style.webkitTransition = 'all 250ms ease';
    previous.style.transition = 'all 250ms ease';
    previous.style.backgroundColor = '#808080';
    previous.style.opacity = "1";
    if(array === featuredData){
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
    if(array === featuredData){
      next.style.backgroundColor = '#333333';
    }
  } else {
    next.style.webkitTransition = 'all 250ms ease';
    next.style.transition = 'all 250ms ease';
    next.style.backgroundColor = '#E6331F';
    next.style.opacity = "1";
  }
}

// card builder when 'All' is clicked
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
        <div class="card-button">
          <a href="selectedDeal.html" onclick="addSelectedDeal('${array[i].url}', '${array[i].img}', '${array[i].name}', '${array[i].discount}')">Get Deal Now!</a>
        </div>
      </div>

    </div>
        `;
  }
  // adds total of items to display
  // pageCountContainer.style.webkitTransition = 'top 250ms ease';
  // pageCountContainer.style.transition = 'top 250ms ease';
  // pageCountContainer.style.position = 'absolute';
  // pageCountContainer.style.top = '20px';
  // pageCountContainer.style.left = '0';
  // pageCountContainer.style.width = '100%';
  // pageCountContainer.innerHTML = `${array.length} Items`;
  // switches the total count of featured container to white for the background color
  // if (array === featuredData) {
  //   pageCountContainer.style.color = '#fff';
  // } else if (array === favorites) {
  //   pageCountContainer.style.color = '#fff';
  // } else if (array === registered) {
  //   pageCountContainer.style.color = '#fff';
  // } else {
  //   pageCountContainer.style.color = '#FF0000';
  // }
  // dims pagination arrows, first page previous dims, last page next dims
  // if (page === 1) {
  //   previous.style.webkitTransition = 'opacity 150ms ease';
  //   previous.style.transition = 'opacity 150ms ease';
  //   previous.style.left = "-40px";
  //   previous.style.opacity = "0";
  //
  // } else {
  //   previous.style.webkitTransition = 'opacity 750ms ease';
  //   previous.style.transition = 'opacity 750ms ease';
  //   previous.style.opacity = "1";
  //
  // }
  // if (page === totalPages(array)) {
  //   next.style.webkitTransition = 'opacity 150ms ease';
  //   next.style.transition = 'opacity 150ms ease';
  //   next.style.right = "-40px";
  //   next.style.opacity = "0";
  //
  // } else {
  //   next.style.webkitTransition = 'opacity 750ms ease';
  //   next.style.transition = 'opacity 750ms ease';
  //   next.style.opacity = "1";
  //
  // }
}

function defaultFriendsBuilder(previous, next, pageCountContainer, page, array, container) {
  container.innerHTML = "";
  if (page < 1) {
    page = 1
  };
  if (page > totalPages(array)) {
    page = totalPages(array)
  };
  countPerPage = 3;
  // displayCardAmount();
  // generates each card
  for (let i = (page - 1) * countPerPage; i < (page * countPerPage) && i < array.length; i++) {
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
  // pageCountContainer.style.webkitTransition = 'top 250ms ease';
  // pageCountContainer.style.transition = 'top 250ms ease';
  // pageCountContainer.style.position = 'relative';
  // pageCountContainer.style.top = '0';
  // pageCountContainer.style.color = '#fff';
  // pageCountContainer.innerHTML = `${page} of ${totalPages(array)}`;
  // dims pagination arrows, first page previous dims, last page next dims
  if (page === 1) {
    previous.style.webkitTransition = 'all 250ms ease';
    previous.style.transition = 'all 250ms ease';
    previous.style.backgroundColor = '#808080';
    previous.style.left = "5px";
    previous.style.opacity = "1";

  } else {
    previous.style.webkitTransition = 'all 250ms ease';
    previous.style.transition = 'all 250ms ease';
    previous.style.backgroundColor = '#E6331F';
    previous.style.left = "5px";
    previous.style.opacity = "1";
  }
  if (page === totalPages(array)) {
    next.style.webkitTransition = 'all 250ms ease';
    next.style.transition = 'all 250ms ease';
    next.style.backgroundColor = '#808080';
    next.style.right = "5px";
    next.style.opacity = "1";
  } else {
    next.style.webkitTransition = 'all 250ms ease';
    next.style.transition = 'all 250ms ease';
    next.style.backgroundColor = '#E6331F';
    next.style.right = "5px";
    next.style.opacity = "1";
  }
}

// card builder when 'All' is clicked
function friendsPagination(previous, next, pageCountContainer, page, array, container) {
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
  // pageCountContainer.style.webkitTransition = 'top 250ms ease';
  // pageCountContainer.style.transition = 'top 250ms ease';
  // pageCountContainer.style.position = 'absolute';
  // pageCountContainer.style.top = '20px';
  // pageCountContainer.style.left = '0';
  // pageCountContainer.style.color = '#fff';
  // pageCountContainer.style.width = '100%';
  // pageCountContainer.innerHTML = `${array.length} Friends`;
  // // dims pagination arrows, first page previous dims, last page next dims
  if (page === 1) {
    previous.style.webkitTransition = 'opacity 150ms ease,';
    previous.style.transition = 'opacity 150ms ease';
    // previous.style.left = "-40px";
    previous.style.opacity = "0";
  } else {
    previous.style.webkitTransition = 'opacity 750ms ease';
    previous.style.transition = 'opacity 750ms ease';
    previous.style.left = "5px";
    previous.style.opacity = "1";
  }
  if (page === totalPages(array)) {
    next.style.webkitTransition = 'opacity 150ms ease';
    next.style.transition = 'opacity 150ms ease';
    // next.style.right = "-40px";
    next.style.opacity = "0";
  } else {
    next.style.webkitTransition = 'opacity 750ms ease';
    next.style.transition = 'opacity 750ms ease';
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

// registered previoius page action
function registeredPrevPage(previous, next, pageCountContainer, array, container) {
  if (registeredCurrentPage > 1) {
    registeredCurrentPage--
  };
  defaultCardBuilder(previous, next, pageCountContainer, registeredCurrentPage, array, container);
}
// registered next page action
function registeredNextPage(previous, next, pageCountContainer, array, container) {
  if (registeredCurrentPage < totalPages(array)) {
    registeredCurrentPage++
  };
  defaultCardBuilder(previous, next, pageCountContainer, registeredCurrentPage, array, container);
}
