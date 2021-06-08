// 9. Видаляємо букви зі строки
function deleteLetters() {

    let text = prompt(`Введіть текст:`, `Гвадалахара`);
    let letterToDelete = prompt(`Укажіть букву, яка буде видалена з тексту`, `а`);
    document.writeln(`Ви ввели: ${text} <br>`)

    // Нівелюємо різницю регістру
    let letterToDeleteUpperCase = letterToDelete.toUpperCase();
    let letterToDeleteLowerCase = letterToDelete.toLowerCase();

    // Видаляємо малі букви, якщо вони є
    text = text.split(letterToDeleteLowerCase);
    text = text.join('');

    // Видаляємо великі букви, якщо вони є
    text = text.split(letterToDeleteUpperCase);
    text = text.join('');

    document.writeln(`Текст без "${letterToDelete}" виглядає наступним чином: ${text}`)
}
deleteLetters();