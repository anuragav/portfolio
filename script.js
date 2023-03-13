$(document).ready(function() {
	// Smooth scrolling
	$('nav a').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000);
	});

	// Property search form submission
	$('form').submit(function(e) {
		e.preventDefault();
		// Get form values
		var location = $('#location').val();
		var beds = $('#beds').val();
		var baths = $('#baths').val();
		var price = $('#price').val();
		// Construct search query
		var query = 'location=' + location + '&beds=' + beds + '&baths=' + baths + '&price=' + price;
		// Redirect to search results page with query string
		window.location.href = 'search.html?' + query;
	});
});
const element = document.getElementById('aboutus');

// Set the scroll position of the element to 200 pixels from the top
element.scrollTop = 200;

// Get the current scroll position of the element
const scrollPosition = element.scrollTop;

const element = document.getElementById('my-element');

element.addEventListener('scroll', () => {
  if (element.scrollTop > 200) {
    element.style.backgroundColor = 'red';
  } else {
    element.style.backgroundColor = 'white';
  }
});
