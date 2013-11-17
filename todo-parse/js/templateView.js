
"use strict;"

var TemplateView = {
    render: function() {
        this.container.html(Mustache.render(this.template, this.model));
        if (this.afterRender)
            this.afterRender();
    }
};

function createTemplateView(config) {
    var view = Object.create(TemplateView);
    apply(config, view);

    if (view.model) {
        view.model.on('reset', function(){
            view.render();
        });
        view.model.on('add', function(){
            view.render();
        });
        view.model.on('change', function(){
            view.render();
        });
    }

    return view;
}