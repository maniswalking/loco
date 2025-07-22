$(function(){
  // 메인메뉴
  // $('.main-menu li button').click(function(){

  //   $('.main-menu li button').not(this).removeClass('selected').next('.sub-menu').hide();

  //   $(this).toggleClass('selected');
  //   if($(this).hasClass('selected')) {
  //     $(this).next('.sub-menu').show()
  //   } else {
  //     $(this).next('.sub-menu').hide()
  //   }

  // });

  // 메인메뉴
  $('.main-menu li button').click(function(){

    $('.main-menu li button').not(this).removeClass('selected').next('.sub-menu').slideUp('fast');

    $(this).toggleClass('selected');
    if($(this).hasClass('selected')) {
      $(this).next('.sub-menu').slideDown('fast')
    } else {
      $(this).next('.sub-menu').slideUp('fast')
    }

  });
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.main-menu').length) {
      $('.sub-menu').slideUp('fast');
      $('.main-menu li button').removeClass('selected');
    }
  });

  $(window).on('scroll', function() {
    $('.sub-menu').slideUp('fast');
    $('.main-menu li button').removeClass('selected');
  });
  
  // 모바일 메인메뉴
  $('.nav-toggleBtn').click(function(){
    if($(this).hasClass('on')) {
      $(this).removeClass('on');
      $('.header .gnb').removeClass('on');
      $('.header .user-menu').removeClass('on');
      $('.nav-toggleBg').removeClass('on');
      $('.closeBtn').removeClass('on');
      
    } else {
      $(this).addClass('on');
      $('.header .gnb').addClass('on');
      $('.header .user-menu').addClass('on');
      $('.nav-toggleBg').addClass('on');
      $('.closeBtn').addClass('on');


    }
  });
  $('.closeBtn').click(function(){
    if($(this).hasClass('on')) {
      $(this).removeClass('on');
      $('.header .gnb').removeClass('on');
      $('.header .user-menu').removeClass('on');
      $('.nav-toggleBg').removeClass('on');
      $('.nav-toggleBtn').removeClass('on')

    } else {
      $('.nav-toggleBtn').removeClass('on')
    }
  });

/////////////////////////////
});