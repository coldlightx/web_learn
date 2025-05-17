
let a = 1;
console.log("setting up")

$(
    function () {
        $("button").on("click", function () {
            console.log("button clicked.");
            console.log(a);
        })
    }
)