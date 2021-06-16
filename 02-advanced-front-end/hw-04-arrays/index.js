const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];



// 1. Утворити пари
function getPairs() {
    const studentsPairs = [];

    for (i = 0; i < students.length; i = i + 2) {
        pair = [].concat(students[i]).concat(students[i + 1]);
        studentsPairs.push(pair);
    };
    return studentsPairs;
};
console.log('Функція 1');
console.log(getPairs()); 
console.log('');



// 2. Призначити теми
function getTheme() {
    const studentsPairsAndThemes = [];
    const pairs = getPairs();

    for (i = 0; i < themes.length; i++) {
        theme = [].concat(pairs[i].join(' і ')).concat(themes[i]);
        studentsPairsAndThemes.push(theme);
    };
    return studentsPairsAndThemes;
};
console.log('Функція 2');
console.log(getTheme()); 
console.log('');



// 3. Поставити особисті оцінки
function getPersonalMarks() {
    const studentsMarks = [];

    for (i = 0; i < students.length; i++) {
        mark = [].concat(students[i]).concat(marks[i]);
        studentsMarks.push(mark);
    };
    return studentsMarks;
};
console.log('Функція 3');
console.log(getPersonalMarks());
console.log('');



// 4. Генерація випадковх оцінок парам
function getPairMarks() {
    const projectMarks = [];
    const theme = getTheme();

    for (i = 0; i < themes.length; i++) {
        random = Math.round(Math.random() * (5 - 1) + 1);
        mark = [].concat(theme[i]).concat(random);
        projectMarks.push(mark);
    };
    return projectMarks
};
console.log('Функція 4');
console.log(getPairMarks());