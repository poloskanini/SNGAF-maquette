// Animation d'intro (navbar)

/*
 window.addEventListener('load', () => {
   const TL = gsap.timeline({paused : true});

   TL
   .staggerFrom("#logo", 1, {opacity: 0, ease: "power2.out"}, 1, "+=1.8")
   .staggerFrom("#navlist", 1, {top: -100, opacity: 0, ease: "power2.out"}, 1)
   .staggerFrom("#profile", 1, {opacity: 0,ease: "power2.out"}, 3);

   TL.play();

 })

 */


// Mobile-Menu
const btn = document.querySelector('button.mobile-menu-button');
const btnOpen = document.getElementById('burger-open');
const btnClose = document.getElementById('burger-close');
const menu = document.getElementById('mobile-menu');
const btnProfile = document.querySelector('button.profile-pic');
const profileMenu = document.getElementById('profile-menu');
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

btn.addEventListener('click', () => {
  menu.classList.toggle("hidden");
  btnOpen.classList.toggle("hidden");
  btnClose.classList.toggle("hidden");
})

btnProfile.addEventListener('click', () => {
  profileMenu.classList.toggle("hidden");
})

searchIcon.addEventListener('click', () => {
  searchIcon.classList.toggle("hidden")
  searchInput.classList.toggle("hidden")
})
