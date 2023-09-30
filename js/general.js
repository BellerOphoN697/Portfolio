$(document).ready(function(){
	$("#inquiry").validate({
		rules:{
			phone:{
				required: true,
				minlength: 10,
				maxlength: 10,
				digits: true
			},
			name:{
				required: true,
				minlength: 2,
				maxlength: 16
			},
			mail:{
				required: true,
				minlength: 4,
				email: true
			}
		},
		messages:{
			phone:{
				required: "Enter a valid mobile number",
				digits: "Only numbers are allowed"
			},
			name:{
				required: "Enter a valid name",
				lettersonly: "Only alphabets are allowed"
			},
			mail:{
				required: "Enter a valid email id",
				email: "Enter a valid email id"
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

function submitAlert(){
	alert("Message submitted. Please wait while redirecting")
}