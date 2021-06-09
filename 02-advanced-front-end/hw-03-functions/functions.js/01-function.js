// 1. Функція, яка отримує будь-яке число та виводить найбільшу цифру в цьому числі
function getMaxDigit() {

    let number = prompt(`Введіть число: `, 2131237235135676);

    while (isNaN(number)) {
        alert(`Ви не виконали умову. Спробуйте ще.`);
        number = prompt(`Введіть число: `, 2131237235135676);
    };

    // Розбиваємо отримане число на масив
    const array = Array.from(number)

    // Конвертуємо кожний елемент масиву в числове значення
    const arrayOfNumbers = array.map((i) => Number(i));
    document.writeln(`<br>`, `Ваше число: ${number}`);

    // Виявляємо найбільше число в масиві
    const maxDigit = Math.max(...arrayOfNumbers)
    document.writeln(`<br><br>`, `Найбільша цифра: ${maxDigit}`)
}
getMaxDigit()