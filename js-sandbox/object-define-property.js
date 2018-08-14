var task = {
	title: 'My title',
	description: 'My description'
};

Object.defineProperty(task, 'toString', {
	value: function () {
		return this.title + ' ' + this.description;
	},
	writeable: false,
	enumerable: false,
	configurable: false
});

// won't work - configurable: false
Object.defineProperty(task, 'toString', {
	enumerable: true
});

// won't work - writeable: false
task.toString = 'hi';

console.log(task.toString());

// won't work - enumerable: false
console.log(Object.keys(task));
