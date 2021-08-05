/**********************************************************/
/********* MARS ROVER PREP, PART 2 - STARTER CODE *********/
/****************** by Carrie Jones, TLF ******************/
/**********************************************************/

/* 	
	Students - feel free to fork this to your own repl and practice! 
	For more JS examples and practice problems, see the following document:
	https://tinyurl.com/y3bn6st4
*/

/*  
	Part 2 Solution: 
		https://repl.it/@CarolineRose/MarsRoverPrepExercise-TDD#backpack.js
	Live session recording: 
		https://youtu.be/F2bVGhfP5-E
	Part 1 Walkthrough: 
		https://repl.it/@CarolineRose/MarsRoverPrepExercise#index.js
*/

/**** START WITH ITEM TESTS ****/
/**** THEN MOVE TO BACKPACK TESTS AND METHODS ****/
/**** DO STUDENT TESTS AND METHODS LAST ****/

class Backpack {

	constructor(main = [], frontPocket = [], sidePocket = null) { 
		// note defaults set in arguments
		// this allows a backpack to be instantiated with no arguments
		this.main = main, // array of multiple items
		this.frontPocket = frontPocket, // array of multiple items
		this.sidePocket = sidePocket // can hold only one item object at a time
	}

	// Write a method that places an object into its correct backpack compartment
	addToBackpack(item) {
		// TODO #3-5: practice TDD and code this in parts as you write tests
		if (item.location === "front pocket") {
			this.frontPocket.push(item);
		} else if (item.location === "side pocket") {
			this.sidePocket = item;
		} else {
			item.location = "main compartment";
			this.main.push(item);
		}
	}

	// 	Write a function to serve as a helper function to findItemInBackpack()
	findItemInArray(item, array) {
		// TODO #6-7: practice TDD and code this in parts as you write tests
		return array.indexOf(item);
	}

	// 	Write a method that finds an item and returns the compartment. 
	findItemInBackpack(item) {
		// TODO #8-11: practice TDD and code this in parts as you write tests
	}

	// Write a method to remove just one item at a time from the backpack
	removeItemFromBackpack(item) {
		// TODO: practice TDD and code this in parts as you write tests
		// Full disclosure: this part isn't in the solution file yet :-D
	}


}

module.exports = Backpack;