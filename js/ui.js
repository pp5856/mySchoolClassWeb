$(document).ready(function(){
	$("#container").addClass("start");
	$("nav li").click(function(){
		$("#container").css("max-width", "100%")
		var id=$(this).attr("data-rol");    
		$("nav li").removeClass("on");    
		$(this).addClass("on");    
		$(".content").removeClass("prev this next");     
		//클릭 시 가지고 있던 클래스를 모두 지운다    
		$("#" + id).addClass("this").prevAll().addClass("prev");    
		//클릭한 메뉴와 매칭 되는 id에 this 클래스를 지정하고 그 앞의 모든 <section> 태그는 .prev클래스를 지정한다    
		$("#" + id).nextAll().addClass("next");    
		//클릭한 메뉴와 매칭 되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다     
	});
	//로고 클릭 시
	$(".logo_box").click(function(){
		$("nav li").removeClass("on");
		$(".content").removeClass("prev this next");
		$("#container").css("max-width", "1200px");
	});
	//롤링배너 왼쪽
	$(".roll_left").click(function(){
		$(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
	});
	//롤링배너 오른쪽
	$(".roll_right").click(function(){
		$(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
	});
	//ajax 사용하기
	$(".book_roll li").click(function(){
		var _this =$(this);
		var liurl =_this.data("url");
		$(".notebook").html();
		$.ajax({
			type : 'post', //HTTP 요청 방식
			url : liurl, //해당 url
			dataType : 'html', //data 타입
			success : function(data) { //HTTP 요청 성공 후 데이터 전송
				$(".notebook").html(data);
			}
		});
	});
	//faq 게시판
	$(".accordio_box ol li").click(function(){
		$(".accordio_box ol li").removeClass("on");
		$(this).addClass("on");
	});
	//팝업 닫기
	$(".close").click(function(){
		$(".thankyou_message").css("display", "none");
	});
});

$(document).ready(function(){
	$('.slider').slider();
  });


document.addEventListener('DOMContentLoaded', function(){ //DOM 생성 후 이벤트 리스너 등록
  //더보기 버튼 이벤트 리스너
  document.querySelector('.btn_open').addEventListener('click', function(e){
      
      let classList = document.querySelector('.detailinfo').classList; // 더보기 프레임의 클래스 정보 얻기
      let contentHeight = document.querySelector('.detailinfo > .anime-load').offsetHeight; //컨텐츠 높이 얻기

      // 2단계이면 전체보기로
      if(classList.contains('showstep2')){
          classList.remove('showstep2');
      }
      // 1단계이면 2단계로
      if(classList.contains('showstep1')){
          classList.remove('showstep1');
          if(contentHeight > 900){
              classList.add('showstep2');
          }else{
              document.querySelector('.btn_open').classList.add('hide');
          }
      }
      //전체보기시 더보기 버튼 감추기 & 감추기 버튼 표시
      if(!classList.contains('showstep1') && !classList.contains('showstep2')){
          e.target.classList.add('hide');
          document.querySelector('.btn_close').classList.remove('hide');
          
      }
      
  });
});
// 감추기 버튼 이벤트 리스너
document.querySelector('.btn_close').addEventListener('click', function(e){
    e.target.classList.add('hide');
    document.querySelector('.btn_open').classList.remove('hide'); // 더보기 버튼 감춤
    document.querySelector('.detailinfo').classList.add('showstep1'); // 초기 감춤 상태로 복귀
});

//컨텐츠 로딩 완료 후 높이 기준으로 클래스 재처리
window.addEventListener('load', function(){
    let contentHeight = document.querySelector('.detailinfo > .anime-load').offsetHeight; //컨텐츠 높이 얻기
    if(contentHeight <= 1170){
        document.querySelector('.detailinfo').classList.remove('showstep1'); // 초기값보다 작으면 전체 컨텐츠 표시
        document.querySelector('.btn_open').classList.add('hide'); // 버튼 감춤
    }
});
