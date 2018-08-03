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
 * Mediator module
 */
var mediator = (function () {

    var channels = {};

    /**
     * Subscribes for specific channel
     * @param {*} channel 
     * @param {*} context 
     * @param {*} func 
     */
    var subscribe = function (channel, context, func) {
        if (!mediator.channels[channel]) {
            mediator.channels[channel] = [];
        }
        // pushes object with context and callback function to channel array
        mediator.channels[channel].push({
            context: context, 
            func: func
        });
    }
    
    /**
     * Executes subscribers callbacks
     * @param {*} channel 
     */
    var publish = function (channel) {
        if (!this.channels[channel]) {
            return false;
        }

        var args = Array.prototype.slice.call(arguments, 1);
        
        for (var i = 0; i < mediator.channels[channel].length; i++) {
            var sub = mediator.channels[channel][i];
            sub.func.apply(sub.context, args)
        }
    }

    return {
        channels: {},
        subscribe: subscribe,
        publish: publish
    }
}());

var task1 = new Task({
    name: 'create demo for mediators', 
    user: 'Jon'
})

var ns = new notificationService();
var ls = new loggingService();
var as = new auditingService();

mediator.subscribe('complete', ns, ns.update);
mediator.subscribe('complete', ls, ls.update);
mediator.subscribe('complete', as, as.update);

task1.complete = function () {
    mediator.publish('complete', this);
    Task.prototype.complete.call(this);
}

task1.complete();