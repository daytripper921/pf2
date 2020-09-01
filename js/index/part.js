$(document).ready(function(){

    var $list = $('.wrap li')

    $list.on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});