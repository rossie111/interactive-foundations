
console.log('dark mode');


$(document).ready(function(){

	//------------------------------------
	// show hide each itme


	// $('#exercises h3').click(function(){
	// 	$('#exercises ul').toggle();
	// });
	
	// $('#projects h3').click(function(){
	// 	$('#projects ul').toggle();
	// });

	$('#showhide').click(function(){
		//$('.toggle').toggle('li');
		$('.toggle').next('ul').toggle('li');
	});

	$('.toggle').click(function(){
		$(this).next('ul').toggle();
	});
	//------------------------------------
	// adds a a darkmode class to the body
	//------------------------------------
	$("#darkmode").click(function(){
		$('body').toggleClass('darkmode');
	});

});