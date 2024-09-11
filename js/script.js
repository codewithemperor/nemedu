window.onscroll = function() {
    const element = document.querySelector('.navbar');
    const scrollPosition = window.scrollY; // Get the scroll position on the Y-axis

    if (scrollPosition > 100) { // Adjust 100px to the point where you want to trigger the class
        element.classList.add('fixed-top');

    } else {
        element.classList.remove('fixed-top');
    }
};
