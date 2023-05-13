let mainNav = document.querySelector('.main-nav');
let button = document.querySelector('.main-nav__toggle');



// button.onclick = function() {
//   if (navList.classList.contains("main-nav--active")) {
//     navMain.classList.add("main-nav--opened");
//   }
// }

button.onclick = function() {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
  }
};

// navList.classList.toggle('main-nav__list--active');
