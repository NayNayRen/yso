// HOME v3.0
// This file handles top banner scrolling/fading and ads rotating/fading on index.html.

// initial slide index of 1
let slideIndex = 1;
let i = 0;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// shuffles through slides
function showSlides(n) {
  const slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "grid";
  slides[slideIndex-1].style.gridTemplateColumns = "35% 65%";
  slides[slideIndex-1].style.alignItems = 'center';
}

// populates ad banner with logo images from coupon data in data.js, shows for 5 seconds, fades out for 3, repeats
function showAds(){
  const randomImages =  adImages[Math.floor(Math.random() * adImages.length)];
  adLink.href = randomImages.url;
  document.slide.src = randomImages.img;
  document.slide.alt = randomImages.name;
  setTimeout(function(){
    setTimeout(function(){
      bannerAd.style.opacity = '1';
      showAds();
    }, 2500);// not showing for 2.5 seconds
    bannerAd.style.opacity = '0';
  }, 8000);// showing for 8 seconds
}

// scrolls ads on page load
window.addEventListener('load', showAds);
