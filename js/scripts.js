$(document).ready(function() {

	$("#blanks form").submit(function() {
		$("#slide").slideUp(1200, function() {
		});
  event.preventDefault();
	});

	$("#submit").click(function() {
		$('body').addClass('red-background');
	});


});
