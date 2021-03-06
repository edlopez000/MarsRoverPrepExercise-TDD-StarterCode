const assert = require('assert');
const Backpack = require('../backpack.js');
const Item = require('../item.js');

/**** START WITH ITEM TESTS  ****/
/**** THEN MOVE TO BACKPACK TESTS AND METHODS ****/
/**** DO STUDENT TESTS AND METHODS LAST ****/


describe("Backpack class", function() {

	/*	
		BEFORE YOU BEGIN:
		1) 	Think about when you need assert.strictEqual() vs assert.deepStrictEqual()
		2)	Consider that the assert.throws() method requires a different setup 
			than other methods (look at Command class test in Mars Rover)
	*/

	/* 	
		Even though the Backpack class has three properties as arguments 
		in its constructor, they are declared with default values, 
		so it's worth testing to make sure the object also has those 
		default values if it is instantiated from the class without any 
		arguments. 
	*/

	it("can instantiate an object with no arguments and the main property will have the default value", function() {
		// first create an empty object from your class to use for test
		myBackpack = new Backpack(); 
		// then reference only the part of that object you want to check
		actual = myBackpack.main; 
		expected = []; // this should be the result you expect
		assert.deepStrictEqual(actual, expected); 
		// NOTE: .deepStrictEqual() needed for non-primitive comparison	
	});

	it("can instantiate an object with no arguments and the sidePocket property will have the default value", function() {
		myBackpack = new Backpack(); // object needed for test
		actual = myBackpack.sidePocket; // specific part to check
		expected = null; // result expected from test
		assert.strictEqual(actual, expected); 
		// NOTE: don't need .deepStrictEqual() for null comparison
	});

	/* 
		Now let's see what happens when we DO use arguments when 
		instantiating an object of the Backpack class, and 
		ALSO explore how we might combine three tests in one.
	*/

	it("can instantiate an object with existing values using the constructor's arguments", function() {
		// set up all objects needed for test
		item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment");
		// pass in two arrays and an object as expected for the Backpack constructor
		myBackpack = new Backpack([item1, item4],[item2],item3); 
		// for the sake of testing several strings at once, put test expressions in an array
		actual = [myBackpack.main[1].name, myBackpack.frontPocket[0].name, myBackpack.sidePocket.name];
		// structure the expected results in an array that mirrors the test expressions
		expected = ["spiral notebook", "pencil", "water bottle"];
		assert.deepStrictEqual(actual, expected); 
		// NOTE: .deepStrictEqual() required for array comparison	
	});


	/*
		Now let's use the class method .addToBackpack() 
		instead of the constructor to put items inside.
	*/

	it("can add items to a backpack object using the class's addToBackpack() method", function() {
		// TODO #3: write a test and let it inform how you code the method
		item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		myBackpack = new Backpack(item1, item2, item3);

		expect(myBackpack.main).toEqual(item1);
		expect(myBackpack.frontPocket).toEqual(item2);
		expect(myBackpack.sidePocket).toEqual(item3);

	});

	/* 
		This test is essentially the same as the previous one, 
		but use an additional variable to break up the 
		notation a bit prior to setting the 'actual' property. 
	*/

	it("can add item to a backpack object using the class's addToBackpack() method", function() {
		// TODO #4: write a test and let it inform how you code the method
		myBackpack = new Backpack();
		item1 = new Item("textbook", "main compartment");
		myBackpack.addToBackpack(item1);

		expect(myBackpack.main).toEqual([item1]);
	});

	/* 
		What if the item doesn't have a specified location? The Item 
		constructor requires an argument for location, even if it's null.
		This is different from the Backpack constructor, which allows 
		for no arguments because defaults are set as parameters.
	*/
		
	it("can assign location to item using addToBackpack() method if location was null", function() {
		// TODO #5: write a test and let it inform how you code the method
		myBackpack = new Backpack();
		let item1 = new Item("notebook", null);
		myBackpack.addToBackpack(item1);

		expect(myBackpack.main).toEqual([item1]);
	});


	/* 
		Now we need to make sure a helper function, .findItemInArray(), can be 
		written and tested without needing the findItemInBackpack() method 
		that will eventually call it.
	*/

	it("should return index of item that is located in an array", function() {
		// TODO #6: write a test and let it inform how you code the method
		let arr = [5, 9, 2, 7];
		let expected = arr.indexOf(7);
		myBackpack = new Backpack();
		let actual = myBackpack.findItemInArray(7, arr);

		expect(expected).toEqual(actual);

	});

	it("should return -1 if item is not found in array", function() {
		// TODO #7: write a test and let it inform how you code the method
		let arr = [5, 9, 2, 7];
		let expected = arr.indexOf(4);
		myBackpack = new Backpack();
		let actual = myBackpack.findItemInArray(4, arr);

		expect(expected).toEqual(actual);
	});


	/* 
		Now we need to write and test a method, .findItemInBackpack(), that 
		returns the compartment of a specific item (either an array or object 
		depending on which property of Backpack it is)
	*/

	// What if it's in the main pocket or front pocket? (arrays of objects)
	it("should return property (compartment) of backpack if item is located in main or front pocket", function() {
		// TODO #8: write a test and let it inform how you code the method
	});

	// What if it's in the side pocket? (one object)
	it("should return property (compartment) of backpack if item is location in side pocket", function() {
		// TODO #9: write a test and let it inform how you code the method
	});

	// What if it is a front pocket or main compartment item but isn't there?
	it("throws error if item is not found in main or front pocket", function() {
		// TODO #10: write a test and let it inform how you code the method
	});

	// What if it is a side pocket item but isn't there? 
	it("throws error if item is not found in side pocket", function() {
		// TODO #11: write a test and let it inform how you code the method
	});


	/*
		What about a function to remove a single item from the backpack?
		Write your tests below and let them inform how you code the
		function in backpack.js
	*/

	// TODO: Write tests for a new Backpack method, removeItemFromBackpack()	
	// Full disclosure: this part isn't in the solution file yet :-D


});