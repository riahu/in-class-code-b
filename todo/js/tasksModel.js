/*
    TasksModel

    Model object representing a list of tasks
*/

var Tasks = {
	getTasks: function() {
		return this.tasks;
	},

	addTask: function(task) {
		this.tasks.push(task);
		this.trigger('change');
	},

	setDone: function(task, done) {
		task.done = done;
		this.trigger('change');
	},

	removeDone: function() {
		var undoneTasks = [];
		var idx;		//loop counter
		var task;		//current task

		for (idx = 0; idx < this.tasks.length; ++idx) {
			task = this.tasks[idx];
			if (!task.done)
				undoneTasks.push(task);
		}

		this.tasks = undoneTasks;
		this.trigger('change');
	}
}; //Tasks

function createTasksModel(config) {
	var tasksModel = Object.create(Tasks);
	apply(config, tasksModel);

	tasksModel.tasks = tasksModel.tasks || [];
	return makeEventSource(tasksModel);
}
