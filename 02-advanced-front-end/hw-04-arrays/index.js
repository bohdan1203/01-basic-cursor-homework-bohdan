const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];



// 1. Утворити пари
function getPairs() {

    // Створити пустий масив, в який пізніше потраплять дані
    const studentsPairs = [];

    // Розбити студентів на пари по принципу хлопець/дівчина і занести кожну пару в свій пустий масив
    const pair1 = [].concat(students[0]).concat(students[2]);
    const pair2 = [].concat(students[1]).concat(students[3]);
    const pair3 = [].concat(students[4]).concat(students[5]);

    // Зробити копію оригінального пустого масиву, та наповнити масив парами
    studentsPairsCopy = studentsPairs.push(pair1);
    studentsPairsCopy = studentsPairs.push(pair2);
    studentsPairsCopy = studentsPairs.push(pair3);

    return studentsPairs;
}
console.log('Функція 1');
console.log(getPairs());
console.log('');



// 2. Призначити теми
function getTheme() {

    const studentsPairsAndThemes = [];

    // Використати готові дані з попередньої функції
    const theme1 = [].concat(getPairs()[0].join(' і ')).concat(themes[0]);
    const theme2 = [].concat(getPairs()[1].join(' і ')).concat(themes[1]);
    const theme3 = [].concat(getPairs()[2].join(' і ')).concat(themes[2]);

    // Решта — аналогічно
    studentsPairsAndThemesCopy = studentsPairsAndThemes.push(theme1);
    studentsPairsAndThemesCopy = studentsPairsAndThemes.push(theme2);
    studentsPairsAndThemesCopy = studentsPairsAndThemes.push(theme3);

    return studentsPairsAndThemes
}
console.log('Функція 2');
console.log(getTheme());
console.log('');



// 3. Поставити особисті оцінки
function getPersonalMarks() {

    const studentsMarks = [];

    const mark1 = [].concat(students[0]).concat(marks[0]);
    const mark2 = [].concat(students[1]).concat(marks[1]);
    const mark3 = [].concat(students[2]).concat(marks[2]);
    const mark4 = [].concat(students[3]).concat(marks[3]);
    const mark5 = [].concat(students[4]).concat(marks[4]);
    const mark6 = [].concat(students[5]).concat(marks[5]);

    studentsMarksCopy = studentsMarks.push(mark1);
    studentsMarksCopy = studentsMarks.push(mark2);
    studentsMarksCopy = studentsMarks.push(mark3);
    studentsMarksCopy = studentsMarks.push(mark4);
    studentsMarksCopy = studentsMarks.push(mark5);
    studentsMarksCopy = studentsMarks.push(mark6);

    return studentsMarks;
}
console.log('Функція 3');
console.log(getPersonalMarks());
console.log('');


// 4. Генерація випадковх оцінок парам
function getPairMarks() {

    const projectMarks = [];

    // Згенерувати випадкові цілі числа від 1 до 5
    const random1 = Math.round(Math.random() * (5 - 1) + 1);
    const random2 = Math.round(Math.random() * (5 - 1) + 1);
    const random3 = Math.round(Math.random() * (5 - 1) + 1);

    const mark1 = [].concat(getTheme()[0]).concat(random1);
    const mark2 = [].concat(getTheme()[1]).concat(random2);
    const mark3 = [].concat(getTheme()[2]).concat(random3);

    projectMarksCopy = projectMarks.push(mark1);
    projectMarksCopy = projectMarks.push(mark2);
    projectMarksCopy = projectMarks.push(mark3);

    return projectMarks
}
console.log('Функція 4');
console.log(getPairMarks());