// destructuring object
var foo = {
    a: 1,
    b: 2,
}

// var { a, b } = foo;
var { a } = foo;

console.log(a);

// destructuring array

var arr = ["me", "you", "he"];
var [ firstPerson, secondPerson ] = arr;

console.log(firstPerson);
console.log(secondPerson);

// build object

var foo = 2;
var contentType = "text/plain";

var Name = "will";
var obj = {
    bar : 1,
    foo,
    contentType,
    [ Name+"Name" ]: Name
}

console.log(obj);

// function arguments destructuring

function calculate_bmi({ weight: w, height, max = 30, callback }) {

    console.log("weight is " + weight);
    var bmi = w / Math.pow(height, 2);

    if (bmi > max) {
        console.log(bmi);
    }

    if (callback) {
        callback(bmi);
    }
}


var weight = 60;
var height = 1.7;

calculate_bmi({
    weight,
    height: 1.7,
    callback: function (bmi) {
        console.log(bmi);
    }
});


// template string

var Name = "Will";


var greet = `Hi, my name is ${Name},
I like to party`;


console.log(greet);

// let and const scope

var a = 1;
let d = 0;

if (true)
{
    // var b = 2;   // var is in global scope
    let b = 2; // b is in block scope

    const c = 1;
    // c = 2;  // error
    d = 3;

    const obj = {e : 1};
    // obj cannot change to new object, 
    // but the property in the object can be changed
    // obj = {e:3}; // error
    
    obj.e = 2;
    console.log(obj);
}

// console.log(b); // error
console.log(d);


// class

class Parent {

    cls = "Person"; // es7 feature: static property

    constructor (name) {
        this.name = name;
    }

    static hello()
    {
        console.log("hello");
    }
    
    sayName() {
        console.log(this.name);
    }
}


var parent_ = new Parent("Will");

parent_.sayName();
// parent.hello(); // error
Parent.hello();
console.log(parent_.cls, Parent.cls);


class Child extends Parent {

    constructor(name, age) {
        super(name);
        this.age = age;
    }

    sayAge() {
        console.log(this.age);
    }
}


var child = new Child("Bell", 10);

child.sayName();
child.sayAge();

// arrow functions

function sum(a, b) {
    return a + b
}

var sum_fn = (a, b) => {
    return a + b;
}

var sum_fn2 = (a, b) => a + b;

console.log(sum_fn(1, 2));
console.log(sum_fn2(1, 5));

console.log([1, 2, 3].map(val => val+1));

// lexical binding

var object2 = {

    age: 20,
    // sayAge: function() {
    //     setTimeout(function () {
    //         // cannot access this, because the context changed
    //         console.log(this.age)
    //     }, 100);
    // }

    sayAge: function() {
        setTimeout(() => {
            console.log(this.age); // can access this
        }, 100);

    }
}

object2.sayAge();

// don't do that most time in jquery
// $("li").on("click", () => {
//     console.log(this); // this is refered to the outside world
// })


$("li").on("click", function() {
    // use function to refer to the event object
    console.log(this);
})


// async await
async function friends() {
    let friends = await $.get("https://somesite.com/friends");
    console.log(friends);
}