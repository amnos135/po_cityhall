$(document).ready(function () {
    /* 왼쪽서브메뉴 */

    //모든 서브 메뉴 감추기
    $(".group:not(.on) .sub").css({
        display: "none"
    });

    //$(".sub").hide(); //위코드와 동일 

    $(".group").click(function () {

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


    })
});