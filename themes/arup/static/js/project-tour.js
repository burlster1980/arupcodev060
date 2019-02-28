/* globals hopscotch: false */

/* ============ */
/* EXAMPLE TOUR */
/* ============ */
var tour = {
  id: 'hello-hopscotch',
  steps: [
    {
      target: 'feature-title',
      title: 'Title',
      content: 'Take a tour around an example project to discover what makes a great project',
      placement: 'top',
      
    },
    {
      target: 'step-2',
      title: 'Contact added',
      content: 'At the very least, you\'ll need to include these two files in your project to get started.',
      placement: 'left',
      yOffset: -20
    },
    {
      target: 'step-3',
      placement: 'top',
      title: 'Introduction',
      content: 'Once you have Hopscotch on your page, you\'re ready to start making your tour! The biggest part of your tour definition will probably be the tour steps.'
    },
    {
      target: 'step-4',
      placement: 'right',
      title: 'Heading added',
      content: 'After you\'ve created your tour, pass it in to the startTour() method to start it.',
      yOffset: -25
    },
    {
      target: 'step-5',
      placement: 'top',
      title: 'Project facts',
      content: 'These are the most basic step options: <b>target</b>, <b>placement</b>, <b>title</b>, and <b>content</b>. For some steps, they may be all you need.',
      arrowOffset: 100
    },
    {
      target: 'step-6',
      placement: 'top',
      title: 'Main article begins with heading and text',
      content: 'Control your tour programmatically using these methods.',
    },
    {
      target: 'step-7',
      placement: 'top',
      title: 'Descriptive caption included',
      content: 'This is the JSON for the current tour! Pretty simple, right?',
    },
    {
      target: 'step-8',
      placement: 'top',
      title: 'Heading used to introduce concept',
      content: 'Now go and build some great tours!',
      xOffset: 'center',
      arrowOffset: 'center'
    },
	{
      target: 'step-9',
      placement: 'top',
      title: 'Text split - text supports image',
      content: 'Now go and build some great tours!'
      
    },
	{
      target: 'step-10',
      placement: 'top',
      title: 'Heading highlights Arup\'s input',
      content: 'Now go and build some great tours!',
      xOffset: 'center',
      arrowOffset: 'center'
    }
  ],
  showPrevButton: false,
  scrollTopMargin: 100
},

/* ========== */
/* TOUR SETUP */
/* ========== */
addClickListener = function(el, fn) {
  if (el.addEventListener) {
    el.addEventListener('click', fn, false);
  }
  else {
    el.attachEvent('onclick', fn);
  }
},

init = function() {
  var startBtnId = 'startTourBtn',
      calloutId = 'startTourCallout',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('hello-hopscotch:') === 0) {
    // Already started the tour at some point!
    hopscotch.startTour(tour);
  }
  else {
    // Looking at the page for the first(?) time.
    setTimeout(function() {
      mgr.createCallout({
        id: calloutId,
        target: startBtnId,
        placement: 'right',
        title: 'Take a tour',
        content: 'Use the tour to learn more about the key elements that make up a great project',
        arrowOffset: 'center',
        width: 240
      });
    }, 100);
  }

  addClickListener(document.getElementById(startBtnId), function() {
    if (!hopscotch.isActive) {
      mgr.removeAllCallouts();
      hopscotch.startTour(tour);
    }
  });
};

init();
