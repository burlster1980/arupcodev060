---
title: "Creating an event page"
date: 2019-02-16T17:42:27Z
lastmod: 2020-08-18
draft: false
type: Creating new pages
weight: "1"
menu:
  main:
    title: "Creating events"
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
					<a href="#where">Where are events?</a>
				</li>
				<li>
					<a href="#creating">Creating a event item</a>
					<ul class="sub-header-list">
						<li>
							<a href="#adding">Adding content to your event item</a>
						</li>
						<li>
							<a href="#completing">Completing your event item</a>
						</li>
						<li>
							<a href="#links">Adding links</a>
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
	</div>
</section>
<section class="container" id="where">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>1. Where are events?</h2>
			<h3>Events on the website</h3>
			<p>When viewing the website, events are found under the URL <a href="https://www.arup.com/news-and-events" target="_blank">www.arup.com/news-and-events</a> - they are located immediately under the News items displayed on this page.</p>
			<p>It is important to note that Events have an expiry date - this means that once the event's 'end date' has passed the event will cease to appear on this page.</p>
			<h3>Events within the CMS</h3>
			<p></p>
			<p>When viewing the CMS, events are found at <b>Sitecore &gt; Content &gt; Arup &gt; Home &gt; News and events</b></p>
			<p>Events  are 'bucketable' and stored in Sitecore 'Buckets'. Buckets is Sitecore terminology for folders. They allow the CMS to store content in a folder structure, making things easier to find. A bucket's name does not appear in the URL of a page.</p>
			<p></p>
			<p>Event pages are stored in the following way:</p>
			<p><b>News and events &gt; Events &gt; Year &gt; Month &gt; name of event</b></p>
			<p>This means that when you create a new Event item, it will be stored in the corresponding year and month bucket. For example, if you created an event item on 1 January 2020, its location would be:</p>
			<p><b>News and events &gt; Events &gt; 2020 &gt; 01 &gt; name of your event</b></p>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. Creating an event item</h2>
			<p>To create an event , you will need to:</p>
			<ul>
				<li>Expand the item 'News and events' by clicking the black triangle next to it</li>
				<li>Once expanded, right click on 'Event' and choose '<b>Insert &gt; Event</b>'</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/events/creating-event.jpg"></div>
			<div class="halfbleed__detail">
				Fig1: Creating a new Event item. You need to right click on the 'Event' node, and choose 'Insert &gt; Event'
			</div>
			<ul>
				<li>Enter a name for your event item that suitably describes the content - most likely the name of the event you're promoting (NB - this name will form the URL of the article for example if you called your item 'My event item' the url would be arup.com/news-and-events/my-event-item) and click OK</li>
				<li>The screen will then reload, and you've successfully created your event item</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h3><a id="adding" name="adding"></a>Adding content to an event item</h3>
			<p>Events contain a mixture of 'form' content and modules. The data is displayed as follows:</p>
			<uL>
				<lI>All data added to the 'Event' item (i.e. the fields below) is shown in the event listing at www.arup.com/news-and-events</lI>
				<li>Modules are used for showing all information on the Event page itself</li>
			</uL>
			<p>Each of the headings below represents one of the expandable panels of the event document. The fields relevant to each are detailed.</p>
			<p><b>Content</b></p>
			<p><b>*</b>fields marked with an asterisk are required and must be completed</p>
			<ul>
				<li><b>Header label*</b> - by default this will be populated with the word 'Event'. You do NOT need to change this</li>
				<li><b>Name*</b> - this should be the name of your event, for example 'AI in the built environment'</li>
				<li><b>Title*</b> - duplicate the name of your event in this field</li>
				<li>
					<b>Intro*</b> - This should be EITHER: 
					<ul class="sub-header-list">
						<li>the first one to two sentences of your event description (never more than two)</li>
						<li style="list-style: none; display: inline">
							<p>OR</p>
						</li>
						<li>a one to two sentence summary of your event - meaning that a user could gain overall insight by reading this content</li>
					</ul><br>
					To add content to this field click 'show editor' and enter your text. Please see the guide to using the <a href="/getting-started/rich-text/">Rich Text editor</a> for further information on adding content here
				</li>
				<li><b>Image</b>* - please add a suitable image to your event. This should be resized to 2000px wide by 1125px high. Further details about imagery and news articles is contained below. NB - this image will NOT show on your Event page, but will be displayed on via the Event listings at www.arup.com/news-and-events</li>
				<li><b>Body</b> - at present this field does not work - data added here will NOT currently display</li>
				<li>
					<b>Start date*</b> - this is the date your event begins. By default it will be populated with today's date. You can change it the correct future date by:
					<ul class="sub-header-list">
						<li>Click the downward triangle next to the date</li>
						<li>From the resulting calendar popup, choose the date you want for your publication date</li>
					</ul>
				</li>
				<li><b>End date</b> - this is the date and time that your event ends. NB - once this date is reached, the event will be 'archived'</li>
				<li>
					<b>Address*</b> - please enter either:
					<ul>
						<li>The physical address of the event OR</li>
						<lI>For webinars or online events, simply enter 'Online'</lI>
					</ul>
				</li>
				<li>
					<b>Author*</b> - you need to select an author for your event. This will be a person, with a profile on arup.com, who is able to handle questions and enquiries about the event. To choose the contact:
					<ul class="sub-header-list">
						<li>Browse the list of contacts (you can scroll using your mouse)</li>
						<li>Double click the name of the contact you want - you'll see their name move to the righthand column</li>
						<li>To remove an unwanted contact - double click the name that has been moved to the righthand column and they will disappear</li>
						<li>For more information on profiles, and help with creating new profiles, please see the <a href="/creating-pages/creating-profiles/">profiles guidance</a>
						</li>
					</ul>
				</li>
				<li><b>Location*</b>: This field controls which users will see your event on arup.com. For example, if you only want users in the USA to see the event, you would choose 'United States of America'. If you want users in multiple countries to see your event, simply choose all the countries you wish to include. For webinars, its suggested that you include either all the countries in your Arup region, or all the countries in which Arup has a physical office.</li>
				<lI><b>Is Archived</b>: Please DO NOT touch this field</lI>
				<li><b>Location on Maps</b>: - You can use this field to include a link to a Google Maps location. To do this:
					<ul>
						<li>Go to Google Maps and identify the physical location of your event</li>
						<li>Copy the the URL from your browser</li>
						<li>On your 'event' item in Sitecore, click 'Insert external link'</li>
						<li>Add a link description for example 'View the location on Google Maps'</li>
						<li>Paste the URL you've copied into the 'URL' field</li>
						<li>In the 'Target window' field, select 'new browser' from the drop down list</li>
						<li>Click 'insert'</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p>The screenshot below indicates where each of the above fields are shown on a published event item.</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/events/event-listing.jpg"></div>
			<div class="halfbleed__detail">
				Fig 2: example of a completed event listing indicating which fields do what
			</div>
			<p><b>NB - Image</b></p>
			<p>You MUST add an image to your Event item in the 'Image' field. Whilst this image will NOT display directly on your event item, it is used elsewhere on the site. For example, the image is used for promoting your event story - particularly at <a href="https://www.arup.com/news-and-events" target="_blank">https://www.arup.com/news-and-events</a></p>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Facebook Open Graph</b></p>
			<p>These fields are used to display content when your event is shared via social platforms.</p>
			<p><b>*</b>fields marked with an asterisk are required and must be completed</p>
			<ul>
				<li><b>Open Graph Title*</b> - Please enter a suitable title. Generally, you can re-use the event title entered above</li>
				<li><b>Open Graph Description*</b> - Please enter a brief description of your content. This should summarise the content of your event in a maximum of two sentences.</li>
				<li><b>Open Graph Image</b> - Please resize your main event image to a width of 800px and add to this field</li>
			</ul>
			<p><b>Metadata</b></p>
			<p>This information is used to aid the discovery of your event via search engines. Adding it is vital in helping people to find the article and ensuring that it performs to the best of its ability.</p>
			<p><b>*</b>fields marked with an asterisk are required and must be completed</p>
			<ul>
				<li><b>Browser title*</b> - You should re-enter the title of your event to this field. If your title is particularly long, please consider drafting a shorter version for this field.</li>
				<li><b>SEO meta description*</b> - Please enter a two to three sentence summary of your event. You can consider re-using the introduction copy you've used above</li>
				<li><b>Meta keywords</b> - keywords have been used by search engines in the past to help users locate content. However, keywords are no longer of high relevance for search engines such as Google and you do not need to add these to aid search performance.</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h3><a id="completing" name="completing"></a>Completing your event</h3>
			<p>Once you have added the data detailed above, you should save your document. At this point, you'll notice that there's virtually no information on your actual event page. You will need to use modules to contain all the information about your event.</p>
			<h3><a id="modules" name="modules"></a>Adding modules to your event item</h3>
			<p>The following details the steps to prepare for adding modules and adding a new module. It does not provide details on the individual modules you can use. You should consult the <a href="/creating-modules/">individual module guides</a> for full details on those relevant to your article.</p>
			<ul>
				<li>Right click on your event item in the content tree window and choose '<b>Insert &gt; Local datasource folder</b>'</li>
				<li>You will be prompted to name the item you've created - you should leave the pre-defined label of 'Local content' and click 'OK'</li>
				<li>Once your 'Local content' folder is created, it will appear underneath your event item. You can now add modules to this folder</li>
				<li>To add a module, right click on the local content folder and choose '<b>Insert &gt; module name</b>'</li>
				<li>Give your module a suitable name and click OK</li>
			</ul>
			<p><b>NB - when you name your modules, its worthwhile considering the order you're going to add them in. If you need to come back to your event later on (or something happens to it) using a naming convention that helps you easily identify what's in the module - and the order you're intending to add them - makes it much easier to edit or restore an article in a worst case scenario.</b></p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/events/adding-localcontent.jpg"></div>
			<div class="halfbleed__detail">
				Fig 6: adding a local content folder to your event item. Right click on your event item, and choose 'Insert &gt; Local Datasource Folder'
			</div>
			<h3><a id="language" name="language"></a>Adding an alternative language version</h3>
			<p>Sitecore gives you the ability to add multiple language versions to your content. A full guide to language versions has been provided, but you should be aware that:</p>
			<ul>
				<li>An event MUST be created in English first</li>
				<li>Any modules that have been added to your event item will also require translated versions be created</li>
			</ul>
			<p><a href="language-versions.html">Find out more about languages in Sitecore</a></p>
			<h3><a id="workflow" name="workflow"></a>Workflow</h3>
			<p>Event articles are covered by the CMS' workflow. This means that only certain staff are able to publish content. Generally, this will be a member of the GMC Online team - though some regions including Australasia and the Far East also have a member of staff with publishing rights. You can learn more about the <a href="/getting-started/workflow/">workflow via the online guide</a>.</p>
		</div>
	</div>
</section>