var human = {
    species: "human",
    create: function (obj) {
        var instance = Object.create(this);
        Object.keys(obj).forEach(function (key) {
            instance[key] = obj[key];
        })

        return instance;
    },


    saySpecies: function () {
        console.log(this.species);
    },
    sayName: function () {
        console.log(this.name);
    }
}


var musician = Object.create(human);


musician.playInstrument = function () {
    console.log("play..." + this.instrument);
}


var will = Object.create(musician);
will.name = "Will";
will.instrument = "Guita";

will.sayName();
will.playInstrument();
will.saySpecies();
human.species = "homo sapiens"

will.saySpecies();


var musician2 = human.create({
    species: "muscian",
    playInstrument: function () {
        console.log("Hey, I am playing " + this.instrument);
    }
})


var jullia = musician2.create({
    name: "Jullia",
    instrument: "Piano"
})


jullia.saySpecies();
jullia.playInstrument();
