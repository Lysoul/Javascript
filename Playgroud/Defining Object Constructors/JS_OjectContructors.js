function Person(name,surname) {
    this.name = name;
    this.surname = surname;
    this.address = "";
    this.email = "";
    this.displayFullName = function () {
        return this.name + " " + this.surname;
    }
}


var johnSmith = new Person("John","Smith");

var jakkavatDeemak = new Person("Jakkavat", "Deemak");

//Test