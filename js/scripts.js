$(document).ready(function() {

	//"MORE QUOTES"
	$.getJSON("js/quotes.json", function(data) {
		console.log(typeof data);

		jQuery.each(data, function(val) {
			console.log(val);
		})


	})


})