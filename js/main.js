$(function () {
  // 0-1. top-slider by swiper
  var swiper = new Swiper(".main-slide", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
  });
  // 0-2. top-slider by swiper
  var swiper = new Swiper(".sub-slide-inner", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
  });

  // 1. main slider video transition
  $(".video-container").each(function () {
    const $container = $(this);
    const $video = $container.find(".video");

    $container.on("mouseenter", function () {
      $video.get(0).currentTime = 0;
      $video.get(0).play();
    });

    $container.on("mouseleave", function () {
      $video.get(0).pause();
    });
  });

  // 2. main slider indicator
  $(".slide-page a").click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass();
    $(this).addClass("active");
  });

  // main - thread
  // 1. story thread main button action
  $(".thread")
    .mouseenter(function () {
      $(this).children(".rounded-topright").stop(true).delay(200).show(150);
      $(this).children(".rounded-bottomleft").stop(true).delay(200).show(150);
      $(this).children(".btn-wrap").stop(true).show(300);
    })
    .mouseleave(function () {
      $(this).children(".rounded-topright").stop(true).hide(100);
      $(this).children(".rounded-bottomleft").stop(true).hide(100);
      $(this).children(".btn-wrap").stop(true).hide(300);
    });
  $(".btn-wrap").click(function () {
    $(this).parents().find(".board1").addClass("on");
    if ($(this).parents().find(".board1").hasClass("on")) {
      $(this).parents().find(".board1").show();
    }
  });
  $(".board1").click(function () {
    $(this).addClass("off");
    if ($(this).hasClass("off")) {
      $(this).hide();
    }
  });
  // 2. story thread like button action
  $(".reaction .dislike").click(function () {
    $(this).toggleClass("on");
    if ($(this).hasClass("on")) {
      $(this).hide();
      $(this).next(".reaction .like").show();
    }
  });
  $(".reaction .like").click(function () {
    $(this).toggleClass("on");
    if ($(this).hasClass("on")) {
      $(this).hide();
      $(this).prev(".reaction .dislike").show();
    }
  });

  // main - mid slider

  // swiper

  var swiper = new Swiper(".mid-slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: 'progressbar',
    },
    breakpoints: {
      400: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  // main - bottom slider
  // 1. bottom slider - thumb button action
  $(".thumb-btn a .fa-regular").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("on");
    if ($(this).hasClass("on")) {
      $(this).hide();
      $(this).next(".thumb-btn a .fa-solid").show();
    }
  });
  $(".thumb-btn a .fa-solid").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("on");
    if ($(this).hasClass("on")) {
      $(this).hide();
      $(this).prev(".thumb-btn a .fa-regular").show();
    }
  });
  // 2. bottom slider - sub menu button action

  $(".option-btn > .btnOpen").click(function () {
    $(this)
      .parents(".slide")
      .find(".btnClose")
      .fadeIn(400, "swing")
      .css({ transform: "rotate(45deg)" });
    $(this).fadeOut(100);
    $(this).parents(".slide").find(".menu-list").fadeIn(400, "linear");
    $(this).parents(".slide").find(".layer").fadeIn(400, "swing");
  });
  $(".option-menu > .btnClose").click(function () {
    $(this).fadeOut(100);
    $(this).parents(".slide").find(".btnOpen").fadeIn(400, "swing");
    $(this).parents(".slide").find(".menu-list").fadeOut(400, "linear");
    $(this).parents(".slide").find(".layer").fadeOut(400, "swing");
  });
  $(".option-menu").mouseleave(function () {
    $(".option-menu > .btnClose").click();
  });

  // swiper
  
  var swiper = new Swiper(".bottom-slider-group", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      360: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      400: {
        slidesPerView: 1.5,
        spaceBetween: 24
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 28
      },
      // when window width is >= 900px
      900: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
      // when window width is >= 900px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 900px
      1400: {
        slidesPerView: 3.5,
        spaceBetween: 30
      },
      // when window width is >= 900px
      1600: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      // when window width is >= 900px
      1900: {
        slidesPerView: 5,
        spaceBetween: 30
      },
    }
    
  });

  /*
  let bPrev = ".bottom-slider .slider-group .btnSlide .prev";
  let bNext = ".bottom-slider .slider-group .btnSlide .next";
  let bSlides = ".bottom-slider .slider-group .slide-box";
  let bLast = ".bottom-slider .slider-group .slide-box > div:last-child";
  let bFirst = ".bottom-slider .slider-group .slide-box > div:first-child";

  // $(bSlides).prepend($(bLast)).css({marginLeft: '-804px'});
  $(bNext).click(function () {
    $(bSlides).animate({ marginLeft: "-1680px" }, 500, "swing", function () {
      $(bSlides).css({ marginLeft: "-1680px" });
    });
  });
  $(bPrev).click(function () {
    $(bSlides).animate({ marginLeft: "0" }, 500, "swing", function () {
      $(bSlides).css({ marginLeft: "0" });
    });
  });
  */

  /////////////////////////////
});
