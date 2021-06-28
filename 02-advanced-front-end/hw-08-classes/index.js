const marks = [5, 4, 4, 5];

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;

        this.getInfo = function() {
            return `Студент ${course}го курсу, ${university}, ${fullName}`;
        };

        this.marks = marks;

        this.averageMark = function() {
            let sum = 0;

            for (let i = 0; i < this.marks.length; i++) {
                sum = sum + this.marks[i];
            };
            return this.averageMark = sum / this.marks.length;
        };

        this.dismiss = function() {
            return this.marks = null;
        };

        this.recover = function() {
            return this.marks = marks;
        };
    };

    get getMarks() {
        return this.marks;
    };

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