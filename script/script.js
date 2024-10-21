//흘러가는 슬라이드메뉴
var swiper = new Swiper('.flowslide_inner ', {
    slidesPerView: 5,//보여지는 갤러리 수
    spaceBetween: 50,//갤러리 사이 간격
    speed: 6000,//버튼을 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 0,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
});

$(function () {
    $('.flowslide .swiper-slide').on('mouseover', function () {
        swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
        swiper.autoplay.start();
    });
});

var swiper = new Swiper('.slide ', {
    speed: 3000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
        nextEl: '.slide .swiper-button-next',
        prevEl: '.slide .swiper-button-prev',
    },
    pagination: {//블릿 버튼
        el: '.slide .swiper-pagination',
        clickable: true,
    },
    thumbs: {
        swiper: '.mySwiper',
      },
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  AOS.init({
    duration: 1200 //aos 나타나는 속도
  });