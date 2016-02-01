$(document).ready(function() {
	build();
	$('.block').on('mouseenter', function() {
		$(this).css('background-color', '#000000');
	});
});

function build() {
	$('.block').remove();
	var num = prompt("Input whole number.");
	var size = Math.floor((500 - 2 * num)/num) + 'px';
	for(i=0; i<num; i++) {
		for(j=0; j<num; j++) {
			$('#container').append('<div class="block"></div>');
		};
		$('#container').append('<div class="row"></div>');
	};
	$('.block').css({'height': size, 'width': size});
};