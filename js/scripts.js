$(document).ready(function() {

	$("#blanks form").submit(function() {
		$("#slide").slideUp(1200, function() {
		});

		event.preventDefault();
	});

	$("#blanks form").submit(function() {
		var inputName = $('input#name').val();
		var inputAge = $('input#age').val();
		var inputHeight = $('input#height').val();
		var inputWeight = $('input#weight').val();

		$('.name').text(inputName);
		$('.age').text(inputAge);
		$('.height').text(inputHeight);
		$('.weight').text(inputeWeight);

		event.preventDefault();
	});


	$("#submit").click(function() {
		$('body').addClass('red-background');
		$('.response').fadeTo(2500, 1, function () {
			$('.next-response').fadeTo(1200, 1, function () {
				$('.response-three').fadeTo(1200, 1, function () {
					$('.response-four').fadeTo(1200, 1);
				}););
			}););
		});
	});


});
