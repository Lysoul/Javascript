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

/*
var Person = class {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname
    }
}
*/

//Both not support for IE11 and lower.

var johnSmith = new Person("John", "Smith");

console.log(johnSmith.displayFullName());