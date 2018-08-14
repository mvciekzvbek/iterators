'use strict';

var arr = ['red', 'blue', 'green'];

Object.defineProperty(Array.prototype, 'last', {
	get: function () {
		return this[this.length - 1]
	}
})

console.log(arr.last);

var arr2 = ['one', 'two', 'three'];

console.log(arr2.last);