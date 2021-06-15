// 1. Створіть функцію, яка повертає масив випадкових цілих чисел
console.log(`Функція 1`)

function getRandomArray(length, min, max) {
    
    const arrayOfRandomNumbers = [];

    for (i = 0; i < length; i++) {
        randomNumber = Math.round(Math.random() * (max - min) + min);
        arrayOfRandomNumbers.push(randomNumber);
    };

    return console.log(arrayOfRandomNumbers);
};
getRandomArray(10,  1, 100);
console.log(``)







// 2. Створіть функцію, яка вираховує моду всіх переданих в неї аргументів (нецілі числа ігноруються)
console.log(`Функція 2`)

function getModa(...numbers) {
    

    let arrayOfNumbers = numbers;

    // Створюємо функцію, яка перевіряє, чи є число цілим
    function isInteger (number) {
        if (Math.trunc(number) - number == 0) return true;
        else return false;
    }

    // Відкидаємо з масиву нецілі числа, якщо вони були виявлені
    arrayOfNumbers = arrayOfNumbers.filter(isInteger);

    console.log(arrayOfNumbers)

    // Сортуємо вміст масива у порядку зростання
    arrayOfNumbers = arrayOfNumbers.sort(function(a, b) {
        return a - b
    });


    // Створюємо масив, в якому рахуватимуться випадки повторення того чи іншого числа
    count = 1
    arrayOfOccurrences = []

    for (i = 0; i < arrayOfNumbers.length; i++) {

        // Оскільки масив відсортований, порівнюємо кожне число з сусіднім, якщо збігається — додаємо одиницю
        if (arrayOfNumbers[i - 1] == arrayOfNumbers[i]) {
            count = count + 1
        } 
        else count = 1;

        // Отримані кількості зараховуємо в масив
        arrayOfOccurrencesCopy = arrayOfOccurrences.push(count)

        
    }

    // В отриманому масиві знаходимо найбільше число — найбільшу кількість випадків, що повторюються
    maximumOccur = Math.max(...arrayOfOccurrences)

    console.log(`Найбільша кількість повторень: ${maximumOccur}`)

    // Оскільки мод може бути більше однієї, знаходимо всі індекси, на яких знаходиться максимум
    for (i = 0; i < arrayOfOccurrences.length; i++) {

        // Застосовуємо отримані індекси до масиву з числами, таким чином отримуємо моду (моди)
        if (arrayOfOccurrences[i] == maximumOccur) {
            console.log (`Мода: ${arrayOfNumbers[i]}`)
        }
    }

}
getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 56, 3, 2);
console.log(``)




// 3. Створіть функцію, яка рахує середнє арифметичне всіх переданих в неї аргументів (нецілі числа ігноруються)
console.log(`Функція 3`)

function getAverage(...numbers) {

    let arrayOfNumbers = numbers;

    // Створюємо функцію, яка перевіряє, чи є число цілим
    function isInteger (number) {
        if (Math.trunc(number) - number == 0) return true;
        else return false;
    }

    // Відкидаємо з масиву нецілі числа, якщо вони були виявлені
    arrayOfNumbers = arrayOfNumbers.filter(isInteger);

    console.log(arrayOfNumbers)


    sum = 0

    for (i = 0; i < arrayOfNumbers.length; i++) {
        sum = sum + arrayOfNumbers[i]
    }

    average = sum / arrayOfNumbers.length;

    return console.log(`Середнє арифметичне: ${average}`)


}
getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
console.log(``)




//
console.log(`Функція 4`)

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
        return a - b
    });
    console.log(arrayOfNumbers)


    // Медіана для непарної кількості чисел у масиві
    if (arrayOfNumbers.length % 2 == 1) {
        index = Math.floor(arrayOfNumbers.length / 2)
        median = arrayOfNumbers[index]
    } 
    // Для парної
    else {
        index1 = arrayOfNumbers.length / 2
        index2 = index1 - 1
        median = (arrayOfNumbers[index1] + arrayOfNumbers[index2]) / 2
    }

    return console.log(`Медіана: ${median}`)
}
getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
console.log(``)





///////
console.log(`Функція 5`)

function filterEvenNumbers(...numbers) {
    let arrayOfNumbers = numbers;
    console.log(arrayOfNumbers)

     // Створюємо функцію, яка перевіряє, чи є число парним
     function isOdd (number) {
        if (number % 2 >= 1) return true;
        else return false;
    }

    // Відкидаємо з масиву парні числа, якщо вони були виявлені
    arrayOfNumbers = arrayOfNumbers.filter(isOdd);





    return console.log(arrayOfNumbers)
}
filterEvenNumbers(6, 2, 55, 11, 78, 2, 55, 57, 87, 23, 2, 56, 3, 2)
console.log(``)



////
console.log(`Функція 6`)

function countPositiveNumbers(...numbers) {

    let arrayOfNumbers = numbers;

    console.log(arrayOfNumbers)

 

    // Створюємо функцію, яка перевіряє, чи є число більшим, аніж нуль
    function isMoreThanZero (number) {
       if (number > 0) return true;
       else return false;
   }

   // Відкидаємо з масиву парні числа, якщо вони були виявлені
   arrayOfNumbers = arrayOfNumbers.filter(isMoreThanZero);

   console.log(arrayOfNumbers)

   quantityOfNumbersMoreThanZero = arrayOfNumbers.length

   console.log(`Кількість чисел більших нуля: ${quantityOfNumbersMoreThanZero}`)


}
countPositiveNumbers(1, 1, -2, 3, -4, -5, 6, 0, -99, 2021, Infinity, -Infinity, 0.000001, NaN)
console.log(``)