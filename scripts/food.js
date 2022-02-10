


const foodDisplay = document.getElementById('food-display');
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const bannerSlideContainer = document.querySelector(".banner-slide-container");
let step;

next.addEventListener("click", () => {
  step = 1;
  bannerSlideContainer.style.transform = "translateX(-100%)";
  bannerSlideContainer.style.transition = "transform 500ms ease-in-out";
});

prev.addEventListener("click", () => {
  step = -1;
  bannerSlideContainer.style.transition = "none";
  bannerSlideContainer.prepend(bannerSlideContainer.lastElementChild);
  bannerSlideContainer.style.transform = "translateX(-100%)";
  setTimeout(() => {
    bannerSlideContainer.style.transition = "transform 500ms ease-in-out";
    bannerSlideContainer.style.transform = "translateX(0)";
  });
});

bannerSlideContainer.addEventListener("transitionend", () => {
  if (step === 1) {
    bannerSlideContainer.style.transition = "none";
    bannerSlideContainer.append(bannerSlideContainer.firstElementChild);
    bannerSlideContainer.style.transform = "translateX(0)";
    setTimeout(() => {
      bannerSlideContainer.style.transition = "transform 500ms ease-in-out";
    });
  }
});

function loadFood(){
  pagination(1, foodData, foodDisplay);
  // foodDisplay.style.margin = '0';
  // foodDisplay.style.display = 'flex';
  // foodDisplay.style.flexDirection = 'row';
  // foodDisplay.style.flexWrap = 'wrap';
  // foodDisplay.style.justifyContent = 'flex-start';
  // foodDisplay.style.alignItems = 'flex-start';
  paginationView(foodDisplay);
  // console.log(foodData.length);
}

window.addEventListener('load', loadFood);
