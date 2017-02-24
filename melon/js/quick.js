$(document).ready(function () {
    // 현재 슬라이드 메뉴의 위치를 구함
    var slideTop = parseInt($(".quick").css("top"),10);
	$(window).scroll(function () {
		//현재 스크롤바의 위치값 반환
		var scrollTop = $(window).scrollTop();
		//슬라이드 메뉴의 위치 변경
		$(".quick").stop().animate({
			"top": scrollTop + 200 + "px"
		}, 1000); //변경될 css 내용
    });

});
