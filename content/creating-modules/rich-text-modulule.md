---
title: "Creating a rich text module"
date: 2019-02-17T09:07:50Z
lastmod: 2019-02-17
draft: false
type: Creating modules
weight: "9"
menu:
  main:
    title: "Rich text module"
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
					<a href="#guide">Rich Text module guide</a>
				</li>
				<li>
					<a href="#what-is">What is the Rich Text module?</a>
				</li>
				<li>
					<a href="#where">Where can you use the module?</a>
				</li>
				<li>
					<a href="#creating">Creating the Rich Text module</a>
					<ul class="sub-header-list">
						<li>
							<a href="#adding-content">Adding content</a>
						</li>
						<li>
							<a href="#guidance">Rich text - guidance</a>
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
			<h2>1. The Rich Text module</h2>
			<p>This guide provides details on how to successfully utilise the Rich text module in Sitecore. This module is the standard method for adding written content to your page.</p>
		</div>
	</div>
</section>
<section class="container" id="what-is">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. What is the Rich Text module?</h2>
			<p>The module allows you to written content within your page. It allows for styling content in list format, adding headings and adding links to other pages to your content.</p>
			<p>The module has two potential layouts: :</p>
			<h5>Default layout - by default content will be displayed in a central column</h5>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p class="intro intro--bold">Assessing multiple assets spanning seven countries</p>
			<p>Equis’ 11GW portfolio included 139 solar and wind power generation assets in operation, construction and development. The renewable energy assets were spread across seven countries in the Asia Pacific region, with 1GW of operating assets and 1GW under construction. The portfolio across Japan, Philippines, India, Indonesia, Australia, Taiwan and Thailand also included a substantial development pipeline.</p>
			<h5>Text split - in this example a heading is placed to the left, whilst 'body' copy is aligned to the right</h5>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="content-split reveal">
		<h4>Assessing multiple assets spanning seven countries</h4>
		<p>Equis’ 11GW portfolio included 139 solar and wind power generation assets in operation, construction and development. The renewable energy assets were spread across seven countries in the Asia Pacific region, with 1GW of operating assets and 1GW under construction. The portfolio across Japan, Philippines, India, Indonesia, Australia, Taiwan and Thailand also included a substantial development pipeline.</p>
	</div>
</section>
<section class="container" id="where">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>3. Where can you use the module?</h2>
			<p>The module can be placed on the following types of pages:</p>
			<ul>
				<li>Events</li>
				<li>News items</li>
				<li>Perspectives</li>
				<li>Projects</li>
				<li>Service pages</li>
				<li>Industry pages</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>4. Creating the Rich Text module</h2>
			<p>To add the module to your page, you must first create it in the Content Editor.</p>
			<ul>
				<li>Right click on the 'Local content' folder and choose '<b>Insert &gt; Rich text</b>' from the popup</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/rich-text-module/creating-rich-text.jpg"></div>
			<div class="halfbleed__detail">
				Fig 1: Adding a Rich Text module to the 'Local content' folder
			</div>
			<ul>
				<li>Give your module a suitably descriptive name and click 'Ok' - <b>NB its useful to label this module with an identifier such as 'Rich text 1' or a descriptor of what the content is such as 'Introduction'</b></li>
			</ul>
			<h5><a id="adding-content" name="adding-content"></a>Adding content</h5>
			<p>Once you've created your module, you can begin adding content.</p>
			<p><i>Fields marked with * MUST be completed</i></p>
			<ul>
				<li>Heading - You can add a heading for your copy to this field. If you are intending to use the 'Text split' option then you MUST use this field. If not, you should consider putting your heading in the 'Body' field as this gives greater scope for styling the heading - particularly using the header format</li>
				<li>Body* - Add your main copy into this field. Click 'Show editor' to begin adding your content. <b>NB - dos and don'ts of the module are detailed below and in the <a href="rich-text.html">Rich text guidance</a></b></li>
				<li>Split - select this option if you want to display the text in the split format (heading to the left and body content to the right)</li>
				<li>Anchor ID - This field can be used for creating anchor links to text. You are advised to contact the Online team before using this field</li>
			</ul>
			<h5><a id="guidance" name="guidance"></a>Rich text - guidance</h5>
			<p>When using the Rich text module, you should bear the following in mind:</p>
			<ul>
				<li>Do not cut and paste directly from Word or Outlook into the module - this will likely result in formatting errors. Instead, paste to Notepad first, and then copy paste from Notepad into Sitecore. This will prevent formatting errors</li>
				<li>Sitecore will automatically add paragraph formatting to your content each time you hit 'return' on your keyboard. This formatting is required to ensure that text appears correctly on your page. If you're only entering a single paragraph, hit return at the end of it anyway to apply the formatting</li>
				<li>Don't try and add imagery via the module - it won't display correctly and you should use the dedicated 'Image' module</li>
				<li>If you want to create a 'bullet' list, enter your copy, separating each list item by hitting return. Then highlight each item (drag your cursor across each item) and then select the 'list' icon from menu (3 bullets and 3 lines)</li>
				<li>The only font stylings you should apply to content include:
					<ul>
						<li>Bold</li>
						<li>Italic</li>
						<li>Heading (H2 / H3 / H4 / H5 etc)</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="best-practice">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>3. Best practice</h2>
			<h5>Recommended use</h5>
			<ul class="featureList">
				<li class="tick">Should be readable and in a consistent font size (Normal) with no odd extra characters</li>
				<li class="tick">Links: Must be highlighted in bold & italics, so it is clear to the user the highlight text is a link. This should happen automatically but worth checking.</li>
				<li class="tick">Headings: Should be displayed in header 2, or header 3 format, within rich text.</li>
				<li class="tick">When pasting text from other sources, right click and select 'paste as plain text' in to the rich text editor, or use notepad to remove any bugs</li>
			</ul>
			<p><b>NB - to better highlight these examples, each example has a grey background. This is done solely for demonstration purposes.</b></p>
			<h5>Example 1 - correctly presented text</h5>
			<ul class="featureList">
				<li class="tick">Heading listed in h2</li>
				<li class="tick">Link bold and italics</li>
				<li class="tick">Paragraphs set to 'normal' and all a consistent size</li>
				<li class="tick">No odd characters interrupting the text</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="" style="background-color:#f9f9f9;">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>Fire is a disaster risk</h2>
			<p>Recovery from a fire is a long and difficult process for anyone, and it is exacerbated in informal settlements where insecure tenure, financial instability, and a lack of insurance are common. The impacts from a fire often exceed the community’s ability to cope. On this basis, fire in informal settlements is a ‘disaster’ according to the definition of the United Nations International Strategy for Disaster Reduction. Despite this, informal settlement fires are often not included in disaster management policy and practice, and fire resilience isn’t enough of a priority.</p>
			<h2>Every fire reflects local issues</h2>
			<p>Every informal settlement is unique. A slum in India that has been around for decades faces different challenges than a camp housing refugees displaced from a Syrian warzone. Fire safety considerations for informal settlements must be holistic and take account of the wide range of competing risks and challenges. By first understanding the local context, investments in fire risk reduction can take advantage of existing resources and the capacities of the communities themselves.</p>
			<p>The framework places understanding local context at its centre, emphasising its relevance to every area of fire risk reduction. This keeps the framework relevant to different informal settlements around the world.</p>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5>Example 2 - incorrectly formatted</h5>
			<ul class="featureList">
				<li class="cross">The first paragraph is smaller - to make sure the font sizing is correct, the rich text should have paragraph tags within the HTML section of the rich text editor.</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="" style="background-color:#f9f9f9;">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>Fire is a disaster risk</h2>Recovery from a fire is a long and difficult process for anyone, and it is exacerbated in informal settlements where insecure tenure, financial instability, and a lack of insurance are common. The impacts from a fire often exceed the community’s ability to cope. On this basis, fire in informal settlements is a ‘disaster’ according to the definition of the United Nations International Strategy for Disaster Reduction. Despite this, informal settlement fires are often not included in disaster management policy and practice, and fire resilience isn’t enough of a priority.
			<h2>Every fire reflects local issues</h2>
			<p>Every informal settlement is unique. A slum in India that has been around for decades faces different challenges than a camp housing refugees displaced from a Syrian warzone. Fire safety considerations for informal settlements must be holistic and take account of the wide range of competing risks and challenges. By first understanding the local context, investments in fire risk reduction can take advantage of existing resources and the capacities of the communities themselves.</p>
			<p>The framework places understanding local context at its centre, emphasising its relevance to every area of fire risk reduction. This keeps the framework relevant to different informal settlements around the world.</p>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5>Example 3 - correct 'rich text split'</h5>
			<ul class="featureList">
				<li class="tick">Works well for statement texts, or awards</li>
				<li class="tick">Visually at its best when the text on both left and right are balanced, and short.</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="shaping" style="background-color:#f9f9f9;">
	<div class="content-split reveal">
		<h4>Shaping the connected world</h4>
		<p>As digital leaders, we partner with our clients to transform how people engage with the built environment through technology. From masterplanning cities, to creating a renewable future, we bring seemingly impossible ideas to life.</p>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5>Example 4 - incorrect 'rich text split'</h5>
			<ul class="featureList">
				<li class="cross">The statement on the left-hand side is too long. This would be better expressed in standard rich text.</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="shaping" style="background-color:#f9f9f9;">
	<div class="content-split reveal">
		<h4>The project is the first major transportation design/build in New York State</h4>
		<p>The options that were under consideration for the future of the Thruway throughout the project included rehabilitating the current bridge, replacing it either iwth or without new commuter rail and/or bus rapit transit and creating new tunnels under the Hudson River.</p>
	</div>
</section>
<section class="container" id="faq">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>4. FAQ</h2>
			<p>For questions and answers on using the module, please consult the <a href="/getting-started/rich-text/">Rich text guide</a>.</p>
		</div>
	</div>
</section>
