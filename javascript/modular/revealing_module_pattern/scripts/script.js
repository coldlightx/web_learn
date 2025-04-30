var people = (function () {
    var person = ['John', 'Adam'];

    var template = $("#person-template").html();
    var $ul = $("#person-list");
    var $add_person_button = $("#add-person");
    var $input = $("#name-input");
    _render();
    _bindEvents();

    function _render() {
        var data = {
            person: person
        }

        events.emit("personChanged", person.length);
        $ul.html(Mustache.render(template, data));
    }


    function _bindEvents() {
        $add_person_button.on("click", addPerson);
        $ul.on("click", ".delete-person", deletePerson);
    }


    function addPerson(new_name) {
        var name = $input.val();
        if (typeof new_name === "string") {
            name = new_name;
        };
        
        if (!name) return;

        person.push(name);
        _render();
        $input.val("");
    }



    function deletePerson(event) {

        var index;

        if (typeof event === "number") {
            index = event;
        } else {
            var $remove_li = event.target.closest("li");
            index = $ul.find("li").index($remove_li);
        }

        person.splice(index, 1);
        _render();
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    }
    
})()