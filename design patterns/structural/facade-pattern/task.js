/**
 * Facade pattern
 * 
 * Used to provide simplified interface to a complicated system
 * 
 * - it hides the chaos from us
 * - simplifies the interface
 * - eg. jquery
 *  
 */

var Task = function (data) {
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
}

var TaskService = function () {
	return {
		complete: function (task) {
			task.completed = true;
			console.log('completing task: ' + task.name);
		},
		setCompleteDate: function (task) {
			task.completedDate = new Date();
			console.log(task.name + ' completed on ' + task.completedDate);
		},
		notifyCompletion: function (task, user) {
			console.log('Notifying ' + user + ' of the completion of ' + task.name);
		},
		save: function (task) {
			console.log('saving Task: ' + task.name);
		}
	}
}();

var TaskServiceWrapper = function () {

	var completeAndNotify = function (task) {
		TaskService.complete(task);
		if (task.completed === true) {
			TaskService.setCompleteDate(task);
			TaskService.notifyCompletion(task, task.user);
			TaskService.save(task);
		}
	}
	return {
		completeAndNotify: completeAndNotify
	}
}();

var myTask = new Task({
	name: 'MyTask',
	priority: 1,
	project: 'Courses',
	user: 'Jon',
	completed: false
});

// instead of ugly code below we created a wrapper which is a lot cleaner

// TaskService.complete(myTask);
// if (myTask.completed === true) {
// 	TaskService.setCompleteDate(myTask);
// 	TaskService.notifyCompletion(myTask, myTask.user);
// 	TaskService.save(myTask);
// }

TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);