function createPerson(firstName, lastName) {

    const person = {
        _firstName: firstName,
        _lastName: lastName,

        get firstName() {
            return this._firstName;
        },

        set firstName(value) {
            this._firstName = value;
        },

        get lastName() {
            return this._lastName;
        },

        set lastName(value) {
            this._lastName = value;
        },

        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },

        set fullName(value) {
            const regex = /^[A-Za-z]+\s{1}[A-Za-z]+$/;

            if (regex.test(value)) {
                const [firstName, lastName] = value.split(' ');

                this._firstName = firstName;
                this._lastName = lastName;
            }
        }
    }

    return person;
}

let person = createPerson("Peter", "Ivanov");

console.log(person.fullName); //Peter Ivanov

person.firstName = "George";

console.log(person.fullName); //George Ivanov

person.lastName = "Peterson";

console.log(person.fullName); //George Peterson

person.fullName = "Nikola Tesla";

console.log(person.firstName); //Nikola

console.log(person.lastName); //Tesla