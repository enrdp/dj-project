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





// Fonction scroll and appear elements
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


//FONCTION ZOOM GALLERY
//get the src
const images = document.querySelectorAll(".gallery__img img");
const zooms = document.querySelectorAll(".zoom");
let imgSrc;
// get images src onclick
zooms.forEach((zoom) => {
  zoom.addEventListener("click", (e) => {
      imgSrc = e.target.nextElementSibling.src;
      //run modal function
      imgModal(imgSrc);
  });
  
});


//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add modal to the parent element 
    document.querySelector("body").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };

modal.append(newImage, closeBtn);
};






//BAR PROGRESS checkbox
let els = document.getElementsByClassName('step');
let steps = [];
Array.prototype.forEach.call(els, (e) => {
  steps.push(e);
  e.addEventListener('click', (x) => {
    progress(x.target.id);
  });
});

function progress(stepNum) {
  let p = stepNum * 33;
  document.getElementsByClassName('percent')[0].style.width = `${p}%`;
  steps.forEach((e) => {
    if (e.id === stepNum) {
      e.classList.add('selected');
      e.classList.remove('completed');
    }
    if (e.id < stepNum) {
      e.classList.add('completed');
    }
    if (e.id > stepNum) {
      e.classList.remove('selected', 'completed');
    }
  });
}


