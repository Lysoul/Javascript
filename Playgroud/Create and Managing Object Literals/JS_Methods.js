var person = {
    name: "John",
    "middle-name": "Ian",
    surname: "Smith",
    address: {
        street: "13 Duncannon Street",
        city: "London",
        country: "United Kingdom"
    },
    fullName: function () {
        return this.name + " " + this.surname;
    }
};
