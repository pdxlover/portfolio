$(document).ready(function () {//시작


    //모바일 버튼 동장
    $(".drop_btn").click(function () {
        $(".mgnb_wrap").animate({
            left: "0"
        }, 500);

        // $(".mgnb_wrap").addClass("on");
    });

    $(".about_me").click(function () {
        $(".about_wrap").animate({
            right: "0"
        }, 500);

        // $(".mgnb_wrap").addClass("on");
    });

    $(".close_btn").click(function () {
        $(".mgnb_wrap").animate({
            left: "-100%"
        });
        $(".about_wrap").animate({
            right: "-100%"
        });

        //$(".mgnb_wrap").removeClass("on");
    });




    //모바일 스크롤 액션
    $(window).scroll(function () {

        var location = $(window).scrollTop() + 400;

        if (location < 1000) {
            $(".tit").removeClass("active");
        }

        if (location >= $(".mobile .section1").offset().top && location < $(".mobile .section2").offset().top) {
            $(".tit").removeClass("active");
            $(".mobile .section1 .tit").addClass("active");
        }
        if (location >= $(".mobile .section2").offset().top && location < $(".mobile .section3").offset().top) {
            $(".tit").removeClass("active");
            $(".mobile .section2 .tit").addClass("active");
        }
        if (location >= $(".mobile .section3").offset().top && location < $(".mobile .section4").offset().top) {
            $(".tit").removeClass("active");
            $(".mobile .section3 .tit").addClass("active");
        }
        if (location >= $(".mobile .section4").offset().top && location < $(".mobile .section5").offset().top) {
            $(".tit").removeClass("active");
            $(".mobile .section4 .tit").addClass("active");
        }
        if (location >= $(".mobile .section5").offset().top && location < $(".mobile .section6").offset().top) {
            $(".tit").removeClass("active");
            $(".mobile .section5 .tit").addClass("active");
        }
        if (location > $(".mobile .section6").offset().top) {
            $(".tit").removeClass("active");
            $(".mobile .section6 .tit").addClass("active");
        }


    });


    //pc_tit 마우스 오버시 이미지 변화
    $(".pc_inner .pc_section1 .pc_tit").mouseenter(function () {
        $(this).css("opacity", "1");
        $(".pc_inner .pc_section1 .pc_box .img_detail").css("opacity", "1");
    });
    $(".pc_inner .pc_section1 .pc_tit").mouseleave(function () {
        $(this).css("opacity", "0");
        $(".pc_inner .pc_section1 .pc_box .img_detail").css("opacity", "0");

    });

    $(".pc_inner .pc_section2 .pc_tit").mouseenter(function () {
        $(this).css("opacity", "1");
        $(".pc_inner .pc_section2 .pc_box .img_detail").css("opacity", "1");
    });
    $(".pc_inner .pc_section2 .pc_tit").mouseleave(function () {
        $(this).css("opacity", "0");
        $(".pc_inner .pc_section2 .pc_box .img_detail").css("opacity", "0");

    });

    $(".pc_inner .pc_section3 .pc_tit").mouseenter(function () {
        $(this).css("opacity", "1");
        $(".pc_inner .pc_section3 .pc_box .img_detail").css("opacity", "1");
    });
    $(".pc_inner .pc_section3 .pc_tit").mouseleave(function () {
        $(this).css("opacity", "0");
        $(".pc_inner .pc_section3 .pc_box .img_detail").css("opacity", "0");

    });

    $(".pc_inner .pc_section4 .pc_tit").mouseenter(function () {
        $(this).css("opacity", "1");
        $(".pc_inner .pc_section4 .pc_box .img_detail").css("opacity", "1");
    });
    $(".pc_inner .pc_section4 .pc_tit").mouseleave(function () {
        $(this).css("opacity", "0");
        $(".pc_inner .pc_section4 .pc_box .img_detail").css("opacity", "0");

    });

    $(".pc_inner .pc_section5 .pc_tit").mouseenter(function () {
        $(this).css("opacity", "1");
        $(".pc_inner .pc_section5 .pc_box .img_detail").css("opacity", "1");
    });
    $(".pc_inner .pc_section5 .pc_tit").mouseleave(function () {
        $(this).css("opacity", "0");
        $(".pc_inner .pc_section5 .pc_box .img_detail").css("opacity", "0");

    });

    $(".pc_inner .pc_section6 .pc_tit").mouseenter(function () {
        $(this).css("opacity", "1");
        $(".pc_inner .pc_section6 .pc_box .img_detail").css("opacity", "1");
    });
    $(".pc_inner .pc_section6 .pc_tit").mouseleave(function () {
        $(this).css("opacity", "0");
        $(".pc_inner .pc_section6 .pc_box .img_detail").css("opacity", "0");

    });







    $(".pc_inner .pc_box").mouseenter(function () {
        $(this).find(".img_detail").css("opacity", "1");
        $(this).siblings(".pc_tit").css("opacity", "1");
    });

    $(".pc_inner .pc_tit").mouseenter(function () {
        $(this).find(".img_detail").css("opacity", "1");
        $(this).siblings(".pc_tit").css("opacity", "1");
    });

    $(".pc_inner .pc_box").mouseleave(function () {
        $(this).find(".img_detail").css("opacity", "0");
        $(this).siblings(".pc_tit").css("opacity", "0");
    });

    $(".pc_inner .pc_tit").mouseleave(function () {
        $(this).find(".img_detail").css("opacity", "0");
        $(this).siblings(".pc_tit").css("opacity", "0");
    });







    AOS.init();



})//끝