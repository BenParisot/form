$(document).ready(function() {

	$("#blanks form").submit(function() {
		$("#slide").slideUp("slow", function() {
		});
  event.preventDefault();
	});

	$("#submit").click(function() {
		$('body').removeClass();
		$('body').addClass("red-background", 100000);
	});


});
