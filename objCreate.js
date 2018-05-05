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

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
	value: function () {
		return this.title + ' ' + 'is urgent';
	},
	writeable: false,
	enumerable: false,
	configurable: false
});

console.log(urgentTask.toString());
