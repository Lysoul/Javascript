var emptyObject = {};

var person = { "name": "Jakkavat", "lastname": "Deemak" };

person.greeting = function () {
    return "Hello, My name is " + this.name;
};

person.greetingWithIIFE = function () {
    return "Hello, My name is " + this.name+" I'm function with IIFE";
}();

console.log(person.greeting);
console.log(person.greetingWithIIFE);

