gsap.registerPlugin( ScrollTrigger, ScrollToPlugin );


ScrollTrigger.create({
   trigger: '#contentContainer',
   start: 'top top',
   toggleClass:{targets: '.sub-navigation.desktop li:last-of-type', className: 'reveal'},
   duration: 9999999999999999,
markers: true
})

ScrollTrigger.matchMedia({
  "(min-width: 1024px)": function() {
    gsap.utils.toArray(".pin").forEach((panel, i) => {
    ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false 
      });
    });
    // navigation
  const featureImgs = gsap.utils.toArray(".nav-section");
  const featureBoxes = document.querySelectorAll('.anchor__nav');
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
  },
  "all": function() {
    let projectCover = document.querySelectorAll(".project-cover")

projectCover.forEach( (element) => {
let image = element.querySelector(".animate__image")
let intro = element.querySelector(".project-cover .left__side")

let tl = gsap.timeline()
   //tl.set(image,{backgroundSize: 'cover'})
   tl.to(image, 7.5, {scale:1.1,rotation:0.01,repeat:0, yoyo:false} );
   //tl.to(image, 5, {width:"+=100px", height:"+=100px", x:-100, y:-100})
    ScrollTrigger.create({
    trigger: element,
    start:"top center",
    toggleActions:"play none none reverse",
    animation:tl
    })

let introAnimate = gsap.timeline()
    introAnimate.set(intro,{y:100,autoAlpha:0});
    introAnimate.to(intro, 1.5, {y:0,autoAlpha:1});
    ScrollTrigger.create({
      trigger:element,
      start:"top center",
      animation: introAnimate
    })
  })
  }
})

jQuery(document).ready(function($){
  $('#mobile-nav').prepend('<div id="menu-icon">Yearbook menu</div>');
  $("#menu-icon").on("click", function(){
    $("#menu").slideToggle();
    $(this).toggleClass("active");
  });
    $('#menu li a').on("click", function(){
        $('#menu').slideUp();
    });
});