$(document).ready(function(){
  $('.trigger-nav').click(function(e){
    e.preventDefault();
    self = $(this);
    $('.main-nav').fadeIn();
    $(self).addClass('fade-away');
  });

  $('.close-nav a').click(function(e){
    e.preventDefault();
    $('.main-nav').fadeOut();
    $('.trigger-nav').removeClass('fade-away').addClass('fade-back');
  });

  var titleHtml = document.querySelector('.title a');
  titleStr = toTitleCase(titleHtml.innerText);
  $('.title a').html(titleStr);

});

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
      return '<span>' + txt.charAt(0) + '</span>' + txt.substr(1);
    });
}
