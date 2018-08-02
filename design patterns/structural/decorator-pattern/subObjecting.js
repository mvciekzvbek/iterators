/**
 * Decorator pattern
 * 
 * Used to add new functionality to an existing object without being obtrusive
 * 
 * - more complete inheritance
 * - wraps an object
 * - protect existing object
 * 
 */

var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function () {
    console.log('saving task: ' + this.name);
}

var myTask = new Task('Legacy task');
myTask.complete();
myTask.save();

var UrgentTask = function (name, priority) {
	Task.call(this, name);
	this.priority = priority;
} 

/**
 * assigning prototypes to be able to call e.g complete function
 * 
 * It could be just assigned but the task prototype would change if the UrgentTask prototype changed
 */
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () {
	console.log('notifying important people');
}

// wrapped save with some additional stuff
UrgentTask.prototype.save = function () {
	this.notify();
    console.log('do special stuff before saving');
    Task.prototype.save.call(this);
}

var ut = new UrgentTask('This is urgent', 1);
ut.complete();
ut.save();