$(document).ready(function(){
	$("#inquiry").validate({
		rules:{
			phone:{
				required: true,
				minlength: 10,
				accept:"0-9"
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
			phone:"Enter a valid mobile number",
			name: "Enter a valid name",
			mail:"Enter a valid email id"
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
