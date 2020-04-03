var controller = new ScrollMagic.Controller();
// pin slide and change style first banner
var tl = new TimelineLite();
var h = (window.innerHeight / 10) ;
tl
  /*.fromTo('.overlay',4, {opacity:0.15}, {opacity:0.65}) // animate in the overlay - this should last the full length of the scroll
  .to('.panel__scrollIcon',1,{opacity:0},"-=4")
  .to('#one', 1, {autoAlpha:0}, "-=4")
  .to('#two', 1, {autoAlpha:2}, "-=3")
  .to('#two', 1,  {autoAlpha:0}, "-=2")
  .to('#three', 1, {autoAlpha:1}, "-=1")
  .to('video',1,{className: 'hide'})*/
.fromTo('.overlay',2, {opacity:0.15}, {opacity:0.65}) // animate in the overlay - this should last the full length of the scroll
  .to('.panel__scrollIcon',1,{opacity:0},"-=2")
  .to('video',1,{className: 'hide'}, "-=1")
new ScrollMagic.Scene({
	triggerHook:"onLeave",
	triggerElement:".video-banner",
	offset:0,
	reverse:true
})
.duration('100%')
.setTween(tl)
.setPin('.video-banner')
.addIndicators()
.addTo(controller);

// introduction navigation
var tlIntro = new TimelineLite(); // adds the timed class so that the label will disappear
tlIntro
.to('#introduction-navigation a',1,{className:"active-label"})
.to('#introduction-navigation a',1,{className:"", delay: 1})

new ScrollMagic.Scene({ // make navigation labels disappear
	triggerElement: "#introduction",
	reverse: true
})
.setTween(tlIntro)
.addTo(controller);

var introduction = document.getElementById('introduction').clientHeight;
new ScrollMagic.Scene({
	triggerElement: "#introduction",
	reverse: true,
	duration: introduction
})
.setClassToggle('#introduction-navigation', 'active')
.addTo(controller);

// chapter one
var tlChapter1 = new TimelineLite();
tlChapter1
	.to('#chapter-1-navigation a',1,{className:"active-label"})
	.to('#chapter-1-navigation a',1,{className:"", delay: 1})

new ScrollMagic.Scene({
	triggerElement: '#chapter-one',
	reverse: true
})	
.setTween(tlChapter1)
.addTo(controller);

var chapterOne = document.getElementById('chapter-one').clientHeight;
new ScrollMagic.Scene({
	triggerElement: "#chapter-one",
	duration: chapterOne
})
.setClassToggle("#chapter-1-navigation", "active")
.addTo(controller);

// chapter 2
var tlChapter2 = new TimelineLite();
tlChapter2
	.to('#chapter-2-navigation a',1,{className:"active-label"})
	.to('#chapter-2-navigation a',1,{className:"", delay: 1})

new ScrollMagic.Scene({
	triggerElement: '#chapter-two',
	reverse: true
})	
.setTween(tlChapter2)
.addTo(controller);

var chapterTwo = document.getElementById('chapter-two').clientHeight;
new ScrollMagic.Scene({
	triggerElement: "#chapter-two",
	duration: chapterTwo
})
.setClassToggle("#chapter-2-navigation", "active")
.addTo(controller);

// chapter three
var tlChapter3 = new TimelineLite();
tlChapter3
	.to('#chapter-3-navigation a',1,{className:"active-label"})
	.to('#chapter-3-navigation a',1,{className:"", delay: 1})

new ScrollMagic.Scene({
	triggerElement: '#chapter-three',
	reverse: true
})	
.setTween(tlChapter3)
.addTo(controller);

var chapterThree = document.getElementById('chapter-three').clientHeight;
new ScrollMagic.Scene({
	triggerElement: "#chapter-three",
	duration: chapterThree
})
.setClassToggle("#chapter-3-navigation", "active")
.addTo(controller);

// Chapter 4
var tlChapter4 = new TimelineLite();
tlChapter4
	.to('#chapter-4-navigation a',1,{className:"active-label"})
	.to('#chapter-4-navigation a',1,{className:"", delay: 1})

new ScrollMagic.Scene({
	triggerElement: '#chapter-four',
	reverse: true
})	
.setTween(tlChapter4)
.addTo(controller);

var chapterFour = document.getElementById('chapter-four').clientHeight;
new ScrollMagic.Scene({
	triggerElement: "#chapter-four",
	duration: chapterFour
})
.setClassToggle("#chapter-4-navigation", "active")
.addTo(controller);
/*
new ScrollMagic.Scene({
	triggerElement: '.trigger-1',
	triggerHook: 'onEnter',
	duration: "50%"
})
.setClassToggle(".trigger-1", "active")
.addIndicators(

	)
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: '.fullbleed--video',
	triggerHook: 'onLeave',
	duration: '100%'
})
.setClassToggle("#one", "active")
.addIndicators()
.addTo(controller);


var height = window.innerHeight;
new ScrollMagic.Scene({
	triggerElement: 'fullbleed--video',
	triggerHook: 'onEnter',
	duration: "100%",
	offset: height + (height/8)
})
.setClassToggle("#two", "active")
.addIndicators()
.addTo(controller);
new ScrollMagic.Scene({
	triggerElement: 'fullbleed--video',
	triggerHook: 'onEnter',
	duration: "100%",
	offset: height * 2 + (height / 8)
})
.setClassToggle("#three", "active")
.addIndicators()
.addTo(controller);
/*
var tl = new TimelineLite();
var h = (window.innerHeight / 10) ;
tl
  .fromTo('.overlay',8, {opacity:0.15}, {opacity:0.75})//  center the element
  //.fromTo('.fullbleed__alt-content.first',2,{top: h * 4}, {top:"-220"},"-=2")
  //.fromTo('h1', 2, {autoAlpha:1}, {top: - h, autoAlpha: 0, ease:Power2.easeIn},"-=2")
  .to('h1',2,{opacity:0,ease:Power2.easeIn},"-=8")
  .fromTo('.video-banner .panel__scrollIcon',2,{opacity:2}, {opacity:0},"-=8")
  .to('.intro.one',1, {autoAlpha:1},"-=6" )
  .to('.intro.one',1, {autoAlpha:0, ease:Power2.easeIn},"+=5" )
  .to('.intro.two',2, {autoAlpha:1},"-=4" )
  .to('.intro.two',2, {autoAlpha:0, ease:Power2.easeIn},"+=3" )
  .to('.intro.three',1, {autoAlpha:1},"-=2" )
  .to('.intro.three',1, {autoAlpha:0, ease:Power2.easeIn},"+=1" )
 // .fromTo('.fullbleed__alt-content.second',2,{top:h * 11}, {top:"40%"},"-=1")

var tlScence = new ScrollMagic.Scene({
	triggerElement: ".fullbleed--video",
	triggerHook:0,
	duration: "150%"
})
.setTween(tl)
.addTo(controller);
/*
// pin a slide and add a progress bar overlaid on the image
var pin = new ScrollMagic.Scene({
    triggerHook: "onLeave",
    duration: "600%",
    triggerElement: "#fixed-image"
})
.setPin("#fixed-image")
.setClassToggle("#fixed-image", "active")
// Add this code
.on("progress", function(e) {
    var progressvalue = Math.floor(100 * e.progress);
    $('.scroll-progress').css('width', progressvalue + "%");
})
.addIndicators()
.addTo(controller);

// animate in multiple divs
 var fadeinTimeLine3 = new TimelineMax();
  var item1in = TweenMax.fromTo("#item-1", 1.5, {opacity:0}, {opacity:1});
  var item1out = TweenMax.fromTo("#item-1", 1.5, {opacity:1}, {opacity:0});
  var item2in = TweenMax.fromTo("#item-2", 1.5, {opacity:0}, {opacity:1});
  var item2out = TweenMax.fromTo("#item-2", 1.5, {opacity:1}, {opacity:0});
  var item3in = TweenMax.fromTo("#item-3", 1.5, {opacity:0}, {opacity:1});
  var item3out = TweenMax.fromTo("#item-3", 1.5, {opacity:1}, {opacity:0});
  fadeinTimeLine3
  .add(item1in)
  .add(item1out)
  .add(item2in)
  .add(item2out)
  .add(item3in)
  .add(item3out);

new ScrollMagic.Scene({
	triggerElement: "#fixed-image",
	triggerHook: 0
})
.setTween(fadeinTimeLine3)
.duration('600%')
.addTo(controller);

*/

// below is slick carousel for showing profile stuff

var carouselPeople = $('.up-list:not(.up-list--basic)');
if (carouselPeople && carouselPeople.find('.up-list__item').length > 0) {
		if (!carouselPeople.hasClass('slick-initialized')) {
          carouselPeople.slick({
            speed: 500,
            cssEase: 'linear',
            infinite: false,
			dots: true,
	        centerMode: true,
            centerPadding: '18px', //site gutter minus margin on items
            arrows: false,
            mobileFirst: true,
            slide: ".up-list__item",
            responsive: [{
            }]
          });
          $(window).on('resize orientationchange', function () {
            carouselPeople.slick('resize');
          });
        }
      }