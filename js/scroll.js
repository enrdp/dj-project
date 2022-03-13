let scrollToTopBtn = document.getElementById("scrollToTopBtn");

//SCROLL
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
const nav = document.querySelector(".menu");
const menu = document.querySelector(".menu");
const body = document.body;
const triggerMenu = document.querySelector(".menu");
scrollToTopBtn.style.display = "none";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (window.scrollY > 400) {
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
        burgerMenu.classList.remove('rotate');
        burgerMenu.classList.remove('arrow');
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
