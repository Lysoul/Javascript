var emptyObject = {};

var person = { "name": "Jakkavat", "lastname": "Deemak" };

person.greeting = function () {
    return "Hello, My name is" + this.name;
};
