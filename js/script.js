const burgerMenu = document.getElementById('menu-hamb');
const nav_menu = document.getElementById('nav_menu');

const menu_circle = document.getElementById('menu-circle');
const social = document.getElementById('icon__social');

burgerMenu.addEventListener('click', ShowMenu);
menu_circle.addEventListener('click', ShowSocial);

const menu__sub = document.getElementById('menu__sub');

function ShowMenu(){
    if (nav_menu.classList.contains('noShow')) {
        nav_menu.classList.toggle('show');
        burgerMenu.classList.toggle('rotate');
        burgerMenu.classList.toggle('arrow');
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

