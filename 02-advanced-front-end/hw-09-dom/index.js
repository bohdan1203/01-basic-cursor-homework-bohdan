let grid = document.getElementById('grid');
let interval;

function generateBlocks() {    

    if (document.getElementsByClassName('cell').length !== 0) {
        for (i = 25; i >= 1; i--) {
            document.getElementById(`cell_${i}`).remove();
        }
    }
    
    for (i = 25; i >= 1; i--) {
        grid.insertAdjacentHTML('afterbegin', `<div class="cell" id="cell_${i}"></div>`);

        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let color = `rgb(${r}, ${g}, ${b})`;

        document.getElementById(`cell_${i}`).style.background = color;
    };
};

function generateBlocksInterval() {
    interval = setInterval(generateBlocks, 1000); 
};

document.getElementById('generate-blocks').addEventListener('click', () => {
    clearInterval(interval);
    generateBlocks();
});

document.getElementById('generate-blocks-interval').addEventListener('click', () => {
    clearInterval(interval);
    generateBlocksInterval();
});