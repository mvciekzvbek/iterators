var Task = require('./task');

var task1 = new Task('Prepare Constructor Pattern demonstration');
var task2 = new Task('Prepare Module Pattern demonstration');
var task3 = new Task('Prepare Singleton Pattern demonstration');
var task4 = new Task('Prepare Prototype Pattern demonstration');

task1.complete();
task2.save();
task3.save();
task4.save();