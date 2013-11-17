
var Task = Parse.Object.extend('Task', {
    defaults: function() {
        return {
            title: '',
            done: false
        };
    },

    toggleDone: function() {
        this.save({done: !(this.get('done'))});
    }
});
