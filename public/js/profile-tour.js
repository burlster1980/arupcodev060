/* globals hopscotch: false */

/* ============ */
/* PROFILE TOUR */
/* ============ */
var tour = {
  id: 'hello-hopscotch',
  steps: [
    {
      target: 'step-1',
	  placement: 'top',
      title: 'Picture',
      content: 'The profilee\'s picture is present and correctly resized. The profile picture should always be of equal width and height.',
      
    },
    {
      target: 'step-2',
      title: 'Job title',
      content: 'The person\'s job title has been added - ideally this should always be a person\'s external facing job title, and not simply \'Associate\' or \'Director\'.',
      placement: 'left',
      yOffset: -20
    },
    {
      target: 'step-3',
      placement: 'top',
      title: 'Contact details',
      content: 'All relevant contact details have been added including email (ideally this should not be a personal address), phone number (including international dialing code) and their location.'
    },
	
    {
      target: 'step-4',
      placement: 'right',
      title: 'Biography',
      content: 'The biography should outline the person\'s experience, the skils and some of their key achievements. This should be presented in first person format, or alternatively in an interview style',
      yOffset: -25
    },
	{
      target: 'step-5',
      placement: 'left',
      title: 'Expertise',
      content: 'You should indicate what the person\'s areas of expertise are. You can select as many industries or services that apply to the person',
      yOffset: -25
    },
    {
      target: 'step-6',
      placement: 'top',
      title: 'Related projects',
      content: 'Wherever possible you should highlight any projects that the person has worked on or been involved with.',
      arrowOffset: 100
    },
    {
      target: 'step-7',
      placement: 'top',
      title: 'Related perspectives',
      content: 'If the profilee has written any perspectives or arup.com, then these should be highlighted here.',
    }

  ],

  showPrevButton: true,
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
        content: 'Take the tour to learn more about the key elements of a great profile',
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
