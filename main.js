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

 $(document).ready(function(){
  var urls=['images/mainbg.jpg','images/bgservice.jpg','images/weddingv.jpg'];
  var count=1;
  $('#bg').css('background-image','url("' + urls[0] + ' ")');
  setInterval(function(){
    $('#bg').css('background-image','url("'+urls[count]+'")');
    count==urls.length-1?count=0:count++;
  },5000);
 });
