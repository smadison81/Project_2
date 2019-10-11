$(document).ready(function () {
    // Add a function to scroll to the "About Us" div

    $(".scrollToHCT").click(function () {
        $('html, body').animate({
            scrollTop: $(".HCT").offset().top
        }, 1000);
    });

    $(".scrollToCCT").click(function () {
        $('html, body').animate({
            scrollTop: $(".CCT").offset().top
        }, 1000);
    });

    $(".scrollToSandwiches").click(function () {
        $('html, body').animate({
            scrollTop: $(".Sandwiches").offset().top
        }, 1000);
    });

    $(".scrollToTacos").click(function () {
        $('html, body').animate({
            scrollTop: $(".Tacos").offset().top
        }, 1000);
    });

});