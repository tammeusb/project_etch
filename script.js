const containerSketch = document.querySelector('.container-sketch');
const sketchPixel = document.createElement('div');
sketchPixel.className = 'sketch-pixel';

for (let i = 0; i < 16; i++) {
    containerSketch.appendChild(sketchPixel.cloneNode(true));
}

const sketchList = document.querySelectorAll('.sketch-pixel');

sketchList.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'red';
    })
});