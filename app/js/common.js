$(function() {

	var swiper = new Swiper('.swiper-container', {
		loop: true,
		nextButton: '.button-next',
		prevButton: '.button-prev'
	});

	/*STICKY NAV*/
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 0) {
			$('#navigation').addClass('sticky_block');
		} else {
			$('#navigation').removeClass('sticky_block');
		}
	});
	/*STICKY NAV*/

	/*SCROLL TO BLOCK START*/
	$(".menu").on("click", "a", function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	/*SCROLL TO BLOCK END*/

	$('body').scrollspy({ target: '#navbar' });
















	/*VALIDATION START*/
	$("#contact_form").validate({
		rules: {
			userName: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			userEmail: {
				required: true,
				email: true,
				minlength: 6,
				maxlength: 16
			},
			message: {
				required: true,
				minlength: 20
			}
		},
		messages: {
			userName: {
				required: "This field is required",
				minlength: "Login must be at least 2 characters",
			},
			userEmail: {
				required: "This field is required",
				email: "Enter valid address",
				minlength: "Email must be at least 6 characters",
				maxlength: "The maximum number of characters is 16"
			},
			message: {
				required: "This field is required",
				minlength: "Message must be at least 20 characters"
			}
		}
	});
	/*VALIDATION END*/

});