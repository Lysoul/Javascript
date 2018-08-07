class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname
    }

    displayFullName() {
        return this.name + " " + this.surname;
    }
}

// Or

var Person = class {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname
    }
}

var johnSmith = new Person("John", "Smith");
johnSmith.displayFullName();
