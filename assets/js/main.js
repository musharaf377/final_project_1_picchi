
// one page nav js
$(document).ready(function(){
    $('#nav').onePageNav({
        currentClass: 'current',
    });

    //mobile menu active
    $('#nav').slicknav();

    //image popup
    $('.image-popup').magnificPopup({
        type:'image',
        gallery: {
            enabled: true,
        }
    });

    //video popup
    $('.video-popup').magnificPopup({
        type:'iframe'
        
    });

    //counter up
    $('.counter-up').counterUp({
        delay: 10,
        time: 3000,
    });

    //slick slider testiminials
    $('.testimonial').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-circle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-circle-right"></i></button>',
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        loop: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                autoplay: true,
                dots: true,
                nextArrow: false,
                prevArrow: false,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                nextArrow: false,
                prevArrow: false,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: false,
                prevArrow: false,
              }
            }
        ]
      });

      //partner image slide
    $('.partner').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-circle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-circle-right"></i></button>',
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        loop: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                nextArrow: false,
                prevArrow: false,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                nextArrow: false,
                prevArrow: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                nextArrow: false,
                prevArrow: false,
              }
            }
        ]
      });
})



// sticky menu
$(window).on('scroll',function(){

    if($(this).scrollTop() > 25){
        $('.header-area').addClass('sticky');
    }else{
        $('.header-area').removeClass('sticky');
    }
})
