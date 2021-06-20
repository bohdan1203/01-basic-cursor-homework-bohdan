///////////////////////////////////////////////////////////////////////////////////////////////////////
const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }, 
  }];
///////////////////////////////////////////////////////////////////////////////////////////////////////





// 1. Створіть функцію, яка повертає список предметів для конкретного студента

function _getSubjects(i) {
    
    studentSubjects = Object.keys(students[i].subjects); // Достукаємось до предметів потрібного студента
    const arrayOfSubjects = []; // Створюємо пустий масив, в який потраплять предмети у відформматованому виді
    
    for (i = 0; i < studentSubjects.length; i++) {
        subject = studentSubjects[i].replace('_', ' ').toLowerCase(); // Замінюємо підкреслення на пробіл та про всяк випадок приводимо строку до нижнього регістру
        firstLetterCapitalized = subject.charAt(0).toUpperCase(); // Капіталізуємо першу букву
        subject = firstLetterCapitalized + subject.slice(1); // Додаємо решту до першої букви
        arrayOfSubjects.push(subject); // Додаємо предмети в масив
    };

    return arrayOfSubjects
};

function getSubjects(i) {
    console.log(`Функція 1. Предмети студента ${students[i].name}:`);
    console.log(_getSubjects(i)); 
    console.log(``);
    return _getSubjects(i);
};
getSubjects(0);



// 2. Створіть функцію, яка поверне середню оцінку по усім предметам для переданого студента

function _getAverageMark(i) {
    studentSubjectsAndMarks = students[i].subjects; 
    
    studentSubjects = Object.keys(studentSubjectsAndMarks); // Отримуємо масив з назвами предметів
    studentMarks = Object.values(studentSubjectsAndMarks); // Отримуємо масив масивів з оцінками
    
    let sumOfAverages = 0;
    let totalAverageMark;

    for (i = 0; i < studentSubjects.length; i++) {
        let sum = 0;
        let averageMarkOnSubject;

        for (j = 0; j < studentMarks[i].length; j++) { 
            sum = sum + studentMarks[i][j]; // Рахуємо суму всіх оцінок з кожного предмету
            averageMarkOnSubject = Math.round((sum / studentMarks[i].length) * 100) / 100; // Рахуємо середню оцінку з кожного предмету, округлену до двох знаків після коми
        };

        sumOfAverages = sumOfAverages + averageMarkOnSubject; // Рахуємо суму середніх оцінок
        totalAverageMark = Math.round((sumOfAverages / studentSubjects.length) * 100) / 100; // Рахуємо остаточну середню оцінку, округлено до двох знаків після коми
    };

    return totalAverageMark;
};

function getAverageMark(i) {
    console.log(`Функція 2. Середня оцінка студента ${students[i].name}:`);
    console.log(_getAverageMark(i));
    console.log(``);
    return _getAverageMark(i);
};
getAverageMark(1);





///////////////////////////////////////////////////////////////////////////////////////////////////////
const studentsModified = students.map((student, index) =>  
		({name: student.name, course: student.course, average_mark: _getAverageMark(index)}));
///////////////////////////////////////////////////////////////////////////////////////////////////////





// 3. Створіть функцію, яка повертає інформацію загального виду по переданому студенту

function _getStudentInfo(i) {
    return studentsModified[i];
};

function getStudentInfo(i) {
    console.log(`Функція 3. Інформація про студента ${students[i].name}:`)
    console.log(_getStudentInfo(i))
    console.log(``);
    return _getStudentInfo(i);
};
getStudentInfo(2);



// 4. Створіть функцію, яка повертає імена студентів у алфавітному порядку

function getStudentsNames() {
    const arrayOfNames = []; // Створюємо пустий масив, в який потраплять імена студентів

    for (i = 0; i < studentsModified.length; i++) {
        arrayOfNames.push(studentsModified[i].name); // Додаємо кожного студента в масив
    };
    arrayOfNames.sort(); // Сортуємо отриманий масив по алфавіту

    return arrayOfNames;
};
console.log(`Функція 4. Імена студентів в алфавітному порядку:`);
console.log(getStudentsNames());
console.log(``);



// 5. Створіть функцію, яка повертає кращого студента зі списку по показнику середньої оцінки

function getBestStudent() {
    const arrayOfAverageMarks = []; // Створюємо пустий масив, в який потраплять середні оцінки студентів

    for (i = 0; i < studentsModified.length; i++) {
        arrayOfAverageMarks.push(studentsModified[i]['average_mark']); // Додаємо середні оцінки в масив
    };

    bestAverage = Math.max.apply(Math, arrayOfAverageMarks); // Знаходимо найбільшу середню оцінку в масиві
    indexOfBest = arrayOfAverageMarks.indexOf(bestAverage); // Знаходимо індекс найбільшої середньої оцінки в масиві
    bestStudent = studentsModified[indexOfBest].name; // Застосовуємо отриманий індекс, щоб виявити ім'я найкращого студента
   
    return bestStudent;
};
console.log(`Функція 5. Найкращий студент:`);
console.log(getBestStudent());
console.log(``);



// 6. Створіть функцію, яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень

function calculateWordLetters(string) {
    console.log(`Дано: "${string}"`);

    arrayOfLetters = string.split(''); // Розбиваємо текст на масив з буквами
    let counter = {}; // Створюємо пустий об'єкт

    for (i = 0; i < arrayOfLetters.length; i++) { // Проходимося по кожній букві
        
        if (counter[arrayOfLetters[i]]) { 
            counter[arrayOfLetters[i]] = counter[arrayOfLetters[i]] + 1; // Якщо така буква раніше вже траплялася — збільшуємо на одиницю
        } else {
            counter[arrayOfLetters[i]] = 1; // Якщо ні — присвоюємо одиницю і не збільшуємо
        };
    };  

    return counter;
};
console.log(`Функція 6. Об'єкт з буквами та їх кількістю:`);
console.log(calculateWordLetters("lorem ipsum dolor sit amet"));