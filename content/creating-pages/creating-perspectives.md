---
title: "Creating a perspective"
date: 2019-02-16T17:42:27Z
lastmod: 2019-02-17
draft: false
type: Creating new pages
weight: "3"
menu:
  main:
    title: "Creating perspectives"
    parent: "creating-pages"
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
					<a href="#where">Where are perspectives?</a>
					<ul class="sub-header-list">
						<li>
							<a href="#website">Perspectives on the website</a>
						</li>
						<li>
							<a href="#cms">Perspectives in the CMS</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#creating">Creating a perspective item</a>
					<ul class="sub-header-list">
						<li>
							<a href="#adding">Adding content to your perspective item</a>
						</li>
						<li>
							<a href="#completing">Completing your perspective item</a>
						</li>
						<li>
							<a href="#modules">Adding modules</a>
						</li>
						<li>
							<a href="#language">Adding alternative language versions</a>
						</li>
						<li>
							<a href="#workflow">Workflow</a>
						</li>
					</ul>
				</li>
			</ol>
		</div>
		<div class="menu_section two">
			<ol class="header-list second" start="3">
				<li>
					<a href="#best-practice">Best practice</a>
				</li>
			</ol>
		</div>
	</div>
</section>
<section class="container" id="where">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>1. Where are perspectives?</h2>
			<h5>Perspectives on the website</h5>
			<p>When viewing the website, perspectives are found under the URL https://www.arup.com/perspectives/name-of-perspective-article Users are able to browse perspectives via a number of pre-defined themes including <a href="https://www.arup.com/perspectives/cities" target="_blank">Cities</a>, <a href="https://www.arup.com/perspectives/energy" target="_blank">Energy</a>, <a href="https://www.arup.com/perspectives/transport" target="_blank">Transport</a> and <a href="https://www.arup.com/perspectives/water" target="_blank">Water</a>.</p>
			<h5>Perspectives within the CMS</h5>
			<p></p>
			<p>Perspective items are 'bucketable' and stored in Sitecore 'Buckets'. Buckets are essentially Sitecore terminology for folders. They allow the CMS to store content in a folder structure, making things easier to find. A bucket's name does not appear in the URL of a page.</p>
			<p>Perspective articles are stored in the following way:</p>
			<p><b>Perspectives &gt; First letter of perspective name &gt; name of article</b></p>
			<p>This means that when you create a new Perspective item, it will be stored in 'letter' bucket that corresponds to the name you assign it. For example, if you created a perspective called 'My first perspective', it would be found as follows</p>
			<p><b>Perspectives &gt; M &gt; My first perspective</b></p>
			<p></p>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. Creating a perspective item</h2>
			<p>To create a perspective article, you will need to:</p>
			<ul>
				<li>" Expand the item 'Home' and browse to 'Perspectives'</li>
				<li>Right click on 'Perspectives' and choose '<b>Insert &gt; Perspective</b>'</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/perspectives/creating-perspective.jpg"></div>
			<div class="halfbleed__detail">
				Fig 1: Creating a new perspective item. You need to right click on the 'Perspectives' node, and choose 'Insert &gt; Perspective'
			</div>
			<ul>
				<li>Enter a name for your perspective item that suitably describes the content (NB - this name will form the URL of the article for example if you called your item 'My perspective item' the url would be arup.com/perspective/my-project-item) and click OK</li>
				<li>The screen will then reload, and you've successfully created your perspective item</li>
			</ul>
			<h5><a id="adding" name="adding"></a>Adding content to a perspective item</h5>
			<p>Perspectives contain a mixture of 'form' content and modules. Essentially, the key data about your perspective item will be added to the Perspective item you've just created, whilst the bulk of the actual article content will be added via modules. This guide details the former - describing what fields you need to complete and what they do.</p>
			<p>Each of the headings below represents one of the expandable panels of the perspective document. The fields relevant to each are detailed.</p>
			<p>For the purposes of this example, the text added will relate to a perspective about the Future of Digital Cities.</p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Article Content</b></p>
			<p><b>*</b>fields marked with an asterix are required and must be completed</p>
			<ul>
				<li><b>Site search description*</b> - Please add a maximum of one to two sentences that give an overview of your Perspective content. This text will be displayed within the search results for your perspective. For example 'Discover how Arup's knowledge is helping to shape the use of digital technologies in our cities'</li>
				<li><b>Name*</b> - This is the name of your perspective - for example 'Future of digital cities'. By default, it will contain the text you added during the creation of your perspective. You can edit this text without fear of changing the URL of your perspective of changing the physical name of the perspective within the CMS.</li>
				<li><b>Title*</b> - The title for perspectives is displayed in the main header banner. You will generally duplicate the content from the 'Name' field above, but you can choose to add something more descriptive here if you wish for example 'Future of digital cities: How computers are changing the way we live'</li>
				<li><b>Comma separated search terms</b> - Enter any specific key words, or combination of key words that relate to your perspective. Words added here will influence the search results provided on arup.com (Note - this does not include suggestive search). You should think carefully about the words you enter, and limit entries to be between 3 and 5 words or key phrases. NB - do not use common words or phrases such as 'the' or 'perspective'</li>
				<li><b>Video</b> - Please do not use this field without consulting with GMC online first. Video used in this way must conform to various standards including an absence of sound and the ability to 'loop'</li>
				<li><b>Summary shown in listings*</b> - Text entered here is used for displaying 'related perspectives'. You should include nothing more than one to two brief sentences that summarise the content of your article</li>
				<li>
					<b>Image*</b> - Please enter a suitable image for your perspective. The image should be high quality and should be at least 2000px wide by 1125px BEFORE you carry out any resizing of the image. See the <a href="/getting-started/image-preparation/">image guide for more information</a> on this if necessary
				</li>
				<li><b>Date*</b> - enter a publication date for your perspective in this field. This will determine the order that your perspective displays on the relevant 'hub' page i.e. 'Cities'</li>
			</ul>
			<p>The screenshot below indicates where each of the above fields are shown on a published perspective item.</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/perspectives/initial-perspective.jpg"></div>
			<div class="halfbleed__detail">
				Fig 2: details of the Perspective fields contained within 'Article content' section and where they display
			</div>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Campaign</b></p>
			<p>You can ignore this field. It is primarily for categorising and reporting on global campaigns - no data will be revealed on your webpage.</p>
			<p>If you are creating a Perspective campaign and wish to make use of this, please contact <a href="mailto:steve.burleigh@arup.com">steve.burleigh@arup.com</a> in the first instance.</p>
			<p><b>Content</b></p>
			<p>You will need to select the 'themes' that apply to your perspective. The options you choose here determine under which perspective themes your article will appear</p>
			<ul>
				<li><b>Themes</b>* - please double click on the theme(s) that apply to your article. For example, double clicking 'cities' will select the value - it will then appear in the righthand column</li>
			</ul>
			<p>You can select multiple themes - depending on what applies to your content. For example, our example 'The future of digital cities' would relate to 'Cities' and 'Digital'. This means that your article will appear under both the Cities and Digital theme.</p>
			<p><b>NB - to unselect an item, simply double click it in the righthand column and it will be removed.</b></p>
			<p><b>Recommend content</b></p>
			<p>You can ignore this field</p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Location</b></p>
			<p>Location is important for perspectives for two reasons:</p>
			<ol>
				<li>Personalising content by user location</li>
				<li>Filtering analytics reports</li>
			</ol>
			<p>Therefore it is important that you complete the country field below in particular.</p>
			<p><b>*</b>fields marked with an asterix are required and must be completed</p>
			<ul>
				<li>Location - you do not need to complete this field</li>
				<li><b>Country*</b> - please select the country you are in</li>
			</ul>
			<p><b>Related articles</b></p>
			<p>You can select a range of content related to your perspective. This includes:</p>
			<ul>
				<li>Projects</li>
				<li>Perspectives</li>
				<li>Industries</li>
				<li>Services</li>
			</ul>
			<p>Wherever possible, you should look to associate related content to your perspective - as this helps to retain users on arup.com.</p>
			<p>Fields marked with <b>*</b> MUST be completed</p>
			<p><b>Related projects*</b></p>
			<p>To select related projects:</p>
			<ul>
				<li>Click the 'Edit' button - this will launch a popup window</li>
				<li>Browse the content tree (in the left hand column) and locate the first article you wish to select</li>
				<li>Double click the article - its name will then appear in the right hand column</li>
				<li>Repeat this step 2 more times</li>
			</ul>
			<p>You should seek to always select 3 projects.</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/projects/select-related-content.jpg"></div>
			<div class="halfbleed__detail">
				Fig 3: selecting related content step 1 - click 'Edit' to select articles
			</div>
			<p>&nbsp;</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/projects/selecting-articles.jpg"></div>
			<div class="halfbleed__detail">
				Fig 4: Selecting related articles. Double click an article in the left-hand column to select it. Double click an article in the righthand column to remove it. Click 'Ok' once you're happy
			</div>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Linking to more similar projects*</b></p>
			<p>After selecting your projects, you can choose to link to a single area of expertise. This will create a link that follows the related projects allowing the user to see more.</p>
			<ul>
				<li>Click 'edit'</li>
				<li>From the resulting popup, choose the most appropriate industry or service to link to - double click your selecting</li>
				<li>It will then appear in the righthand column - click 'Ok'</li>
			</ul>
			<p><b>Related perspectives</b></p>
			<p>To select related perspectives:</p>
			<ul>
				<li>Click the 'Edit' button - this will launch a popup window</li>
				<li>Browse the content tree (in the left-hand column) and locate the first article you wish to select</li>
				<li>Double click the article - its name will then appear in the righthand column</li>
				<li>Repeat this step 2 more times</li>
			</ul>
			<p>If you select related perspectives, please try to always select two.</p>
			<p><b>Related industries and services</b></p>
			<p>Neither 'Related industries' or 'Related services' are required fields. However, you should always select at least one or the other.</p>
			<p><i>Related industries</i></p>
			<p>In a similar fashion to projects or perspectives, please select any industry(s) related to your content.</p>
			<p><i>Related services</i></p>
			<p>In a similar fashion to projects or perspectives, please select any service(s) related to your content.</p>
			<p>Please select at least 3 related services or industries wherever possible.</p>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Contacts</b></p>
			<p>Here you can select the ‘key’ contact to associate with your perspective - this will generally be the author. This contact will be displayed within the perspective’s ‘utility bar’ – the bar that follows the user down the page as they scroll. You should always look to select a contact.</p>
			<p>To select your contact:</p>
			<ul>
				<li>Click the ‘Edit’ button to launch the popup</li>
				<li>Within the popup, browse the content tree in the left-hand column to find your contact (contacts are stored in alphabetical order – based on the contact’s first name. I.e. ‘John Smith’ would be found in the ‘J’ folder)</li>
				<li>Double click your chosen contact – their name will then appear in the righthand colum</li>
				<li>Click ‘Ok’</li>
			</ul>
			<p>You should only select a single contact.</p>
			<p></p>
			<p><b>Facebook Open Graph</b></p>
			<p>These fields are used to display content when your article is shared via social platforms.</p>
			<p><b>*</b>fields marked with an asterix are required and must be completed</p>
			<ul>
				<li><b>Open Graph Title*</b> - Please enter a suitable title. Generally, you can re-use the article title entered above</li>
				<li><b>Open Graph Description*</b> - Please enter a brief description of your content. This should summarise the content of your article in a maximum of two sentences.</li>
				<li>Open Graph Image - Please resize your main article image to a width of 800px and add to this field</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Metadata</b></p>
			<p>This information is used to aid the discovery of your article via search engines. Adding it is vital in helping people to find the article and ensuring that it performs to the best of its ability.</p>
			<p><b>*</b>fields marked with an asterix are required and must be completed</p>
			<ul>
				<li><b>Browser title*</b> - Should you re-enter the title of your article to this field. If your title is particularly long, please consider drafting a shorter version for this field.</li>
				<li><b>SEO meta description*</b> - Please enter a two to three sentence summary of your article. You can consider re-using the introduction copy you've used above</li>
				<li>Meta keywords - keywords have been used by search engines in the past to help users locate content. However, keywords are no longer of high relevance for search engines such as Google and you do not need to add these to aid search performance.</li>
			</ul>
			<h5><a id="completing" name="completing"></a>Completing your perspective article</h5>
			<p>Once you have added the data detailed above, you should save your document. If you are intending to add modules to your article, you will need to follow the steps outlined below. If your article is complete without modules, you can now submit it for publication or preview it using the method outlined below.</p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5><a id="modules" name="modules"></a>Adding modules to your perspective item</h5>
			<p>The following details the steps to prepare for adding modules and adding a new module. It does not provide details on the individual modules you can use. You should consult the individual module guides for full details on those relevant to your article.</p>
			<ul>
				<li>Right click on your perspective item in the content tree window and choose '<b>Insert &gt; Local datasource folder</b>'</li>
				<li>You will be prompted to name the item you've created - you should leave the pre-defined label of 'Local content' and click 'OK'</li>
				<li>Once your 'Local content' folder is created, it will appear underneath your perspective item. You can now add modules to this folder</li>
				<li>To add a module, right click on the local content folder and choose '<b>Insert &gt; module name</b>'</li>
				<li>Give your module a suitable name and click OK</li>
			</ul>
			<p><b>NB - when you name your modules, its worthwhile considering the order you're going to add them in. If you need to come back to your article later on (or something happens to it) using a naming convention that helps you easily identify what's in the module - and the order you're intending to add them - makes it much easier to edit or restore an article in a worst case scenario.</b></p>
			<P><a href="/creating-modules">Find out more about creating modules</a></P>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/news/adding-localcontent.jpg"></div>
			<div class="halfbleed__detail">
				Fig 6: adding a local content folder to your perspective item. Right click on your perspective item, and choose 'Insert &gt; Local Datasource Folder'
			</div>
			<h5><a id="language" name="language"></a>Adding an alternative language version</h5>
			<p>Sitecore gives you the ability to add multiple language versions to your content. A full guide to language versions has been provided, but you should be aware that:</p>
			<ul>
				<li>An article MUST be created in English first</li>
				<li>Any modules that have been added to your perspective item will also require that translated versions be created</li>
			</ul>
			<p><a href="/getting-started/language-versions">Find out more about languages in Sitecore</a></p>
			<h5><a id="workflow" name="workflow"></a>Workflow</h5>
			<p>Perspective articles are covered by the CMS' workflow. This means that only certain staff are able to publish content. Generally, this will be a member of the GMC Online team - though some regions including Australasia and the Far East also have a member of staff with publishing rights. You can <a href="/getting-started/workflow/">learn more about the workflow via the online guide</a></p>
		</div>
	</div>
</section>
<section class="container" id="best-practice">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>1. Best practice tips</h2>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5>Content design</h5>
			<p>When building your perspective content in the CMS, you should bare the following in mind:</p>
			<ul class="featureList">
				<li class="tick">Do use headings - break up your perspective into clear headings that highlight particular areas - for example 'The challenge' or 'Arup's expertise'</li>
				<li class="cross">Don't use modules for the sake of it - you don't HAVE to add lots of different modules. Only use modules that work with your content. Perspective articles in particular are likely to require fewer modules than other types of content</li>
				<li class="cross">Don't display key information within '<a href="/creating-modules/images/">Image</a>' modules - if information is vital, it's best to display it clearly and simply in 'Rich text' modules
				</li>
				<li class="cross">Don't hide detailed images behind text overlays - if you want to use text overlaid on an 'Image', only use images that work as 'background' images i.e. where the information conveyed in the image is more decorative than explanatory</li>
			</ul>
		</div>
	</div>
</section>