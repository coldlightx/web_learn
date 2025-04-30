var events = {
    events : {

    },

    bind: function bind(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    },


    unbind: function unbind(eventName, fn){
        var function_array = this.events[eventName];
        if (!function_array)
            return
        
        function_array = function_array.filter(fn_item => { 
            return fn_item !== fn}
        );

        this.events[eventName] = function_array;

    },

    emit: function emit(eventName, data) {
        if (!this.events[eventName]){
            return
        }

        this.events[eventName].forEach(fn => {
            fn(data);
        });
    }
}