$(function(){
    // 1. story thread like button action
    $('.user-action .like-action .dislike').click(function(){
        $(this).toggleClass('on');
        if ($(this).hasClass('on')){
            $(this).hide();
            $(this).next('.like-action .like').show();}
    });
    $('.user-action .like-action .like').click(function(){
        $(this).toggleClass('on');
        if ($(this).hasClass('on')){
            $(this).hide();
        $(this).prev('.like-action .dislike').show();}
    });

    
    // 2. mid slider - slide page action
    $('.slide-box').prepend($('.slide-box li:last-child')).css({marginLeft: '-300px'});
    $('.control-btn .next').click(function(){
        $('.slide-box').animate({marginLeft: '-600px'}, 500, 'swing', function(){
            $('.slide-box').append($('.slide-box li:first-child')).css({marginLeft : '-300px'})
        });
    });
    $('.control-btn .prev').click(function(){
        $('.slide-box').animate({marginLeft: '0px'}, 500, 'swing', function(){
            $('.slide-box').prepend($('.slide-box li:last-child')).css({marginLeft : '-300px'})
        });
    });

    // 
    $('.rank-tabs .item').on('click', function(e) {
        e.preventDefault(); // 기본 링크 클릭 동작 방지
        
        // 현재 클릭된 탭에 'on' 클래스 추가, 나머지 탭은 'on' 클래스 제거
        $('.rank-tabs .item').removeClass('on');
        $(this).addClass('on');
        $('.rank-number').removeClass('on');
        $(this).find('.rank-number').addClass('on');
        
        // 해당하는 탭 내용에 'show' 클래스 추가, 나머지 탭 내용은 'show' 클래스 제거
        var index = $(this).index(); // 클릭한 탭의 인덱스
        $('.tab-content .content').removeClass('show').hide();
        $('.tab-content .content').eq(index).addClass('show').fadeIn();
    });

/////////////////////////////
});