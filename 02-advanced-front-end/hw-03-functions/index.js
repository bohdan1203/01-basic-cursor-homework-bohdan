// 1. Функція, яка отримує будь-яке число та виводить найбільшу цифру в цьому числі
function getMaxDigit() {

    let number = prompt(`Введіть число: `, 2131237235135676);

    // Перевіряємо, чи число ввів користувач
    while (isNaN(number) || number == '' || number == ' ') {
        alert(`Ви не виконали умову. Спробуйте ще.`);
        number = prompt(`Введіть число: `, 2131237235135676);
    };

    // Розбиваємо отримане число на масив
    const array = Array.from(number)

    // Конвертуємо кожний елемент масиву в числове значення
    const arrayOfNumbers = array.map((i) => Number(i));

    // Виявляємо найбільше число в масиві
    const maxDigit = Math.max(...arrayOfNumbers)

    return console.log(`Функція №1: ${number}. Найбільша цифра у цьому числі: ${maxDigit}`)
}



// 2. Зведення в степінь без використання Math.pow та **
function powerWithoutPower() {

    let number = +prompt(`Введіть число, яке буде зведено в ступінь: `, 10);
    let power = +prompt('Введіть ступінь: ', 10);

    // Перевіряємо, чи числа ввів користувач, та чи є ступінь додатним числом
    while (isNaN(number) || isNaN(power) || (power < 0) || number == '' || power == '' || number == ' ' || power == ' ') {
        alert(`Ви не виконали умову. Спробуйте ще.`);
        number = +prompt(`Введіть число, яке буде зведено в ступінь: `, 10);
        power = +prompt('Введіть ступінь: ', 10);
    };

    // Будь-яке число у нульовому степені дорівнює одиниці
    let result = 1;
    if (power === 0) {
        result = 1
        // Рахуємо
    } else {

        for (i = 1; i <= power; i++) {
            result = result * number;
        }
    }
    return console.log(`Функція №2: ${number} в степені ${power} дорівнює ${result}`)
}



// 3. Форматуємо рядок: перша літера велика, решта малі
function lowerCaseCapitalize() {

    const enterText = prompt(`Введіть текст: `, `дОВІлЬНиЙ НабіР сліВ`);

    // Приводимо весь текст в нижній регістр
    const lower = enterText.toLowerCase();

    // Виокремлюємо першу літеру та робимо її великою
    const firstLetter = lower.charAt(0).toUpperCase();

    // Додаємо решту до першої літери
    return console.log(`Функція №3: Відформатований текст: "${firstLetter + lower.slice(1)}"`);
}



// 4. Вираховуємо суму, що залишається після сплати податку від заробітної плати
function calcSalaryWithoutTaxes() {

    const taxes = 0.195;
    let salary = +prompt('Розмір зарплати:', '10000');

    // Перевіряємо, чи число ввів користувач
    while (isNaN(salary) || salary == '' || salary == ' ') {
        alert(`Ви не виконали умову. Спробуйте ще.`);
        salary = +prompt('Розмір зарплати:', '10000');
    };

    const taxesAmount = salary * taxes;
    const salaryWithoutTaxes = salary - taxesAmount;

    return console.log(`Функція №4: Сума після сплати податків: ${(Math.round(salaryWithoutTaxes * 100) / 100)} грн`)
}



// 5. Отримуємо випадкове число в заданому діапазоні
function getRandomNumber() {

    let inputFirstNumber = +prompt(`Введіть перше число:`, 1);
    let inputSecondNumber = +prompt(`Введіть друге число:`, 100);

    // Перевіряємо, чи числа ввів користувач
    while (isNaN(inputFirstNumber) || isNaN(inputSecondNumber) || inputFirstNumber == '' || inputSecondNumber == '' || inputFirstNumber == ' ' || inputSecondNumber == ' ') {
        alert(`Ви не виконали умову. Спробуйте ще.`);
        inputFirstNumber = +prompt(`Введіть перше число:`, 1);
        inputSecondNumber = +prompt(`Введіть друге число:`, 100);
    };

    const minNumber = Math.min(inputFirstNumber, inputSecondNumber);
    const maxNumber = Math.max(inputFirstNumber, inputSecondNumber);

    const randomNumber = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);

    return console.log(`Функція №5: Випадкове число між ${minNumber} та ${maxNumber}: ${randomNumber}`)
}



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

        // Якщо знаходимо символ, який нам треба — зараховуємо
        if (currentLetter == letterToCountLowerCase || currentLetter == letterToCountUpperCase) {
            result = result + 1
        }
    }

    return console.log(`Функція №6: Рядок "${text}" містить ${letterQuantity} символів, ${result} з них є символом "${letterToCount}"`)
}



// 7. Конвертуємо гривні в долари або долари в гривні
function convertCurrency() {

    // Користувач вводить суму та валюту в одне поле, далі розберемося, що до чого
    let inputAmountAndCurrency = prompt(`Введіть суму та валюту (UAH або $)`, `666 UAH`);

    // Нівелюємо різницю регістру
    let inputToUpperCase = inputAmountAndCurrency.toUpperCase();

    // Намагаємося знайти в рядку UAH або $, якщо не знаходимо — видаємо помилку та пробуємо ще раз
    while (inputToUpperCase.indexOf('UAH') < 0 && inputToUpperCase.indexOf('$') < 0) {
        alert('Невідома валюта');
        inputAmountAndCurrency = prompt(`Введіть суму та валюту (UAH або $)`, `666 UAH`);
        inputToUpperCase = inputAmountAndCurrency.toUpperCase();
    }

    // Видаляємо з рядка все зайве, залишаємо тільки числа
    let deleteUAH = inputToUpperCase.replace('UAH', '');
    let delete$ = deleteUAH.replace('$', '');
    let remainNumbersOnly = delete$.replace(' ', '');

    // Конвертуємо те, що залишилося в числове значення
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
    return console.log(`Функція №7: ${resultString}`)
}



// 8. Генерація випадкового пароля
function getRandomPassword(password = Math.round(Math.random() * 100000000)) {

    // Чи влаштовує користувача дефолтна довжина пароля (8 чисел)?
    let isSuitable = confirm(`Чи влаштовує Вас пароль з 8 чисел?`);

    // Якщо так
    if (isSuitable) {
        return console.log(`Ваш пароль: ${password}`);
        // Якщо ні...
    }   else {
        // ...запитуємо, скільки чисел він хоче
        let digitsQuantity = +prompt('Встановіть бажану довжину пароля (кількість чисел):', 6);

        // Перевіряємо, чи число ввів користувач
        while (isNaN(digitsQuantity)) {
            alert(`Ви не виконали умову. Спробуйте ще.`);
            digitsQuantity = +prompt('Встановіть бажану довжину пароля (кількість чисел):', 6);
        };

        // Пароль не має бути занадто коротким або занадто довгим
        while (digitsQuantity < 4 || digitsQuantity > 16) {
            alert(`Пароль має містити не менше 4 і не більше 16 чисел`);
            digitsQuantity = +prompt('Встановіть бажану довжину пароля (кількість чисел):', 6);
        } 

        digitsQuantity = 10 ** digitsQuantity
        password = Math.round(Math.random() * digitsQuantity);

        return console.log(`Функція №8: Ваш пароль: ${password}`);
    }
}



// 9. Видаляємо букви зі строки
function deleteLetters() {

    let text = prompt(`Введіть текст:`, `Гвадалахара`);
    let letterToDelete = prompt(`Укажіть букву, яка буде видалена з тексту`, `а`);

    // Нівелюємо різницю регістру
    let letterToDeleteUpperCase = letterToDelete.toUpperCase();
    let letterToDeleteLowerCase = letterToDelete.toLowerCase();

    // Видаляємо малі букви, якщо вони є
    text = text.split(letterToDeleteLowerCase);
    text = text.join('');

    // Видаляємо великі букви, якщо вони є
    text = text.split(letterToDeleteUpperCase);
    text = text.join('');

    return console.log(`Функція №9: Текст без "${letterToDelete}" виглядає наступним чином: ${text}`)
}



// 10. Чи є строка паліндромом?
function isPalyndrom() {

    let text = prompt(`Введіть текст:`, `А чи в окуня вичуди виду, чи в Януковича?`);

    // Нівелюємо різницю регістру
    text = text.toLowerCase();

    // Розбиваємо строку на масив символів
    let textOriginal = text.split('');

    // Оскільки reverse змінює оригінальний масив (а він нам ще знадобиться), робимо копію оригінальної строки і також розбиваємо її на символи
    const textOriginal2 = text.split('')
    // Реверсуємо отриманий масив
    let textReversed = textOriginal2.reverse();

    // Складаємо масиви назад в строки
    textOriginal = textOriginal.join('');
    textReversed = textReversed.join('');

    // Видаляємо зі строк знаки пунктуації та пробіли
    textOriginal = textOriginal.split(/[.,\/#!$%\^&\*;: ?{}=\-_`~()]/g);
    textReversed = textReversed.split(/[.,\/#!$%\^&\*;: ?{}=\-_`~()]/g);

    textOriginal = textOriginal.join('');
    textReversed = textReversed.join('');

    // Порівнюємо отримані строки
    (textOriginal == textReversed) ? result = (true +". Цей текст читається однаково, як сзаду наперед, так і спереду назад.") : result = (false +". Цей текст не є паліндромом.")

    return console.log(`Функція №10: ${result}`)
}



// 11. Видаляємо зі строки символи, які зустрічаються в ній більше одного разу
function deleteDuplicateLetter() {

    let text = prompt(`Введіть текст:`, `Абракадабра`);

    // Приводимо текст до нижнього регістру
    text = text.toLowerCase();

    // Утворюємо масив
    text = text.split('');

    // Це завдання поки що не для мого рівня, як робити далі я не знав, тому ця частина коду була стибрена з інету
    // Не маю уявлення, як воно працює, треба розбиратися
    let result = text.filter(function(e) {
    return text.indexOf(e) == text.lastIndexOf(e);
    });

    // Збираємо те, що залишилося знову в строку
    result = result.join('');

    return console.log(`Функція №11: Якщо видалити з тексту всі символи, які зустрічаються в ньому більше одного разу, результат виглядатиме наступним чином: "${result}"`)

}

// Можливо, ще знадобиться

// console.log(`Функція №1: ${getMaxDigit()}`)
// console.log(`Функція №2: ${powerWithoutPower()}`)
// console.log(`Функція №3: ${lowerCaseCapitalize()}`)
// console.log(`Функція №4: ${calcSalaryWithoutTaxes()}`)
// console.log(`Функція №5: ${getRandomNumber()}`)
// console.log(`Функція №6: ${countLetter()}`)
// console.log(`Функція №7: ${convertCurrency()}`)
// console.log(`Функція №8: ${getRandomPassword()}`)
// console.log(`Функція №9: ${deleteLetters()}`)
// console.log(`Функція №10: ${isPalyndrom()}`)
// console.log(`Функція №11: ${deleteDuplicateLetter()}`)