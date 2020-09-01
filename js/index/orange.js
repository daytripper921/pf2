$(document).ready(function(){

    var $orangePrev = $('#blue .inner .box2 .left2 .orgPrev');
    var $orangeNext = $('#blue .inner .box2 .left2 .orgNext');
    var $orangeList = $('#blue .inner .box2 .left2 .wrap ul');


    resizing();
    $(window).on('resize', resizing);

    $orangeList.children('li').last().prependTo($orangeList);

    function resizing(){
        var wid = $(this).width();

        if(wid>=1180)doBanner(3);
        if(wid>=639 && wid<1180) doBanner(2);
        if(wid<639) doBanner(1);
    }


    function doBanner(num){
        $orangeList.css({marginLeft : (-100 / num)+'%'});

        $orangePrev.off();
        $orangeNext.off();

        //prev
        $orangePrev.on('click', function(e){
            e.preventDefault();
    
            $orangeList.animate({marginLeft : (-100/num) * 2 + '%' }, 500, function(){
                $(this).children('li').first().appendTo(this);
                $(this).css({marginLeft : (-100/num) + '%'})
            });
        });

        //next
        $orangeNext.on('click', function(e){
            e.preventDefault();
    
            $orangeList.animate({marginLeft : '0%'}, 500, function(){
                $(this).children('li').last().prependTo(this);
                $(this).css({marginLeft : (-100/num) + '%'})
            });
        });

    }


});