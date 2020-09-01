$(document).ready(function(){

    $('.join').on('submit', function(e){
        e.preventDefault();

        var agreed = $('#terms').is(':checked');
        var len = $('.required').length;
        var pwd = $('#pwd').val();
        var pwd2 = $('#pwd2').val();
        var radio = $('input[name=gender]').is(':checked');
        var i = 0;
        var isRequired = false;
        var isPwd = false;
        var isGender = false;

        $('textarea, input, td').removeClass('red');
        
        if(!agreed){
            alert('약관에 동의해 주세요.')
            $('.agreement textarea').addClass('red');
        }else {
            //필수 텍스트 확인
            $('.required').each(function(index){
                var data = $(this).val();
                var txt = $(this).attr('placeholder');

                if(!data){
                    alert(txt);
                    $(this).addClass('red');
                }else {
                    i++; 
                }
            });

            if(i==len){
                isRequired = true;
            }

            //비밀번호1,2 일치한지 확인
            if(pwd !== pwd2){
                alert('비밀번호를 동일하게 입력해주세요.')
                $('#pwd, #pwd2').addClass('red');
            } else {
                isPwd = true;
            }

            //라디오 버튼
            if(!radio){
                alert('성별을 선택해 주세요.');
                $('input[name=gender').parent('td').addClass('red');
            } else {
                isGender = true;
            }

            // 최종 확인
            if(isRequired && isPwd && isGender){
                alert('회원가입이 완료되었습니다.');

                $('.required').val('');
                $('#terms').prop('checked', false);
                $('input[name=gender]').prop('checked', false);
            }
        }
    });
});