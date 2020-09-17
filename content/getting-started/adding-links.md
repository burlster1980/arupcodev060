---
title: "Adding links"
date: 2019-02-17T11:34:53Z
lastmod: 2020-08-18
draft: false
type: Getting started
weight: "3"
menu:
  main:
    title: "Adding links"
    parent: "getting-started"
    weight: "-500"
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
					<a href="#overview">General links overview</a>
				</li>
				<li>
					<a href="#links-rich-text">Adding links in Rich Text fields</a>
					<ul class="sub-header-list">
						<li>
							<a href="#internal">Internal page links</a>
						</li>
						<li>
							<a href="#external">External page links</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#links-forms">Adding links to form fields</a>
				</li>
			</ol>
		</div>
		<div class="menu_section two">
			<ol class="header-list" start="4">
				<li>
					<a href="#faq">FAQ</a>
				</li>
			</ol>
		</div>
	</div>
</section>
<section class="container" id="overview">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>1. General links overview</h2>
			<p>Adding links to your content is vital. Sitecore offers a number of different ways to add links. This is a simple process, but each method is slightly different. This guide will review each method and provide information on best practice when it comes to linking.</p>
		</div>
	</div>
</section>
<section class="container" id="links-rich-text">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. Adding links in Rich Text fields</h2>
			<p>Adding links within Rich Text fields is relatively simple and is very smiliar to any other CMS you may have come across. The key thing to be aware of is that Sitecore treats links to 'internal' and 'external' pages separately.</p>
			<h3><a id="internal" name="internal"></a>Adding links to internal pages - other pages on arup.com</h3>
			<p>If you want to add a link to another page on arup.com, you should follow the instructions below:</p>
			<ul>
				<li>Locate the text you wish to add a link to - click in front of the first word, and then, holding down your mouse button, drag your cursor across all the words you wish to include in the link</li>
				<li>Click on the icon highlighted in the image below - and a popup will open</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/links/adding-link-to-sitecore-page.jpg"></div>
			<div class="halfbleed__detail">
				Fig 1: Highlight the text you wish to add a link to, then click the 'Insert Sitecore link' icon as highlighted
			</div>
			<ul>
				<li>Once the popup appears, you should use the content tree to browse to the page you wish to link to</li>
				<li>Click on the page you wish to link to, and then click 'Insert'</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/links/select-link.jpg"></div>
			<div class="halfbleed__detail">
				Fig 2: Browse the content tree and select the page you wish to link to
			</div>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h3><a id="external" name="external"></a>Adding links to external pages - pages not on arup.com</h3>
			<p>If you wish to link to a page that doesn't reside on arup.com then you will need to follow the steps below:</p>
			<ul>
				<li>Locate the text you wish to add a link to - click in front of the first word, and then, holding down your mouse button, drag your cursor across all the words you wish to include in the link</li>
				<li>Click on the icon highlighted in the image below - and a popup will open</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/links/adding-external-link.jpg"></div>
			<div class="halfbleed__detail">
				Fig 3: Highlight the text you wish to add a link to, then click the 'Hyperlink Manager' icon as highlighted
			</div>
			<ul>
				<li>Once the popup appears, drop your link into the 'URL' field. Be sure to include the 'https://' details in the field</li>
				<li>Select 'New window' from the 'Target' drop down - this is important as it will force the browser to open a new tab when a user clicks on it</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/links/paste-external-link.jpg"></div>
			<div class="halfbleed__detail">
				Fig 4: Adding a link and ensuring that it opens in a new tab
			</div>
		</div>
	</div>
</section>
<section class="container" id="links-forms">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>3. Adding links via forms</h2>
			<p>Adding links to 'form' fields is slightly different to adding them directly to rich text content.</p>
			<p>What do we mean by form fields? In essence a form field is where you see a dedicated field (on either a page type i.e. Perspective or a module) which is used for adding links. The process is very similar, but requires a key additional step.</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/links/form-link.jpg"></div>
			<div class="halfbleed__detail">
				Fig 5: An example of a form link, taken from a 'Text image split' module
			</div>
			<p>To insert a link to a page on Sitecore:</p>
			<ul>
				<li>Click on 'Insert link'</li>
				<li>From the resulting popup, browse the content tree for the page you wish to link to and click on that page</li>
				<li>In the 'Link Description' field, enter the text that will form your link text or call to action for example 'Discover our values'</li>
				<li>Click on 'Ok' and the popup will disappear. You will then see your link within the field</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/links/internal-link-field.jpg"></div>
			<div class="halfbleed__detail">
				Fig 6: Adding a link to form field for internal pages
			</div>
			<p>To insert a link to a page that is external of arup.com:</p>
			<ul>
				<li>Click on 'Insert external link'</li>
				<li>From the resulting popup, enter the link text in the field 'Link description'</li>
				<li>Enter the link URL to the 'URL' field - including the 'https://' element of the link</li>
				<li>In the 'Target window' field, select 'new browser' from the drop down list</li>
				<li>Click on 'Insert' to complete the link</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="faq">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>FAQ</h2>
			<ol class="header-list">
				<li>
					<a href="#faq-why">Why should I add links?</a>
				</li>
				<li>
					<a href="#faq-text">Why should I not use link text such as 'click here' or 'find out more'?</a>
				</li>
				<li>
					<a href="#faq-tab">Why must I ensure links to external sites open in a new tab?</a>
				</li>
			</ol>
			<h3><a id="faq-move" name="faq-move">1. Why should I add links?</a></h3>
			<p>A. Adding links to your content is vital. Not only does it allow you to highlight other pages which may relate to your content, but it also allows you to draw attention to things which may be of interest to the reader. In particular, you can signpost important information about the services we offer by ensuring that you link to relevant service and industry pages, or encourage people to find out more about Arup in your location.</p>
			<p>Adding links also has considerable SEO value. Search engine spiders will use links to explore a site. By ensuring that content contains links to relevent pages you help guide these spiders around arup.com and ensure that they discover everything on offer. Additionally, the more links that point to a page, the more Google et al will consider the page to be 'authoritative'. This means that search engines will see the page as being important and of high quality, and it will more likely appear towards the top of any search rankings.</p>
			<h3><a id="faq-text" name="faq-text"></a>2. Why should I not use link text such as 'click here' or 'find out more'?</h3>
			<p>The text you use for links is important for 2 key reasons:</p>
			<ol>
				<li>From a usability perspective, using words like 'find out more' or 'click here' offers the user very little information about WHAT they're going to find. For users with poor eyesight and reliant on screen readers to explore the website this can be very frustrating as these phrases do not contextualise the page they're linking to.</li>
				<li>From an SEO perspective, this contextualisation is also vital. By telling search spiders what is on a page that you're linking to, you're helping them to learn about the site and also ensure that content is seen for what it is</li>
			</ol>
			<p>Bearing this in mind, you can easily tweak these phrases to ensure the link is descriptive and helpful. For example, changing 'Click here' to 'Click here to discover our values', you have immediately told the user what they will find. Alternatively 'Find out more about our values' again quickly tells the user exactly what the link is going to help them understand.</p>
			<h5><a id="faq-tab" name="faq-tab"></a>Why must I ensure links to external sites open in a new tab?</h5>
			<p>This is a governance decision made by GMC. For consistency, it is important that users understand what is going to happen when a link is clicked. Ensuring that you follow this policy is important in our efforts to give users a consistent experience.</p>
		</div>
	</div>
</section>