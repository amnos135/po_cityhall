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






$(function () {
    /* 날씨 */

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=37.3987402&lon=126.920795&appid=931cf418021445795381368f79037456&units=Metric', function (data) { //lat=37.3987402&lon=126.920795   지도경도 위치..원하는 위치를 찾아서 위치를 바꿔보셈..이주소는 구글의 안양고용복지센터이다..



        var $city = data.name; /* 도시이름 */
        var $minTemp = data.main.temp_min; /* 최저온도 */
        var $maxTemp = data.main.temp_max; /* 최고온도 */
        var $cTemp = data.main.temp; /* 현재온도 */
        var $wIcon = data.weather[0].icon; /* 아이콘 */

        var now = new Date(Date.now()); /* 현재 날짜 */
        var b = now.getDay()
        switch (b) {
            case 0:
                c = "일"
                break

            case 1:
                c = "월"
                break

            case 2:
                c = "화"
                break

            case 3:
                c = "수"
                break

            case 4:
                c = "목"
                break

            case 5:
                c = "금"
                break

            case 6:
                c = "토"
                break
        }

        /* 날씨 아이콘 데이터 api */
        //현재의 날씨정보가 필요함.
        //앞의 코드 2자리의 숫자로 날씨를 구분
        //폰트어썸 이미지를 이용하여 각 아이콘 코드의 숫자에 따라 폰트어썸에서 제공한 각 날씨의 아이콘 스크립트를 저장할 객체를  weatherIcon 생성
        let weatherIcon = {
            '01': 'wi wi-day-sunny',
            '02': 'wi wi-day-cloudy',
            '03': 'wi wi-cloud',
            '04': 'wi wi-cloudy',
            '09': 'wi wi-day-rain-mix',
            '10': 'wi wi-showers',
            '11': 'wi wi-thunderstorm',
            '13': 'wi wi-snowflake-cold',
            '50': 'wi wi-smog'
        }

        var month = now.getMonth() + 1;
        var $cDate = now.getFullYear() + '년' + month + '월' + now.getDate() + '일' + c + '요일' + now.getHours() + '시' + now.getMinutes() + '분';

        var $wIcon = (data.weather[0].icon).substr(0, 2); /* (시작,길이) */

        $('.ctemp').append($cTemp + '℃'); /* 현재온도 ->  ㄹ+한자*/
        $('.clowtemp').append($minTemp + 'ºC'); /* 최저온도 */
        $('.chightemp').append($maxTemp + 'ºC'); /* 최고 온도 */

        $('.cicon').append('<i class = "' + weatherIcon[$wIcon] + '"></i> ');

        $('.date').prepend($cDate);
        $('.cname').append($city);

    })


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
 


 