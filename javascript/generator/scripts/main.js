

function* Gen()
{
    var a = yield 1;
    var b = yield 2;
    var c = yield 3;

    console.log(a, b, c);
}



let gen = Gen();


console.log(gen.next());
console.log(gen.next());
console.log(gen.next(6));
console.log(gen.next(8));
console.log(gen.next());