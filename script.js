const content = document.querySelector('.content');
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

const btn = document.querySelector('button');

btn.addEventListener('click', setNumber);

function setNumber() {
    const sketchNumber = prompt("How many squares?");
    document.querySelectorAll('.sketch-pixel').forEach(e => e.remove());

    for (let i = 0; i < sketchNumber; i++) {
        containerSketch.appendChild(sketchPixel.cloneNode(true));
    }

    document.querySelectorAll('.sketch-pixel').forEach((div) => {
        div.style.height = `${960 / Math.sqrt(sketchNumber)}px`;
        div.style.flexBasis = `${960 / Math.sqrt(sketchNumber)}px`;
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'red';
        })
    });
    
}