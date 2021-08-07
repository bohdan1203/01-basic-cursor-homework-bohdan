function* createIdGenerator() {
    for (i = 1; Infinity; i++) yield i;
}
const idGenerator = createIdGenerator();

document.getElementById('generator-plus-one').addEventListener('click', () => {
    console.log(idGenerator.next().value);
});


function* newFontGenerator(fontSize) {
    let upOrDown = yield fontSize;

    while (true) {

        switch (upOrDown) {
        case 'up':
            upOrDown = yield fontSize += 2;
            break;

        case 'down':  
            upOrDown = yield fontSize -= 2;
            break;

        default:
            upOrDown = yield fontSize;
            break;
        }
        document.getElementById('body').style.fontSize = fontSize + 'px';
    }
}
const fontGenerator = newFontGenerator(14);

document.getElementById('generator-next-up').addEventListener('click', () => {
    console.log(fontGenerator.next('up').value);
});

document.getElementById('generator-next-down').addEventListener('click', () => {
    console.log(fontGenerator.next('down').value);
});

document.getElementById('generator-next').addEventListener('click', () => {
    console.log(fontGenerator.next().value);
});