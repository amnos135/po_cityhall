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
    /* 탭메뉴 */
    $('.tabcontentt > div').hide();
    $('.tabnavv a').click(function () {
        $('.tabcontentt > div').hide().filter(this.hash).fadeIn();
        $('.tabnavv a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});



$(document).ready(function () {
    /* 왼쪽서브메뉴 */
    /* 왼쪽서브메뉴 */

    //모든 서브 메뉴 감추기
    $(".group:not(.on) .sub").css({
        display: "none"
    });

    //$(".sub").hide(); //위코드와 동일 

    $(".group").click(function () {
        //일단 서브메뉴 다 가립니다.
        // $(".group .sub").css({
        //     display: "none"
        // });

        //열린 서브메뉴에 대해서만 가립니다.
        // $(".group .sub").each(function () {
        //     console.log($(this).css("display"));
        //     if ($(this).css("display") == "block") {
        //         //$(".sub").css({display:"none"});
        //         //$(this).hide();
        //         $(this).slideUp("fast");
        //     }
        // });

        if ($(this).hasClass('on') == true) {
            $(this).removeClass('on');
            $(this).find('.sub').slideUp("fast");
            return;
        }

        $(".group").each(function () {
            $(this).removeClass('on');
        });

        $(this).addClass('on');
        $(".group").each(function () {
            if ($(this).hasClass('on') == true) {
                $(this).find('.sub').slideDown("fast");
            } else {
                $(this).find('.sub').slideUp("fast");
            }
        });



        //현재 요소의 다음 요소를 보이게 합니다.
        //$(this).next("ul").css({display:"block"});
        //$(this).next("ul").show();
    })
});


$('.open_icon').hide(); //위로가기버튼

$(window).scroll(function () {
    if ($(this).scrollTop() > 500) { //스크롤의 위치가 500보다 클때 상황이라면
        $('.open_icon').fadeIn(); //탑버튼이 서서히 나타나도록
    } else {
        $('.open_icon').fadeOut(); //탑버튼이 서서히 사라지도록
    }
});
//top버튼 눌렀을때 느리게 이동하도록...
$('.open_icon').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 400);
    return false; //원래의 하이퍼링크 속성(html에서 a링크에 # 적혀있던거..빠르게 올라가는거..)이 무시됨.
});