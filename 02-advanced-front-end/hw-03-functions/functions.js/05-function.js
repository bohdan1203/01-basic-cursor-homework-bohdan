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
    document.writeln(`Буде отримане випадкове число в діапазоні від ${minNumber} до ${maxNumber} <br>`);
    document.writeln(`Результат: ${randomNumber}`);
}
getRandomNumber();