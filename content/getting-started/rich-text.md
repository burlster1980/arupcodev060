f---
title: "Working with rich text"
date: 2019-02-17T11:32:53Z
lastmod: 2019-04-01
draft: false
type: Getting started
weight: "2"
menu:
  main:
    title: "Working with Rich text"
    parent: "getting-started"
    weight: "-700"
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
					<a href="#what">What is the Rich Text editor?</a>
				</li>
				<li>
					<a href="#fields">Where are rich text editors found?</a>
					<ul class="sub-header-list">
						<li>
							<a href="#pages">Pages</a>
						</li>
						<li>
							<a href="#modules">Modules</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#using">Using the Rich Text Editor</a>
					<ul class="sub-header-list">
						<li>
							<a href="#formatting">Formatting</a>
						</li>
						<li>
							<a href="#links">Adding links</a>
						</li>
						<li>
							<a href="#images">Images</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#how">Using the editor</a>
				</li>
			</ol>
		</div>
		<div class="menu_section two">
			<ol class="header-list second" start="4">
				<li>
					<a href="#faq">FAQ</a>
				</li>
			</ol>
		</div>
	</div>
</section>
<section class="container" id="what">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>1. What is the Rich Text editor?</h2>
			<p></p>
			<p>Rich text editors are a fundamental component of most Content Management Systems, allowing you to add elements such as text, lists, links and images to your content.</p>
			<p>Arup.com and Sitecore make extensive use of Rich Text elements to add content into your pages. This guide details the two specific ways that rich text is utilised within Sitecore.</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/rich-text/rich-text-example.jpg"></div>
			<div class="halfbleed__detail">
				Fig 1: An example of a the Sitecore Rich Text Editor
			</div>
		</div>
	</div>
</section>
<section class="container" id="how">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. Where are rich text editors found?</h2>
			<p></p>
			<p>You will find Rich Text fields across the Sitecore platform. They will be found either in pages when creating them, or within individual modules.</p>
			<h5><a id="pages" name="pages"></a>Pages</h5>
			<p>When creating some page types, you will be able to enter 'rich text' content directly into the fields that make up the item. The following page types utilise rich text fields:</p>
			<ul>
				<li>Industry</li>
				<li>Service</li>
				<li>
					<a href="/creating-pages/creating-projects/">Projects</a>
				</li>
				<li>
					<a href="/creating-pages/creating-perspectives/">Perspectives</a>
				</li>
				<li>
					<a href="/creating-pages/creating-news/">News</a>
				</li>
				<li>Events</li>
				<li>
					<a href="/creating-pages/creating-profiles/">Profiles</a>
				</li>
				<li>
					<a href="/creating-pages/creating-offices/">Countries / offices</a>
				</li>
			</ul>
			<h5><a id="modules" name="modules">Modules</a></h5>
			<p>A number of the individual modules used on arup.com also require the use of rich text editors. These include:</p>
			<ul>
				<li>
					<a href="/creating-modules/images/">Image</a>
				</li>
				<li>Rich text</li>
				<li>
					<a href="/creating-modules/text-image-split/">Text image split</a>
				</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="using">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>3. Using the Rich Text Editor</h2>
			<p>You can tell when a field requires rich text input due to the presence of multiple options for the field - and an inability to edit copy by simply clicking on the field. The screenshot below represents an example of a rich text field from a 'country' page.</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/rich-text/rich-text-field.jpg"></div>
			<div class="halfbleed__detail">
				Fig 2: Example of a 'rich text' field on a page type. 'Show editor' option is the indicator that this is a rich text field
			</div>
			<p>To add content within the Rich Text Editor, please follow the steps below:</p>
			<ul>
				<li>When viewing your page or module in the Content Editor, click 'Show Editor' - this will launch the editor in a new popup window</li>
				<li>Enter you copy either by:
					<ol>
						<li>Manually entering it into editor</li>
						<li>Cut and paste your copy from an alternative source such as Word*</li>
					</ol>
				</li>
			</ul>
			<p><b>*You are STRONGLY advised not to paste content directly into the CMS from any Microsoft product including Word and Outlook. This is due to the potential for these programmes to add additional formatting to your content which will break the site's display. You should instead copy all your content into Notepad (installed on all Windows machines) and then copy and paste from Notepad into the Rich Text Editor.</b></p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5><a id="formatting" name="formatting"></a>Formatting content</h5>
			<p>The Rich Text Editor gives you some control over how your content is formatted. There are a number of different options you <i>could</i> use, but you should restrict any formatting changes to the options discussed below:</p>
			<p><b>Formatting paragraphs</b></p>
			<p>The Rich Text Editor will automatically apply paragraph tags (&lt; p &gt;) to your copy every time you hit 'return' when using the editor. This will result in your copy being correctly spaced.</p>
			<p><b>Making text bold</b></p>
			<p>To make your text bold, highlight the word(s) you want to make bold by dragging your mouse over them and choose the 'B' icon from the editor.</p>
			<p><b>Making text italic</b></p>
			<p></p>
			<p>To make your text italic, highlight the word(s) you want to make italic by dragging your mouse over them and choose the 'I' icon from the editor. <b>NB - never make text both bold and italic - this style is exclusively reserved for links on arup.com</b></p>
			<p><b>Adding bullet lists</b></p>
			<p>You should always use the Rich Text editor to correctly format lists. Please take the steps below:</p>
			<ul>
				<li>Remove any bullets / icons imported with your original copy</li>
				<li>Ensure each line of your list is on a separate line in the editor window</li>
				<li>Highlight each line of your list by dragging your course across them and then select the icon composed of 'three dots and three lines'</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Adding headers such as H2 or H3</b></p>
			<p>To correctly format headings in your copy, highlight the text and from the second drop down option (default value of 'Normal') choose the appropriate heading style. Please follow the guidance below if you do this:</p>
			<ul>
				<li>Never use the H1 option - content editors must NOT set this value</li>
				<li>Your first level headers should be styled as H2</li>
				<li>Any headings which sit under a H2 heading should be styled as an H3 and so on</li>
			</ul>
			<p><b>NB - please note that due to the use of global styling on arup.com, the above approach may not always display on the most appropriate fashion. If so, please alter the heading style you apply.</b></p>
			<p>Whilst the editor contains a range of additional options, other than those discussed below, you should not attempt to use these without talking to GMC Online first.</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/rich-text/rich-text-options.jpg"></div>
			<div class="halfbleed__detail">
				Fig 3: Some of the key options you can utilise in the Rich Text Editor are highlighted above
			</div>
			<h5><a id="links" name="links"></a>Adding links</h5>
			<p>You can add links to your content via the Rich Text Editor.</p>
			<p></p>
			<p>A full guide on <a href="links.html">adding links in Sitecore</a> is available.</p>
			<h5><a id="images" name="images"></a>Adding images</h5>
			<p>Whilst it is possible to add images via the Rich Text Editor, you are strongly advised against doing this. Specific modules are available for incorporating images - ensuring they are styled correctly and work across all devices.</p>
			<p>A full guide on the <a href="/creating-modules/images">Image Module</a> is available.</p>
		</div>
	</div>
</section>
<section class="container" id="faq">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>FAQ</h2>
			<ol class="header-list">
				<li>
					<a href="#faq-why">My text formatting is incorrect. Why?</a>
				</li>
				<li>
					<a href="#faq-header">Why should I use specific header styles?</a>
				</li>
				<li>
					<a href="#faq-images">Why shouldn't I add images in the Rich Text Editor?</a>
				</li>
			</ol>
			<h5><a id="faq-why" name="faq-why"></a>1. My text formatting is incorrect. Why?</h5>
			<p>A. There are a number of reasons for why your formatting may not appear correctly. These include:</p>
			<ul>
				<li>Pasting content directly from Word - this may add additional HTML into the editor which impacts how content is displayed. To prevent this, try to always copy content into Notepad (or another text editor) first, then copy from Notepad into the Rich Text Editor</li>
				<li>Incorrect use of paragraph tags - by default, Sitecore will wrap content in paragraph tags each time you hit 'return' or 'enter' when using the Rich Text Editor. If you 'double space' as you may when using Word, you'll likely see large gaps between your paragraphs. Simply delete one of the additional lines you've added to rectify this</li>
				<li>Additional paragraph tags or line breaks sometimes get added at the end of content - place your cursor at the very end of your content and ensure that there are no lines below your final word. If there are, simply delete these</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5><a id="faq-header" name="faq-header"></a>2. Why should I use specific header styles?</h5>
			<p>A. Headings in your content are a good thing. They help to break up content and make it easier for users to find what they're looking for. Remember, web browsers' attention spans are notoriously short. Providing headings throughout your content helps indicate clearly what people will find.</p>
			<p>Using the correct heading format is important chiefly from an SEO perspective. Google and other search engines look for specific signals within your content when they index it. One of these is the structure of the page's underlying HTML. Ensuring good structure boosts the chances of Google et al viewing the page favourably and therefore being returned higher up the search results.</p>
			<p></p>
			<h5><a id="faq-images" name="faq-images"></a>3. Why shouldn't I add images in the Rich Text Editor?</h5>
			<p>arup.com is designed to be responsive - i.e. to work on any device. Achieving this is a complex process, particularly when it comes to imagery. To ensure images work correctly across all devices, specific modules have been designed for incorporating imagery into your work. These are coded to allow images to resize and reshape depending on the screen size of the user.</p>
			<p>If you add imagery via the Editor, this code will not be in place. If you viewed your content on a mobile device, you'd likely see a full size image 'breaking' the display and disappearing off the edge of your screen. This is a bad user experience and reflects badly on the Arup digital brand.</p>
		</div>
	</div>
</section>