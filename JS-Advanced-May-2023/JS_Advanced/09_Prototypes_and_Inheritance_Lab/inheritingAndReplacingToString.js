function inheritingAndReplacingToString() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return `${super.toString().substring(0, super.toString().length - 1)}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `${super.toString().substring(0, super.toString().length - 1)}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let func = inheritingAndReplacingToString();

let person = new func.Person('Gosho', 'gosho@abv.bg');
console.log(person.toString());

let teacher = new func.Teacher('Pesho', 'pesho@abv.bg', 'JS');
console.log(teacher.toString());

let student = new func.Student('Lazar', 'lazar@abv.bg', 'JS Advanced');
console.log(student.toString());