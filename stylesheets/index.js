/* dropdown menu */
$(document).ready(function(){
$('li').hover(function(){
$(this).find('ul>li').stop().slideToggle(1000);
});
});


$(document).ready(function(){
$('.spinning-square').hover(function(){
$(this).stop();
$(this).fadeOut(2000).fadeIn(1000);
});
});



toggled = false

function bgChanger() {
  toggled = !toggled;
  if (toggled){
    $('body').css('background-color', 'lightblue');
  } 
  else {
    $('body').css('background-color', 'white');
  }
}



$(document).ready(function(){
$('.color-button').click(bgChanger);
});