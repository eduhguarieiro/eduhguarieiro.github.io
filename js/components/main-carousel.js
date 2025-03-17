const buttonRight = document.querySelector('.button-arrow.-right');
const buttonLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;

buttonRight.addEventListener('click', function() {
    pixels += 10;
    elements.style = `transform: translateX(${pixels}px)`;
})

buttonLeft.addEventListener('click', function() {
    pixels -= 10;
    elements.style = `transform: translateX(${pixels}px)`;
})