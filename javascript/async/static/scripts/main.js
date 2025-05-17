var $status = $("#status");

let $profile = $("#profile");
let $tweets = $("#tweets");
let $friends = $("#friends");

let promise = $.ajax({
    method: "GET",
    url: "profile.json"
});


promise.then((data) => {
    $status.append("<li>get profile success.</li>")
    $profile.html(JSON.stringify(data));
    return $.get("tweets.json?id=" + data.id);
}
).then((tweets) => {
    $status.append("<li>get tweets success.</li>");
    $tweets.html(JSON.stringify(tweets));
    return $.get("friends.json?id=" + tweets.user_id);
}).then((friends) => {
    $status.append("<li>get friends success.</li>");
    $friends.html(JSON.stringify(friends));
    return friends;
}, (xhr, state, err_string) => {
    console.log("request rejected in second level.");
    console.log(xhr);
    // 不返回的话, 错误的处理到这里终止
    // 后续的函数会根据xhr的status判断是进入错误
    // 处理还是正常处理
    return xhr;
}).then((data) => {
    console.log(data);
}, (xhr, state, err_string) => {
    console.log("request rejected in third level.");
    console.log(xhr);
    return xhr;
}).catch((err) => {
    console.log("requests encountered error.");
    console.log(err);
})


let getProfile = $.get("profile.json");
let getTweets = $.get("tweets.json");

$.when(getProfile, getTweets).then((profile, tweets) => {
    // profile = (data, status, xhr)
    console.log(profile);
    console.log(tweets);
}, (xhr, state, err) => {
    console.log("xhr is:");
    console.log(xhr);
    console.log("state is:");
    console.log(state);
    console.log("err is:");
    console.log(err);
})
