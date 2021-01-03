gsap.registerPlugin( ScrollTrigger, ScrollToPlugin );

ScrollTrigger.matchMedia({
  "(min-width: 320px)": function() {

     ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

    // pin the container of the year in review - this is to lock the video in place whilst user scrolls through the numbers
ScrollTrigger.create({
  trigger: '#review-trigger',
  start: "top top", 
  end:'bottom bottom',
  /*toggleClass:{ targets: '.media__container', className: 'fixed' },*/
  pin: '#pin__one',
  duration:'100%',
  scrub:1,
  snap:false,
  markers:true
    })
  }, 
  // desktop
  "(min-width: 1024px)": function() {
    // begin 

/* Main navigation sustainable */
const panelsSection = document.querySelector("#sustainable-projects");
const panelsContainer = document.querySelector("#sustainable__panels-container");
document.querySelectorAll(".anchor").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const targetElem = document.querySelector(e.target.getAttribute("href"));
    if(targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      const containerOffset = panelsSection.offsetTop + targetElem.offsetLeft;

      gsap.to(window, {
        scrollTo: {
          y: containerOffset,
          autoKill: false
        },
        duration: 1
      });
    } else {
      gsap.to(window, {
        scrollTo: {
          y: targetElem,
          autoKill: false
        },
        duration: 1
      });
    }
  });
});

/* Panels */
const panels = gsap.utils.toArray("#sustainable__panels-container .panel");
gsap.to(panels, {
  xPercent: -100 * ( panels.length - 1 ),
  ease: "none",
  scrollTrigger: {
    trigger: "#sustainable__panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    snap: {
      snapTo: 1 / ( panels.length - 1 ),
      duration: {min: 0.1, max: 0.1}
    },
    end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
  }
});

/* Main navigation sustainable */
const panelsSectionTransforming = document.querySelector("#transforming-projects");
const panelsContainerTransforming = document.querySelector("#transforming__panels-container");
document.querySelectorAll(".anchor").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const targetElemTransforming = document.querySelector(e.target.getAttribute("href"));
    if(targetElem && panelsContainerTransforming.isSameNode(targetElem.parentElement)) {
      const containerOffset = panelsSectionTransforming.offsetTop + targetElem.offsetLeft;

      gsap.to(window, {
        scrollTo: {
          y: containerOffset,
          autoKill: false
        },
        duration: 1
      });
    } else {
      gsap.to(window, {
        scrollTo: {
          y: targetElem,
          autoKill: false
        },
        duration: 1
      });
    }
  });
});

/* Panels */
const panelsTransforming = gsap.utils.toArray("#transforming__panels-container .panel");
gsap.to(panelsTransforming, {
  xPercent: -100 * ( panels.length - 1 ),
  ease: "none",
  scrollTrigger: {
    trigger: "#transforming__panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    snap: {
      snapTo: 1 / ( panelsTransforming.length - 1 ),
      duration: {min: 0.1, max: 0.1}
    },
    end: () => "+=" + (panelsContainerTransforming.offsetWidth - innerWidth)
  }
});
    // end
  }
}); 

