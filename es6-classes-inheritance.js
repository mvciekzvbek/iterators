class Animal {
    constructor (voice) {
        this.voice = voice || 'bark';
    }

    speak () {
        console.log(this.voice);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super('Meow'); // calls parent's class constructor
        this.name = name;
        this.color = color;
    }
}

var fluffy = new Cat('Fluffy', 'white');
