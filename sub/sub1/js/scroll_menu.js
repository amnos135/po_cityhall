jQuery(document).ready(function(){
    
    $('.text_Move').DB_springMove({ /* h1태그 */
        dir:'x', /* 방향 */
        mirror:5, /* 움직이는 반경 */
        radius:10, /* 움직이는 반경의 지름 */
        motionSpeed:0.07 /* 속도 */
    });

    $('.text_Move').text("포트폴리오"); //.text()메서드를 이용해 텍스트내용을 입력

    $('.dd1').DB_springMove({
        dir:'y', /* 방향 */
        mirror:2, /* 움직이는 반경 */
        radius:10, /* 움직이는 반경의 지름 */
        motionSpeed:0.07 /* 속도 */
    })
    



})