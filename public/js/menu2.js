$(document).ready(function () {
    // Add a function to scroll to the specific div

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


    // ----------------------------------------
    // Add a function to scroll top from bottom
    /*
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    */
    $("#myBtn").click(function () {
        $('html, body').animate({
            scrollTop: $(".Menu-Container").offset().top
        }, 1000);
    });

});