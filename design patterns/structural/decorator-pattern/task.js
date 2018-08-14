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


var urgentTask = new Task('Urgent Task');
urgentTask.notify = function () {
    console.log('notifying important peope');
}

urgentTask.complete();

/**
 * Decorated urgent task with new save:
 * - notifying important people
 * - call original save from task prototype
 */
urgentTask.save = function () {
    this.notify();
    Task.prototype.save.call(this);
}

urgentTask.save();