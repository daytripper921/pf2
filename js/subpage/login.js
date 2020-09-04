$(document).ready(function(){

    var $id = $('#id');
    var $pw = $('#pw');
    var $btn = $('#btn');

    $btn.on('click', function(){
        if( $id.val() == "" ) {
            $id.next('label').addClass('warning');

            setTimeout(function(){
                $('label').removeClass('warning');
            },1500);
        } 
        else if( $pw.val() == "" ){
            $pw.next('label').addClass('warning');

            setTimeout(function(){
                $('label').removeClass('warning');
            }, 1500);
        }
    });

});