
gsap.registerPlugin(ScrollTrigger);

/*const featureImgs = gsap.utils.toArray(".section");
const featureBoxes = document.querySelectorAll('.topNav');

featureImgs.forEach((img, i) => {
  let featureBox = featureBoxes[i];
  ScrollTrigger.create({
    trigger: img,
    toggleClass: { targets: featureBox, className: 'active' },
    start: 'top 50%',
    end: 'bottom 50%',
  });
});
*/

ScrollTrigger.matchMedia({
"(min-width: 1024px)": function() {
const featureImgs = gsap.utils.toArray(".section");
const featureBoxes = document.querySelectorAll('.desktop__nav .topNav');

featureImgs.forEach((img, i) => {
  let featureBox = featureBoxes[i];
  ScrollTrigger.create({
    trigger: img,
    toggleClass: { targets: featureBox, className: 'active' },
    start: 'top 75%',
    end: 'bottom-=75 75%',
    toggleAction: 'play none none restart',
    markers: true
  });
  });
}
});


jQuery(document).ready(function($){
  $('#menu_wrapper').prepend('<div id="menu-icon">Resilience menu</div>');
  $("#menu-icon").on("click", function(){
    $("#menu").slideToggle();
    $(this).toggleClass("active");
  });
    $('#menu li a').on("click", function(){
        $('#menu').slideUp();
    });
});