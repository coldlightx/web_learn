var myObject = {
    "name": "Will",
    "age": 25,
    sayName: function () {
        console.log(this.name);
    },
    setName: function (newName) {
        this.name = newName;
    }
}


var people = {
    person: ['John', 'Adam'],
    init: function () {
        this.cacheDom();
        this.render();
        this.bindEvents();
    },

    cacheDom: function () {
        this.template = $("#person-template").html();
        this.$ul = $("#person-list");
        this.$add_person_button = $("#add-person");
        this.$input = $("#name-input");
    },

    render: function () {
        var data = {
            person: this.person
        }
        this.$ul.html(Mustache.render(this.template, data));
    },

    bindEvents: function () {
        this.$add_person_button.on("click", 
            this.addPerson.bind(this));
        this.$ul.on("click", ".delete-person", this.deletePerson.bind(this));
    },

    addPerson: function (new_name) {
        var name = this.$input.val();
        if (typeof new_name === "string") {
            name = new_name;
        };
        
        if (!name) return;

        this.person.push(name);
        this.render();
        this.$input.val("");
    },

    deletePerson: function (event) {
        var $remove_li = event.target.closest("li");
        var index = this.$ul.find("li").index($remove_li);
        this.person.splice(index, 1);
        this.render();
    }
};

people.init();
