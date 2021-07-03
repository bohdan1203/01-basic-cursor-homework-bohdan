// 1. Створіть функцію, яка повертає масив випадкових цілих чисел
console.log(`Функція 1`);

const getRandomArray = (length, min, max) => Array.from({length}).map(el=> Math.round(Math.random() * (max - min) + min));

console.log(`Масив випадкових чисел:`,getRandomArray(10, 1, 100))
console.log(``);




// 2. Створіть функцію, яка вираховує моду всіх переданих в неї аргументів (нецілі числа ігноруються)
console.log(`Функція 2`);

function getModa(...numbers) {
    let arrayOfNumbers = numbers;
    console.log('Початковий масив:', arrayOfNumbers);

    arrayOfNumbers = arrayOfNumbers.filter(number => (Math.trunc(number) - number == 0));
    console.log('Масив без нецілих чисел:', arrayOfNumbers);

    const getObjectOfNumbersAndTheirOccurrences = function(arrayOfNumbers) {
        let counter = {}; 
        arrayOfNumbers.forEach(i => counter[i] = arrayOfNumbers.filter(e => e === i).length);
        return counter;
    };
    console.log("Об'єкт з цілими числами та кількостями їх повторень:", getObjectOfNumbersAndTheirOccurrences(arrayOfNumbers));

    const arrayOfOccurrences = Object.values(getObjectOfNumbersAndTheirOccurrences(arrayOfNumbers));

    maximumOccurrence = Math.max(...arrayOfOccurrences);
    console.log(`Найбільша кількість повторень: ${maximumOccurrence}`);

    function getKeyByValue(object, value) {
        return Object.keys(object).filter(function(key) {
            return object[key] === value;
        });
    };
    console.log('Мода(и):',getKeyByValue(getObjectOfNumbersAndTheirOccurrences(arrayOfNumbers), maximumOccurrence));

};
getModa(6.0, 2, 55, 11.5, 78.7, 2, 55, 77.8, 57, 87.6, 6, 23.2, 56, 3, 2, 1, 2, 55, 55, 3, 3);
console.log(``);




// 3. Створіть функцію, яка рахує середнє арифметичне всіх переданих в неї аргументів (нецілі числа ігноруються)
console.log(`Функція 3`);

function getAverage(...numbers) {
    let arrayOfNumbers = numbers;
    console.log('Початковий масив:', arrayOfNumbers);

    average = arrayOfNumbers.filter(number => (Math.trunc(number) - number == 0)).reduce((sum, currentNumber) => sum + currentNumber, 0) / arrayOfNumbers.length;

    return console.log(`Середнє арифметичне цілих чисел: ${average}`);
};
getAverage(6, 2, 3, 2);
console.log(``);




// 4. Створіть функцію, яка рахує медіану всіх переданих в неї аргументів (нецілі числа ігноруються)
console.log(`Функція 4`);

const getMedian = (...numbers) => {
    arrayOfNumbers = numbers;
    arrayOfNumbers = arrayOfNumbers.filter(number => (Math.trunc(number) - number == 0));

    arrayOfNumbers.sort((a, b) => a-b);
    console.log("Масив цілих чилел:", arrayOfNumbers);

        if (arrayOfNumbers.length % 2) {
            return console.log("Медіана (непарна кількість аргументів):", arrayOfNumbers[(arrayOfNumbers.length - 1) / 2]);
        }
        else {
            return console.log("Медіана (парна кількість аргументів):", (arrayOfNumbers[(arrayOfNumbers.length / 2) - 1 ] + arrayOfNumbers[arrayOfNumbers.length / 2]) / 2);
        };
};
getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 88);
console.log(``);




// 5. Створіть функцію, яка фільтрує парні числа передані як аргументи функції
console.log(`Функція 5`);

function filterEvenNumbers(...numbers) {
    let arrayOfNumbers = numbers;
    console.log("Початковий масив:", arrayOfNumbers);

    return console.log("Масив без парних чисел:", arrayOfNumbers = arrayOfNumbers.filter(number => number % 2))
};
filterEvenNumbers(6, 2, 55, 11, 78, 2, 55, 57, 87, 23, 2, 56, 3, 2);
console.log(``);




// 6. Створіть функцію, яка порахує кількість чисел більших 0
console.log(`Функція 6`);

function countPositiveNumbers(...numbers) {
    let arrayOfNumbers = numbers;
    console.log("Початковий масив:", arrayOfNumbers);

    arrayOfNumbers = arrayOfNumbers.filter(number => number > 0);
    console.log("Масив чисел більших за нуль:", arrayOfNumbers);

    return console.log(`Кількість чисел більших за нуль:`, arrayOfNumbers.length);
};
countPositiveNumbers(1, 1, -2, 3, -4, -5, 666, 0, -99, 2021, Infinity, -Infinity, 0.000001);
console.log(``);




// 7. Створіть функцію, яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться націло на 5
console.log(`Функція 7`);

function getDividedByFive(...numbers) {
    let arrayOfNumbers = numbers;
    console.log("Початковий масив:", arrayOfNumbers);

    return console.log("Масив чисел, які діляться націло на 5:", arrayOfNumbers = arrayOfNumbers.filter(number => number % 5 == 0));
};
getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 10, 5, 0, 95, 660, 2000005);
console.log(``);




// 8. Створіть функцію, яка замінить погані слова на зірочки
console.log(`Функція 8`);

function replaceBadWords(string) {
    // Для розширення списку матюків треба додати (не)бажані слова в масив badWords
    const badWords = ["shit", "fuck",];

    // Запускаємо цикл, який заноситиме в масив зірки в кількості, відповідній до кількості букв в матюках
    const arrayOfStars = [];

    for (i = 0; i < badWords.length; i++) {
        badWordCensored = [];

        for (j = 0; j < badWords[i].length; j++) {
            badWordCensored.push('*');
            badWord = badWordCensored.join('');
        };

        arrayOfStars.push(badWord);

    };

    console.log(string);
    console.log(badWords);
    console.log(arrayOfStars);
   
    // Робимо функцію нечутливою до регістру та розбиваємо строку на масив слів
    string = string.toLowerCase();
    string = string.split(" ");

    console.log(string);

    // Запускаємо цикл, який проходиться по всіх словах
    for (i = 0; i < string.length; i++) {

        // А в ньому ще один, який виявлятиме, чи містить кожне слово із тексту яке-небудь слово із масиву матюків
        for (j = 0; j < badWords.length; j++) {

            // Якщо так — заміняємо погане слово зірками з масиву з зірками
            if (string[i].includes(badWords[j])) {
                string[i] = string[i].replace(badWords[j], arrayOfStars[j]);
            };
        };
    };

    // Об'єднуємо отриманий результат знову в строку
    string = string.join(' ');

    return console.log(string);
};
replaceBadWords("Holy shit! Are you fucking kidding? It's bullshit!");
console.log(``);




// 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви
console.log(`Функція 9`);

function divideByThree(word) {
    const byThree = [];

    console.log(word);

    word = word.toLowerCase(); // Рядок приводится до нижнього регістру
    word = word.replace(/ /g, ""); // Пробіли завжди видаляються

    // Розбиваємо те, що залишилося на масив з символів
    word = word.split("");
  
    // Запускаємо цикл, який об'єднує по три літери
    for (i = 0; i < word.length; i = i + 3) {
        threeLetters = [].concat(word[i]).concat(word[i + 1]).concat(word[i + 2]).join("");
        byThree.push(threeLetters);
    };

    return console.log(byThree);
}
divideByThree("CO mMa n   deRs");