$(
    function () {
        getProfile();
    }
)

var $status = $("#status");

let $profile = $("#profile");
let $tweets = $("#tweets");
let $friends = $("#friends");

function getProfile() {
    $.ajax(
        {
            method: "GET",
            url: "profile.json",
            success: function (data) {
                console.log(data);
                $status.append("<li>get profile success.</li>");
                $profile.html(JSON.stringify(data));
                getSweets(data.id);
            }
        }
    );
}


function getSweets(id) {
    $.ajax({
        method: "GET",
        url: "tweets.json?id=" + id,
        success: function (data) {
            console.log(data);
            $status.append("<li>get sweets success.</li>");
            $tweets.html(JSON.stringify(data));
            getFriends(id);
        }
    })
}


function getFriends(id) {
    $.ajax({
        method: "GET",
        url: "friends.json",
        success: function (data) {
            console.log(data);
            $status.append("<li>get friends success.</li>");
            $friends.html(JSON.stringify(data));
        }
    })

}