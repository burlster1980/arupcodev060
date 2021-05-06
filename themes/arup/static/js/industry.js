

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

// scrolling navigation for main pages

gsap.registerPlugin(ScrollTrigger);
const featureImgs = gsap.utils.toArray(".section");
const featureBoxes = document.querySelectorAll('.utility__navigation  .utility__nav-item');
featureImgs.forEach((img, i) => {
  let featureBox = featureBoxes[i];
  ScrollTrigger.create({
    trigger: img,
    toggleClass: { targets: featureBox, className: 'active' },
    start: 'top 75%',
    end: 'bottom-=100 75%',
    toggleAction: 'play none none restart'
  });
});
