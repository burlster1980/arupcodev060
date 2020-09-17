

gsap.registerPlugin(ScrollTrigger);

// animate main title
/*var titleTimeline = gsap.timeline();
titleTimeline.from('video', 2, {delay:2, css:{webkitFilter:"grayscale(1)"}})
titleTimeline.from('.title__container h1', 1, {opacity:0, y:-100}, "+=0.5")
titleTimeline.from('.title__container p', 1, {delay:0.5, opacity:0, y:100})
*/

var titleTimeline = gsap.timeline();
titleTimeline.from('video', 5, {delay:2, css:{webkitFilter:"grayscale(1)"}})
titleTimeline.from('#question__one', 1.5, {opacity:0,},'-=6.5')
titleTimeline.from('#question__two', 1.5, {opacity:0,},'-=5')
titleTimeline.from('h1', 1, {delay:0.5, opacity:0},'-=3.5')

gsap.utils.toArray(".section").forEach(function(section) {
  var media = section.querySelector(".animate-content-steve");

  gsap.from(media, 1.5, {
    opacity:0,
    y:100,
    scrollTrigger: {
    	trigger: section,
    	start: 'top bottom-=300',
    	markers: true,
    	toggleAction: 'play none none reverse'
  		}
	});
});


// setup couunters
var duration = 1;
var endValue = 9;
var endValue2 = 340;
var endValue3 = 66;
var endValue4 = 9.4;/*
var endValue5 = 420000;
var endValue6 = 330000;*/
var round = roundPartial(2);

var counterOne = gsap.timeline();
	counterOne.from('#storyOne .stat__container', 0.5, {opacity:0})
	counterOne.to('#scoreOne', duration, {opacity:1, innerHTML: endValue, modifiers: {innerHTML: roundPartial(0)}}, '-=0.75')
	counterOne.to('#scoreOneDescription', duration, {delay:-0.25, opacity:1})

var counterTwo = gsap.timeline();
	counterTwo.from('#storyTwo .stat__container', 0.5, {opacity:0})
	counterTwo.to('#scoreTwo', duration, {opacity:1, innerHTML: endValue2, modifiers: {innerHTML: roundPartial(0)}})
	counterTwo.to('#scoreTwoMeasure', duration, {delay:-0.75, opacity:1})
	counterTwo.to('#scoreTwoDescription', duration, {delay:-0.25, opacity:1})

var counterThree = gsap.timeline();
	counterThree.to('#scoreThree', duration, {opacity:1, innerHTML: endValue3, modifiers: {innerHTML: roundPartial(0)}})
	counterThree.from('#storyThree .preview-card', 1, {opacity:0, x:150},'-=1')
	counterThree.to('#scoreThreeMeasure', duration, {delay:-0.75, opacity:1})
	counterThree.to('#scoreThreeDescription', duration, {delay:-0.25, opacity:1})

var counterFour = gsap.timeline();
	counterFour.to('#scoreFour', duration, {opacity:1, innerHTML: endValue4, modifiers: {innerHTML: roundPartial(1)}})
	counterFour.from('#storyFour .preview-card', 1, {opacity:0, x:150},'-=1')
	counterFour.to('#scoreFourMeasure', duration, {delay:-0.75, opacity:1})
	counterFour.to('#scoreFourDescription', duration, {delay:-0.25, opacity:1})
	
function roundPartial(places) {
  var p = Math.pow(10, places || 0);
  return function(value) {
    return Math.round(value * p) / p;
  }
}


// trigger first stat
ScrollTrigger.create({
	trigger:'#storyOne',
	start:'top center-=25%',
	animation: counterOne,
	markers: false
})

// trigger second stat
ScrollTrigger.create({
	trigger:'#storyTwo',
	start:'top center-=25',
	animation: counterTwo,
	markers: false
})

// trigger third stat
ScrollTrigger.create({
	trigger:'#storyThree',
	start:'top center-=300',
	animation: counterThree,
	markers: false
})

// trigger fourth stat
ScrollTrigger.create({
	trigger:'#storyFour',
	start:'top center-=300',
	animation: counterFour,
	markers: false
})

// image carousel one
var carouselTlOne = gsap.timeline();
 	carouselTlOne.to(['#imageOne','#captionOne'], { opacity:1 })
 	carouselTlOne.to(['#imageOne','#captionOne'], {duration:1, opacity:0 })
 	carouselTlOne.to(['#imageTwo','#captionTwo'], {delay:-1,zIndex:2, opacity:1, durration:1 })

ScrollTrigger.create({
	trigger: '#carouselOne',
	start: 'top top',
	end:'bottom top',
	pin: '#carouselOne',
	animation: carouselTlOne,
	scrub:true,
	markers: false
})
// image carousel two
var carouselTlTwo = gsap.timeline();
 	carouselTlTwo.to(['#imageThree','#captionThree'], { opacity:1 })
 	carouselTlTwo.to(['#imageThree','#captionThree'], {duration:1, opacity:0 })
 	carouselTlTwo.to(['#imageFour','#captionFour'], {delay:-1,zIndex:2, opacity:1, durration:1 })

ScrollTrigger.create({
	trigger: '#carouselTwo',
	start: 'top top',
	end:'bottom top',
	pin: true,
	animation: carouselTlTwo,
	scrub:true,
	markers: false
})

// image carousel three
var carouselTlThree = gsap.timeline();
 	carouselTlThree.to(['#imageFive','#captionFive'], { opacity:1 })
 	carouselTlThree.to(['#imageFive','#captionFive'], {duration:1, opacity:0 })
 	carouselTlThree.to(['#imageSix','#captionSix'], {delay:-1,zIndex:2, opacity:1, durration:1 })
 	carouselTlThree.to(['#imageSix','#captionSix'], {duration:1, opacity:0 })
 	carouselTlThree.to(['#imageSeven','#captionSeven'], {delay:-1,zIndex:2, opacity:1, durration:1 })

ScrollTrigger.create({
	trigger: '#carouselThree',
	start: 'top top',
	end:'bottom top',
	pin: true,
	animation: carouselTlThree,
	scrub:true,
	markers: false
})
