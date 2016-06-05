$(document).ready(function(){


  $('.slides').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: true,
	  fade:true
  });


  $('.navItem').on('click', function(){

    var index = $(this).attr("data-index");
    console.log(index);

  	$('.slides').slick('slickGoTo', index);

  });






});