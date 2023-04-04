$(document).ready(function(){
    $('.responsive').slick({

        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1000,
        
        prevArrow: '<i class="fa fa-angle-left icon-left"></i>',
        nextArrow: '<i class="fa fa-angle-right icon-right"></i>',
        slidesToShow: 4,
        slidesToScroll: 1,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    //   venobox js start
    new VenoBox({
        selector: ".gallery-venobox"
    });
    //   venobox js end



// wow js end


//center slider

  $(".img-gallery").slick({
     dots: true,
     infinite: true,
    centerMode: true,
    centerPadding: '80px',
    slidesToShow: 3,
    slidesToScroll: 1,
  

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


//center slider end

//rtl slider start
$(".carousel-rtl").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrow: true,
  dots: false,
  rtl: true,
});
//rtl slider end

// slider sycing start
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

// slider sycing end


 
  
});
