$(document).ready(function(){

    resizing();
    $(window).on('resize', resizing);

   
    //skip_navi
    $('#skipNavi a').on('focusin', function(){
        $(this).addClass('on');
    })

    $('#skipNavi a').on('focusout', function(){
        $(this).removeClass('on');
    })


    //mobile nav
    $('.btnCall').on('click', function(){
        var isOpen = $('#gnbMo').hasClass('on');

        $(this).toggleClass('on');

        if(isOpen){
            $('#gnbMo').removeClass('on');
            $('html').css({overflow : 'visible'});
        } else {
            $('#gnbMo').addClass('on');
            $('html').css({overflow : 'hidden'});
        }
    });

    $('.gnbMo_left').on('click', function(){

        $('#gnbMo').removeClass('on');
        $('html').css({overflow : 'visible'});
        $('.btnCall').removeClass('on');
    });

    //mobile ul li
    $('#gnbMo>.gnbMo_right>.gnbMo_list>ul>li>a').on('click', function(){
        var opened = $(this).hasClass('on');

        //all close
        $('#gnbMo>.gnbMo_right>.gnbMo_list>ul>li>a').removeClass('on');
        $('#gnbMo>.gnbMo_right>.gnbMo_list>ul>li>ul').slideUp();

        if(opened){
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
            $(this).next('ul').slideDown();
        }
    });

    function resizing(){
        var wid = $(window).width();

        if(wid >= 1180){
            // web
            $('#header').on('mouseenter', openHeader);
            $('#header').on('mouseleave', closeHeader);

            //mobile
            $('#gnbMo').removeClass('on');
            $('.btnCall').removeClass('on');

            //focus
            $('#gnb>li>a').on('focusin', function(){
                $('#gnb>li>ul').stop().slideDown();
                $('.bgGnb').stop().slideDown();
            });

            $('#gnb li').last('a').last().on('focusout', function(){
                $('#gnb').find('ul').stop().slideUp();
                $('.bgGnb').stop().slideUp();
            });

        } else {
            $('#header').off('mouseenter');
            $('#header').off('mouseleave');
        }
    }

    function openHeader(){
        $('#gnb').find('ul').stop(true, true).slideDown();
        $('.bgGnb').stop(true, true).slideDown();
    }

    function closeHeader(){
        $('#gnb').find('ul').stop().slideUp();
        $('.bgGnb').stop().slideUp();
    }
});