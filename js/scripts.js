$(document).ready(function() {

	$("#blanks form").submit(function() {
		$("#slide").slideUp(1200, function() {
		});

		event.preventDefault();
	});

	$("#blanks form").submit(function() {
		var inputName = $('input#name').val();
		var inputAge = $('input#age').val();
		var inputColor = $('input#color').val();
		var inputFear = $('input#fear').val();

		$('.name').text(inputName);
		$('.age').text(inputAge);
		$('.color').text(inputColor);
		$('.fear').text(inputFear);

		event.preventDefault();
	});


	$("#submit").click(function() {
		$('body').addClass('background1');
		$('.response').fadeTo(2500, 1, function() {
			$('.next-response').fadeTo(2500, 1, function() {
				$('.response-three').fadeTo(3000, 1, function() {
					$('.response-four').fadeTo(3000, 1, function() {
						$('.response-five').fadeTo(3000, 1, function() {
							$('.response-six').fadeTo(3000, 1, function() {
								$('.response-seven').fadeTo(3000, 1, function() {
									$('body').removeClass('background1').addClass('background2');
									$('.response-eight').fadeTo(2500, 1, function () {
										$('body').addClass('background3');
										$('.response-nine').fadeTo(2500, 1, function() {
											$('body').addClass('background4');
											$('.response-ten').fadeTo(2500, 1);
										});
									});
								});
							});
						});
					});
				});
			});

		});
	});

});
