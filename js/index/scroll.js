$(document).ready(function(){

    var pos;
    var base = 200;

    setPos();

    
    //resize 
    $(window).on('resize', setPos);

    //scroll motion
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();

        if(scroll>=pos[0] && scroll<pos[1] ){
            $('#navi>li>a').removeClass('on');
            $('#navi>li').eq(0).children('a').addClass('on');
        }
        if(scroll>=pos[1] - base && scroll<pos[2]){
            $('#navi>li>a').removeClass('on');
            $('#navi>li').eq(1).children('a').addClass('on');
            $('#con1').addClass('on');
        }
        if(scroll>=pos[2] - base && scroll<pos[3]){
            $('#navi>li>a').removeClass('on');
            $('#navi>li').eq(2).children('a').addClass('on');
            $('#part').addClass('on');
        }
        if(scroll>=pos[3] - base && scroll<pos[4]){
            $('#navi>li>a').removeClass('on');
            $('#navi>li').eq(3).children('a').addClass('on');
            $('#tab').addClass('on');
        }
        if(scroll>=pos[4] - base && scroll<pos[5]){
            $('#navi>li>a').removeClass('on');
            $('#navi>li').eq(4).children('a').addClass('on');
            $('#blue').addClass('on');
        }
        if(scroll>=pos[5] - base && scroll<pos[6]){
            $('#navi>li>a').removeClass('on');
            $('#navi>li').eq(5).children('a').addClass('on');
            $('#banner').addClass('on');
        }
        if(scroll>=pos[6] - base && scroll<pos[7]){
            $('#navi>li>a').removeClass('on');
            $('#navi>li').eq(6).children('a').addClass('on');
            $('#black').addClass('on');
        }
        if(scroll>=pos[7]){
            $('#navi>li>a').removeClass('on');
            $('#navi>li').eq(7).children('a').addClass('on');
            $('#notice').addClass('on');
        }
    });

    //btn click
    $('#navi li a').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var target_pos = $(target).offset().top;
        $('html, body').stop().animate({scrollTop : target_pos}, 500);
    });

    function setPos(){
        pos = [];
        $('.myScroll').each(function(index, item){
            pos.push($(item).offset().top);
        });
        console.log(pos);
    }


});