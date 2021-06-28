class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;

        this.getInfo = function() {
            return `Студент ${course}го курсу, ${university}, ${fullName}`
        }
    };
};

const theodore = new Student('UUU', 1, 'Теодор Рузвельт');


console.log(theodore.getInfo())
