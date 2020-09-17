
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
const featureImgs = gsap.utils.toArray(".section");
const featureBoxes = document.querySelectorAll('.topNav');

featureImgs.forEach((img, i) => {
  let featureBox = featureBoxes[i];
  ScrollTrigger.create({
    trigger: img,
    toggleClass: { targets: featureBox, className: 'active' },
    start: 'top 75%',
    end: 'bottom 75%',
    toggleAction: 'play none none restart',
    markers: true
  });
});

