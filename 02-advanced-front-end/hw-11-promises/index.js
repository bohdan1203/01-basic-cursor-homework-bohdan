const arrayOfHieroglyphs = [];

function getLength() {

    do {
        length = +prompt('Введіть число від 1 до 100:', 100);
    } while (isNaN(length) || length < 1 || length > 100 || length == ' ');

    return length;
}

function getRandomChinese(length) {
    
    const loopPromise = new Promise (function(resolve) {

        for (i = 0; i < length; i++) {

            (function (i) {

                setTimeout ( () => {

                    date = Date.now(); 
                    hieroglyph = String.fromCharCode(date.toString().slice(-5));
                    arrayOfHieroglyphs.push(hieroglyph);

                    console.log(date, date.toString().slice(-5), hieroglyph);

                }, 50 * i);

            })(i);
        }

        resolve();
    });

    loopPromise.then( () => {

        setTimeout( () => {

            let hieroglyphs = arrayOfHieroglyphs.join(' ');
            console.log(hieroglyphs);

        }, (length * 50));
    });
}
getRandomChinese(getLength());