// Logo
const myLogo = '<DivyAnsh/>';

const logo = document.querySelector('.logo');

const heading = document.createElement('h1');

heading.append(myLogo);

logo.append(heading);

// burger
const burger = document.querySelector('.burger');

// navbar
const navbar = document.querySelector('.navbar');

// navLinks
const navLinks = document.querySelectorAll('.navbar li');

console.log(navLinks);


// burger event
burger.addEventListener('click', () => {

    navbar.classList.toggle('navbar-active');

    burger.classList.toggle('burger-active')

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `fadeInLinks 0.3s ease-in forwards ${index / 7 + 0.3}s`;
        }
    })

})