// script.js

/*let currentIndex = 0;
const slides = document.querySelectorAll('.slide10');

function updateSlider() {
    const newTransformValue = -currentIndex * 100 + '%';
    document.querySelector('.slider10').style.transform = 'translateX(' + newTransformValue + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

// Display each set of three slides for 3 seconds and then transition to the next set
function startSlider() {
    setInterval(() => {
        nextSlide();
    }, 3000);
}

// Wait for the images to load before starting the slider
window.addEventListener('load', startSlider);*/

let currentIndex = 0;
const slides = document.querySelectorAll('.slide10');

function updateSlider() {
    const newTransformValue = -currentIndex * 100 + '%';
    document.querySelector('.slider10').style.transform = 'translateX(' + newTransformValue + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;    /*slides.length;*/
    updateSlider();
}

// Display each set of three slides for 3 seconds and then transition to the next set
function startSlider() {
    setInterval(() => {
        nextSlide();
    }, 3000);
}

// Wait for the images to load before starting the slider
window.addEventListener('load', startSlider);