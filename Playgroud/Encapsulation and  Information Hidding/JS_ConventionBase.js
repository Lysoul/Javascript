function TheatreSeats() {
    this._seats = [];
}

TheatreSeats.prototype.placePerson = function (person) {
    this._seats.push(person);
};

var theatreSeats = new TheatreSeats();

theatreSeats.placePerson({ name: "Jakkavat", surname: "Deemak" });
console.log(theatreSeats);