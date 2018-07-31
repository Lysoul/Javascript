var person = {
    name: "John",
    "middle-name": "Ian",
    surname: "Smith",
    address: {
        street: "13 Duncannon Street",
        city: "London",
        country: "United Kingdom"
    }
};

var name = person.name;
var middlename = person["middle-name"];
var city = person.address.city;
person.age = 24; /* Create Properties to Object. */



// ------------------------------------------------ //

var obj = {};
Object.defineProperties(obj, 'attrib', {
    value: 42,
    writable: true,
    configurable: false
});

delete obj.attrib; /* Cannot delete because configurable false */

