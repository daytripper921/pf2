$(document).ready(function(){
    //wheel motion
    $('section, figure').on('mousewheel',function(e, delta){ 
        e.preventDefault();    
    
        var active_index = $('#navi>li>a.on').parent('li').index();
        var len = $('#navi>li').length;

        if(delta > 0){
            //up
            console.log(active_index); 
            if(active_index == -1) return;

            console.log('up'); 
            var prev_pos = $(this).prev().offset().top;
            $('html, body').stop().animate({scrollTop : prev_pos}, 500, "swing");

        } else {
            //down
            console.log(active_index); 
            if(active_index == len) return;

            console.log('down');
            var next_pos = $(this).next().offset().top;
            $('html, body').stop().animate({scrollTop : next_pos}, 500, "swing");
        }
    });
    
});