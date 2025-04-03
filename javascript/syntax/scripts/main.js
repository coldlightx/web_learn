
// FUNCTION

function add(first, second) {
    return first + second;
}

function go(name, age) {
    if (age < 20) {
        alert(name + "!");
    } else {
        alert(name);
    }
}


// alert(add(1, 2))


// go()



// ARRAY

// var myList = ["Apple", "Banana", go, "Pineapple"];
var myList = ["Apple", "Banana", "Pineapple"];

myList[3] = "oranges";


// myList.shift()
// myList.pop()


myList.forEach(function (value, index) {
    console.log(value + " " + index);
})



var times = 0;

while (times < 10) {
    console.log("while loop tried it", times);
    times++;
}


times = 0;
do {
    console.log("do loop tried it", times);
    times++;
} while(times < 10)


for(var i=0; i<10; i++) {
    console.log("for loop tried it", i);
}


myList = ["Apple", "Banana", "Orange"];

for (var i=0; i<myList.length; i++) {
    console.log("Now you have " + myList[i] + " in your basket.");
}