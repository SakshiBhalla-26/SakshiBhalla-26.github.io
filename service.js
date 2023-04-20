$(document).ready(function(){
 $('.contact').click(function(){
  $('#show').toggle();
});
 $('.contact1').click(function(){
   $('#show1').toggle();
 })
 $('.contact3').click(function(){
  $('#show3').toggle();
})
$('.contact4').click(function(){
  $('#show4').toggle();
})

$('#con4').click(function(){
  $('#show41').toggle();
})

$('#con41').click(function(){
  $('#show42').toggle();
})

$('#con42').click(function(){
  $('#show43').toggle();
})

$('#con43').click(function(){
  $('#show44').toggle();
})
   
});

$(document).ready(function(){
  var urls=['images/mainbg.jpg','images/bgservice.jpg','images/weddingv.jpg'];
  var count=1;
  $('#bg').css('background-image','url("' + urls[0] + ' ")');
  setInterval(function(){
    $('#bg').css('background-image','url("'+urls[count]+'")');
    count==urls.length-1?count=0:count++;
  },5000);
 });