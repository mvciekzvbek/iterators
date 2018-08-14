'use strict';

var cat = {
	name: {
		first: 'Fluffy',
		last: 'LaBeouf'
	},
	color: 'white'
}

Object.defineProperty('cat', fullName,
	{
		get: function () {
			return this.name.first + ' ' + this.name.last;
		},
		set: function (value) {
			var nameParts = value.split(' ');
			this.name.first = nameParts[0];
			this.name.last = nameParts[1];
		}

	}
)

console.log(cat.fullName);
cat.fullName = 'Muffin Top';
console.log(cat.fullName);