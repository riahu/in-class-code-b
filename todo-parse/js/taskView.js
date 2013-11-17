
function createTaskView(config) {
    var view = createTemplateView(config);
    view.afterRender = function() {
        var self = this;
        this.container.find('.toggle-done').click(function(){
            var id = $(this).attr('data-model-id');
            self.model.get(id).toggleDone();
        });
    }
}