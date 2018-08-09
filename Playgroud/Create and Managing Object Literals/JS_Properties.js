var person = {
    name: "John",
    "middle-name": "Ian",
    surname: "Smith",
    address: {
        street: "13 Duncannon Street",
        city: "London",
        country: "United Kingdom",
        "abc-ss" : "test"
    }
};

var name = person.name;
var middlename = person["middle-name"];
var name2 = person.address["abc-ss"];
var city = person.address.city;
person.age = 24; /* Create Properties to Object. */
console.log(person);

// ------------------------------------------------ //

var obj = {};
Object.defineProperties(obj, {
    property1: {
        value: 42,
        writable: true,
        configurable: false
    }
});
delete obj.property1; /* Cannot delete because configurable false */
console.log(obj.property1);




// ------------------------------------------------ //
