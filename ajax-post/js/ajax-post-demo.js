/* ajax-post-demo.js 
    JavaScript file for AJAX post demo

    URL for posting: https://courses.washington.edu/info343/ajax/sayhello/
*/


// function to display any ajax errors we get
$(document).ajaxError(function(event, jqXHR, err){
    var msg = 'Problem with AJAX Request';
    if (jqXHR.responseJSON)
        msg += '\n' + jqXHR.responseJSON.error;
    else
        msg += '\n' + jqXHR.statusText;
    alert(msg);
});

