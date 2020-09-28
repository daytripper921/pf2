$(document).ready(function(){

    var btn = $('#branch li');
    var map = $('.wrap iframe');

    btn.on('click', function(){
        var gangnam = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.415516507119!2d127.0238732396322!3d37.49811691419097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15bd9bbb66d%3A0x84fd6455480862c1!2z7ISc7Jq47Yq567OE7IucIOyEnOy0iDTrj5kgR1Ttg4Dsm4w!5e0!3m2!1sko!2skr!4v1601221762862!5m2!1sko!2skr";

        var jongro = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.3614749608314!2d126.99012857351669!3d37.57010499638426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDM0JzEyLjQiTiAxMjbCsDU5JzMwLjEiRQ!5e0!3m2!1sko!2skr!4v1601220802811!5m2!1sko!2skr";
        
        var itaewon = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.9295445450637!2d126.99164977600849!3d37.53481882187398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca24a3ebb8a29%3A0xf95059c3afd2fa8f!2z7Jeg7YyM7J207Ja0!5e0!3m2!1sko!2skr!4v1601222014507!5m2!1sko!2skr";

        var yeongdeungpo = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.2890204047717!2d126.90803197600839!3d37.51786912235813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMxJzA0LjMiTiAxMjbCsDU0JzMyLjkiRQ!5e0!3m2!1sko!2skr!4v1601222540831!5m2!1sko!2skr";

        

        $(this).addClass('on').siblings().removeClass('on');
        var loca = $(this).index();
        console.log(loca);

        if(loca == 1){
            map.attr('src','');
            map.attr('src', jongro);
        } else if (loca == 2) {
            map.attr('src','');
            map.attr('src', itaewon);
        } else if (loca == 3){
            map.attr('src','');
            map.attr('src', yeongdeungpo);
        } else if (loca == 0) {
            map.attr('src','');
            map.attr('src', gangnam);
        }

    });


});