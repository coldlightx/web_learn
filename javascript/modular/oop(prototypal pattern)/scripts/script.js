
function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };


var Person = function (name) {
    this.name = name;
}


Person.prototype.sayName = function () {
    console.log("Hi, my name is " + this.name);
}


Person.prototype.shoutName = function () {
    console.log("Dude, my name is " + this.name + "!");
}


var john = new Person("John");
var peter = new Person("Perter");

john.sayName();
peter.sayName();


var Musician = function (name, instrument) {
    Musician.super_.call(this, name);
    this.instrument = instrument;
}

inherits(Musician, Person);

Musician.prototype.getInstrument = function () {
    console.log(this.instrument);
}

Musician.prototype.shoutName = function () {
    console.log("Hello, My name is " + this.name + 
        ". I am playing " + this.instrument + ".");
}


var jerry = new Musician("Jerry", "Piano");

jerry.getInstrument();

// delete Musician.prototype.shoutName

jerry.shoutName();












