alert(`Буде підрахована сума всіх чисел у заданому Вами діапазоні.`);

//Отримуємо два числа від користувача
let inputFirstNumber = prompt(`Введіть перше число:`);
let inputSecondNumber = prompt(`Введіть друге число:`);

//Конвертуємо отримані рядки в числа, відкидаємо дробну частину, якщо користувач ввів нецілі числа
let firstNumber = Number(Math.trunc(inputFirstNumber));
let secondNumber = Number(Math.trunc(inputSecondNumber));

//Задовбуємо впертого користувача доти, доки він не введе два числа
while ((isNaN(firstNumber)) || isNaN(secondNumber)) {
    alert(`Ви не виконали умову. Спробуйте ще.`);
    inputFirstNumber = prompt(`Введіть перше число:`);
    inputSecondNumber = prompt(`Введіть друге число:`);

    firstNumber = Number(Math.trunc(inputFirstNumber));
    secondNumber = Number(Math.trunc(inputSecondNumber));
};

//Чи хоче користувач пропустити парні числа?
const skipEvens = confirm(`Пропускати парні числа?`);

/* Виявляємо більше та менше число 
(звісно, можна було це зробити за допомогою Math.min/Math.max, але цей спосіб ближчий до теми заняття) */
let biggestNumber;
let smallestNumber;
if (firstNumber > secondNumber) {
    biggestNumber = firstNumber;
    smallestNumber = secondNumber;
} else {
    biggestNumber = secondNumber;
    smallestNumber = firstNumber;
};

//Рахуємо
let sum = 0;
for (smallestNumber; smallestNumber <= biggestNumber; smallestNumber++) {
    //Якщо користувач ігнорує парні числа...
    if (skipEvens) {
        //...ми їх теж ігноруємо
        if (smallestNumber % 2 === 0) continue;
    }
    sum = sum + smallestNumber;
};

alert(`Результат: ` + sum);