$('.carousel__industry-navigation').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 2,
  variableWidth: true,
  prevArrow: $('.industry__prev'),
  nextArrow: $('.industry__next'),
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
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

$('.feature__projects-carousel').slick({
  slidesToShow: 1,
  infinite:false,
  centerPadding: "0px",
  prevArrow: $('.projects__prev'),
  nextArrow: $('.projects__next'),
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: "unslick"
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

