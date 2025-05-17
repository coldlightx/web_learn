

// "use strict"; 

var a = 1; // create a to window.a
let b = 2;

console.log(a);

console.log(window.a === a);


function foo() {
    var a = 2;
    console.log(a);
    console.log(window.a);
}


function bar() {
    a = 3;
    // c = 6; // attach c to window, this will cause environment pollute
    console.log(a);
}

foo();

bar();
console.log(a);

// console.log(c);


