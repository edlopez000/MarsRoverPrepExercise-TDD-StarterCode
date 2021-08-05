/**** START WITH ITEM TESTS  ****/
/**** THEN MOVE TO BACKPACK TESTS AND METHODS ****/
/**** DO STUDENT TESTS AND METHODS LAST ****/

class Item {

	constructor(name, location) { // TODO #1: add location property to arguments
		this.name = name;
		if (!name) {
			throw Error("Name of item is required!");
		}
		// TODO #1: add location property
    this.location = location;
		// TODO #2: add error handling for location property
    if (!location) {
      throw Error("Name of location is required!");
    }

		// ok to pass in 'null' as an argument, but not to leave out argument entirely
	}

	

}

module.exports = Item;