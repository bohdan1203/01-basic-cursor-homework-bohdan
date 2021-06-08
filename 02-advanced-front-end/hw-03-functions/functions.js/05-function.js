// 5. Отримуємо випадкове число в заданому діапазоні
function getRandomNumber() {

    const inputFirstNumber = +prompt(`Введіть перше число:`, 1);
    const inputSecondNumber = +prompt(`Введіть друге число:`, 100);

    const minNumber = Math.min(inputFirstNumber, inputSecondNumber);
    const maxNumber = Math.max(inputFirstNumber, inputSecondNumber);

    const randomNumber = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
    document.writeln(`Буде отримане випадкове число в діапазоні від ${minNumber} до ${maxNumber} <br>`);
    document.writeln(`Результат: ${randomNumber}`);
}
getRandomNumber();