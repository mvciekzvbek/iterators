var Task = function (data) {
	this.name = data.name;
	this.completed = false;
};

Task.prototype.complete = function () {
	console.log('Completing task: ' + this.name);
	this.completed = true;
};

Task.prototype.save = function () {
	console.log('Saving task: ' + this.name);
	repo.save(this);
};

var repo = (function () {
	var db = {};

	var get = function (id) {
		console.log('Getting task ' + id);
		return {
			name: 'new task from db'
		};
	};

	var save = function (task) {
		console.log('Saving ' + task.name + 'to the db');
	};

	return {
		get: get,
		save: save
	};
})();

var task1 = new Task(repo.get(1));
var task2 = new Task({name: 'Prepare Module Pattern demonstration'});

task1.complete();
task1.save();
task2.save();
