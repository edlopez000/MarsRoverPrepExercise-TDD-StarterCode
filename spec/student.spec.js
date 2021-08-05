const assert = require('assert');
const Student = require('../student.js');
const Backpack = require('../backpack.js');
const Item = require('../item.js');


/**** START WITH ITEM TESTS  ****/
/**** THEN MOVE TO BACKPACK TESTS AND METHODS ****/
/**** DO STUDENT TESTS AND METHODS LAST ****/


describe("Student class", function() {

	/*	
		BEFORE YOU BEGIN:
		1) 	Think about when you need assert.strictEqual() vs assert.deepStrictEqual()
		2)	Consider that the assert.throws() method requires a different setup 
			than other methods (look at Command class test in Mars Rover)
	*/

	// Check that name property has been set
	it("correctly instantiates Student object from class when name is passed in as an argument", function() {
		// TODO #12: write a test for code already in constructor
	});

	// What if happens if there is no name argument?
	it("throws error if name is NOT passed into constructor as first parameter", function() {
		// TODO #13: write a test for code already in constructor
	});


	/* 
	The following tests make sure Item objects inside a backpack can be referenced from the Student class after using Student methods
	*/

	// Try adding multiple items to backpack
	it("puts multiple items in backpack using fillBackpack() method", function() {
		// TODO #14: write a test and let it inform how you code the method
	});

	// Try adding a single item object to the backpack
	it("puts one item in backpack using fillBackpack() method", function() {
		// TODO #15: write a test and let it inform how you code the method
	});

	// What if we want to empty the backpack?
	it("empties the backpack with emptyBackpack() method", function() {
		// TODO #16: write a test and let it inform how you code the method
	});

});