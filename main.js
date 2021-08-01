
$(document).ready(function(){

    //$("body").css({"overflow-x":"hidden"})

    $('.burger').click(function(){//stuff that happens when burger clicked
        $('.nav-list').addClass("nav-active");//add this css stuff to nav-list's style
        $('.nav-list').css({"transition":"0.25s ease-in"});
        $('.navli').each(function(i, val){//animation for each list
            val.style.animation = `nav-li-fade 0.5s ease-in ${(i + 1)/5}s forwards`
        });
        $("section").css({"animation":"section-fade 0.25s ease-in forwards"});
    });
    $('.exit').click(function(){//stuff that happens when exit clicked
        $('.nav-list').removeClass("nav-active");//remove this css stuff
        $('.navli').each(function(i, val){//animation for each list when close
            val.style.animation = ""
        });
        $("section").css({"animation":""});
    });

    $("#year").html((new Date).getFullYear())
  
  });//end of jQuery
