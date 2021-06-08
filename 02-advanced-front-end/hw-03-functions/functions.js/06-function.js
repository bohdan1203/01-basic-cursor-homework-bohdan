// 6. Підраховуємо кількість певних символів у рядку
function countLetter() {

    const text = prompt('Введіть текст:', "Гвадалахара");
    const letterToCount = prompt('Які літери рахувати?', "а");

    // Нівелюємо різницю регістру
    const letterToCountLowerCase = letterToCount.toLowerCase();
    const letterToCountUpperCase = letterToCount.toUpperCase();
    
    // Дізнаємось довжину рядка
    letterQuantity = text.length;
   
    // Проходимося по всіх символах у рядку
    result = 0

    for (let i = 0; i < letterQuantity; i++) {
        let currentLetter = text.charAt(i);

        // Якщо знаходимо символ, який нам треба — зараховуємо
        if (currentLetter == letterToCountLowerCase || currentLetter == letterToCountUpperCase) {
            result = result + 1
        }
    }
    document.writeln(`Рядок "${text}" містить ${letterQuantity} символів, ${result} з них є символом "${letterToCount}"`);
}
countLetter()