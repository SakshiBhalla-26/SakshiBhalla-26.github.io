/*$(document).ready(function(){
 $(window).on('scroll',function(){
  var sroll=$(window).scrollTop();
   if(scroll>=50){
     $(".sticky").addClass("stickyadd");
     }else{
       $(".sticky").removeClass("stickyadd");
     }
    })
  })*/

  $(window).bind('scroll' , function(){
    if($(window).scrollTop()>50){
      $('.sticky').addClass('stickyadd');
    }else{
      $('.sticky').removeClass('stickyadd');
    }
  })


