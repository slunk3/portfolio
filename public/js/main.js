$(document).ready(function(){
  $('.trigger-nav').click(function(e){
    e.preventDefault();
    $('.main-nav').css('display', 'block');
  });
  
  $('.close-nav a').click(function(e){
    $('.main-nav').css('display', 'none');
  });
});
