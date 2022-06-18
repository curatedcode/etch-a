

const mainBlock = document.getElementById('main-block');

const containerSize = 600;
const defaultSize = 16;
const defaultColor = '#F7F2F1';

let gridSize = defaultSize;
let gridColor = defaultColor;


function createGrid(){
    let gridFullSize = gridSize*gridSize;
    let gridPixelSize = containerSize/(gridFullSize/gridSize);
    console.log(gridPixelSize);
    const containerDiv = document.createElement('div');
    containerDiv.id = 'containerDiv';
    containerDiv.classList.add('containerDiv');
    mainBlock.appendChild(containerDiv);

    for (let i=0;i<gridFullSize;++i){
        const gridDiv = document.createElement('div');
        gridDiv.id = 'gridDiv';
        gridDiv.style.width = `${gridPixelSize}px`;
        gridDiv.style.height = `${gridPixelSize}px`;
        gridDiv.addEventListener('mousedown', updateColor); 
        gridDiv.addEventListener('mouseover', updateColor);
        containerDiv.appendChild(gridDiv);
    }
};

let mouseDown = false;

document.onmousedown = function (){
    mouseDown = true;
};

document.onmouseup = function (){
    mouseDown = false;
};

function updateColor(e){
    if (e.type === 'mouseover' && mouseDown == true){
        e.target.style.backgroundColor = 'black';
    } 
};

const button = document.querySelector('button');
const textBox = document.querySelector('input');

button.addEventListener('click',updateGridSize);


function updateGridSize() {
    if (textBox.value === '' || isNaN(textBox.value)) {
        alert('Please enter a number');
    } else {
        gridSize = textBox.value;
        const mainBlock = document.getElementById('main-block');
        const gridContainer = document.getElementById('containerDiv');
        while (gridContainer.firstChild){
            gridContainer.removeChild(gridContainer.firstChild);
        }
        mainBlock.removeChild(mainBlock.lastChild);
        textBox.value='';

        createGrid();
        console.log(textBox.value);
    }
};

window.onload = createGrid;



