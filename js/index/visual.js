$(document).ready(function(){

    var container = $('.slideshow');
    var slideGroup = container.find('.slideshow_slides');
    var slides = slideGroup.find('a');
    var nav = container.find('.slideshow_nav');
    var indicator = container.find('.indicator');
    var slideCount = slides.length;
    var indicatorHtml = ''; //인디케이터 슬라이드 갯수만큼 생성
    var currentIndex = 0; //현재 슬라이드 위치
    var duration = 500;
    var easing = 'easeInOutExpo';
    var interval = 3500;
    //마우스 오버 시 멈출 것
    var timer;

    

    //슬라이드 가로로 배열
    //slide마다 할 일
    slides.each(function(i){
        var newLeft = (i * 100) + '%';

        $(this).css({left : newLeft });

        indicatorHtml += '<a href="#">'+ (i+1) +'</a>'
        console.log(indicatorHtml);
    }); //slides.each

    indicator.html(indicatorHtml);


    //슬라이드 이동 함수
    function goToSlide(index){
        //index 0 -> left : 0 ; index 1 -> left: -100%
        slideGroup.animate({left : (-100 * index) + '%'}, duration, easing);
        currentIndex = index;
        //console.log(currentIndex);

        updateNav(); //처음 or 마지막 슬라이드인지 검사 + 인디케이터 active 추가
     }//gotoslide

    function updateNav(){
        var navPrev = nav.find('.visual_prev');
        var navNext = nav.find('.visual_next');
        //처음 = currentIndex 0 -> .prev .disabled
        // 마지막 = currentIndex 3 -> .next .disabled
        if (currentIndex == 0) {
            navPrev.addClass('disabled');
        } else {
            navPrev.removeClass('disabled');
        }

        if (currentIndex == slideCount - 1) {
            navNext.addClass('disabled');
        } else {
            navNext.removeClass('disabled');
        }

        // indicator.find('a').removeClass('active');
        // indicator.find('a').eq(currentIndex).addClass('active');

        indicator.find('a').eq(currentIndex).addClass('active').siblings().removeClass('active');

    } //updatenav();



    //인디케이터로 이동하기
    indicator.find('a').on('click', function(e){
        e.preventDefault();

        var idx = $(this).index();
        //console.log(idx);

        goToSlide(idx);

    });

    //좌우버튼으로 이동하기
    //다음버튼 클릭 : currentIndex + 1 -> gotoslide(?);
    //이전버튼 클릭 : currentIndex - 1 -> gotoslide(?);
    
    /*
    nav.find('.visual_prev').on('click', function(e){
        e.preventDefault();
        //var i = currentIndex - 1;

        goToSlide(currentIndex - 1);
    });
    nav.find('.visual_next').on('click', function(e){
        e.preventDefault();
        //var i = currentIndex + 1;

        goToSlide(currentIndex + 1);
    });
    */
    nav.find('a').on('click', function(e){
        e.preventDefault();

        if($(this).hasClass('visual_prev')){
            goToSlide(currentIndex - 1);
        } else{
            goToSlide(currentIndex + 1);
        }
    });

    updateNav();

    //자동 슬라이드 함수
    function startTimer(){
        //일정시간마다 할 일
        timer = setInterval(function(){
            //nextindex currentindex0 nextindex1, c1 n2, ... c3 n0
            var nextIndex = (currentIndex + 1) % slideCount;
            goToSlide(nextIndex);
        }, interval);
    }

    startTimer();
    
  
    function stopTimer(){
        clearInterval(timer);
    }

    container.mouseenter(function(){
        stopTimer();
    });
    container.mouseleave(function(){
        startTimer();
    });

});