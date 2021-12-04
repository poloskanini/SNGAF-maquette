// Apparition d'intro (élements)
const socials = document.querySelectorAll('.bulle');

window.addEventListener('load', () => {
    const TL = gsap.timeline({paused : true})
    TL
    .staggerFrom("#logo", 1, {opacity: 0, ease: "power2.out"}, 1, "+=1.8")
    .staggerFrom("#navlist", 1, {top: -100, opacity: 0, ease: "power2.out"}, 1)
    .staggerFrom("#profile", 1, {opacity: 0,ease: "power2.out"}, 3)
    .staggerFrom(socials, 1, {left: -200, ease: "power2.out"}, .8, '-=1');

    TL.play();
  })

// Profile menu
const profile = document.querySelector('.profile-button')
const profileMenu = document.getElementById('profile-menu')

profile.addEventListener("mouseenter", () => {
  profileMenu.classList.add("active")
})
profile.addEventListener("mouseleave", () => {
  profileMenu.classList.remove("active")
})

profile.addEventListener("click", () => {
  profileMenu.classList.toggle("active")
})

// Search-data
const searchIcon = document.querySelector('.search-icon');
const searchDataWrapper = document.querySelector('.search-data-wrapper')
const closeButton = document.querySelector(".search-data-close-button");
const searchData = document.querySelector(".search-data");

$(".search-icon").click(function() {
  $(".search-data-wrapper").addClass("active");
  $(this).css("display", "none");
  $(".search-data").fadeIn(500);
  $('.search-data-icon').fadeIn(500);
  $(".search-data-close-button").fadeIn(500)
});

$(".search-data-close-button").click(function() {
  $(".search-data-wrapper").removeClass("active");
  $(".search-icon").fadeIn(800);
  $(".search-data").fadeOut(500);
  $(".search-data-close-button").fadeOut(500)
});


// Transition Vidéo > Background image
 const vid = document.getElementById("heroVideo");
function videoDisappear() {
   vid.classList.add("videoTransparency")
 }



// btn.addEventListener('click', () => {
//   menu.classList.toggle("hidden");
//   btnOpen.classList.toggle("hidden");
//   btnClose.classList.toggle("hidden");
// })

// btnProfile.addEventListener('click', () => {
//   profileMenu.classList.toggle("hidden");
// })

// searchIcon.addEventListener('click', () => {
//   searchIcon.classList.toggle("hidden")
//   searchInput.classList.toggle("hidden")
// })
