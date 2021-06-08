// 10. Чи є строка палиндромом?
function isPalyndrom() {

    let text = prompt(`Введіть текст:`, `А чи в окуня вичуди виду, чи в Януковича?`);
    document.writeln(`Ви ввели: ${text} <br><br>`)
    
    // Нівелюємо різницю регістру
    text = text.toLowerCase();

    // Розбиваємо строку на масив символів
    let textOriginal = text.split('');

    // Оскільки reverse змінює оригінальний масив (а він нам ще знадобиться), робимо копію оригінальної строки і також розбиваємо її на символи
    const textOriginal2 = text.split('')
    // Реверсуємо отриманий масив
    let textReversed = textOriginal2.reverse();

    // Складаємо масиви назад в строки
    textOriginal = textOriginal.join('');
    textReversed = textReversed.join('');

    // Видаляємо зі строк знаки пунктуації та пробіли
    textOriginal = textOriginal.split(/[.,\/#!$%\^&\*;: ?{}=\-_`~()]/g);
    textReversed = textReversed.split(/[.,\/#!$%\^&\*;: ?{}=\-_`~()]/g);

    textOriginal = textOriginal.join('');
    textReversed = textReversed.join('');

    // Порівнюємо отримані строки
    (textOriginal == textReversed) ? result = (true +". Цей текст читається однаково, як сзаду наперед, так і спереду назад.") : result = (false +". Цей текст не є палиндромом.")
    

    document.writeln(result)
}
isPalyndrom();