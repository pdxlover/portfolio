$(document).ready(function(){//시작

    //모바일 버튼 동장
    $(".drop_btn").click(function(){
        $(".mgnb_wrap").animate({
            right:"0"
        },1000);

       // $(".mgnb_wrap").addClass("on");
    });

    $(".close_btn").click(function(){
        $(".mgnb_wrap").animate({
            right:"-100%"
        });

        //$(".mgnb_wrap").removeClass("on");
    });




    //모바일 스크롤 액션
    $(window).scroll(function(){
    
        var location = $(window).scrollTop() + 400;

        if(location < 1000){
            $(".tit").removeClass("active");
        }
        
        if(location >= $(".mobile .section1").offset().top  && location < $(".mobile .section2").offset().top ){
            $(".tit").removeClass("active");
            $(".mobile .section1 .tit").addClass("active");
        }
        if(location >= $(".mobile .section2").offset().top && location  < $(".mobile .section3").offset().top ){
            $(".tit").removeClass("active");
            $(".mobile .section2 .tit").addClass("active");
        }
        if(location >= $(".mobile .section3").offset().top  && location < $(".mobile .section4").offset().top ){
            $(".tit").removeClass("active");
            $(".mobile .section3 .tit").addClass("active");
        }
        if(location >= $(".mobile .section4").offset().top  && location < $(".mobile .section5").offset().top ){
            $(".tit").removeClass("active");
            $(".mobile .section4 .tit").addClass("active");
        }
        if(location >= $(".mobile .section5").offset().top  && location < $(".mobile .section6").offset().top ){
            $(".tit").removeClass("active");
            $(".mobile .section5 .tit").addClass("active");
        }
    if(location >= $(".mobile .section6").offset().top ){
            $(".tit").removeClass("active");
            $(".mobile .section6 .tit").addClass("active");
        }
        
        
   });



    



   AOS.init();



})//끝