var Task = require('./task');
var Repo = require('./taskRepository');

var task1 = new Task(Repo.get(1));
var task2 = new Task({name: 'Prepare Module Pattern demonstration'});

task1.complete();
task1.save();
task2.save();