// 1. Створіть функцію, яка повертає масив випадкових цілих чисел
console.log(`Функція 1`);

function getRandomArray(length, min, max) {
    
    const arrayOfRandomNumbers = [];

    for (i = 0; i < length; i++) {
        randomNumber = Math.round(Math.random() * (max - min) + min);
        arrayOfRandomNumbers.push(randomNumber);
    };

    return console.log(arrayOfRandomNumbers);
};
getRandomArray(10,  1, 100);
console.log(``);





// 2. Створіть функцію, яка вираховує моду всіх переданих в неї аргументів (нецілі числа ігноруються)
console.log(`Функція 2`);

function getModa(...numbers) {
    let arrayOfNumbers = numbers;

    // Створюємо функцію, яка перевіряє, чи є число цілим
    function isInteger (number) {
        if (Math.trunc(number) - number == 0) return true;
        else return false;
    };

    // Відкидаємо з масиву нецілі числа, якщо вони були виявлені
    arrayOfNumbers = arrayOfNumbers.filter(isInteger);

    console.log(arrayOfNumbers);

    // Сортуємо вміст масива у порядку зростання
    arrayOfNumbers = arrayOfNumbers.sort(function(a, b) {
        return a - b;
    });

    // Створюємо масив, в якому рахуватимуться випадки повторення того чи іншого числа
    count = 1;
    arrayOfOccurrences = [];

    for (i = 0; i < arrayOfNumbers.length; i++) {

        // Оскільки масив відсортований, порівнюємо кожне число з сусіднім, якщо збігається — додаємо одиницю
        if (arrayOfNumbers[i - 1] == arrayOfNumbers[i]) {
            count = count + 1;
        }
        else count = 1;

        // Отримані кількості зараховуємо в масив
        arrayOfOccurrencesCopy = arrayOfOccurrences.push(count);
    };

    // В отриманому масиві знаходимо найбільше число — найбільшу кількість випадків, що повторюються
    maximumOccur = Math.max(...arrayOfOccurrences);

    console.log(`Найбільша кількість повторень: ${maximumOccur}`);

    const arrayOfModes = []

    // Оскільки мод може бути більше однієї, знаходимо всі індекси, на яких знаходиться максимум
    for (i = 0; i < arrayOfOccurrences.length; i++) {

        // Застосовуємо отримані індекси до масиву з числами, таким чином отримуємо моду (моди)
        if (arrayOfOccurrences[i] == maximumOccur) {
            console.log (`Мода: ${arrayOfNumbers[i]}`);

            arrayOfModes.push(arrayOfNumbers[i]);
        };
    };
    
    return console.log(arrayOfModes);
};
getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 56, 3, 2);
console.log(``);




// 3. Створіть функцію, яка рахує середнє арифметичне всіх переданих в неї аргументів (нецілі числа ігноруються)
console.log(`Функція 3`);

function getAverage(...numbers) {
    let arrayOfNumbers = numbers;

    // Створюємо функцію, яка перевіряє, чи є число цілим
    function isInteger (number) {
        if (Math.trunc(number) - number == 0) return true;
        else return false;
    }

    // Відкидаємо з масиву нецілі числа, якщо вони були виявлені
    arrayOfNumbers = arrayOfNumbers.filter(isInteger);

    console.log(arrayOfNumbers);

    sum = 0;

    for (i = 0; i < arrayOfNumbers.length; i++) {
        sum = sum + arrayOfNumbers[i];
    };

    average = sum / arrayOfNumbers.length;

    return console.log(`Середнє арифметичне: ${average}`);
};
getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(``);




// 4. Створіть функцію, яка рахує медіану всіх переданих в неї аргументів (нецілі числа ігноруються)
console.log(`Функція 4`);

function getMedian(...numbers) {
    let arrayOfNumbers = numbers;

    // Створюємо функцію, яка перевіряє, чи є число цілим
    function isInteger (number) {
        if (Math.trunc(number) - number == 0) return true;
        else return false;
    }

    // Відкидаємо з масиву нецілі числа, якщо вони були виявлені
    arrayOfNumbers = arrayOfNumbers.filter(isInteger);

    // Сортуємо вміст масива у порядку зростання
        arrayOfNumbers = arrayOfNumbers.sort(function(a, b) {
        return a - b;
    });
    console.log(arrayOfNumbers);

    // Медіана для непарної кількості чисел у масиві
    if (arrayOfNumbers.length % 2 == 1) {
        index = Math.floor(arrayOfNumbers.length / 2);
        median = arrayOfNumbers[index];
    }
    // Для парної
    else {
        index1 = arrayOfNumbers.length / 2;
        index2 = index1 - 1;
        median = (arrayOfNumbers[index1] + arrayOfNumbers[index2]) / 2;
    };

    return console.log(`Медіана: ${median}`);
};
getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(``);




// 5. Створіть функцію, яка фільтрує парні числа передані як аргументи функції
console.log(`Функція 5`);

function filterEvenNumbers(...numbers) {
    let arrayOfNumbers = numbers;
    console.log(arrayOfNumbers);

     // Створюємо функцію, яка перевіряє, чи є число парним
     function isOdd (number) {
        if (number % 2 >= 1) return true;
        else return false;
    };

    // Відкидаємо з масиву парні числа, якщо вони були виявлені
    arrayOfNumbers = arrayOfNumbers.filter(isOdd);

    return console.log(arrayOfNumbers);
};
filterEvenNumbers(6, 2, 55, 11, 78, 2, 55, 57, 87, 23, 2, 56, 3, 2);
console.log(``);



// 6. Створіть функцію, яка порахує кількість чисел більших 0
console.log(`Функція 6`);

function countPositiveNumbers(...numbers) {
    let arrayOfNumbers = numbers;

    console.log(arrayOfNumbers);

    // Створюємо функцію, яка перевіряє, чи є число більшим, аніж нуль
    function isMoreThanZero (number) {
       if (number > 0) return true;
       else return false;
   };

   // Відкидаємо з масиву числа, які менше або дорівнюють 0, якщо вони були виявлені
   arrayOfNumbers = arrayOfNumbers.filter(isMoreThanZero);

   console.log(arrayOfNumbers);

   // Довжина отриманого масиву і є кількість чисел, більших за нуль
   quantityOfNumbersMoreThanZero = arrayOfNumbers.length;

   return console.log(`Кількість чисел більших нуля: ${quantityOfNumbersMoreThanZero}`);
};
countPositiveNumbers(1, 1, -2, 3, -4, -5, 6, 0, -99, 2021, Infinity, -Infinity, 0.000001, NaN);
console.log(``);




// 7. Створіть функцію, яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться націло на 5
console.log(`Функція 7`);

function getDividedByFive(...numbers) {
    let arrayOfNumbers = numbers;

    console.log(arrayOfNumbers);

    // Створюємо функцію, яка перевіряє, чи є ділиться число на 5 без залишку
    function isDividedByFive (number) {
        if (number % 5 == 0) return true;
        else return false;
    };

    // Відфільтровуємо те, що не підійшло
    arrayOfNumbers = arrayOfNumbers.filter(isDividedByFive);

    return console.log(arrayOfNumbers);
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
divideByThree("Co mma n     ders");