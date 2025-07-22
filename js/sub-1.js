$(function(){
    // 2. story thread like button action
    $('.reaction .dislike').click(function(){
      $(this).toggleClass('on');
      if ($(this).hasClass('on')){
          $(this).hide();
          $(this).next('.reaction .like').show();}
  });
  $('.reaction .like').click(function(){
      $(this).toggleClass('on');
      if ($(this).hasClass('on')){
          $(this).hide();
      $(this).prev('.reaction .dislike').show();}
  });
});