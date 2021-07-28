function getMaxDigit() {

    let number = '21312372';

    const array = Array.from(number);
    const arrayOfNumbers = array.map((i) => Number(i));


    const maxDigit = Math.max(...arrayOfNumbers)

    return console.log(`${number}. Найбільша цифра у цьому числі: ${maxDigit}`)
}

///////////////////////////////////////////////////////////////////////////////////////////////

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

function getPairs() {
    const studentsPairs = [];
    let pair;

    for (let i = 0; i < students.length; i = i + 2) {
        pair = [].concat(students[i]).concat(students[i + 1]);
        studentsPairs.push(pair);
    };
    console.log('Пари студентів:')
    return console.log(studentsPairs);
};

///////////////////////////////////////////////////////////////////////////////////////////////

function getAverage(...numbers) {
    let arrayOfNumbers = numbers;
    arrayOfNumbers = [2, 4, 6, 8]
    console.log('Початковий масив:', arrayOfNumbers);

    let average = arrayOfNumbers.filter(number => (Math.trunc(number) - number == 0)).reduce((sum, currentNumber) => sum + currentNumber, 0) / arrayOfNumbers.length;

    return console.log(`Середнє арифметичне цілих чисел: ${average}`);
};

///////////////////////////////////////////////////////////////////////////////////////////////

function calculateWordLetters(string = "lorem ipsum dolor sit amet") {
    console.log(`Дано: "${string}"`);

    let arrayOfLetters = string.split(''); 
    let counter = {}; 

    for (let i = 0; i < arrayOfLetters.length; i++) { 
        
        if (counter[arrayOfLetters[i]]) { 
            counter[arrayOfLetters[i]] = counter[arrayOfLetters[i]] + 1; 
        } else {
            counter[arrayOfLetters[i]] = 1; 
        };
    };  

    return console.log(counter);
};

///////////////////////////////////////////////////////////////////////////////////////////////

const ukraine = {
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476,
};

function getMyTaxes(salary) {
    console.log('Податки:')
    return console.log(this.tax * salary);
};

function getUkraineTaxes() {
    getMyTaxes.call(ukraine, 2000)
}

///////////////////////////////////////////////////////////////////////////////////////////////

const marks = [5, 4, 4, 5];

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;

        this.getInfo = function() {
            return `Студент ${course}го курсу, ${university}, ${fullName}`;
        };

        this.marks = marks;

        this.averageMark = function() {
            let sum = 0;

            for (let i = 0; i < this.marks.length; i++) {
                sum = sum + this.marks[i];
            };
            return this.averageMark = sum / this.marks.length;
        };

        this.dismiss = function() {
            return this.marks = null;
        };

        this.recover = function() {
            return this.marks = marks;
        };
    };

    get getMarks() {
        return this.marks;
    };

    set setMarks(mark) {
        if (this.marks == null) return null;
        return this.marks.push(mark);
    };
};

const ostap = new Student('Вища Школа Психотерапії м.Одеса', 2, 'Остап Бендер');

function getOstapInfo() {
    console.log(ostap.getInfo());
}

///////////////////////////////////////////////////////////////////////////////////////////////

function generateBlocks() {
    
    for (let i = 1; i <= 25; i++) {
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let color = `rgb(${r}, ${g}, ${b})`;
        console.log(color)
    };    
};

///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////

const arrayOfHieroglyphs = [];

function getRandomChinese(length = 10) {
    
    const loopPromise = new Promise (function(resolve) {

        for (let i = 0; i < length; i++) {

            (function (i) {

                setTimeout ( () => {

                    let date = Date.now(); 
                    let hieroglyph = String.fromCharCode(date.toString().slice(-5));
                    arrayOfHieroglyphs.push(hieroglyph);

                }, 50 * i);

            })(i);
        }

        resolve();
    });

    loopPromise.then( () => {

        setTimeout( () => {

            let hieroglyphs = arrayOfHieroglyphs.join(' ');
            console.log('Hieroglyphs:')
            console.log(hieroglyphs);

        }, (length * 50));
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////

function getPlanetsList() {

    let page = 1;

    fetch (`https://swapi.dev/api/planets/?page=${page}`)

    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log('List of planets:')

        for (let i = data.results.length - 1; i > -1; i--) {

            console.log(data.results[i].name)
        }
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////

function* createIdGenerator() {
    for (let i = 1; Infinity; i++) yield i;
}
const idGenerator = createIdGenerator();


function generate() {
    console.log('Generator:')
    console.log(idGenerator.next().value)
}

///////////////////////////////////////////////////////////////////////////////////////////////

export {
    getMaxDigit, 
    getPairs, 
    getAverage, 
    calculateWordLetters,
    getUkraineTaxes,
    getOstapInfo,
    generateBlocks,
    getRandomChinese,
    getPlanetsList,
    generate,
}