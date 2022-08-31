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
});


$(function () {
var $calendar;
		$(document).ready(function () {
		  let container = $("#container").simpleCalendar({
			fixedStartDay: 0, // begin weeks by sunday
			disableEmptyDetails: true,
			events: [
			  // generate new event after tomorrow for one hour
			  {
				startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
				endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
				summary: '영주시 어린이합창단 음악회'
			  },

              // generate new event after tomorrow for one hour
			  {
				startDate: new Date(new Date().setDate(9)).toDateString(),
				endDate: new Date(new Date().setDate(9)).toISOString(),
				summary: '영주시 어린이합창단 음악회'
			  },
              
			  // generate new event for yesterday at noon
			  {
				startDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 12, 0)).toISOString(),
				endDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 11)).getTime(),
				summary: '영주시의 날 행사'
			  },
			  // generate new event for the last two days
			  {
				startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),
				endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
				summary: '영주시 체육회'
			  }
			],
	  
		  });
		  $calendar = container.data('plugin_simpleCalendar')
        });
        
    });
 


 
    $(document).ready(function(){

        //슬라이드 쇼 호출
        slideShow();


    });

    function slideShow(){
        //모든 이미지의 불투명도를 0으로 설정
        $('#gallery a').css({opacity:0.0});

        //첫번째 이미지 보여지도록
        $('#gallery a:first').css({opacity:1.0});
        
        //캡션배경을 반투명하게 설정
        $('#gallery .caption').css({opacity:0.7});

        //이미지의 너비에 맞게 캡션너비 조정
        $('#gallery .caption').css({width:$('#gallery a').find('img').css('width')});

        //rel속성에서 첫번재 이미지 캡션을 가져와 표시하기
        $('#gallery .content').html($('#gallery a:first').find('img').attr('rel')).animate({opacity:0.7},400);

        //아래 갤러리 기능을 호출하여 슬라이드 쇼를 실행
        setInterval('gallery()',3000);
    }
    function gallery(){

        //쇼 클래스가 있는 img일 경우 첫번째 이미지를 가져오기
        var current = ($('#gallery a.show') ? $('#gallery a.show') : $('#gallery a:first'));

        //다음이미지 가져오기.
        //hasClass는 변수로 지정된 css의 해당 클래스가 존재하는지 확인
        var next = ((current.next().length) ? ((current.next().hasClass('caption')) ? $('#gallery a:first') : current.next()) : $('#gallery a:first'));


        //다음 이미지 캡션 가져오기
        var caption = next.find('img').attr('rel');


        //다음 이미지의 페이드인 효과 설정.
        next.css({opacity:0})
        .addClass('show')
        .animate({opacity:1.0},1000);

        //현재이미지 페이드아웃
        current.animate({opacity:0.0},1000)
        .removeClass('show');

        //캡션영역
        $('#gallery .caption').animate({opacity:0},{duration:50}).animate({height:'1px'},{duration:300});

        $('#gallery .caption').animate({opacity:0.7},100).animate({height:'120px'},500);

        //내용연결 표시
        $('#gallery .content').html(caption);

    }




 




 


 
 