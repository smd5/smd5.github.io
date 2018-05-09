$(function () {

    // jQuery code goes here

    $('.cloud').hover(function () {

        $('.bird').animate({
            opacity: 0,

        }, 100, "swing", function () {});

        $('.bird').animate({

            opacity: 2,


        }, 10, "swing", function () {});

        $('.bird').animate({

            right: "-=1200",
            top: "-=80",

        }, 4000, "swing", function () {

        });

    });


});
