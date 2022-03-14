const burger = document.getElementById('menu-hamburger');
const nav_menu = document.getElementById('nav_menu');

const menu_circle = document.getElementById('menu-circle');
const social = document.getElementById('icon__social');

burger.addEventListener('click', ShowMenu);
menu_circle.addEventListener('click', ShowSocial);

const menu__sub = document.getElementById('menu__sub');

function ShowMenu(){
    if (nav_menu.classList.contains('noShow')) {
        nav_menu.classList.toggle('show');
        burger.classList.toggle('rotate');
        burger.classList.toggle('arrow');
        nav_menu.classList.toggle('menu_Show');
        menu__sub.classList.toggle('menu_right-Show');
      } else {
        nav_menu.classList.contains('noShow');
      }
}
function ShowSocial(){
    if (social.classList.contains('noShow')) {
        social.classList.toggle('show');
        menu_circle.classList.toggle('effectCircle');
        menu_circle.classList.toggle('active');
        social.classList.toggle('menu__drop-social-effect');
      } else {
        social.classList.contains('noShow');
      }
}
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

//SCROLL
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
const nav = document.querySelector(".menu");
const menu = document.querySelector(".menu");
const body = document.body;
const triggerMenu = document.querySelector(".menu");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (window.scrollY > 30) {
    scrollToTopBtn.style.display = "block";
  }else{
    scrollToTopBtn.style.display = "none";
  }
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
    // scroll down - hide menu
        nav_menu.classList.remove('show');
        burger.classList.remove('rotate');
        burger.classList.remove('arrow');
        nav_menu.classList.remove('menu_Show');
        menu__sub.classList.remove('menu_right-Show');
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});


let rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic

  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

