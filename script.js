$(document).ready(function(){

    $('.slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        fade:true,
        accessibility:true,
        waitForAnimate:false,
        adaptiveHeight:true
    });

    $('.navItem').on('click', function(){
        var index = $(this).attr("data-index");
        $('.slides').slick('slickGoTo', index);
    });

});