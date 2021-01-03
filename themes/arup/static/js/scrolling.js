console.clear();
/*
var startCount = 0,
    num = {var:startCount};
    num2 = {var:startCount};
    num3 = {var:startCount};

const stats = gsap.timeline({
    scrollTrigger: {
      trigger: ".highlights",  
      start: "top center",
      scrub: false, 
      markers:true
      }
    });
  stats.to(num, {var: 788, duration: 0.5, autoAlpha:1, ease:"none", onUpdate:changeNumber})
  stats.to('#threeOne',0.5, {opacity:1}, '-=0.5')
  stats.to(num2, {var: 5428, duration: 0.5,  ease:"none", onUpdate:changeNumber})
  stats.to('#threeTwo',0.5, {opacity:1}, '-=0.5')
  stats.to(num3, {var: 121, duration: 0.5,  ease:"none", onUpdate:changeNumber})
  stats.to('#threeThree',0.5, {opacity:1}, '-=0.5')
  stats.to('.chart__title, .chart__bar', {opacity:1, x:0, stagger:0.1})

  const certs = gsap.timeline({
    scrollTrigger: {
      trigger: '.container.certifications',
      start: 'top center'
    }
  })
certs.to('.container.certifications .review__heading, .five__items li', {opacity:1, stagger:0.25})
certs.to('.map__container .review__heading, .map__container .progressiveMedia, .map__label', {opacity:1, y:0, stagger:0.1})

function changeNumber() {
  clients.innerHTML = (num.var).toFixed();
  projects.innerHTML = (num2.var).toFixed();
  awards.innerHTML = (num3.var).toFixed();
}

*/

// navigation
gsap.registerPlugin(ScrollTrigger);
const featureImgs = gsap.utils.toArray(".section");
const featureBoxes = document.querySelectorAll('.utility-bar .sub-navigation li');
featureImgs.forEach((img, i) => {
  let featureBox = featureBoxes[i];
  ScrollTrigger.create({
    trigger: img,
    toggleClass: { targets: featureBox, className: 'active' },
    start: 'top top+=50',
    end: 'bottom top-=50',
    toggleAction: 'play none none restart'
  });
});

// pin the container of the year in review - this is to lock the video in place whilst user scrolls through the numbers
ScrollTrigger.create({
  trigger: '#review',
  start: "top top", 
  end:'bottom bottom',
  /*toggleClass:{ targets: '.media__container', className: 'fixed' },*/
  pin: '#pin',
  duration:'100%',
  scrub:1,
  snap:false,
  markers:true
})

/*
let sections = gsap.utils.toArray(".panels");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".sideways-container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".sideways-container").offsetWidth
  }
});
*/
/*
gsap.set(".massiveImage", {backgroundImage: `url(https://source.unsplash.com/random/${innerWidth * 3}x${innerHeight})`})

gsap.to(".massiveImage", {
  xPercent: -100, 
  x: innerWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".massiveImage",
    start: "top top",
    end: () => innerWidth * 3,
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});*/
/*
gsap.utils.toArray(".yearbook__project-container").forEach(section => {
  let tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center center",
        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
        end: () => "+=" + section.offsetWidth, 
        scrub: true,
        pin: true,
        anticipatePin: 1
      },
      defaults: {ease: "none"}
    });
  // animate the container one way...
  tl.fromTo(section.querySelector(".second__image"), { xPercent: 100, x: 0}, {xPercent: 0})
    // ...and the image the opposite way (at the same time)
    .fromTo(section.querySelector(".second__image img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
});

const panels = gsap.utils.toArray(".panelz");

document.querySelectorAll(".nav-panel").forEach( anchor => {
    anchor.addEventListener(
        "click",
        function(e) {
            e.preventDefault();

            let offset = parseInt( anchor.dataset.offset );

            gsap.to(
                panels,
                {
                    xPercent: -100 * offset,
                    duration: 0.5,
                    // scrollTo: { y: "#panels-container #panel-2" }
                }
            );
        }
    );
});*/

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

function scrollToElement(el) {
    gsap.to(window, {
        scrollTo: {
            y: el,
            autoKill: false
        },
        duration: 1
    });
}


/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
gsap.to(
    panels,
    {
        xPercent: -100 * ( panels.length - 1 ),
        ease: "none",
        scrollTrigger: {
            trigger: "#panels-container",
            pin: true,
            start: "top +=0px",
            markers: false,
            scrub: 1,
            snap: {
                snapTo: 1 / ( panels.length - 1 ),
                duration: {min: 0.1, max: 0.1},
                delay: 0
            },
            end: () => "+=" + document.getElementById("panels-container").offsetWidth / panels.length
        }
    }
);


document.querySelectorAll(".nav-panel").forEach( anchor => {
    anchor.addEventListener(
        "click",
        function(e) {
            e.preventDefault();

            let offset = parseInt( anchor.dataset.offset );

            gsap.to(
                panels,
                {
                    xPercent: -100 * offset,
                    duration: 1.5,
                    // scrollTo: { y: "#panels-container #panel-2" }
                }
            );
        }
    );
});

