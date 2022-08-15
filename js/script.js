$(document).ready(function(){

    // 슬라이드 이미지 생성
    const slide_arr = ["./img/img1.jpg","./img/img2.jpg","./img/img3.jpg","./img/img4.jpg","./img/img5.jpg",];
    for(i in slide_arr){
        $(".slideImg").append(`
        <li class="slide_0${Number(i)+1}" rel="${Number(i)+1}" style="background-image: url(${slide_arr[i]});"></li>
        `);
    }


    //공용함수
    function counting(){
        let $show_index = $(".slideImg li.show").index();
        // console.log($show_index);
        const $slide = $(".slideImg li");

        $(".slideImg li").removeClass("show"); //초기화
        $("#banner ol li").removeClass("active");

        if($show_index == $slide.length - 1){
            $(".slideImg li").eq(0).addClass("show");
            $("#banner ol li").eq(0).addClass("active");
        }else{
            $(".slideImg li").eq($show_index).next().addClass("show");
            $("#banner ol li").eq($show_index).next().addClass("active");
        }
    }

    let $first = $(".slideImg li").first();
    $first.addClass("show");

    setInterval(function(){
        let $hover = $("#banner").hasClass("hover");

        if($hover == true){

        }else{
            counting();
        }

    },4000);

    $("#banner").hover(function(){
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    });

    $(".prev").click(function(){
        let $show_index = $(".slideImg li.show").index();
        const $slide = $(".slideImg li");

        $(".slideImg li").removeClass("show"); //초기화
        $("#banner ol li").removeClass("active");

        if($show_index == 0){
            $(".slideImg li").eq($slide.length - 1).addClass("show");
            $("#banner ol li").eq($slide.length - 1).addClass("active");
        }else{
            $(".slideImg li").eq($show_index).prev().addClass("show");
            $("#banner ol li").eq($show_index).prev().addClass("active");
        }
        return false;
    });
    $(".next").click(function(){
        counting();
        return false;
    });

    $("#banner ol li").click(function(){
        $("#banner ol li").removeClass("active");
        $(this).addClass("active");
        
        let $index = $(this).index();
        $(".slideImg li").removeClass("show");
        $(".slideImg li").eq($index).addClass("show");
    });


    // [ 탭박스 ]
    //반복
    const tab_arr1 = [
        ["./img/tab_interior/interior_01.jpg","Living Room"],
        ["./img/tab_interior/interior_02.jpg","Rest Room" ],
        ["./img/tab_interior/interior_03.jpg","kitchen"],
        ["./img/tab_interior/interior_04.jpg","Bed Room"],
    ];
    const tab_arr2 = [
        ["./img/tab_exterior/exterior_01.jpg","Deco Wall"],
        ["./img/tab_exterior/exterior_02.jpg","Garden"],
        ["./img/tab_exterior/exterior_03.jpg","Swim Pool"],
        ["./img/tab_exterior/exterior_04.jpg","Stair"],
    ];
    const tab_arr3 = [
        ["./img/tab_furniture/furniture_01.jpg","Sofas"],
        ["./img/tab_furniture/furniture_02.jpg", "Bed"],
        ["./img/tab_furniture/furniture_03.jpg","Chair"],
        ["./img/tab_furniture/furniture_04.jpg","Desk"],
    ];

    for(v of tab_arr1){
        $(".tabCont1").append(`
        <div class="con" style="background-image:url(${v[0]})">
            <div class="text">
                <h4>${v[1]}</h4>
                <a href="">Detail More</a>
            </div>
        </div>
        `);
    }
    for(v of tab_arr2){
        $(".tabCont2").append(`
        <div class="con" style="background-image:url(${v[0]})">
            <div class="text">
                <h4>${v[1]}</h4>
                <a href="">Detail More</a>
            </div>
        </div>
        `);
    }
    for(v of tab_arr3){
        $(".tabCont3").append(`
        <div class="con" style="background-image:url(${v[0]})">
            <div class="text">
                <h4>${v[1]}</h4>
                <a href="">Detail More</a>
            </div>
        </div>
        `);
    }

    // 버튼
    $(".tab .tab_btn ul li").click(function(){
        let $index = $(this).index();
        console.log($index);
        
        $(".tab .tabBox").removeClass("active");
        $(".tab .tabBox").eq($index).addClass("active");

        $(".tab .bOx").stop().animate({"left": $index * 33.33 + "%"}, 500);

        return false;
    });

    // 팝업
    $(document).on("mouseenter",".tab .tabCont1 .con",function(){
        let $index = $(this).index();
        $(document).on("click",".tab .tabCont1 .con .text a",function(){
            $(".popup .popBx .img").css("background-image",`url(${tab_arr1[$index][0]})`);
            $(".popup .popBx p").text(tab_arr1[$index][1]);
            $(".dark").addClass("active");
            $(".popup").addClass("active");
            return false;
        });
        return false;
    });
    $(document).on("mouseenter",".tab .tabCont2 .con",function(){
        let $index = $(this).index();
        $(document).on("click",".tab .tabCont2 .con .text a",function(){
            $(".popup .popBx .img").css("background-image",`url(${tab_arr2[$index][0]})`);
            $(".popup .popBx p").text(tab_arr2[$index][1]);
            $(".dark").addClass("active");
            $(".popup").addClass("active");
            return false;
        });
        return false;
    });
    $(document).on("mouseenter",".tab .tabCont3 .con",function(){
        let $index = $(this).index();
        $(document).on("click",".tab .tabCont3 .con .text a",function(){
            $(".popup .popBx .img").css("background-image",`url(${tab_arr3[$index][0]})`);
            $(".popup .popBx p").text(tab_arr3[$index][1]);
            $(".dark").addClass("active");
            $(".popup").addClass("active");
            return false;
        });
        return false;
    });

    $(".popup .close").click(function(){
        $(".dark").removeClass("active");
        $(".popup").removeClass("active");
    });


});

const menu_arr = ["brand","categories","about","service"];
const menu = document.querySelector(".menu");
let list = "";
for(v of menu_arr){
    list += `<li><a href="">${v}</a></li>`;
}
menu.innerHTML=list;
