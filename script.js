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
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
 }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function openForm() {
	document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
	document.getElementById("myForm").style.display = "none";
  }
 
 