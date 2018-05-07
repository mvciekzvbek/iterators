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

var ProjectRepo = function () {
	var db = {};

	var get = function (id) {
		console.log('Getting project ' + id);
		return {
			name: 'New project'
		};
	};

	var save = function (project) {
		console.log('Saving ' + project.name + ' to the db');
	};

	return {
		get: get,
		save: save
	};
};

var UserRepo = function () {
	var db = {};

	var get = function (id) {
		console.log('Getting user ' + id);
		return {
			name: 'Jon Mills'
		};
	};

	var save = function (user) {
		console.log('Saving ' + user.name + ' to the db');
	};

	return {
		get: get,
		save: save
	};
};

var TaskRepo = function () {
	var db = {};

	var get = function (id) {
		console.log('Getting task ' + id);
		return {
			name: 'new task from db'
		};
	};

	var save = function (task) {
		console.log('Saving ' + task.name + ' to the db');
	};

	console.log('newing up task repo');
	return {
		get: get,
		save: save
	};
};

var RepoFactory = function () {
	this.getRepo = function (repoType) {
		if (repoType === 'task') {
			var taskRepo = new TaskRepo();
			return taskRepo;
		}
		if (repoType === 'user') {
			var userRepo = new UserRepo();
			return userRepo;
		}
		if (repoType === 'project') {
			var projectRepo = new ProjectRepo();
			return projectRepo;
		}
	};
};

var repoFactory = new RepoFactory();

var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));

var user = repoFactory.getRepo('user').get(1);
var project = repoFactory.getRepo('project').get(1);

task1.user = user;
task1.project = project;
