'use strict';

function asyncMethod (message, num) {
    return new Promise (function (fulfill, reject) {
        setTimeout(function () {
            console.log(message + ' ' + num);
            fulfill(num + 1);
        }, 500);
    })
}

async function main () {
    var one = await asyncMethod('Open DB Connection', 0)
    var two = await asyncMethod('Find user', one)
    var three = await asyncMethod('Validate user', two)
    var four = await syncMethod('Do stuff', three);
}

main();