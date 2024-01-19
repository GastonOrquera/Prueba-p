var hamburger = document.querySelector('.hamburger');

var nav = document.querySelector("nav");

var navLinks = document.querySelectorAll("nav a");


hamburger.onclick = function () {

    nav.classList.toggle("active");


}

navLinks.forEach(function (link) {

    link.addEventListener('click', function () {

        nav.classList.remove("active");

    });


});