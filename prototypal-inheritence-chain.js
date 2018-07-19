'use strict';

function Animal (voice) {
	this.voice = voice || 'bark';
}

Animal.prototype.speak = function () {
	console.log(this.voice);
}

function Cat (name, color) {
	// call parent's constructor
	Animal.call(this, 'Meow');
	this.name = name;
	this.color = color;
}

// assigning Animal as a prototype of the Cat function, this also sets constructor function to be Animal 
Cat.prototype = Object.create(Animal.prototype);
// we want Cat constructor to be Cat function
Cat.prototype.construcor = Cat;

var fluffy = new Cat('Fluffy', 'white');

console.log(fluffy);
/**
 * Cat {
 * 	voice: 'Meow',
 * 	name: 'Fluffy',
 * 	color: 'white',
 *  speak: function (){
 * 		...
 * 	}
 * }
 */

 console.log(fluffy._proto_); // Cat
 console.log(fluffy._proto_._proto_) // Animal