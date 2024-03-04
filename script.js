//UI
const content = document.querySelector('.content');
const containerSketch = document.querySelector('.container-sketch');
const sketchPixel = document.createElement('div');
sketchPixel.className = 'sketch-pixel';

const btn = document.querySelector('button');

let sketchNumber = 16;

function getDimension() {
    console.log(typeof sketchNumber);
    if (sketchNumber > 100) {
        alert("too high!");
        return "ERROR";
    } else if (isNaN(sketchNumber)) {
        alert("Please enter a number.");
        return "ERROR"
    } else {
        renderGrid(sketchNumber);
    }
}

function renderGrid(sketchNumber) {

        //delete previous grid
        containerSketch.innerHTML = '';

        for (let i = 0; i < (sketchNumber * sketchNumber); i++) {
            containerSketch.appendChild(sketchPixel.cloneNode(true));
        }
    
        document.querySelectorAll('.sketch-pixel').forEach((div) => {
            div.style.height = `${960 / sketchNumber - 3}px`;
            div.style.flexBasis = `${960 / sketchNumber - 3}px`;
            div.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'red';
            })
        });
}

btn.addEventListener('click', () => {
    sketchNumber = parseInt(prompt("How many squares per side?", "up to 100"));
    getDimension(sketchNumber);
});

renderGrid(16);
