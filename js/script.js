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

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=36.8056858&lon=128.6240551&appid=931cf418021445795381368f79037456&units=Metric', function (data) { //lat=37.3987402&lon=126.920795   지도경도 위치..원하는 위치를 찾아서 위치를 바꿔보셈..이주소는 구글의 안양고용복지센터이다..



        var $city = data.name; /* 도시이름 */
        
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
        var $cDate = now.getFullYear() + '년 ' + month + '월 ' + now.getDate() + '일 ' + c + '요일<br>'  ;

        var $wIcon = (data.weather[0].icon).substr(0, 2); /* (시작,길이) */

        $('.ctemp').append($cTemp + '℃'); /* 현재온도 ->  ㄹ+한자*/
       

        $('.cicon').append('<i class = "' + weatherIcon[$wIcon] + '"></i> ');

        $('.date').prepend($cDate);
        $('.cname').append($city);

    })


});


$('.inn_bot3').on('click',function(){
    $('.inn_bot3 li').stop().slideDown(600);


    $(this).css({"display":"none"},200); 
    $(".close").css({"display":"block"},200);//close버튼이 보이게
});

$('.close').on('click',function(){
    $('.hide').stop().slideUp(600);


    $(this).css({"display":"none"},200); 
    $(".loadmore").css({"display":"block"},200); //close버튼이 사라지고 loadmore버튼이 보이게   
});




		
$('.open_icon').hide();  //위로가기버튼

$(window).scroll(function(){
	if($(this).scrollTop() > 500){ //스크롤의 위치가 500보다 클때 상황이라면
		$('.open_icon').fadeIn(); //탑버튼이 서서히 나타나도록
	} else{
		$('.open_icon').fadeOut(); //탑버튼이 서서히 사라지도록
	}
});
//top버튼 눌렀을때 느리게 이동하도록...
$('.open_icon').click(function(){
	$('html,body').animate({scrollTop : 0},400);
    return false; //원래의 하이퍼링크 속성(html에서 a링크에 # 적혀있던거..빠르게 올라가는거..)이 무시됨.
    


    document.getElementById("con_news_tour").addEventListener("mouseleave", function () {
        document.getElementById("change").checked = false;
    });
    

});


$(document).ready(function () { //영주인터넷뉴스 3개짜리
	
    $('#inn_bot3').hover(function(){
        $('#upthis3').stop().animate({
            top:-190
        },'slow');	
    });
    $('#inn_bot3').mouseleave(function(){
        $('#upthis3').stop().animate({
            top:-91
        },'slow');	
    });
});

$(document).ready(function () { //영주인터넷뉴스 3개짜리
	
    $('#inn_bot2').hover(function(){
        $('#upthis2').stop().animate({
            top:-190
        },'slow');	
    });
    $('#inn_bot2').mouseleave(function(){
        $('#upthis2').stop().animate({
            top:-91
        },'slow');	
    });
});
$(document).ready(function () { //영주인터넷뉴스 3개짜리
	
    $('#inn_bot1').hover(function(){
        $('#upthis1').stop().animate({
            top:-190
        },'slow');	
    });
    $('#inn_bot1').mouseleave(function(){
        $('#upthis1').stop().animate({
            top:-91
        },'slow');	
    });
});


	//쿠키생성..이름,값,유효기간
    function setCookie(name, value, expiredays) {

        var todayDate = new Date();

        //.setDate()메서드는 현재 설정된 월의 시작 부분을 기준으로 Date객체의 날짜를 설정.
        todayDate.setDate(todayDate.getDate() + expiredays);

        //document.cookie는 도큐멘트와 연관된 쿠키를 읽고 쓰게함.
        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toUTCString() + ";"

    }

    //닫기버튼을 클릭하면 쿠키가 생성되면서 닫히도록
    function closeWin() {
        if (document.notice_form.chkbox.checked) {
            setCookie("popWrap", "done", 1); //1일동안
        }
        document.all['popWrap'].style.visibility = "hidden";
    }



    document.getElementById("vr_tour").addEventListener("mouseleave", function () {
        document.getElementById("change").checked = false;
    });




 




 