$(document).ready(function() {

	//GET MORE QUOTES
	$('.quote-of-the-week .btn').on('click', function getMoreQuotes(e) {
		e.preventDefault();
		$.getJSON("js/quotes.json", function(data) {
			jQuery.each(data, function(val) {
				$('<blockquote><p>' + data[val].quote + '</p><footer>' + data[val].author + '</footer></blockquote>').insertAfter('.quote-of-the-week blockquote:last-of-type');
				$('.quote-of-the-week .btn').remove();
			});
		});	
	});

	// RWD MENU SLIDE TOGGLE
	$('.rwd-menu').on('click', function(){
		$(this).next().slideToggle();
	})


})

