
"use strict;"

$(function(){

    //get the current Parse user
    var currentUser = Parse.User.current();

    var tasks = new TaskList();
    tasks.query = new Parse.Query(Task);
    tasks.query.equalTo('userid', currentUser.id);
    tasks.query.equalTo('done', false);

    var taskView = createTaskView({
        model: tasks,
        template: $('#task-item-template').html(),
        container: $('.tasks-container')
    });

    tasks.fetch();

    //create new task view, passing new task model
    var newTaskView = createFormView({
        model: new Task(),
        form: $('.new-task-form')
    });

    newTaskView.on('submit', function(){
        var newTask = newTaskView.model;
        newTask.set('userid', currentUser.id);

        //save it
        var button = $(this);
        button.addClass('working');
        newTask.save({
            success: function() {
                //add to collection
                tasks.add(newTask);

                //reset view to a new model
                newTaskView.setModel(new Task());

                button.removeClass('working');
            }
        });

    });

    $('.btn-remove-done').click(function(){
        var button = $(this);
        button.addClass('working');
        tasks.fetch({
            success: function(){
                button.removeClass('working');
            }
        });
    });


    //handle the signout button
    $('.btn-signout').click(function(){
        Parse.User.logOut();
        window.location = 'signin.html';
    });

}); //doc ready()