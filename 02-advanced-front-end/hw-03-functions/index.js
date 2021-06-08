/*

// 1. Функція, яка тримує будь-яке число та виводить найбільшу цифру в цьому числі
function getMaxDigit() {
    const number = prompt(`Введіть велике число: `, 2131237235135676);
    // Розбиваємо отримане число на масив
    const array = Array.from(number)
    // Конвертуємо кожний елемент масиву в числове значення
    const arrayOfNumbers = array.map((i) => Number(i));
    document.writeln(arrayOfNumbers);

    // Виявляємо найбільше число в масиві
    const maxDigit = Math.max(...arrayOfNumbers)
    document.writeln(`<br>`, maxDigit)

}
getMaxDigit()



// 2. Зведення в ступінь без використання Math.pow та **
function powerWithoutPower() {

    let number = +prompt(`Введіть число, яке буде зведено в ступінь: `, 10);
    let power = +prompt('Введіть ступінь: ', 10);

    // Перевіряємо, чи ччисла ввів користувач, та чи є ступінь додатнім числом
    while (isNaN(number) || isNaN(power) || (power < 0)) {
        alert(`Ви не виконали умову. Спробуйте ще.`);
        number = +prompt(`Введіть число, яке буде зведено в ступінь: `, 10);
        power = +prompt('Введіть ступінь: ', 10);
    };

    // Будь-яке число у нульвому ступені дорівнює одиниці
    let result = 1;
    if (power === 0) {
        document.writeln(`<p class="power-without-power"> ${number}<sup>0</sup> = 1</p>`);
        // Рахуємо
    } else {

        for (i = 1; i <= power; i++) {
            result = result * number;
            document.writeln(`<p class="power-without-power"> ${number}<sup>${i}</sup> = ${result}</p>`);
        }
    }
}
powerWithoutPower();



// 3. Форматуємо рядок: перша літера велика, решта малі
function lowerCaseCapitalize() {
    const enterText = prompt(`Введіть текст: `, `дОВІлЬНиЙ НабіР сліВ`);
    // Приводимо весь текст в нижній регістр
    const lower = enterText.toLowerCase();
    // Виокремлюємо першу літеру та робимо її великою
    const firstLetter = lower.charAt(0).toUpperCase();
    // Додаємо решту до першої літери
    document.writeln(firstLetter + lower.slice(1));
}
lowerCaseCapitalize();


// 4. Вираховуємо суму, що залишається після оплати податку від заробітної плати
function calcSalaryWithoutTaxes() {
    const taxes = 0.195;
    const salary = +prompt('Розмір зарплати:');

    const taxesAmount = salary * taxes;
    const salaryWithoutTaxes = salary - taxesAmount;
    document.writeln(Math.round(salaryWithoutTaxes * 100) / 100);
}
calcSalaryWithoutTaxes();



// 5. Отримуємо випадкове число в заданому діапазоні
function getRandomNumber() {
    const inputFirstNumber = +prompt(`Введіть перше число:`);
    const inputSecondNumber = +prompt(`Введіть друге число:`);

    const minNumber = Math.min(inputFirstNumber, inputSecondNumber);
    const maxNumber = Math.max(inputFirstNumber, inputSecondNumber);

    const randomNumber = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
    document.writeln(minNumber, maxNumber, randomNumber);
}
getRandomNumber();


// 6. Підраховуємо кількість певних символів у рядку
function countLetter() {
    const text = prompt('Введіть текст:', "Гвадалахара");
    const letterToCount = prompt('Які літери рахувати?', "а");

    // Нівелюємо різницю регістру
    const letterToCountLowerCase = letterToCount.toLowerCase();
    const letterToCountUpperCase = letterToCount.toUpperCase();
    
    // Дізнаємось довжину рядка
    letterQuantity = text.length;
   
    // Проходимося по всіх символах у рядку
    result = 0

    for (let i = 0; i < letterQuantity; i++) {
        let currentLetter = text.charAt(i);
        document.writeln(currentLetter, i)

        // Якщо знаходимо символ, який нам треба — зараховуємо
        if (currentLetter == letterToCountLowerCase || currentLetter == letterToCountUpperCase) {
            result = result + 1
        }
    }
    document.writeln(`Рядок "${text}" містить ${letterQuantity} символів, ${result} з них є символом "${letterToCount}"`);
}
countLetter()




// 7. Конвертуємо гривні в долари або долари в гривні
function convertCurrency() {
    // Користувач вводить суму та валюту в одне поле, далі розберемося, що до чого
    const inputAmountAndCurrency = prompt(`Введіть суму та валюту (UAH або $)`);
    // Нівелюємо різницю регістру
    const inputToUpperCase = inputAmountAndCurrency.toUpperCase();

    // Намагаємося знайти в рядку UAH або $, якщо не знаходимо — видаємо помилку та закінчуємо виконання функції
    if (inputToUpperCase.indexOf('UAH') < 0 && inputToUpperCase.indexOf('$') < 0) {
        alert('Невідома валюта!');
        return;
    }

    // Видаляємо з рядка все зайве, залишаємо тільки числа
    let deleteUAH = inputToUpperCase.replace('UAH', '');
    let delete$ = deleteUAH.replace('$', '');
    let remainNumbersOnly = delete$.replace(' ', '');

    // Конвертуємо те, що залишилося в числове значчення
    const amount = Number(remainNumbersOnly);

    // Виявляємо, яку валюту ввів користувач
    const isUAH = inputToUpperCase.indexOf('UAH');

    // Рахуємо
    if (isUAH >= 0) {
        result = amount / 25;
        resultString = `${amount} UAH = $${result}`;
        
    }   else {
        result = amount * 25;
        resultString = `$${amount} = ${result} UAH`;
    }
    
    document.writeln(resultString);
}
convertCurrency();

*/

// Генерація випадкового пароля
function getRandomPassword(password = Math.round(Math.random() * 100000000)) {

    // Чи влаштовує користувача дефолтна довжина пароля (8 чисел)?
    let isSuitable = confirm(`Чи влаштовує Вас пароль з 8 чисел?`);

    // Якщо так
    if (isSuitable) {
        alert(`Ваш пароль: ${password}`)
        console.log(password)
        return;
        // Якщо ні...
    }   else {
        // Запитуємо, скільки чисел він хоче
        let digitsQuantity = +prompt('Встановіть бажану довжину пароля (кількість чисел):', 6);

        // Пароль не має бути занадто коротким або занадто довгим
        if (digitsQuantity < 4 || digitsQuantity > 16) {
            alert(`Пароль має містити не менше 4 і не більше 16 чисел`);
            return
        } 

        digitsQuantity = 10 ** digitsQuantity
        password = Math.round(Math.random() * digitsQuantity);

        console.log(password)
    }
}
getRandomPassword();

