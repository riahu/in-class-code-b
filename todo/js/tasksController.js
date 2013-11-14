/*
    Tasks Controller

    Controller that stiches together the TasksModel,
    TasksListView, and NewTaskView into a working application
*/

$(function(){
	var tasksModel = createTasksModel({
		tasks: [ {title: 'My First Task', done: false}]
	});

	var tasksListView = createTasksListView({
		model: tasksModel,
		template: $('.tasks-template'),
		container: $('.tasks-container')
	});

	var newTaskView = createNewTaskView({
		model: tasksModel,
		form: $('.new-task-form')
	});

	$('.btn-remove-done').click(function(){
		tasksModel.removeDone();
	});


}); //doc ready