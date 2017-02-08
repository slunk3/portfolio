$(document).ready(function(){
  $('.trigger-nav').click(function(e){
    e.preventDefault();
    $('.main-nav').css('display', 'block');
  });

  $('.close-nav a').click(function(e){
    $('.main-nav').css('display', 'none');
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
