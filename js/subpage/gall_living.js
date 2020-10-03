$(document).ready(function(){

    let url_search = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';
    let key = '673aecd9f0fe2c86bdcaa64b50aca0ca';
    let per_page = 20;
    let page_num = 1;
    let tags = 'livingroom design';

    call_data(url_search, key, page_num, per_page, tags);

    //pagenation
    $('.paging a').on('click', function(){
        page_num = $(this).index()+1;
        call_data(url_search, key, page_num, per_page, tags);

        $('.paging a').removeClass('on');
        $(this).addClass('on');
    });


    //데이터 호출
    function call_data(url_search, key, page_num, per_page, tags){
        
        $.ajax({
            url : url_search,
            dataType : 'json',
            data : {
                api_key : key,
                page : page_num,
                per_page : per_page,
                tags : tags,
                tagmode : 'any',
                privacy_filter : 5,
                format : 'json',
                nojsoncallback : 1
            }

        })
        .success(function(data){
            console.log(data);
            create_dom(data);
        })
        .error(function(){
            alert('Fail to load data!');
        });
    }

    //DOM 생성 
    function create_dom(data){
        $('.wrap').removeClass('on');
        $('.wrap>ul').empty();

        let items = data.photos.photo;

        $(items).each(function(){

            $('.gall_living .wrap>ul')
                .append(
                    $('<li>')
                        .append(
                            $('<div>')
                                .append(
                                    $('<a>').attr({href : 'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'_b.jpg'})
                                        .append(
                                            $('<img>').attr({src : 'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'_m.jpg'})
                                        )
                                )
                        )
                )

                setTimeout(function(){
                    iso_layout('.wrap>ul');

                    setTimeout(function(){
                        $('.wrap').addClass('on');
                    },300);
                }, 500);
        });
    }

    //레이어 팝업
    $('body').on('click', '.gall_living .wrap>ul>li>div', function(e){
        e.preventDefault();

        let imgSrc = $(this).children('a').attr('href');

        $('.bigImg>img').attr({src : imgSrc});
        $('.bigImg').fadeIn();

        //close
        $('.bigImg').on('click', function(){
            $('.bigImg').fadeOut(10);
        });
    });

    //isotope
    function iso_layout(target){
        iso = new Isotope (target, {
            itemSelector : '.wrap>ul>li',
            columnWidth : '.wrap>ul>li',
            transitionDuration : '0.8s',
            percentPosition : true
        });
    }



});