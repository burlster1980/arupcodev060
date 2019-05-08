---
title: "Creating a text image split module"
date: 2019-02-17T09:51:04Z
lastmod: 2019-04-01
draft: false
type: Creating modules
weight: "10"
menu:
  main:
    title: "Text image split"
    parent: "creating-modules"
---

<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>Table of contents</h2>
		</div>
	</div>
</section>
<section class="container">
	<div class="menu_row">
		<div class="menu_section two">
			<ol class="header-list">
				<li>
					<a href="#guide">Text image split guide</a>
				</li>
				<li>
					<a href="#what-is">What is the text image split module?</a>
				</li>
				<li>
					<a href="#how">How does the module work?</a>
				</li>
				<li>
					<a href="#where">Where can you use the module?</a>
				</li>
				<li>
					<a href="#creating">Creating the text image split module</a>
					<ul class="sub-header-list">
						<li>
							<a href="#adding-content">Adding content</a>
						</li>
					</ul>
				</li>
			</ol>
		</div>
		<div class="menu_section two">
			<ol class="header-list second" start="6">
				<li>
					<a href="#best-practice">Best practice</a>
				</li>
				<li>
					<a href="#faq">FAQ</a>
				</li>
			</ol>
		</div>
	</div>
</section>
<section class="container" id="guide">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>1. Text image split guide</h2>
			<p>This guide provides details on how to successfully add and display the text image split module to your page.</p>
		</div>
	</div>
</section>
<section class="container" id="what-is">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. What is the text image split module?</h2>
			<p>The text image split module allows you to display written content adjacent to an image and to include styled links / CTAs.</p>
			<p>The module has three potential layouts:</p>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h4>Default layout - by default, module will display an image on the left hand side, with text to the right:</h4>
		</div>
	</div>
</section>
<section class="split-pic split-pic--flip">
	<div class="split-pic__pic-wrap">
		<div class="split-pic__pic split-pic__pic--desktop" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/f/fishermans-bend/1708_fishermansbend_map-720-x-680.png?h=680&amp;w=720&amp;hash=71D07A7D2C15E334149F1404D91BB0EE35836604')"></div>
		<div class="split-pic__pic split-pic__pic--mobile" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/f/fishermans-bend/1708_fishermansbend_map-720-x-680.png?mw=720&amp;hash=C1DB516B4400593D7CF340E771FECFAF0534AFBC')"></div>
		<p class="split-pic__caption">Fisherman&#39;s Bend</p>
	</div>
	<div class="split-pic__content">
		<div class="split-pic__inner">
			<div class="split-pic__copy">
				<h3 class="h4">Testing different approaches</h3>
				<p></p>
				<p>This data helped the Cities of Port Phillip and Melbourne inform the state government’s review of the Fishermans Bend strategic plan, infrastructure provision and neighbourhood character guidelines. They also used the findings to engage infrastructure providers, landowners and the surrounding community on sustainability performance issues.</p>
				<p></p>
				<h5></h5>
				<hr>
				<ul class="list list--links">
					<li>
						<a class="cta cta--black cta--small" href="#"><span class="cta__icon icon icon-oval" data-grunticon-embed=""></span> <span class="cta__text">Find out more</span></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section class="container" id="what-is">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h4>Image to right - in the example below, you'll see that the module's text and image are swapped, with the image moving to the right and text to the left</h4>
		</div>
	</div>
</section>
<section class="split-pic">
	<div class="split-pic__pic-wrap">
		<div class="split-pic__pic split-pic__pic--desktop" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/f/fishermans-bend/1708_fishermansbend_map-720-x-680.png?h=680&amp;w=720&amp;hash=71D07A7D2C15E334149F1404D91BB0EE35836604')"></div>
		<div class="split-pic__pic split-pic__pic--mobile" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/f/fishermans-bend/1708_fishermansbend_map-720-x-680.png?mw=720&amp;hash=C1DB516B4400593D7CF340E771FECFAF0534AFBC')"></div>
		<p class="split-pic__caption">Fisherman&#39;s Bend</p>
	</div>
	<div class="split-pic__content">
		<div class="split-pic__inner">
			<div class="split-pic__copy">
				<h3 class="h4">Testing different approaches</h3>
				<p></p>
				<p>This data helped the Cities of Port Phillip and Melbourne inform the state government’s review of the Fishermans Bend strategic plan, infrastructure provision and neighbourhood character guidelines. They also used the findings to engage infrastructure providers, landowners and the surrounding community on sustainability performance issues.</p>
				<p></p>
				<h5></h5>
				<hr>
				<ul class="list list--links">
					<li>
						<a class="cta cta--black cta--small" href="#"><span class="cta__icon icon icon-oval" data-grunticon-embed=""></span> <span class="cta__text">Find out more</span></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section class="container" id="what-is">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h4>Transparent frame - in this final example, you'll see that the module now has a border around it preventing it from touching the edge of the screen and separating it from the modules above and below</h4>
		</div>
	</div>
</section>
<section class="split-pic split-pic--flip">
	<div class="split-pic__pic-wrap split-pic__pic-wrap--frame">
		<div class="split-pic__pic split-pic__pic--desktop" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/f/fishermans-bend/1708_fishermansbend_map-720-x-680.png?h=680&amp;w=720&amp;hash=71D07A7D2C15E334149F1404D91BB0EE35836604')"></div>
		<div class="split-pic__pic split-pic__pic--mobile" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/f/fishermans-bend/1708_fishermansbend_map-720-x-680.png?mw=720&amp;hash=C1DB516B4400593D7CF340E771FECFAF0534AFBC')"></div>
		<p class="split-pic__caption">Fisherman&#39;s Bend</p>
	</div>
	<div class="split-pic__content">
		<div class="split-pic__inner">
			<div class="split-pic__copy">
				<h3 class="h4">Testing different approaches</h3>
				<p></p>
				<p>This data helped the Cities of Port Phillip and Melbourne inform the state government’s review of the Fishermans Bend strategic plan, infrastructure provision and neighbourhood character guidelines. They also used the findings to engage infrastructure providers, landowners and the surrounding community on sustainability performance issues.</p>
				<p></p>
				<h5></h5>
				<hr>
				<ul class="list list--links">
					<li>
						<a class="cta cta--black cta--small" href="/"><span class="cta__icon icon icon-oval" data-grunticon-embed=""></span> <span class="cta__text">Find out more</span></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section class="container" id="how">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>3. How does the text image split module work?</h2>
			<p>The module offers a way for displaying text and imagery alongside one another - with the aim of making your content more engaging. Generally your image and content will work together, so that the image relates to the copy that you add to the module.</p>
			<p>It also allows for the inclusion of links or calls to action that relate to your body of copy, drawing greater attention to the links and encouraging people to click on the link(s).</p>
		</div>
	</div>
</section>
<section class="container" id="where">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>4. Where can you use the text image split?</h2>
			<p>The Quote module can be placed on the following types of pages:</p>
			<ul>
				<li>Events</li>
				<li>News items</li>
				<li>Perspectives</li>
				<li>Projects</li>
				<li>Services</li>
				<li>Industries</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>5. Creating a text image split module</h2>
			<p>To add the module to your page, you must first create it in the Content Editor.</p>
			<p><b>NB - please note that this module is named 'Highlight' within the CMS</b></p>
			<ul>
				<li>Right click on the 'Local content' folder and choose 'Insert &gt; Highlight' from the popup</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/text-image-split/create-text-image-split.jpg"></div>
			<div class="halfbleed__detail">
				Fig 1: Adding a text image split module to the 'Local content' folder
			</div>
			<ul>
				<li>Give your module a suitably descriptive name and click 'Ok'.</li>
			</ul>
			<h5><a id="adding-content" name="adding-content"></a>Adding content to your module</h5>
			<p><b>Highlight</b></p>
			<p></p>
			<p>Once you've created your module, you can begin adding content.</p>
			<p><i>Fields marked with * MUST be completed</i></p>
			<ul>
				<li><b>Title</b> - The title field is used for adding a caption over your image. This will appear in white text, overlaid in the bottom corner of your image</li>
				<li><b>Image*</b> - Add your module's image to this field. The image should be resized to 680px wide by 720px high. For more information on preparing images, please see the <a href="/getting-started/image-preparation/">image guide</a>.</li>
				<li><b>Mobile image</b> - You can add an alternative image for use on mobile devices - but the site will automatically resize your main image for use across all devices.</li>
				<li><b>Heading</b> - you can add a heading for the copy in your module. This will set immediately above your main copy.</li>
				<li><b>Body*</b> - enter your main copy in here. Click 'Show editor' to begin adding copy. Please note, you should not enter too much copy here as lengthy copy will distort your image. Once you've added the module to your page via the Experience Editor, you'll be able to see if your text is too long</li>
				<li><b>Display image on the right</b> - by default, the image will display on the left side of the screen. Check this box if you want to switch this and show the image on the right</li>
				<li><b>Transparent frame</b> - selecting this option will add a 'frame' of white space around your module</li>
			</ul>
			<p><b>Links</b></p>
			<p>In this section, you can add optional links to your module. You can add up to four individual links to the module. The link(s) will display at the end of your copy. See the 'links guide' for further details on creating links.</p>
			<ul>
				<li><b>Links title</b> - you can add an optional title above your links</li>
				<li><b>Link 1</b> - add your first link here</li>
				<li><b>Link 2</b> - add a second link here</li>
				<li><b>Link 3</b> - add a third link here</li>
				<li><b>Link 4</b> - add a fourth link here</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/text-image-split/completed-text-image-split.jpg"></div>
			<div class="halfbleed__detail">
				Fig 2: example of a completed 'text image split' - in this example, 2 links have been added, as has 'transparent border'
			</div>
		</div>
	</div>
</section>
<section class="container" id="best-practice">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>Best practice</h2>
			<p>In this section, you will find guidance and advice on how to best utilise the text image split module.</p>
			<p>It includes examples illustrating how to use and display the module.</p>
			<h5>Recommended use</h5>
			<ul class="featureList">
				<li class="tick">To highlight a specific angle of a story</li>
				<li class="tick">To explain a concept with a related image</li>
				<li class="tick">To create a specific sub-section or a CTA</li>
			</ul>
			<p><b>Example 1 - correctly presented 'default' text image split</b></p>
			<ul class="featureList">
				<li class="tick">Image and text complement each other and the text provides further explanation on what we see in the image</li>
				<li class="tick">Text within the suggested word limit so respects the size of the image</li>
			</ul>
		</div>
	</div>
</section>
<section class="split-pic split-pic--flip">
	<div class="split-pic__pic-wrap">
		<div class="split-pic__pic split-pic__pic--desktop" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/g/gip/windturbines.jpg?h=518&amp;w=920&amp;hash=3B6DFFD2185C7B4FE3445FB5AA4522CA34674912')"></div>
		<div class="split-pic__pic split-pic__pic--mobile" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/g/gip/windturbines.jpg?mw=720&amp;hash=3793C0C77A5BED443633A6B07249701EBB831025')"></div>
		<p class="split-pic__caption">The Pililla wind farm in the Philippines was inspected from a helicopter ahead of the deal taking place. Operational since 2013, the development generates 54MW from 27 turbines.</p>
	</div>
	<div class="split-pic__content">
		<div class="split-pic__inner">
			<div class="split-pic__copy">
				<h3 class="h4">A skilled and experienced team</h3>
				<p></p>
				<p>Our primary role was to provide independent technical due diligence advice to GIP throughout the transaction to support their asset evaluation process. Arup’s experienced transaction advice team focused on key deal value drivers including energy yield modelling, capex and opex assumptions and consideration of multijurisdictional development pipeline of projects.</p>
				<p></p>
				<h5></h5>
				<hr>
				<ul class="list list--links"></ul>
			</div>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example 2 - right alignment, frame applied and a CTA</b></p>
			<p>On occasion, switching the alignment of the text and the image will work better with your page. In addition, adding a frame around your module can ensure sufficient spacing around the module.</p>
			<ul class="featureList">
				<li class="tick">Image aligned right</li>
				<li class="tick">Frame added to module to ensure spacing</li>
				<li class="tick">Text of suitable length</li>
			</ul>
		</div>
	</div>
</section>
<section class="split-pic">
	<div class="split-pic__pic-wrap split-pic__pic-wrap--frame">
		<div class="split-pic__pic split-pic__pic--desktop" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/g/gip/windturbines.jpg?h=518&amp;w=920&amp;hash=3B6DFFD2185C7B4FE3445FB5AA4522CA34674912')"></div>
		<div class="split-pic__pic split-pic__pic--mobile" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/g/gip/windturbines.jpg?mw=720&amp;hash=3793C0C77A5BED443633A6B07249701EBB831025')"></div>
		<p class="split-pic__caption">The Pililla wind farm in the Philippines was inspected from a helicopter ahead of the deal taking place. Operational since 2013, the development generates 54MW from 27 turbines.</p>
	</div>
	<div class="split-pic__content">
		<div class="split-pic__inner">
			<div class="split-pic__copy">
				<h3 class="h4">A skilled and experienced team</h3>
				<p></p>
				<p>Our primary role was to provide independent technical due diligence advice to GIP throughout the transaction to support their asset evaluation process. Arup’s experienced transaction advice team focused on key deal value drivers including energy yield modelling, capex and opex assumptions and consideration of multijurisdictional development pipeline of projects.</p>
				<p></p>
				<h5></h5>
				<hr>
				<ul class="list list--links"></ul>
			</div>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example 3 - Too much text added to the module</b></p>
			<p>The copy should be no longer than 1/2 paragraphs. Due to the responsive design, if you make this copy longer, it will stretch the length of the image in smaller screens and take a long time for the user to scroll through the page. This can be seen in the example below:</p>
			<ul class="featureList">
				<li class="cross">Text length has stretched the image and takes up the full screen, hiding any content that may live beneath it</li>
			</ul>
		</div>
	</div>
</section>
<section class="split-pic split-pic--flip">
	<div class="split-pic__pic-wrap">
		<div class="split-pic__pic split-pic__pic--desktop" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/g/gip/windturbines.jpg?h=518&amp;w=920&amp;hash=3B6DFFD2185C7B4FE3445FB5AA4522CA34674912')"></div>
		<div class="split-pic__pic split-pic__pic--mobile" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/g/gip/windturbines.jpg?mw=720&amp;hash=3793C0C77A5BED443633A6B07249701EBB831025')"></div>
		<p class="split-pic__caption">The Pililla wind farm in the Philippines was inspected from a helicopter ahead of the deal taking place. Operational since 2013, the development generates 54MW from 27 turbines.</p>
	</div>
	<div class="split-pic__content">
		<div class="split-pic__inner">
			<div class="split-pic__copy">
				<h3 class="h4">A skilled and experienced team</h3>
				<p>Arup worked on behalf of Global Infrastructure Partners (GIP) on their successful bid to acquire Equis’ portfolio of 11GW of renewable assets, for a record breaking $5bn. Working with restricted timescales, our business investor advisory team led the commission from London with significant support from across our global offices to ensure a successful deal was compiled.<br>
				<br>
				Equis’ 11GW portfolio included 139 solar and wind power generation assets in operation, construction and development. The renewable energy assets were spread across seven countries in the Asia Pacific region, with 1GW of operating assets and 1GW under construction. The portfolio across Japan, Philippines, India, Indonesia, Australia, Taiwan and Thailand also included a substantial development pipeline.<br>
				<br>
				Our primary role was to provide independent technical due diligence advice to GIP throughout the transaction to support their asset evaluation process. Arup’s experienced transaction advice team focused on key deal value drivers including energy yield modelling, capex and opex assumptions and consideration of multijurisdictional development pipeline of projects.</p>
				<hr>
				<ul class="list list--links"></ul>
			</div>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example 4 - incorrectly placed module</b></p>
			<p>Placing fullwidth modules next to one another - with nothing between them - is not good practice. The display can look messy and confuse the user.</p>
			<ul class="featureList">
				<li class="cross">No spacing between two modules</li>
				<li class="cross">Text on both modules becomes overbearing and difficult to follow</li>
			</ul>
		</div>
	</div>
</section>
<section class="split-pic">
	<div class="split-pic__pic-wrap">
		<div class="split-pic__pic split-pic__pic--desktop" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/g/gip/windturbines.jpg?h=518&amp;w=920&amp;hash=3B6DFFD2185C7B4FE3445FB5AA4522CA34674912')"></div>
		<div class="split-pic__pic split-pic__pic--mobile" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/g/gip/windturbines.jpg?mw=720&amp;hash=3793C0C77A5BED443633A6B07249701EBB831025')"></div>
		<p class="split-pic__caption">The Pililla wind farm in the Philippines was inspected from a helicopter ahead of the deal taking place. Operational since 2013, the development generates 54MW from 27 turbines.</p>
	</div>
	<div class="split-pic__content">
		<div class="split-pic__inner">
			<div class="split-pic__copy">
				<h3 class="h4">A skilled and experienced team</h3>
				<p></p>
				<p>Our primary role was to provide independent technical due diligence advice to GIP throughout the transaction to support their asset evaluation process. Arup’s experienced transaction advice team focused on key deal value drivers including energy yield modelling, capex and opex assumptions and consideration of multijurisdictional development pipeline of projects.</p>
				<p></p>
				<h5></h5>
				<hr>
				<ul class="list list--links"></ul>
			</div>
		</div>
	</div>
</section>
<section class="fullbleed fullbleed--secondary fullbleed--hero reveal">
	<div class="progressiveMedia"><img alt="Sint Lucas" class="tempImg" height="6" src="https://www.arup.com/-/media/2000x1125jhml16119430.jpg?h=6&amp;la=en&amp;mw=10&amp;w=10&amp;hash=AED4ADC9E7F3673A5CB5E307F697677E24E86EAA" width="10"> <img alt="Sint Lucas" class="mainImg" height="2530" src="https://www.arup.com/-/media/2000x1125jhml16119430.jpg?h=2530&amp;la=en&amp;w=4498&amp;hash=60277BB3ACDA6AA4CDE902AA9EF550B1D62C217B" width="4498"></div>
	<div class="container fullbleed__container">
		<div class="fullbleed__content fullbleed__content--light">
			<h3 class="intro intro--bold"></h3>
			<p>Arup applies its research, technical, design and commercial expertise across eight key aspects of city development.</p>
			<p>City resilience: ensuring cities thrive in the face of environmental and social shocks. Climate-ready cities: turning climate change adaptation into opportunities for enhancing city life. City life: designing places and spaces that produce a great quality of life. City growth: stimulating economic growth by investing in city infrastructure and services. City regeneration: reinvigorating spaces to become places where people want to live, work and play. Host cities: using major sporting and cultural events to improve city life. City operations: funding, managing and delivering programmes to help cities function and grow. Digital cities: improving public engagement and local governance through digital technology.</p>
		</div>
		<div class="addthis_toolbox addthis_default_style">
			<a class="addthis_button_facebook"><svg height="26px" version="1.1" viewbox="0 0 26 26" width="26px" xmlns="http://www.w3.org/2000/svg">
			<title>Icons/Social/Facebook</title>
			<desc>
				Created with Sketch.
			</desc>
			<defs></defs>
			<g fill="none" fill-rule="evenodd" id="Symbols" stroke="none" stroke-width="1">
				<g fill="none" id="Backgrounds" transform="translate(-17303.000000, -533.000000)">
					<rect height="4747.25" id="Rectangle-11-Copy-3" width="5188" x="16833" y="4"></rect>
				</g>
				<g fill="#1D1D1B" id="Facebook">
					<path d="M8,9.18877778 L10.2463333,9.18877778 L10.2463333,7.00505556 C10.2463333,6.04161111 10.2706111,4.55683333 10.9708333,3.63683333 C11.7068333,2.66188889 12.7188333,2 14.4578889,2 C17.292,2 18.4854444,2.40377778 18.4854444,2.40377778 L17.9245,5.73366667 C17.9245,5.73366667 16.9878889,5.4615 16.1138889,5.4615 C15.2411667,5.4615 14.4578889,5.77583333 14.4578889,6.64855556 L14.4578889,9.18877778 L18.0407778,9.18877778 L17.7916111,12.4407222 L14.4578889,12.4407222 L14.4578889,23.7362778 L10.2463333,23.7362778 L10.2463333,12.4407222 L8,12.4407222 L8,9.18877778" id="Imported-Layers-Copy-14"></path>
				</g>
			</g></svg></a> <a class="addthis_button_linkedin"><svg height="26px" version="1.1" viewbox="0 0 26 26" width="26px" xmlns="http://www.w3.org/2000/svg">
			<title>Icons/Social/LinkedIn</title>
			<desc>
				Created with Sketch.
			</desc>
			<defs></defs>
			<g fill="none" fill-rule="evenodd" id="Symbols" stroke="none" stroke-width="1">
				<g fill="none" id="Backgrounds" transform="translate(-17207.000000, -533.000000)">
					<rect height="4747.25" id="Rectangle-11-Copy-3" width="5188" x="16833" y="4"></rect>
				</g>
				<g fill="#1D1D1B" id="LinkedIn">
					<path d="M2.43061139,9.51970106 L6.88874199,9.51970106 L6.88874199,23.7854501 L2.43061139,23.7854501 L2.43061139,9.51970106 Z M4.54540012,7.73429773 L4.51313379,7.73429773 C2.90116196,7.73429773 1.85519525,6.64396482 1.85519525,5.26323499 C1.85519525,3.85292769 2.93208386,2.7854501 4.57766644,2.7854501 C6.22056017,2.7854501 7.23291612,3.85023883 7.26518245,5.2592017 C7.26518245,6.63993153 6.22056017,7.73429773 4.54540012,7.73429773 L4.54540012,7.73429773 Z M24.71992,23.7854501 L19.6662068,23.7854501 L19.6662068,16.4031838 C19.6662068,14.4698931 18.8770262,13.1523515 17.1373335,13.1523515 C15.8076921,13.1523515 15.0695999,14.0410199 14.7254257,14.8987664 C14.5963604,15.2066409 14.6151824,15.6341697 14.6151824,16.0657318 L14.6151824,23.7854501 L9.60852432,23.7854501 C9.60852432,23.7854501 9.6744014,10.7068329 9.60852432,9.51970106 L14.6151824,9.51970106 L14.6151824,11.7581774 C14.9123015,10.7780877 16.5108291,9.38122475 19.0652465,9.38122475 C22.2327241,9.38122475 24.71992,11.4328253 24.71992,15.8519674 L24.71992,23.7854501 L24.71992,23.7854501 Z" id="Imported-Layers-Copy-15"></path>
				</g>
			</g></svg></a> <a class="addthis_button_twitter"><svg height="26px" version="1.1" viewbox="0 0 26 26" width="26px" xmlns="http://www.w3.org/2000/svg">
			<title>Icons/Social/Twitter</title>
			<desc>
				Created with Sketch.
			</desc>
			<defs></defs>
			<g fill="none" fill-rule="evenodd" id="Symbols" stroke="none" stroke-width="1">
				<g fill="none" id="Backgrounds" transform="translate(-17121.000000, -533.000000)">
					<rect height="4747.25" id="Rectangle-11-Copy-3" width="5188" x="16833" y="4"></rect>
				</g>
				<g fill="#1D1D1B" id="Twitter">
					<path d="M25,6.30885719 C24.1167459,6.70188413 23.167283,6.96531079 22.1727417,7.08505018 C23.1898222,6.47649234 23.9702412,5.51012502 24.3365029,4.36203557 C23.3842226,4.92551506 22.3319246,5.33403768 21.2091918,5.55379468 C20.3132594,4.59728825 19.0313435,4 17.6156013,4 C14.8982215,4 12.6921993,6.20602219 12.6921993,8.92481071 C12.6921993,9.31079415 12.7344603,9.68550801 12.8189822,10.0461349 C8.72812115,9.83905617 5.10072196,7.88237366 2.67071668,4.89874978 C2.24669836,5.62986441 2.00440218,6.47649234 2.00440218,7.37805952 C2.00440218,9.08399366 2.87356929,10.59271 4.19492868,11.4759641 C3.38774432,11.4520162 2.62704702,11.2294418 1.96354992,10.8617714 L1.96354992,10.9223455 C1.96354992,13.3086811 3.65962317,15.2991724 5.91354112,15.749956 C5.50079239,15.866878 5.06550449,15.9246346 4.6161296,15.9246346 C4.29917239,15.9246346 3.98925867,15.8950519 3.69061454,15.8372953 C4.31607677,17.7925691 6.13470681,19.2167635 8.28860715,19.2562071 C6.60380349,20.5761578 4.48089452,21.3636204 2.17485473,21.3636204 C1.77619299,21.3636204 1.38457475,21.3410812 1,21.2960028 C3.17925691,22.6920232 5.76703645,23.5076598 8.54780771,23.5076598 C17.6057404,23.5076598 22.5559077,16.0049304 22.5559077,9.49533369 C22.5559077,9.28262018 22.5516816,9.06849797 22.5432294,8.85860187 C23.5053707,8.1641134 24.3421377,7.29776369 25,6.30885719 L68.5,8.5" id="Imported-Layers-Copy-4"></path>
				</g>
			</g></svg></a> <a class="addthis_button_compact"><svg height="27px" version="1.1" viewbox="0 0 27 27" width="27px" xmlns="http://www.w3.org/2000/svg">
			<title>Icons/Social/More</title>
			<desc>
				Created with Sketch.
			</desc>
			<defs></defs>
			<g fill="none" fill-rule="evenodd" id="DIGITAL-LEADERSHIP" stroke="none" stroke-linecap="square" stroke-linejoin="bevel" stroke-width="1">
				<g id="Desktop-HD---Share" stroke="#343434" transform="translate(-1178.000000, -298.000000)">
					<g id="Group-4" transform="translate(1142.000000, 106.000000)">
						<g id="Buttons/Links/Expand" transform="translate(37.000000, 193.000000)">
							<g id="Group-4" transform="translate(12.675000, 12.675000) rotate(-360.000000) translate(-12.675000, -12.675000)">
								<ellipse cx="12.675" cy="12.675" id="Oval" rx="12.675" ry="12.675"></ellipse>
							</g>
							<g id="Plus" opacity="0.9" stroke="#343434" transform="translate(4.550000, 4.550000)">
								<g id="Group" transform="translate(5.230769, 5.230769)">
									<path d="M0.482279995,2.94230769 L5.92501128,2.94230769" id="Line"></path>
									<path d="M3.26923077,5.92279962 L3.26923077,0.143306616" id="Line-Copy"></path>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g></svg></a>
		</div>
	</div>
</section><!-- faq -->
<section class="container" id="faq">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>FAQ</h2>
			<ol class="header-list">
				<li>
					<a href="#faq-fields">Do I have to use the specific fields for links?</a>
				</li>
				<li>
					<a href="#faq-multiple">Can I add multiple text image splits to a page?</a>
				</li>
				<li>
					<a href="#faq-caption">Do I need to add a caption to my image?</a>
				</li>
			</ol>
			<h5><a id="faq-fields" name="faq-fields"></a>1. Do I have to use the specific fields for links?</h5>
			<p>A. No. If your main copy contains links then you can add links into this as you would in any other 'rich text' field. For further advice on adding links, please the <a href="/getting-started/adding-links/">links guide</a>.</p>
			<h5><a id="faq-multiple" name="faq-multiple"></a>2. Can I add multiple text image splits to a page?</h5>
			<p>A. Yes. Theoretically you can add as many as you wish. However, you should consider the advice given in the best practice guidance above. You should never do the following:</p>
			<ul>
				<li>Do not add two modules in a row with the image on the same side</li>
				<li>Do not add this module directly next to another full width module (such as a 'hero' image of 'full width carousel') unless you've selected 'Transparent border' - there should always be sufficient white space between modules</li>
			</ul>
			<h5><a id="faq-caption" name="faq-caption"></a>3. Do I need to add a caption to my image?</h5>
			<p>A. You can use the 'Title' field to add a caption if necessary. However, generally speaking the copy you use in this module should strongly relate to the image you've used - and will in effect act as a caption.</p>
		</div>
	</div>
</section>
