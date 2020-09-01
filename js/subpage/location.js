window.onload = function(){

    var btn = $('#branch li');

    var mapContainer = document.getElementById('map'); 
    var mapOption = { 
        center: new kakao.maps.LatLng(37.4970974,127.0272374), 
        level: 4 
    };
    var map = new kakao.maps.Map(mapContainer, mapOption); 


    var markerOptions = [
        {
            title: '강남점',
            latlng: new daum.maps.LatLng(37.4970974,127.0272374),
            imgSrc : '../img/marker.png',
            imgSize : new daum.maps.Size(50,50),
            imgPos : {offset: new kakao.maps.Point(123, 104)},
            button : document.getElementById('branch1')
        },
        {
            title: '종로점',
            latlng: new daum.maps.LatLng(37.5725,126.99295),
            imgSrc : '../img/marker.png',
            imgSize : new daum.maps.Size(50,50),
            imgPos : {offset: new kakao.maps.Point(200, 35)},
            button : document.getElementById('branch2')
        },
        {
            title: '이태원점',
            latlng: new daum.maps.LatLng(37.5348737,126.996375),
            imgSrc : '../img/marker.png',
            imgSize : new daum.maps.Size(50,50),
            imgPos : {offset: new kakao.maps.Point(123, 110)},
            button : document.getElementById('branch3')
        },
        {
            title: '영등포점',
            latlng: new daum.maps.LatLng(37.51559327731903,126.90735570329154),
            imgSrc : '../img/marker.png',
            imgSize : new daum.maps.Size(50,50),
            imgPos : {offset: new kakao.maps.Point(150, 134)},
            button : document.getElementById('branch4')
        },
    ];

    for(var i=0; i<markerOptions.length; i++){
        new daum.maps.Marker({
            map : map,
            position : markerOptions[i].latlng,
            title : markerOptions[i].title,
            image : new daum.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos)
        });    

        (function(index){
            markerOptions[index].button.onclick = function(){
                moveTo(markerOptions[index].latlng);
                console.log(index);
            }
        })(i);        
    }    

    function moveTo(target){
        var moveLatLan = target;
        map.setCenter(moveLatLan);
        return false;
    }
   
    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.BOTTOMRIGHT);


    setDraggable(true);           
    function setDraggable(draggable) {
        map.setDraggable(draggable);    
    }


    setZoomable(false);
    function setZoomable(zoomable) {          
        map.setZoomable(zoomable);    
    }

    btn.on('click', function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    /*
    var t_on = document.getElementById('t_on');
    var t_off = document.getElementById('t_off');

    t_on.onclick = function(){
        map.addOverlayMapTypeId(daum.maps.MapTypeId.TRAFFIC);
        return false;
    }
    t_off.onclick = function(){
        map.removeOverlayMapTypeId(daum.maps.MapTypeId.TRAFFIC); 
        return false;
    } 
    */

}