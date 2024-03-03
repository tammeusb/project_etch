const content = document.querySelector('.content');
const containerSketch = document.querySelector('.container-sketch');
const sketchPixel = document.createElement('div');
sketchPixel.className = 'sketch-pixel';

//Initial generation

for (let i = 0; i < 16; i++) {
    sketchPixel.style.flexBasis = '237px';
    containerSketch.appendChild(sketchPixel.cloneNode(true));
}

const sketchList = document.querySelectorAll('.sketch-pixel');

sketchList.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'red';
    })
});

//Additional re-generations

const btn = document.querySelector('button');

btn.addEventListener('click', setNumber);

function setNumber() {
    const sketchNumber = parseInt(prompt("How many squares per side?", "up to 100"));
    console.log(typeof sketchNumber);
    if (sketchNumber > 100) {
        alert("too high!");
        return "ERROR";
    } else if (isNaN(sketchNumber)) {
        alert("Please enter a number.");
        return "ERROR"
    } 
    document.querySelectorAll('.sketch-pixel').forEach(e => e.remove());

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