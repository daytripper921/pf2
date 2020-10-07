$(document).ready(function(){

    var $bluePrev = $('#blue .inner .box1 .right .prev');
    var $blueNext = $('#blue .inner .box1 .right .next');
    var $blueList = $('#blue .inner .box1 .right .wrap ul');

    var timer;


    resizing();
    $(window).on('resize', resizing);

    $blueList.children('li').last().prependTo($blueList);

    function resizing(){
        var wid = $(this).width();

        if(wid>=1180)doBanner(3);
        if(wid>=640 && wid<1180) doBanner(2);
        if(wid<639) doBanner(1);
    }


    function doBanner(num){
        $blueList.css({marginLeft : (-100 / num)+'%'});

        $bluePrev.off();
        $blueNext.off();

        //prev
        $bluePrev.on('click', function(e){
            e.preventDefault();
    
            $blueList.animate({marginLeft : (-100/num) * 2 + '%' }, 500, function(){
                $(this).children('li').first().appendTo(this);
                $(this).css({marginLeft : (-100/num) + '%'})
            });
        });

        //next
        $blueNext.on('click', function(e){
            e.preventDefault();
    
            $blueList.animate({marginLeft : '0%'}, 500, function(){
                $(this).children('li').last().prependTo(this);
                $(this).css({marginLeft : (-100/num) + '%'})
            });
        });

    }


});