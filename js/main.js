


$(document).ready(function(){


	// Menu active link
	$("nav ul li a").click(function(){

		$("nav ul li a").removeClass("active");

		$(this).addClass("active");

	});
	$("nav a img").click(function(){

		$("nav ul li a").removeClass("active");

		$("nav ul li:first-child a").addClass("active");

	});




	// Sticky Menu
	$(window).on("scroll", function(){

		var scroll = $(window).scrollTop();


		if( scroll < 1 ){
			$("nav").removeClass("fixed");
		}else{
			$("nav").addClass("fixed");
		}

	});


});



// // mobile menu
function openNav(){

	document.getElementById("myNav").style.width = "100%";

}
function closeNav(){

	document.getElementById("myNav").style.width = "0%";

}