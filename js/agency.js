$(document).ready(function(){
    
    $(".bar , .close").on("click", function(){
        $(".pages_mobile").slideToggle();
        // $(".hamburger").fadeToggle();
        // $(".close").fadeToggle();
    });

    $(".card_info1").hover(function(){
        $(".page_info>.info2>.card_info>.icon1").css("background-color", "#f3f4f6");
        $(".page_info>.info2>.card_info>.icon1").css("color", "#fc346e");
        $(".page_info>.info2>.card_info>.info1").css("color", "#f3f4f6");
        });

    $(".card_info1").mouseleave(function(){
        $(".page_info>.info2>.card_info>.icon1").css("background-color", "#fc346e");
        $(".page_info>.info2>.card_info>.icon1").css("color", "#f3f4f6");
        $(".page_info>.info2>.card_info>.info1").css("color", "rgb(125, 125, 125)");
    });
    $(".card_info2").hover(function(){
        $(".page_info>.info2>.card_info>.icon2").css("background-color", "#f3f4f6");
        $(".page_info>.info2>.card_info>.icon2").css("color", "#fe885b");
        $(".page_info>.info2>.card_info>.info2").css("color", "#f3f4f6");
    });
    $(".card_info2").mouseleave(function(){
        $(".page_info>.info2>.card_info>.icon2").css("background-color", "#fe885b");
        $(".page_info>.info2>.card_info>.icon2").css("color", "#f3f4f6");
        $(".page_info>.info2>.card_info>.info2").css("color", "rgb(125, 125, 125)");
    });
    
    $(".card_info3").hover(function(){
        $(".page_info>.info2>.card_info>.icon3").css("background-color", "#f3f4f6");
        $(".page_info>.info2>.card_info>.icon3").css("color", "#6001d2");
        $(".page_info>.info2>.card_info>.info3").css("color", "#f3f4f6");
    });

    $(".card_info3").mouseleave(function(){
        $(".page_info>.info2>.card_info>.icon3").css("background-color", "#6001d2");
        $(".page_info>.info2>.card_info>.icon3").css("color", "#f3f4f6");
        $(".page_info>.info2>.card_info>.info3").css("color", "rgb(125, 125, 125)");
    });
    
    $(".card_info4").hover(function(){
        $(".page_info>.info2>.card_info>.icon4").css("background-color", "#f3f4f6");
        $(".page_info>.info2>.card_info>.icon4").css("color", "#fbdb00");
        $(".page_info>.info2>.card_info>.info4").css("color", "#f3f4f6");
    });

    $(".card_info4").mouseleave(function(){
        $(".page_info>.info2>.card_info>.icon4").css("background-color", "#fbdb00");
        $(".page_info>.info2>.card_info>.icon4").css("color", "#f3f4f6");
        $(".page_info>.info2>.card_info>.info4").css("color", "rgb(125, 125, 125)");
    });
            
    $(".img1").fadeTo(1000,1);

    $(window).scroll(function(e){
        
            if($(window).scrollTop()+10>=$(".page_info").offset().top)
            {
                $(".page_info").fadeTo(1000,1);
            }
            if($(window).scrollTop()+505>=$(".slide_img").offset().top)
            {
                $(".slide_img").fadeTo(1000,1);
            }
        
    });

    });
