const marks = [5, 4, 4, 5];

// 1
class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;

        // 2
        this.getInfo = function() {
            return `Студент ${course}го курсу, ${university}, ${fullName}`;
        };

        this.marks = marks;

        // 5
        this.averageMark = function() {
            let sum = 0;

            for (let i = 0; i < this.marks.length; i++) {
                sum = sum + this.marks[i];
            };
            return this.averageMark = sum / this.marks.length;
        };

        // 6
        this.dismiss = function() {
            return this.marks = null;
        };

        // 7
        this.recover = function() {
            return this.marks = marks;
        };
    };

    // 3
    get getMarks() {
        return this.marks;
    };

    // 4
    set setMarks(mark) {
        if (this.marks == null) return null;
        return this.marks.push(mark);
    };
};

const ostap = new Student('Вища Школа Психотерапії м.Одеса', 2, 'Остап Бендер');


console.log(ostap.getInfo());


console.log(ostap.getMarks);

ostap.setMarks = 5;
console.log(ostap.getMarks);

console.log(ostap.averageMark());

console.log(ostap.dismiss());
ostap.setMarks = 5;
console.log(ostap.getMarks);

console.log(ostap.recover());



// console.log(`////////////////////////////////ADVANCED////////////////////////////////`);

// class BudgetStudent extends Student {
//     constructor(university, course, fullName) {
//         super(university, course, fullName);

//         this.getScholarship = function() {
//             if (this.averageMark >= 4) return `Ви отримали 1400 грн. стипендії`;
//             else return `Ви не отримаєте стипендію`;
//         };

//         this.interval = setInterval(this.getScholarship, 2000);
//     };


// };

// const theodore = new BudgetStudent('УУУ', 1, 'Теодор Рузвельт');


// console.log(theodore.marks);
// console.log(theodore.averageMark());
// console.log(theodore.getScholarship());

// console.log(theodore.interval);





