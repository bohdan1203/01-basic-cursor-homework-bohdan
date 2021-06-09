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
    
    document.writeln(resultString);
}
convertCurrency();