// 8. Генерація випадкового пароля
function getRandomPassword(password = Math.round(Math.random() * 100000000)) {

    // Чи влаштовує користувача дефолтна довжина пароля (8 чисел)?
    let isSuitable = confirm(`Чи влаштовує Вас пароль з 8 чисел?`);

    // Якщо так
    if (isSuitable) {
        document.writeln(`Ваш пароль: ${password}`)
        return;
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

        document.writeln(`Ваш пароль: ${password}`)
    }
}
getRandomPassword();