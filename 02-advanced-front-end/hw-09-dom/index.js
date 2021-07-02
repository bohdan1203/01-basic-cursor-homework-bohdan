function generateBlocks() {
    let grid = document.getElementById('grid');
    
    for (i = 1; i <= 25; i++) {
        grid.insertAdjacentHTML('afterbegin', `<div class="cell" id="cell_${i}"></div>`);

        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        
        let color = `rgb(${r}, ${g}, ${b})`;

        document.getElementById(`cell_${i}`).style.background = color;
    };

    function generateBlocksInterval() {
        document.location.reload();
    };
    setInterval(generateBlocksInterval, 1000);

};
generateBlocks();