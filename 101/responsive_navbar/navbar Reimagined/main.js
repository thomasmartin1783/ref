

const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLink = document.querySelector('.nav-link')






let i = 0;
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')
    navLinks.classList.toggle('active')
    i++;

    if (window.innerWidth < 700) {

        if (i % 2 != 0) {

            gsap.fromTo('.nav-link', {
                scale: 0,
                opacity: 0,

            }, {
                scale: 1,
                opacity: 1,
            });
        }
    }



})
