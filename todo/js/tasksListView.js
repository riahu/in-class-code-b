/*
    TasksListView

    View that knows how to render a TasksModel as a list.
    Each task has a checkbox next to it, and you can
    click that to mark the task as done.
*/

var TasksListView = {
	render: function() {
		var idx;			//loop counter
		var task;			//current task
		var clonedTemplate;	//clone of template
		var titleElem;		//task title element

		var tasks = this.model.getTasks();

		for (idx = 0; idx < tasks.length; ++idx) {
			task = tasks[idx];

			clonedTemplate = this.template.clone();
			titleElem = clonedTemplate.find('[data-model-attr="title"]');
			titleElem.html(task.title);

			this.container.append(clonedTemplate);
		} //for each task

	} //render()
}; //TasksListView

function createTasksListView(config) {
	var view = Object.create(TasksListView);
	apply(config, view);

	if (view.model)
		view.render();

	return view;
}