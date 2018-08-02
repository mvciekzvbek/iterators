var Task = require('./task');

/**
 * Notification observer
 */
var notificationService = function () {
    var message = 'Notyfing ';

    // called when task changes
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};

/**
 * Logging observer
 */
var loggingService = function () {
    var message = 'Logging ';

    // called when task changes
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    };
};

/**
 * Auditing observer
 */
var auditingService = function () {
    var message = 'Auditing ';

    // called when task changes
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    };
};


/**
 * List of observers attached to ObservableTask
 */
function ObserverList () {
    this.observerList = [];
}

/**
 * Adds observer to the list
 * @param {*} obj 
 */
ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
}

/**
 * Returns observer with given index
 * @param {*} index 
 */
ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return(this.observerList[index]);
    }
}

/**
 * Returns observer list length
 */
ObserverList.prototype.count = function () {
    return this.observerList.length;
}

/**
 * Removes observer at given index
 * @param {*} index 
 */
ObserverList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);
}

/**
 * Returns index of given observer starting from given index
 * @param {*} obj 
 * @param {*} startIndex 
 */
ObserverList.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;
    
    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }
    
    return -1;
}

/**
 * Subject - task decorator
 * @param {*} data 
 */
var ObservableTask = function (data) {
    Task.call(this, data);
    this.observers = new ObserverList();
}

/**
 * Adds given observer to observer list
 * @param {*} observer 
 */
ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
}

/**
 * Removes given observer 
 * @param {*} observer 
 */
ObservableTask.prototype.removeObserver = function (observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
}

/**
 * Notifies about task's status (save or complete)
 * @param {*} context 
 */
ObservableTask.prototype.notify = function (context) {
    var observerCount = this.observers.count();

    // iterates over observer list and executes the observer functions
    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
}

/**
 * We are notifying save method (we need to overwrite it)
 */
ObservableTask.prototype.save = function () {
    //sends task to notify
    this.notify(this);

    Task.prototype.save.call(this);
}

var task1 = new ObservableTask({
    name: 'create demo for constructors', 
    user: 'Jon'
})

var ns = new notificationService();
var ls = new loggingService();
var as = new auditingService();

// we are passing services update functions as observers
task1.addObserver(ns.update);
task1.addObserver(ls.update);
task1.addObserver(as.update);

task1.save();

task1.removeObserver(as.update);
task1.save();