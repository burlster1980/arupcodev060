---
title: "Creating a quotation module"
date: 2019-02-17T07:43:24Z
lastmod: 2019-02-17
draft: false
type: Creating modules
weight: "6"
menu:
  main:
    title: "Quotation module"
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
					<a href="#guide">Quotation guide</a>
				</li>
				<li>
					<a href="#what-is">What is the quotation module</a>
				</li>
				<li>
					<a href="#how">How does this module differ from the quote module</a>
				</li>
				<li>
					<a href="#where">Where can you use the module?</a>
				</li>
				<li>
					<a href="#creating">Creating a quotation module</a>
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
			<h2>1. Quotation guide</h2>
			<p>This guide provides details on how to successfully utilise the Quotation module in Sitecore. This module differs from the standard 'Quote' module by allowing you to overlay a quote on an image.</p>
		</div>
	</div>
</section>
<div class="float-box float-box--nopad">
	<div class="float-box__pic" style="background-image: url('https://www.arup.com/-/media/2000x1125-full-width-gallery3_4_epic-staircase_post.jpg?h=680&amp;w=720&amp;hash=B2F0C14E413359B645C08FB40112021B374A8831')"></div>
	<div class="float-box__pic float-box__pic--mobile" style="background-image: url('https://www.arup.com/-/media/2000x1125-full-width-gallery3_4_epic-staircase_post.jpg?mw=720&amp;hash=8E8213B6CD7B57E0012961166477F045996CB017')"></div>
	<div class="float-box__inner">
		<div class="float-box__box">
			<blockquote class="quote quote--after-pad">
				<span class="quote__symbol">&#8220;</span> <span class="p">None of us can imagine losing everything we have in a single devastating fire, and yet this is the daily reality for so many, entrenching the cycles of poverty. &#8221; <span class="people"><img alt="Paolo Cresci" src="https://www.arup.com/-/media/arup/images/people/p/paolo-cresci-photo.jpg?h=450&amp;w=450&amp;hash=8D0FCDFAD8A018A6AB9381FF74B026B5BB809372"> <span class="people__inner"><span class="bold">Paolo Cresci</span> <span>Sustainability and Building Services Team Leader</span></span></span></span>
			</blockquote><a class="cta cta--black cta--small" href="/"><span class="cta__icon icon icon-oval" data-grunticon-embed=""></span> <span class="cta__text">Find out more about Paolo</span></a>
		</div>
	</div>
</div>
<section class="container" id="what-is">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. What is the quotation module?</h2>
			<p>The module allows you to display a quote or highlight a key piece of text from your author - utilising the standard or default arup.com display style - overlaid on an image, with the option of including a specific call to action linking to another page.</p>
			<p>The module has two potential layouts:</p>
			<h5>Default layout - by default, the module will display an image with a quote overlaid on the right side of the image</h5>
		</div>
	</div>
</section>
<div class="float-box float-box--flip float-box--nopad">
	<div class="float-box__pic" style="background-image: url('https://www.arup.com/-/media/2000x1125-full-width-gallery3_4_epic-staircase_post.jpg?h=680&amp;w=720&amp;hash=B2F0C14E413359B645C08FB40112021B374A8831')"></div>
	<div class="float-box__pic float-box__pic--mobile" style="background-image: url('https://www.arup.com/-/media/2000x1125-full-width-gallery3_4_epic-staircase_post.jpg?mw=720&amp;hash=8E8213B6CD7B57E0012961166477F045996CB017')"></div>
	<div class="float-box__inner">
		<div class="float-box__box">
			<blockquote class="quote quote--after-pad">
				<span class="quote__symbol">&#8220;</span> <span class="p">None of us can imagine losing everything we have in a single devastating fire, and yet this is the daily reality for so many, entrenching the cycles of poverty. &#8221; <span class="people"><img alt="Paolo Cresci" src="https://www.arup.com/-/media/arup/images/people/p/paolo-cresci-photo.jpg?h=450&amp;w=450&amp;hash=8D0FCDFAD8A018A6AB9381FF74B026B5BB809372"> <span class="people__inner"><span class="bold">Paolo Cresci</span> <span>Sustainability and Building Services Team Leader</span></span></span></span>
			</blockquote><a class="cta cta--black cta--small" href="/"><span class="cta__icon icon icon-oval" data-grunticon-embed=""></span> <span class="cta__text">Find out more about Paolo</span></a>
		</div>
	</div>
</div>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5>Image to left - in the example below, you'll see that the module's quote has now been moved to the left of the display</h5>
		</div>
	</div>
</section>
<div class="float-box">
	<div class="float-box__pic" style="background-image: url('https://www.arup.com/-/media/2000x1125-full-width-gallery3_4_epic-staircase_post.jpg?h=680&amp;w=720&amp;hash=B2F0C14E413359B645C08FB40112021B374A8831')"></div>
	<div class="float-box__pic float-box__pic--mobile" style="background-image: url('https://www.arup.com//-/media/2000x1125-full-width-gallery3_4_epic-staircase_post.jpg?mw=720&amp;hash=8E8213B6CD7B57E0012961166477F045996CB017')"></div>
	<div class="float-box__inner">
		<div class="float-box__box">
			<blockquote class="quote quote--after-pad">
				<span class="quote__symbol">&#8220;</span> <span class="p">None of us can imagine losing everything we have in a single devastating fire, and yet this is the daily reality for so many, entrenching the cycles of poverty. &#8221; <span class="people"><img alt="Paolo Cresci" src="https://www.arup.com/-/media/arup/images/people/p/paolo-cresci-photo.jpg?h=450&amp;w=450&amp;hash=8D0FCDFAD8A018A6AB9381FF74B026B5BB809372"> <span class="people__inner"><span class="bold">Paolo Cresci</span> <span>Sustainability and Building Services Team Leader</span></span></span></span>
			</blockquote><a class="cta cta--black cta--small" href="/"><span class="cta__icon icon icon-oval" data-grunticon-embed=""></span> <span class="cta__text">Find out more about Paolo</span></a>
		</div>
	</div>
</div>
<section class="container" id="how">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>3. How does the quotation module differ from the quote module?</h2>
			<p>The quotation module is very similar to the quote module, however there are some key differences:</p>
			<ul>
				<li>The quotation module includes a fullwidth background image</li>
				<li>You cannot add attributable quotes for non-Arup staff via the quotation module. If you need to attribute a quote to a non-Arup member of staff, you must use the quote module</li>
				<li>You cannot change the style of the actual quote within the quotation module</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="where">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>4. Where can you use the quotation module?</h2>
			<p>The module can be placed on the following types of pages:</p>
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
			<h2>5. Creating a quotation module</h2>
			<p>To add the module to your page, you must first create it in the Content Editor. As highlighted above, please note that this module is named 'Quotation' within the CMS.</p>
			<ul>
				<li>Right click on the 'Local content' folder and choose 'Insert &gt; Quotation' from the popup</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/quotation/create-quotation.jpg"></div>
			<div class="halfbleed__detail">
				Fig 1: Adding a quotation module to the 'Local content' folder
			</div>
			<ul>
				<li>Give your Quote a suitably descriptive name and click 'Ok'. NB - if you're adding multiple quotes, its useful to number these in the order you're going to add them</li>
			</ul>
			<h5><a id="adding-content" name="adding-content"></a>Adding content</h5>
			<p>Once you've created your module, you can begin adding content.</p>
			<p><i>Fields marked with * MUST be completed</i></p>
			<ul>
				<li><b>Quote*</b> - Add your quote text here. Click 'show editor' to begin adding your copy. Quotes should not include any formatting such as lists or links etc.</li>
				<li>
					<b>Image*</b> - Add your module's image. The image should be resized to 2000px wide by 1125px high. For more information on preparing images, please see the <a href="/getting-started/image-preparation/">image guide</a>.
				</li>
				<li><b>Mobile image</b> - You can add an alternative image for use on mobile devices - but the site will automatically resize your main image for use across all devices.</li>
				<li><b>CTA</b> - You can choose to add a specific link / CTA to your module such as 'Discover more about xxxx'. Click 'insert link' and choose the page you're linking to, and enter your link text. See the Sitecore link guide for more information on this</li>
				<li><b>Contact person*</b> - Choose the person you're quoting. Click 'edit' and from the resulting popup, browse the list of available profiles. NB - you can only display quotes from Arup staff within this module</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/quotation/completed-quotation.jpg"></div>
			<div class="halfbleed__detail">
				Fig 2: example of a completed 'quotation' - in this example, the quote displays to the left and a CTA has been added
			</div>
		</div>
	</div>
</section>
<section class="container" id="best-practice">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>Best practice</h2>
			<p>In this section, you will find guidance and advice on how to best utilise the 'Quote' module.</p>
			<p>It includes examples illustrating how to use and display the module.</p>
			<h5>Recommended use</h5>
			<ul class="featureList">
				<li class="tick">To highlight the viewpoint of Arup staff, clients or people who have worked with us</li>
				<li class="tick">Works best when the image relates to quote which has been overlaid, and is not obstructed with the addition of the quote box</li>
				<li>Works best when the selected quote is not too long, if the quote is very long this will stretch the image and be too consuming for the user to scroll through the page.</li>
			</ul>
			<p><b>Example 1 - correctly presented 'default' quotation</b></p>
			<p>In the example below, you'll see what a 'perfect' example of a quotation in default display mode looks like.</p>
			<p>It has:</p>
			<ul class="featureList">
				<li class="tick">Quote that relates to the image subject matter</li>
				<li class="tick">The image works well as a background image, main elements are not covered</li>
				<li class="tick">The quote is an ideal length and and does not consume an entire page (of a desktop monitor)</li>
				<li class="tick">The person being quoted has a profile containing job title and image</li>
			</ul>
		</div>
	</div>
</section>
<div class="float-box float-box--flip float-box--nopad">
	<div class="float-box__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/newsandevents/news/a/arup-launches-new-future-of-labs-report/crickinstitute_2000x1125.jpg?h=1125&amp;w=2000&amp;hash=3DD9142F87AD356F0A755C6708CB2A79A49D0939')"></div>
	<div class="float-box__pic float-box__pic--mobile" style="background-image: url('https://www.arup.com/-/media/arup/images/newsandevents/news/a/arup-launches-new-future-of-labs-report/crickinstitute_2000x1125.jpg?mw=720&amp;hash=A037B532ABAD0E75315514D1F12329463B52ECA7')"></div>
	<div class="float-box__inner">
		<div class="float-box__box">
			<blockquote class="quote quote--nopad">
				<span class="quote__symbol">&#8220;</span> <span class="p"></span>
				<p><span class="p">The idea of moving towards a more &lsquo;one size fits all&rsquo; approach, with greater emphasis on place and occupant experience, marks a significant shift in how science facilities are designed and reflects the changing nature of work.</span></p><span class="p">&#8221; <span class="people"><img alt="Jennifer Dimambro " src="https://www.arup.com/-/media/arup/images/people/j/jennifer_dimambro__bel_c__daniel_imade_arup.jpg?h=450&amp;w=450&amp;hash=B0C5A093A4FEFC6D82EC1380588F5E44E63C359A"> <span class="people__inner"><span class="bold">Jennifer Dimambro</span> <span>Director</span></span></span></span>
			</blockquote><a class="cta cta--black cta--small" href=""></a>
		</div>
	</div>
</div>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example 2 - poorly positioned quote</b></p>
			<p>In the example below, most formatting is correct, but the location of the quote is problematic</p>
			<p>It has:</p>
			<ul class="featureList">
				<li class="tick">Quote relates to the image subject matter</li>
				<li class="tick">Quote length is at an appropriate length</li>
				<li class="cross">Quote is covering the subject's face and obscuring the image</li>
			</ul>
		</div>
	</div>
</section>
<div class="float-box">
	<div class="float-box__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/our-firm/our-firm-new/values/2000x1000ove_arup_arup.jpg?h=1000&amp;w=2000&amp;hash=8DEF05B6079DF4543EFBD0F3907CC801AD9D800A')"></div>
	<div class="float-box__pic float-box__pic--mobile" style="background-image: url('https://www.arup.com/-/media/arup/images/our-firm/our-firm-new/values/2000x1000ove_arup_arup.jpg?mw=720&amp;hash=62A061809AF62A79ED917C52D7F434EA33CA96B1')"></div>
	<div class="float-box__inner">
		<div class="float-box__box">
			<blockquote class="quote quote--after-pad">
				<span class="quote__symbol">&#8220;</span> <span class="p">Humanitarianism implies a social conscience, a wish to do socially useful work and to join hands with others fighting for the same values&nbsp; &#8221; <span class="people"><img alt="Ove Arup" src="https://www.arup.com/-/media/arup/images/people/o/ove-arup.jpg?h=450&amp;w=450&amp;hash=B8B37A428D47D4933D41DDACA80881D81123DB3D"> <span class="people__inner"><span class="bold">Sir Ove Arup</span> <span>The Key Speech, 1970</span></span></span></span>
			</blockquote><a class="cta cta--black cta--small" href="/perspectives/publications/speeches-and-lectures/section/ove-arup-key-speech"><span class="cta__icon icon icon-oval" data-grunticon-embed=""></span> <span class="cta__text">Read The Key Speech</span></a>
		</div>
	</div>
</div>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example 3 - quote by external person</b></p>
			<p>In the example below, a profile for someone who does not work at Arup has been linked to the module</p>
			<p>It has:</p>
			<ul class="featureList">
				<li class="cross">Quote and image do not support each other in any way</li>
				<li class="cross">Profile is of someone who is not an Arup employee - only Arup employees should have profiles</li>
			</ul>
		</div>
	</div>
</section>
<div class="float-box float-box--flip float-box--nopad">
	<div class="float-box__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/our-firm/our-firm-new/values/2000x1000ove_arup_arup.jpg?h=1000&amp;w=2000&amp;hash=8DEF05B6079DF4543EFBD0F3907CC801AD9D800A')"></div>
	<div class="float-box__pic float-box__pic--mobile" style="background-image: url('https://www.arup.com/-/media/arup/images/our-firm/our-firm-new/values/2000x1000ove_arup_arup.jpg?mw=720&amp;hash=62A061809AF62A79ED917C52D7F434EA33CA96B1')"></div>
	<div class="float-box__inner">
		<div class="float-box__box">
			<blockquote class="quote quote--after-pad">
				<span class="quote__symbol">&#8220;</span> <span class="p">As someone who lives with adult-onset asthma, I know how bad air quality in the capital has become. I want to be the greenest mayor London has ever had - it is not acceptable that 10,000 people die in London every year because our air is so filthy. &#8221; <span class="people"><span class="people__inner"><span class="bold">Sadiq Khan</span> <span>Mayor of London</span></span></span></span>
			</blockquote><a class="cta cta--black cta--small" href="/perspectives/publications/speeches-and-lectures/section/ove-arup-key-speech"><span class="cta__icon icon icon-oval" data-grunticon-embed=""></span> <span class="cta__text">Read The Key Speech</span></a>
		</div>
	</div>
</div>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example 4 - quote is too long</b></p>
			<p>This example demonstrates the impact of using a long quote on the module</p>
			<p>It has:</p>
			<ul class="featureList">
				<li class="cross">Quote is dificult to read</li>
				<li class="cross">Length of quote is impacting the display of the module overall</li>
				<li class="cross">Length of quote is detracting from the module's purpose - to highlight key text in a quote style format</li>
			</ul>
		</div>
	</div>
</section>
<div class="float-box float-box--flip float-box--nopad">
	<div class="float-box__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/our-firm/our-firm-new/values/2000x1000ove_arup_arup.jpg?h=1000&amp;w=2000&amp;hash=8DEF05B6079DF4543EFBD0F3907CC801AD9D800A')"></div>
	<div class="float-box__pic float-box__pic--mobile" style="background-image: url('https://www.arup.com/-/media/arup/images/our-firm/our-firm-new/values/2000x1000ove_arup_arup.jpg?mw=720&amp;hash=62A061809AF62A79ED917C52D7F434EA33CA96B1')"></div>
	<div class="float-box__inner">
		<div class="float-box__box">
			<blockquote class="quote quote--after-pad">
				<span class="quote__symbol">&#8220;</span> <span class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique sagittis elit, nec posuere lectus. Curabitur eu elit pellentesque dolor lobortis porta sit amet eu risus.<br>
				<br>
				Etiam porttitor ipsum euismod, vehicula est non, ultricies quam. Duis varius sed ligula nec vestibulum.<br>
				<br>
				Quisque non mi quis dui vehicula tempus. Sed sed nisl id urna viverra ornare. Sed velit tellus, laoreet a fermentum et, viverra et ex. Curabitur leo nisi, scelerisque quis mattis laoreet, volutpat ac nibh. &#8221; <span class="people"><span class="people__inner"><span class="bold">Sadiq Khan</span> <span>Mayor of London</span></span></span></span>
			</blockquote><a class="cta cta--black cta--small" href="/perspectives/publications/speeches-and-lectures/section/ove-arup-key-speech"><span class="cta__icon icon icon-oval" data-grunticon-embed=""></span> <span class="cta__text">Read The Key Speech</span></a>
		</div>
	</div>
</div><!-- faq -->
<section class="container" id="faq">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>FAQ</h2>
			<ol class="header-list">
				<li>
					<a href="#faq-why">Why use this module over the 'normal' quote module?</a>
				</li>
				<li>
					<a href="#faq-staff">Can I quote non-Arup staff using this module?</a>
				</li>
				<li>
					<a href="#faq-picture">The profile I want to assign to the module does not have an image. What should I do?</a>
				</li>
				<li>
					<a href="#faq-image">What kind of image should I use in the module?</a>
				</li>
				<li>
					<a href="#faq-height">The full height of my image is not showing. Why?</a>
				</li>
			</ol>
			<h5><a id="faq-why" name="faq-why"></a>1. Why use this module over the 'normal' quote module?</h5>
			<p>A. The Quotation module represents another way to make key pieces of text stand out in your article. It is also reliant on your having an image of sufficient quality to show off. Ultimately which module you use is up to you, but the Quote module offers more flexibility and options for displaying quotes - where as the Quotation module requires more thought before it s used.</p>
			<p>Ultimately the style of quote you use is decision you need to make when building your page.</p>
			<h5><a id="faq-staff" name="faq-staff"></a>2. Can I quote non-Arup staff using this module?</h5>
			<p>A. Not if you need to be able to attribute the quote to an individual. Attribution (providing name / job title etc) requires that the person have a profile on arup.com - and only Arup staff should ever have profiles.</p>
			<p>If you just wish to highlight some important text from your article, and do not need to attribute it to an individual then you can use the quote without selecting a profile.</p>
			<h5><a id="faq-picture" name="faq-picture"></a>3. The profile I want to assign to the module does not have an image. What should I do?</h5>
			<p>A. Where the profile lacks an image, you'll see a missing space for it on the module. This is not visually pleasing and you should seek to obtain a picture of the person you want to quote and add this to their profile. See the profile guide for more information on editing profiles.</p>
			<h5><a id="faq-image" name="faq-image"></a>4. What kind of image should I use in the module?</h5>
			<p>A. You image should be visually striking and must relate to your overall narrative - and ideally the text that your adding as a quote. Please bear in mind that overlaying the quote on the image will obscure parts of the image. You can switch between 'left' and 'right' alignment for your text if necessary - but do not use a picture that will result in key elements being obscured by your text. Instead use the image module (link) to show off your image.</p>
			<h5><a id="faq-height" name="faq-height"></a>5. The full height of my image is not showing. Why?</h5>
			<p>A. A. The module is styled so that it has a minimum height. This minimum height is less than the advised height you should prepare your image to (this is deliberate). This can result in the top and bottom of your image being cropped off when displayed on the page.</p>
			<p>After a minimum height, your image will 'grow' depending on the length of your quote.</p>
		</div>
	</div>
</section><!-- end image -->
