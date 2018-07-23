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

// module.exports = repo;

// to prevent it from being executed multiple times and to cache it you need to call it here (commonjs specs) 
// repo becomes singleton

module.exports = repo();
