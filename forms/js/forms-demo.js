// forms-demo.js
// script for in-class HTML forms demo
//

//doc ready function
$(function(){
	var select = $('select[name="state"]');
	var option;
	var idx;
	var state;

	for(idx = 0; idx < states.length; ++idx) {
		state = states[idx];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		select.append(option);
	}

	$('.signup-form').submit(function(){
		var nameInput = $('.signup-form input[name="name"]');
		var value = nameInput.val();
		if (value && value.trim().length > 0)
			return true;
		else {
			alert("Only spaces is not allowed!");
			return false;			
		}
	});



});