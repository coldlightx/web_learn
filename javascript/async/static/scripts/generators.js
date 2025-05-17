function* gen() {
    let profile = yield $.get("profile.json");
    console.log(profile);
    let tweets = yield $.get("tweets.json?id=" + profile.id);
    let friends = yield $.get("friends.json");
    let friends2 = yield $.get("friends.json");


    console.log("elements are:");
    console.log(profile, tweets, friends, friends2);
}


function smartFunc(generator){
    let gen = generator();

    var val = gen.next().value;
    if (val.then) {
        console.log(val.then);
        val.then((data) => {
            gen.next(data);
        });
    }
}


Promise.coroutine(gen)();


Promise.coroutine(function *() {
    var data = yield Promise.props({
        profile: $.get("profile.json?d=1"),
        tweets: $.get("tweets.json?d=2"),
    });

    console.log(data.profile);
    console.log(data.tweets);
})();


var arr = [
    $.get("profile.json?q=1"),
    $.get("tweets.json?q=2"),
    $.get("riends.json?q=3"),
]



Promise.all(arr).then(
    (data) => {
        let [profile, tweets, friends] = data;
        console.log("parts after resolve:");
        console.log(profile, tweets, friends);
        return {message: "Hello, World!"};
    }
).then((data) => {
    console.log(data);  
}).catch(err => {
    // array中的任何一个promise遇到错误, 都会走到这里
    // 而不会走到then中去
    console.log("array promise error: ");
    console.log(err);
});


function foo(a) {
    console.log(a);
}

foo(1, 2, 3);
foo(1, 2);