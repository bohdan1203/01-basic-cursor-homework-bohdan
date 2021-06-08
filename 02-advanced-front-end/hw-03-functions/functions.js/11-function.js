// 11. Видаляємо зі строки симмоли, які зустрічаються в ній більше одного разу
function deleteDuplicateLetter() {

    let text = prompt(`Введіть текст:`, `Абракадабра`);
    document.writeln(`Ви ввели: ${text} <br><br>`)

    // Приводимо текст до нижнього регістру
    text = text.toLowerCase();

    // Утворюємо масив
    text = text.split('');
    console.log(text);

    // Це завдання поки що не для мого рівня, як робити далі я не знав, тому ця частина коду буда стибрена з інету
    // Не маю уявлення, як воно працює, треба розбиратися
    let result = text.filter(function(e) {
    return text.indexOf(e) == text.lastIndexOf(e);
    });
    console.log(result)

    result = result.join('');
    document.writeln(`Якщо видалити з тексту всі символи, які зустрічаються в ньому більше одного разу, результат виглядатиме наступним чином: <br><br>"${result}"`)

}
deleteDuplicateLetter()