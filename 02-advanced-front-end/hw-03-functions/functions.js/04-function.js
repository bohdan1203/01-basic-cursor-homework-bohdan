// 4. Вираховуємо суму, що залишається після сплати податку від заробітної плати
function calcSalaryWithoutTaxes() {

    const taxes = 0.195;
    let salary = +prompt('Розмір зарплати:', '10000');

    // Перевіряємо, чи число ввів користувач
    while (isNaN(salary)) {
        alert(`Ви не виконали умову. Спробуйте ще.`);
        salary = +prompt('Розмір зарплати:', '10000');
    };

    const taxesAmount = salary * taxes;
    const salaryWithoutTaxes = salary - taxesAmount;

    document.writeln(`Зарплата: ${salary} грн <br>`)
    document.writeln(`Податок: ${taxesAmount} грн <br>`)
    document.writeln(`Залишається: ${Math.round(salaryWithoutTaxes * 100) / 100} грн`)
}
calcSalaryWithoutTaxes();