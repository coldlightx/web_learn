function add(a, b, callback) {
    console.log(a + b);


    if (callback)
        callback();
}


function logDone() {
    console.log("Done");
}

add(2, 3, logDone);
add(5, 4, () => {
    console.log("It's Done.")
});

add(6, 6);