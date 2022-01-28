// HOME v3.0
// This file handles top banner scrolling/fading and ads rotating/fading on index.html.

// const slides = document.getElementsByClassName("slides");
let slides = document.querySelectorAll(".banner-slides");
const ad = document.getElementById('ad');
const adLink = document.getElementById('ad-link');

// initial slide index of 1
let slideIndex = 1;
// let i = 0;
showSlides(slideIndex);

// next/previous controls
function nextSlide() {
  showSlides(slideIndex += 1);
  // slides.forEach(slide => {
  //   slide.classList.add('move-banner-slide-right');
  //   slide.classList.remove('move-banner-slide-left');
  // });
}

// thumbnail image controls
function previousSlide() {
  showSlides(slideIndex -= 1);
  // slides.forEach(slide => {
  //   slide.classList.add('move-banner-slide-left');
  //   slide.classList.remove('move-banner-slide-right');
  // });
}

// shuffles through slides
function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "grid";
}

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
