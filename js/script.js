$(function() {

	$(".navbar-toggler").on("click", function() {
		$(".menu-mobile").slideToggle()
	})

	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
	
})