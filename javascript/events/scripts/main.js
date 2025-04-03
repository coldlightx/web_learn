
var first_input = document.querySelector(".first-number")
var second_input = document.querySelector(".second-number")

var sum_para = document.getElementById("sum-number")

first_input.addEventListener(
    "input", callback
)
second_input.addEventListener(
    "input", callback
)


function go() {
    console.log("Hi, there.");
}

function callback() {

    var first_number = parseFloat(first_input.value) || 0;

    var second_number = parseFloat(second_input.value) || 0;

    var sum_number = first_number + second_number;

    sum_para.innerHTML = "The sum of the two number is: " + sum_number;


}



var cat = document.getElementById("cat");
var husky = document.getElementById("husky");
var fish = document.getElementById("fish");


cat.addEventListener("click", pic_show);
husky.addEventListener("click", pic_show);
fish.addEventListener("click", pic_show);


function pic_show() {

    var picId = this.attributes["data-img"].value;
    console.log(picId);

    var pic = document.getElementById(picId);

    if (pic.className == "hide") {
        document.querySelectorAll("img").forEach(function (item) {
            item.className = "hide";
        });

        pic.className = "";
    } else {
        pic.className = "hide";
    }

}


document.querySelector(".todo-list").querySelectorAll("li").forEach(
    function (item) {
        item.addEventListener("click", start_edit);
        var input = item.querySelector("input");
        input.addEventListener("blur", end_edit);
        input.addEventListener("keypress", key_pressed);
    }
)

function start_edit() {
    this.className = "edit";

    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function end_edit() {
    var li = this.parentNode;


    // 输入的时候, input tag的值已经改变了, 不需要再给input tag赋值
    li.querySelector("span").innerHTML = this.value;

    li.className = "";
}



function key_pressed(event) {
    if (event.which === 13) {
        end_edit.call(this);
    }
}