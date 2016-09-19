var api2;

$(document).ready(function(){



    $(function(){
        $('#slider-id').liquidSlider();
    });

    $(function(){
        $('#main-slider').liquidSlider({
            autoHeight: true,
            heightEaseDuration: 400,
            slideEaseDuration: 500,
            slideEaseFunction: 'fade',
            // dynamicArrowsGraphical: true,
            dynamicTabs: false,
            dynamicArrows: false
        });
    });


    $(document).ready(function() {
        $(".fancybox").fancybox();
    });

    $(".fancybox").fancybox({
        
    });


    $(".box img").hover(function(){
        $(".box img").animate({
            opacity: 0.6,
        }, 200);
    },
    function(){
        $(".box img").animate({
            opacity: 1,
        }, 200);
    });

    $(".navItem").click(function(){
        $(".navItem").not(this).addClass("navItem :hover", "navItem");
        $(".navItem").not(this).removeClass("selectedNavItem");
        $(this).addClass("selectedNavItem");
        mixpanel.track("Nav Button Clicked");
    });

    // $(".ls-nav-left-arrow").click(function() {
    //     $(".navItem").not(this).addClass("navItem :hover", "navItem");
    //     $(".navItem").not(this).removeClass("selectedNavItem");
    //     $(this).addClass("selectedNavItem");
    // });

    // $(".ls-nav-right-arrow").click(function() {
    //     $(".navItem").not(this).addClass("navItem :hover", "navItem");
    //     $(".navItem").not(this).removeClass("selectedNavItem");
    //     $(this).addClass("selectedNavItem");
    // });

});



window.setTimeout( function(){
    api2 = $.data( $('#main-slider')[0], 'liquidSlider');
}, 300);