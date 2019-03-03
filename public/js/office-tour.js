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
      title: 'Office',
      content: 'The name of the office\'s location town or city leads the page',
      
    },
    {
      target: 'step-2',
      title: 'Lead contact',
      content: 'The office\'s lead contact person is present. This is likely to be the office\'s most senior member of staff.',
      placement: 'left',
      yOffset: -20
    },
    {
      target: 'step-3',
      placement: 'right',
      title: 'Address details',
      content: 'Address details for the office are present and up to date.'
    },
	
    {
      target: 'step-4',
      placement: 'right',
      title: 'Contact details',
      content: 'Contact details are present and up to date. \'Generic\' email address or the office has been used rather than a personal account.',
      yOffset: -25
    },
	{
      target: 'step-5',
      placement: 'top',
      title: 'Office description',
      content: 'A description of the office is present, outlining a brief histroy, the office\'s key expertise and a brief section on some key work. The copy has been kept relatively short.',
      yOffset: -25
    },
    {
      target: 'step-6',
      placement: 'top',
      title: 'Related projects',
      content: 'Related projects have been added to the office. This is the best way of highlighting the work of the office, and is better than simply linking in the office description. Up to 5 individual projects can be highlighted',
      arrowOffset: 100
    },
    {
      target: 'step-7',
      placement: 'top',
      title: 'Related news',
      content: 'News relating to the office\'s work has been added. This should be kept up to date where possible.',
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
        content: 'Take a tour of an example office page to learn more about the key elements',
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
