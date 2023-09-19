function personObjects() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('SoftUni', undefined, undefined, undefined),
        new Person('Stephan', 'Johnson', 25, undefined),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'),
    ];
}