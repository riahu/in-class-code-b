
"use strict;"

$(function(){
    var signUpButton = $('.btn-signup');
    var user = new Parse.User();     
    var view = createFormView({
        model: user,
        form: $('.signup-form')
    });

    view.on('submit', function(){
        signUpButton.attr('disabled', true);
        signUpButton.addClass('working');

        //use email attribute for username
        user.set('username', user.get('email'));

        //add a blank ACL so that other users can't
        //read the attributes saved with this user
        user.set('ACL', new Parse.ACL());

        user.signUp(null, {
            success: function(user) {
                //redirect to home page
                window.location = '.';
            },
            error: function(user, error) {
                //display the error
                $('.error-message').html(htmlEncode(error.message)).fadeIn(200);
                signUpButton.removeClass('working');
                signUpButton.removeAttr('disabled');
            }
        });
    });
});