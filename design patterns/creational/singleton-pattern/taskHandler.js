// second instance of repo
// var repo = require('./repo');
// var myrepo = repo();

var myrepo = require('./repo');

var taskHandler = function () {
	return {
		save: function () {
			myrepo.save('Hello from taskHandler');
		}
	};
};

module.exports = taskHandler();