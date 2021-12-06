// Apparition d'intro (élements)
const navItems = document.querySelectorAll('.nav-item');
const socials = document.querySelectorAll('.bulle');
const articles = document.querySelectorAll('.article');
const section = document.querySelector('.section');

window.addEventListener('load', () => {
    const TL = gsap.timeline({paused : true})
    TL
    .staggerFrom("#logo", 1, {opacity: 0, ease: "power2.out"}, 1, "+=1.6")
    .staggerFrom(navItems, 1, {top: -100, opacity: 0, ease: "power2.out"}, .3)
    .staggerFrom(socials, .6, {left: -200, ease: "power2.out"}, .3, '-=.1')
    .staggerFrom(section, 6, {opacity: 0, ease: "power2.out"}, 1, '-=.5');
    TL.play();
  })

// Profile menu
const profile = document.querySelector('.profile-button');
const profileMenu = document.getElementById('profile-menu');

profile.addEventListener("mouseenter", () => {
  profileMenu.classList.add("active")
});
profile.addEventListener("mouseleave", () => {
  profileMenu.classList.remove("active")
});
profile.addEventListener("click", () => {
  profileMenu.classList.toggle("active")
});

// Search-data
const searchIcon = document.querySelector('.search-icon');
const searchDataWrapper = document.querySelector('.search-data-wrapper');
const closeButton = document.querySelector(".search-data-close-button");
const searchData = document.querySelector(".search-data");

$(".search-icon").click(function() {
  $(".search-data-wrapper").addClass("active");
  $(".search-data").fadeIn(500);
  $(".search-data-input").focus();
  $('.search-data-icon').fadeIn(500);
  $(".search-data-close-button").fadeIn(500)
});

$(".search-data-close-button").click(function() {
  $(".search-data-wrapper").removeClass("active");
  $(".search-icon").fadeIn(800);
  $(".search-data").fadeOut(500);
  $(".search-data-close-button").fadeOut(500)
});

// Mobile Nav Toggle
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute('data-visible')
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);

  }
});

// Transition Vidéo > Background image
const vid = document.getElementById("heroVideo");
function videoDisappear() {
   vid.classList.add("videoTransparency")
 };