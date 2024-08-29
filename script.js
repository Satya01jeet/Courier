document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.head', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        interval: 200
    });

    ScrollReveal().reveal('.products', {
        duration: 1000,
        origin: 'left',
        distance: '50px',
        opacity: 0
    });

    ScrollReveal().reveal('.textCard', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        opacity: 0
    });

    ScrollReveal().reveal('.imgCard', {
        duration: 1500,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        interval: 200
    });

    ScrollReveal().reveal('.card', {
        duration: 1500,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        interval: 200
    });

});