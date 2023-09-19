$(document).ready(function(){
	$("#inquiry-form").validate({
		rules:{
			personname:{
				required: false,
				minlength: 4
			},
			emailid:{
				required: false,
				minlength: 4,
				email: true
			}

		},
		messages:{
			personname:{
				"RRRRRR"
			}
		}
	});
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
	
});
