// 3. Форматуємо рядок: перша літера велика, решта малі
function lowerCaseCapitalize() {

    const enterText = prompt(`Введіть текст: `, `дОВІлЬНиЙ НабіР сліВ`);
    document.writeln(`Ви ввели: ${enterText} <br>`);

    // Приводимо весь текст в нижній регістр
    const lower = enterText.toLowerCase();

    // Виокремлюємо першу літеру та робимо її великою
    const firstLetter = lower.charAt(0).toUpperCase();

    // Додаємо решту до першої літери
    document.writeln(`Результат: ${firstLetter + lower.slice(1)}`);
}
lowerCaseCapitalize();