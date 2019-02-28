/* globals hopscotch: false */

/* ============ */
/* EXAMPLE TOUR */
/* ============ */
var tour = {
  id: 'hello-hopscotch',
  steps: [
    {
      target: 'step-1',
	  placement: 'top',
      title: 'Title',
      content: 'Works as a hook: sets the overall narrative for the page and helps engage, intrigue and encourage page visitors.',
      
    },
    {
      target: 'step-2',
      title: 'Contact added',
      content: 'Adds the best Arup staff member to contact about the project',
      placement: 'left',
      yOffset: -20
    },
    {
      target: 'step-3',
      placement: 'top',
      title: 'Heading added',
      content: 'Explains what the introductory section is about, and sets up the challenge .'
    },
    {
      target: 'step-4',
      placement: 'right',
      title: 'Introduction',
      content: 'Successfully sets out what the challenge was when Arup was introduced to the project',
      yOffset: -25
    },
    {
      target: 'step-5',
      placement: 'top',
      title: 'Project facts',
      content: 'These figures define the scale of the project, our involvement, and the beneficiaries of the work.',
      arrowOffset: 100
    },
    {
      target: 'step-6',
      placement: 'top',
      title: 'Main article begins with heading and text',
      content: 'Here we can go in to more detail about the work we provide, with a heading to earmark the specific content of that paragraph.',
    },
    {
      target: 'step-7',
      placement: 'top',
      title: 'Full bleed image with descriptive caption included',
      content: 'An image which anchors and supports the narrative, with a caption to explain the priorities or significance of the project',
    },
    {
      target: 'step-8',
      placement: 'right',
      title: 'Heading used to introduce concept',
      content: 'Rather than list all services we provided in the intro, we can use headings to explain them through the narrative – in this case the financial and project delivery plan.',
    },
	{
      target: 'step-9',
      placement: 'top',
      title: 'Text split - text supports image',
      content: 'Image supported with text to help tell the story. This works best when what we see on the left/right relates to the text we read. The heading reinforces the difference we set out to make, highlights people, and what the outcome was.'
    },
	{
      target: 'step-10',
      placement: 'top',
      title: 'Heading highlights Arup\'s input',
      content: 'Outlines why we were hired, our expertise and then what we achieved.',
    },
	{
      target: 'step-11',
      placement: 'top',
      title: 'Quote to indicate success of project',
      content: 'Quote from external person to highlight the client\'s satisfaction',
     },
{
      target: 'step-12',
      placement: 'top',
      title: 'Image with caption',
      content: 'Another image to explain the services we offered and help the user visualise the work we did',
      xOffset: 'center',
      arrowOffset: 'center'
    },
{
      target: 'step-13',
      placement: 'top',
      title: 'Heading highlights Arup\'s input and benefits to environment/local community',
      content: 'This concludes the project and places us at the forefront of design.',
    },
{
      target: 'step-14',
      placement: 'top',
      title: 'CTA with heading - Expertise: ',
      content: 'Add in a brief sentence to give context and help the CTA ‘fit’. In this case invite the user to find out more about our services by exploring other pages in arup.com.',
    },
{
      target: 'step-15',
      placement: 'top',
      title: 'CTA with heading - Contact',
      content: 'Adds in a question to outline what the user might want to do next. Encourages the user to contact the expert behind the project.',
    },
{
      target: 'step-16',
      placement: 'top',
      title: 'Related projects',
      content: 'Wherever possible, you should look to associate related content to your project - as this helps to retain users on arup.com. Related projects show our expertise in similar work and places us as experts',
    },
{
      target: 'step-17',
      placement: 'top',
      title: 'Related expertise',
      content: 'Helps users to see similar areas of work or explore further specific disciplines we specialise in.',
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
        title: 'Take an example tour',
        content: 'Start by taking an example tour to see Hopscotch in action!',
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
