window.onscroll = function() {
    const element = document.querySelector('.navbar');
    const elementPosition = element.getBoundingClientRect().top; // Get element's position relative to the viewport

    if (elementPosition <= 0) { // When the navbar reaches the top of the viewport
        element.classList.add('sticky-top');
    } else {
        element.classList.remove('sticky-top');
    }
};
