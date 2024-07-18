
/*========== SHOW MENU ========*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*========== MENU HIDDEN ========*/
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*========== REMOVE MENU MOBILE ========*/
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));

/*========== CHANGE BACKGROUND HEADER =========*/
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header');
});


/*========== SWIPER =========*/


/*========== GSAP ANIMATION =========*/

/*========== ADD BLUR HEADER ==========*/