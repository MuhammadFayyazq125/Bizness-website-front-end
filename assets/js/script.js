$('.sliderMain').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows:false,
    fade: true,
  cssEase: 'linear'
  });


  $('.slide').slick(
    {
      arrows: true,
      dots:true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              arrows: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              arrows: false,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: false,
              slidesToScroll: 1
            }
          }
        ]
      }
);
