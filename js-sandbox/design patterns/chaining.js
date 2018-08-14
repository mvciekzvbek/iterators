var Calc = function (start) {
    console.log('Initialized with ' + start);

    var _this = this;
    console.log(_this);

    this.add = function (x) {
        console.log('Adding: ' + start + ' + ' + x);
        start = start + x;
        return _this;
    }

    this.multiply = function (x) {
        console.log('Multiplying: ' + start + ' x ' + x);
        start = start * x;
        return _this;
    }

    this.equals = function (callback) {
        console.log('Equals: ' + start);
        callback(start);
        return _this;
    }
}

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function (result) {
        console.log(result)
    });