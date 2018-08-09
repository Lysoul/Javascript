var PersonWithProtectProperties = (function () {
    function Person(name) {
        this.getName = function () {
            return name;
        };
    }

    return Person;
}());

var PersonWithoutProtect = (function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.getName = function () {
        return this.name;
    };

    return Person;
}());



var p = new PersonWithoutProtect('John');
console.log('Person 1 name: ' + p.getName());
delete p.name;
console.log('Person 1 name: ' + p.getName() + ' — modified outside.');


var p = new PersonWithProtectProperties('John');
console.log('Person 2 name: ' + p.getName());
delete p.name;
console.log('Person 2 name: ' + p.getName() + ' stays private.');