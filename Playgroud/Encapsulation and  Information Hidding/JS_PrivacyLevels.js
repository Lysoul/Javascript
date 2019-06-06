    function TheatreSeats() {
    var seats = []; //Like a decare variable.

    //Set
	this.placePerson = function (person) {
		seats.push(person);
    }

    //Get
	this.countOccupiedSeats = function () {
		return seats.length;
	}
	this.maxSize = 10;
}


TheatreSeats.prototype.isSoldout = function () {
	return this.countOccupiedSeats() >= this.maxSize;
}

TheatreSeats.prototype.countFreeSeats = function () {
	return this.maxSize - this.countOccupiedSeats();
}


var theatre = new TheatreSeats();
theatre.placePerson({ name: "Jakkavat", surname: "Deemak" });
console.log(theatre.isSoldout());
console.log(theatre.countFreeSeats());