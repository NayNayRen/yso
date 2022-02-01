const foodDisplay = document.getElementById('food-display');

function loadFood(){
  pagination(1, foodData, foodDisplay);
  // foodDisplay.style.margin = '0';
  // foodDisplay.style.display = 'flex';
  // foodDisplay.style.flexDirection = 'row';
  // foodDisplay.style.flexWrap = 'wrap';
  // foodDisplay.style.justifyContent = 'flex-start';
  // foodDisplay.style.alignItems = 'flex-start';
  paginationView(foodDisplay);
}

window.addEventListener('load', loadFood);
