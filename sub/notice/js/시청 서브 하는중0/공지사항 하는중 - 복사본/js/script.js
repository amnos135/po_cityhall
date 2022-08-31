$(function () {
    /* 탭메뉴 */
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});







$(function () {
    /* 팝업에 있는 팝업 슬라이드 */

    var banner = $('.visual1>ul>li');
    var button1 = $('.arrow1_1_center>img.next');
    var button2 = $('.arrow1_1_center>img.prev');
    var current = 0;
    var setIntervalId00;
    var p = $('.section_number>p');

    timer();

    function timer() {
        setIntervalId00 = setInterval(function () {
            var prev = banner.eq(current);
            var pn = p.eq(current); /* 현재의 순번들 */

            move(prev, 0, '-100%');
            pn.removeClass('bl');

            current++;

            if (current == banner.size()) {
                current = 0;
            }

            var next = banner.eq(current);
            var pnn = p.eq(current);
            move(next, '100%', 0);
            pnn.addClass('bl');

        }, 5000)
    }

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({
            left: end
        }, {
            duration: 500,
            ease: 'easeOutCubic'
        });
    }

    $('.visual1').on({
        mouseover: function () {
            clearInterval(setIntervalId00);

        },
        mouseout: function () {
            timer();
        }
    });

    button1.click(function () {

        var prev = banner.eq(current);
        var pn = p.eq(current);

        move(prev, 0, '-100%');
        pn.removeClass('bl');

        current++;
        if (current == banner.size()) {
            current = 0;
        }

        var next = banner.eq(current);
        var pnn = p.eq(current);

        move(next, '100%', 0);
        pnn.addClass('bl');

        return false; //onclick이벤트에서 return false가 있는경우 href로 이동하는 액션을 막아주기위해.

    });

    button2.click(function () {
        var prev = banner.eq(current);
        var pn = p.eq(current);

        move(prev, 0, '100%');
        pn.removeClass('bl');

        current--;
        if (current == -banner.size()) {
            current = 0;
        }

        var next = banner.eq(current);
        var pnn = p.eq(current);

        move(next, '-100%', 0);
        pnn.addClass('bl');

        return false; //onclick이벤트에서 return false가 있는경우 href로 이동하는 액션을 막아주기위해.

    });
});

 



$(document).ready(function(){   /* 왼쪽서브메뉴 */
        
    //모든 서브 메뉴 감추기
    $(".sub").css({display:"none"}); 
    //$(".sub").hide(); //위코드와 동일 

    $(".title").click(function(){
        //일단 서브메뉴 다 가립니다.
        //$(".sub").css({display:"none"});
        
        //열린 서브메뉴에 대해서만 가립니다.
        $(".sub").each(function(){
            console.log($(this).css("display"));
            if($(this).css("display")=="block") {
                //$(".sub").css({display:"none"});
                //$(this).hide();
                $(this).slideUp("fast");
            }
        });

        //현재 요소의 다음 요소를 보이게 합니다.
        //$(this).next("ul").css({display:"block"});
        //$(this).next("ul").show();
        $(this).next("ul").slideDown("fast");


    })
});



<script>
$(function(){
    //a링크의 class .scroll을 클릭했을 때 
    $('.scroll').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        },500);  //특정한 인덱스 번호같은 것을 찾기 위해 hash를 씀 this(클릭한 대상)
    });
    //윈도우 크기
    $(window).resize(function(){
        $('.container').width($(window).width()).height($(window).height())
        $('.content').each(
            function(){
                $(this).css('margin-left', ($(this).width()/2*-1)+'px').css('margin-top',($(this).height()/2*-1)+'px');
            });
    });
    //지정된 초 후에 함수를 호출 //일정시간 지연시키는 지연함수
    setTimeout(function(){
        $(window).resize() //호출
    },500); //창의 크기가 변경될때마다 지연시간을 줌

    //패럴렉스 스크롤
    $('.bg-holder').parallaxScroll({ //시차스크롤
        //마찰정도
        friction:0.3
    })
    //아이콘 이미지 변경
    $('.icon img').hover(function(){
        $(this).attr('src', $(this).attr('src').replace('.png','_over.png')); //replace는 ('1' ,'2')1이 2로 바뀌는 것
    },function(){
        $(this).attr('src', $(this).attr('src').replace('_over.png','.png'));
    })

});
</script>


 