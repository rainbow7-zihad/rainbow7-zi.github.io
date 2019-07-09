$(function () {

    var menu = $(".full_sticky").offset().top;
    //    alert(menu);

    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();

        //        alert($scrolling);
        if ($scrolling >= menu) {
            $('.full_sticky').addClass('sticky');
        } else {
            $('.full_sticky').removeClass('sticky');

        }

    })


    $(".top i").click(function(){
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });



})


//end
