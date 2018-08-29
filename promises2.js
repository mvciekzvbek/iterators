function asyncMethod (message) {
    return new Promise (function (fulfill, reject) {
        setTimeout(function () {
            console.log(message);
            fulfill();
        }, 500);
    })
}

function findUser () {
    return asyncMethod('Find user');
}

function validateUser () {
    return asyncMethod('Validate user');
}

function doStuff () {
    return asyncMethod('Do stuff');
}

asyncMethod('Open DB Connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function () {})
