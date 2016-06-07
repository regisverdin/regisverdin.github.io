var api2;

$(document).ready(function(){



    $(function(){
        $('#slider-id').liquidSlider();
        console.log("asdf");
    });

    $(function(){
        $('#main-slider').liquidSlider({
            autoHeight: true,
            heightEaseDuration: 400,
            slideEaseDuration: 500,
            slideEaseFunction: 'fade',
            dynamicArrowsGraphical: true,
            dynamicTabs: false
        });
    });

});

window.setTimeout( function(){
    api2 = $.data( $('#main-slider')[0], 'liquidSlider');
    console.log("here");
    var x = 5;
}, 300);