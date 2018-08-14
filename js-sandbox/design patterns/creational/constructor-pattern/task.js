var Task = function (name) {
	this.name = name;
	this.completed = false;

	this.complete = function () {
		console.log('Completing task: ' + this.name);
		this.completed = true;
	};

	this.save = function () {
		console.log('Saving task: ' + this.name);
	};
};

module.exports = Task;


