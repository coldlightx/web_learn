
var stats = (function () {

    var people_count = 0;
    var $stats = $("#stats");
    var template = $("#stats-template").html();
    render();

    events.bind("personChanged", onPersonChanged);

    function onPersonChanged(person_length) {
        people_count = person_length;
        render();
    }

    function render() {
        var data = {
            people_count : people_count
        }
        $stats.html(Mustache.render(template, data));
    }


    function destroy() {
        $stats.remove();
        events.unbind("personChanged", onPersonChanged);
    }

    return {
        destroy: destroy
    }

})()