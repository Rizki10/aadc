$(document).ready(function() {
	/* Custom Dropdown */
	$('#custom-dropdown')
		.mouseover(function() {
			$('#custom-dropdown').addClass('open');
		})
		.mouseleave(function(){
			setTimeout(function() {
				$('#custom-dropdown').removeClass('open');
			})
		});
})