// 2. Зведення в степінь без використання Math.pow та **
function powerWithoutPower() {

    let number = +prompt(`Введіть число, яке буде зведено в ступінь: `, 10);
    let power = +prompt('Введіть ступінь: ', 10);

    // Перевіряємо, чи числа ввів користувач, та чи є ступінь додатним числом
    while (isNaN(number) || isNaN(power) || (power < 0)) {
        alert(`Ви не виконали умову. Спробуйте ще.`);
        number = +prompt(`Введіть число, яке буде зведено в ступінь: `, 10);
        power = +prompt('Введіть ступінь: ', 10);
    };

    // Будь-яке число у нульовому степені дорівнює одиниці
    let result = 1;
    if (power === 0) {
        document.writeln(`${number}<sup>0</sup>` + ` = 1`);
        return
        // Рахуємо
    } else {
        for (i = 1; i <= power; i++) {
            result = result * number;
        }
    }
    document.writeln(`${number}<sup>${power}</sup>` + ` = ` + `${result}`);
}
powerWithoutPower();