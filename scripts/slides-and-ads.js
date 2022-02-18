// HOME v3.0
// This file handles top banner scrolling/fading and ads rotating/fading on index.html.

const ad = document.getElementById('ad');
const adLink = document.getElementById('ad-link');

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const bannerSlideContainer = document.querySelector(".banner-slide-container");
let step;

// BANNER NEXT BUTTON
next.addEventListener("click", () => {
  step = 1;
  bannerSlideContainer.style.transform = "translateX(-100%)";
  bannerSlideContainer.style.transition = "transform 500ms ease-in-out";
});

// BANNER PREVIOUS BUTTON
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

// BANNER CONTAINER AND TRANSITION
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

// populates ad banner with logo images from coupon data in data.js, shows for 5 seconds, fades out for 3, repeats
function showAds(){
  const randomImages =  adImages[Math.floor(Math.random() * adImages.length)];
  adLink.href = randomImages.url;
  document.slide.src = randomImages.img;
  document.slide.alt = randomImages.name;
  setTimeout(function(){
    setTimeout(function(){
      ad.style.opacity = '1';
      showAds();
    }, 2500);// not showing for 2.5 seconds
    ad.style.opacity = '0';
  }, 8000);// showing for 8 seconds
}

// scrolls ads and loads banner on page load
window.addEventListener('load', showAds);
