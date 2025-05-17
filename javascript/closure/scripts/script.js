
$(
    function () {
        let a = 1;
        $("button").on("click", function () {
            console.log("button clicked.");
            a = a + 1;
            console.log(a);
        })
    }
)