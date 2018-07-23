var repo = function () {
	var called = 0;

	var save = function (task) {
		called++;
		console.log('Saving ' + task + ' Called ' + called + ' times');
	};

	console.log('newing up task repo');
	return {
		save: save
	};
};

var taskHandler = function () {
	return {
		save: function () {
			myrepo.save('Hello from taskHandler');
		}
	};
};

var myrepo = repo();

myrepo.save('main');
myrepo.save('main');
myrepo.save('main');

var th = taskHandler();

th.save();
th.save();
th.save();
th.save();
