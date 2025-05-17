

console.log(this);

var a = 1;
console.log(this.a);
console.log(this == window);



function foo() {
    console.log(this);
    console.log(this === window); // foo is sitting in the root context
}

foo();


var obj = {
    foo: function foo(one, two, three) {
        console.log(this);
    }
}

obj.foo();

// change context with call, apply, bind

console.log("obj.foo.call(window):");
obj.foo.call(window, 1, 2, 3);

console.log("obj.foo.apply(window)");
obj.foo.apply(window, [1, 2, 3]);

var bindFoo = obj.foo.bind(window);

console.log("bindFoo():");
bindFoo();
obj.foo();


$(
    function () {
        $("#click-counter li").on("click", function () {
            var clicked_times = parseInt($(this).find("span").html());
            $(this).find("span").html(clicked_times + 1);
        });


        $("#opendiv").on("click", function () {
            var self = this;
            $("#superdiv").slideToggle(300, function () {
                // through bind, this can refer to #opendiv
                $(this).toggleClass("active");

                // or just use parent scope variable self
                // $(self).toggleClass("active");

            }.bind(this));
        })
    
    }
) 



